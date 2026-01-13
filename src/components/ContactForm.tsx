"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Section } from "./Section";

export const ContactForm = () => {
  const [result, setResult] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      bot_field: formData.get("bot_field"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setResult("success");
        setMessage("Success! Your message has been sent.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("error");
        if (data.errors) {
          const firstError = Object.values(data.errors).flat()[0] as string;
          setMessage(firstError || data.message);
        } else {
          setMessage(data.message || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setResult("error");
      setMessage("Network error. Please check your connection.");
    }
  };

  return (
    <Section id="contact" dark>
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-600">
            Have a project in mind? Let&apos;s talk about how I can help you
            grow your business.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-xl"
        >
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="bot_field"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label
              htmlFor="contact_name"
              className="block text-slate-900 font-semibold mb-2"
            >
              Name{" "}
              <span className="text-blue-600" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="text"
              id="contact_name"
              name="name"
              required
              autoComplete="name"
              className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="contact_email"
              className="block text-slate-900 font-semibold mb-2"
            >
              Email Address{" "}
              <span className="text-blue-600" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(required)</span>
            </label>
            <input
              type="email"
              id="contact_email"
              name="email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="contact_message"
              className="block text-slate-900 font-semibold mb-2"
            >
              Message{" "}
              <span className="text-blue-600" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(required)</span>
            </label>
            <textarea
              id="contact_message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <Button
            type="submit"
            isLoading={result === "submitting"}
            disabled={result === "submitting"}
            fullWidth
            className="text-lg py-4"
          >
            {result === "submitting" ? "Sending..." : "Send Message"}
          </Button>

          {result === "success" && (
            <p
              className="text-green-600 font-medium text-center bg-green-50 p-3 rounded-lg border border-green-200"
              role="alert"
              aria-live="polite"
            >
              {message}
            </p>
          )}
          {result === "error" && (
            <p
              className="text-red-600 font-medium text-center bg-red-50 p-3 rounded-lg border border-red-200"
              role="alert"
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};
