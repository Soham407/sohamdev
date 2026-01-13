import React from "react";
import { Section } from "./Section";
import { CheckCircle } from "lucide-react";

export const Services: React.FC<{ id?: string }> = ({ id }) => {
  const features = [
    "Custom-designed website (not templates)",
    "Mobile-first & fast",
    "Hosting + SSL included",
    "Unlimited text/image edits",
    "Ongoing maintenance & support",
    "Built for local search visibility",
  ];

  return (
    <Section id={id}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          I handle your website so you don't have to
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-lg text-slate-800 font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};
