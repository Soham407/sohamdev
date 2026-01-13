import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  bot_field: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Validate Input
    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input",
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message, bot_field } = parseResult.data;

    // 2. Honeypot Check (Spam protection)
    if (bot_field) {
      // Return success to confuse bots, but don't send anything
      return NextResponse.json({ success: true, message: "Message sent" });
    }

    // 3. Get API key from environment (secure, never exposed to client)
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!apiKey) {
      console.error("Missing Web3Forms API Key");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // 4. Prepare payload for Web3Forms
    const web3FormData = {
      access_key: apiKey,
      subject: `New Contact: ${name}`,
      from_name: "sohamdev.studio Contact Form",
      name,
      email,
      message,
    };

    // 5. Send to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3FormData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error("Web3Forms Error:", data);
      return NextResponse.json(
        { success: false, message: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
