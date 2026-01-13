import React from "react";
import { Section } from "./Section";
import { Button } from "./Button";
import Image from "next/image";

export const Examples: React.FC = () => {
  return (
    <Section className="bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Sample layout (demo work)
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            This example shows the structure, clarity, and mobile-first approach
            I use for client websites. Every site is customized to the business.
          </p>
        </div>

        {/* Demo Preview */}
        <div className="relative group">
          {/* Image Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200">
            <a
              href="https://aqp-preview.sohamdev.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="/Screenshot_apq.png"
                alt="Sample website layout showing mobile-first design and clear call-to-action"
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </a>
          </div>

          {/* View Live Link */}
          <div className="mt-4 text-center">
            <a
              href="https://aqp-preview.sohamdev.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 transition-colors"
            >
              View live demo
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4 text-lg">
            Want to see how this would look for your business?
          </p>
          <Button
            href="/audit"
            variant="primary"
            className="text-lg px-8 py-4"
            withIcon
          >
            Request Free Audit
          </Button>
        </div>
      </div>
    </Section>
  );
};
