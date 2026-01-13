import React from "react";
import { Section } from "./Section";
import { Button } from "./Button";

export const FinalCTA: React.FC = () => {
  return (
    <Section className="text-center pb-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
          Want me to check your website?
        </h2>

        <div className="flex flex-col items-center gap-4">
          <Button
            href="/audit"
            variant="primary"
            className="text-lg px-8 py-4 w-full sm:w-auto"
            withIcon
          >
            Request Free Website Audit
          </Button>
          <p className="text-slate-500 font-medium">
            I&apos;ll send a short screen recording within 24 hours — no sales
            pressure.
          </p>
        </div>
      </div>
    </Section>
  );
};
