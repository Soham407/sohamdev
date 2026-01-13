import React from "react";
import { Section } from "./Section";
import { XCircle } from "lucide-react";

export const Problem: React.FC = () => {
  const problems = [
    "Hard to use on phones (customers pinch & zoom)",
    "Slow pages that people leave before calling",
    "No clear next step (call / quote / contact)",
    "Nobody maintaining or improving the site",
  ];

  return (
    <Section dark className="border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Most local business websites cost you calls — silently
        </h2>

        <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <span className="text-lg text-slate-700">{problem}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 mt-8 font-medium">
          Most owners don&apos;t notice this — they just feel fewer calls.
        </p>
      </div>
    </Section>
  );
};
