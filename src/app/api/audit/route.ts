import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for validation
const auditSchema = z.object({
  business_name: z.string().min(1, "Business name is required"),
  email: z.string().email("Invalid email address"),
  website_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  location: z.string().optional(),
  no_website: z.boolean().optional(),
  bot_field: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Validate Input
    const parseResult = auditSchema.safeParse(body);
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

    const {
      business_name,
      email,
      website_url,
      location,
      no_website,
      bot_field,
    } = parseResult.data;

    // 2. Honeypot Check (Spam protection)
    if (bot_field) {
      // Return success to confuse bots, but don't send anything
      return NextResponse.json({ success: true, message: "Request received" });
    }

    // 3. Prepare payload for Web3Forms
    // Note: We use the access key from env vars.
    // We use a private env var (no NEXT_PUBLIC_ prefix) to keep it secure on the server.
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!apiKey) {
      console.error("Missing Web3Forms API Key");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const web3FormData = {
      access_key: apiKey,
      subject: `New Audit Request: ${business_name}`,
      from_name: "sohamdev.studio Audit Form",
      business_name,
      email,
      website_url: no_website ? "No website yet" : website_url,
      location: location || "Not specified",
      message: `
        Business: ${business_name}
        Email: ${email}
        Website: ${no_website ? "None" : website_url}
        Location: ${location || "N/A"}
      `,
    };

    // 4. Send to Web3Forms
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
        { success: false, message: "Failed to submit request." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Request received successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
