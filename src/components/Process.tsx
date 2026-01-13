import React from "react";
import { Section } from "./Section";

export const Process: React.FC<{ id?: string }> = ({ id }) => {
  const steps = [
    { title: "Free 60-second audit", desc: "I review your current situation." },
    {
      title: "We discuss improvements",
      desc: "No sales pressure, just strategy.",
    },
    {
      title: "I build & launch your site",
      desc: "Professional design & setup.",
    },
    {
      title: "Monthly support & updates",
      desc: "I handle everything ongoing.",
    },
  ];

  return (
    <Section id={id} dark className="border-t border-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
        How it works
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="mb-4 flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/20">
                {idx + 1}
              </span>
              <div className="h-px bg-slate-200 flex-1 sm:hidden"></div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {step.title}
            </h3>
            <p className="text-slate-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
