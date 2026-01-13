import React from "react";
import { Section } from "./Section";
import { UserCheck } from "lucide-react";

export const IdealClient: React.FC = () => {
  const criteria = [
    "Run a local service business",
    "Want more calls, not more tech headaches",
    "Don&apos;t want to pay thousands upfront",
    "Prefer one predictable monthly fee",
  ];

  return (
    <Section dark className="border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          This is a good fit if you...
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-start gap-3"
            >
              <UserCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
          <p className="text-blue-800 font-medium">
            If you want a DIY website or a one-time build, this may not be for
            you.
          </p>
        </div>
      </div>
    </Section>
  );
};
