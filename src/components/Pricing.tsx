import React from "react";
import { Section } from "./Section";
import { Check } from "lucide-react";
import { Button } from "./Button";

export const Pricing: React.FC<{ id?: string }> = ({ id }) => {
  const inclusions = [
    "Custom website",
    "Hosting & SSL",
    "Unlimited edits",
    "Maintenance & support",
    "Performance optimization",
  ];

  return (
    <Section id={id}>
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Simple, transparent pricing
        </h2>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-8 text-center bg-slate-50 border-b border-slate-100">
            <div className="text-5xl font-bold text-slate-900 mb-2">
              $199
              <span className="text-xl text-slate-500 font-normal">/mo</span>
            </div>
            <p className="text-slate-500">Everything handled for you</p>
          </div>

          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/audit" fullWidth variant="primary" className="mb-6">
              Request Free Audit
            </Button>

            <div className="text-center space-y-3">
              <p className="text-sm text-slate-900 font-bold bg-blue-50 py-2 rounded-lg border border-blue-100">
                12-month minimum commitment
              </p>

              <p className="text-sm text-slate-600 font-medium">
                If it doesn’t make sense after we talk, you don’t move forward.
              </p>

              <p className="text-xs text-slate-400">
                Cancel anytime after the first year
                <br />
                No upfront cost · No hidden fees
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Larger or multi-location businesses may require a higher plan.
        </p>
      </div>
    </Section>
  );
};
