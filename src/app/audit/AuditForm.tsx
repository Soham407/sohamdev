"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Button } from "@/components/Button";

export default function AuditForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [noWebsite, setNoWebsite] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      business_name: formData.get("business_name"),
      email: formData.get("email"),
      website_url: formData.get("website_url"),
      location: formData.get("location"),
      no_website: noWebsite,
      bot_field: formData.get("bot_field"),
    };

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormState("success");
      } else {
        setFormState("error");
        // Use validation errors if available, otherwise generic message
        if (data.errors) {
          const firstError = Object.values(data.errors).flat()[0] as string;
          setErrorMessage(firstError || data.message);
        } else {
          setErrorMessage(
            data.message || "Failed to submit. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormState("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  if (formState === "success") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-40 pb-24 px-4 sm:px-6">
          <div
            className="max-w-2xl mx-auto text-center"
            role="alert"
            aria-live="polite"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Audit request received!
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I&apos;ll review your details and send you a personalized Loom
              video within 24 hours.
              <span className="block mt-2 font-semibold text-blue-600">
                No sales pressure, just honest strategy.
              </span>
            </p>

            <div className="bg-slate-50 rounded-2xl p-8 mb-10 text-left border border-slate-100 shadow-sm">
              <h2 className="font-bold text-slate-900 mb-4 text-lg">
                What I'll highlight in your video:
              </h2>
              <ul className="space-y-4">
                {[
                  "Mobile experience & conversion bottlenecks",
                  "Page speed and performance scoring",
                  "One search engine optimization (SEO) quick-win",
                  "Strategic design improvements for your specific niche",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md"
              >
                Back to Home
              </Link>
              <button
                onClick={() => setFormState("idle")}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-600 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 transition-all"
              >
                Submit another request
              </button>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Didn&apos;t get an email confirmation? Check your spam folder or
              email me at{" "}
              <a href="mailto:soham@sohamdev.studio" className="underline">
                soham@sohamdev.studio
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content" className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Get a free 60-second website audit
            </h1>
            <p className="text-xl text-slate-600">
              I&apos;ll send you a personalized screen recording within 24 hours
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-slate-200 shadow-xl relative overflow-hidden">
            {formState === "submitting" && (
              <div
                className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-2xl"
                aria-hidden="true"
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tool for spam protection */}
              <input
                type="text"
                name="bot_field"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Business Name */}
              <div>
                <label
                  htmlFor="business_name"
                  className="block text-slate-900 font-semibold mb-2"
                >
                  Business name{" "}
                  <span className="text-blue-600" aria-hidden="true">
                    *
                  </span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  required
                  autoComplete="organization"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="e.g. Acme Plumbing Services"
                />
              </div>

              {/* Website URL / No Website Checkbox */}
              <div>
                <label
                  htmlFor="website_url"
                  className="block text-slate-900 font-semibold mb-2"
                >
                  Website URL{" "}
                  {noWebsite ? (
                    <span className="text-slate-500 font-normal">
                      (optional)
                    </span>
                  ) : (
                    <>
                      <span className="text-blue-600" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only">(required)</span>
                    </>
                  )}
                </label>
                <div className="relative">
                  <input
                    type="url"
                    id="website_url"
                    name="website_url"
                    required={!noWebsite}
                    disabled={noWebsite}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50"
                    placeholder="https://yourwebsite.com"
                  />
                  {!noWebsite && (
                    <div className="mt-1 text-xs text-slate-400">
                      Must start with http:// or https://
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <label className="flex items-center text-slate-700 cursor-pointer group select-none">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={noWebsite}
                        onChange={(e) => setNoWebsite(e.target.checked)}
                        className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-all checked:border-blue-600 checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <svg
                        className="pointer-events-none absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="ml-3 font-medium group-hover:text-slate-900 transition-colors">
                      I don&apos;t have a website yet
                    </span>
                  </label>
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-900 font-semibold mb-2"
                >
                  Email address{" "}
                  <span className="text-blue-600" aria-hidden="true">
                    *
                  </span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="you@example.com"
                />
                <p className="mt-1 text-xs text-slate-400">
                  I&apos;ll only use this to send your audit video.
                </p>
              </div>

              {/* City/Service (Optional) */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-slate-900 font-semibold mb-2"
                >
                  City or Primary Service{" "}
                  <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="e.g. Austin, TX or Residential HVAC"
                />
              </div>

              {/* Error State */}
              {formState === "error" && (
                <div
                  className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 font-medium"
                  role="alert"
                >
                  {errorMessage || (
                    <>
                      Something went wrong. Please try again or email me
                      directly at{" "}
                      <a
                        href="mailto:soham@sohamdev.studio"
                        className="underline font-bold"
                      >
                        soham@sohamdev.studio
                      </a>
                    </>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  isLoading={formState === "submitting"}
                  disabled={formState === "submitting"}
                  fullWidth
                  className="text-lg py-5"
                >
                  {formState === "submitting"
                    ? "Sending Request..."
                    : "Request My Free Audit"}
                </Button>
              </div>

              <div className="flex flex-col items-center gap-4 pt-2">
                <p className="text-center text-sm text-slate-500 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  No credit card required • Just honest feedback
                </p>
                <p className="text-xs text-slate-400 text-center max-w-sm">
                  By submitting, you agree to receive a one-time audit video. I
                  won&apos;t sign you up for spammy mailings.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
