import React from "react";
import { Section } from "./Section";

export const Comparison: React.FC = () => {
  return (
    <Section dark className="border-y border-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
        Why monthly instead of paying thousands upfront?
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Traditional */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            Traditional websites
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-600">
              <span className="text-slate-400 font-bold">•</span>
              $2,000–$5,000 upfront
            </li>
            <li className="flex items-start gap-3 text-slate-600">
              <span className="text-slate-400 font-bold">•</span>
              Hard to change later
            </li>
            <li className="flex items-start gap-3 text-slate-600">
              <span className="text-slate-400 font-bold">•</span>
              You&apos;re on your own after launch
            </li>
            <li className="flex items-start gap-3 text-slate-600">
              <span className="text-slate-400 font-bold">•</span>
              Often outdated in a year
            </li>
          </ul>
        </div>

        {/* WaaS */}
        <div className="bg-blue-600 p-8 rounded-2xl shadow-xl shadow-blue-900/10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
            My approach (WaaS)
          </h3>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3 text-blue-100">
              <span className="text-white font-bold">•</span>
              One small monthly fee
            </li>
            <li className="flex items-start gap-3 text-blue-100">
              <span className="text-white font-bold">•</span>
              No upfront cost
            </li>
            <li className="flex items-start gap-3 text-blue-100">
              <span className="text-white font-bold">•</span>I handle updates &
              fixes
            </li>
            <li className="flex items-start gap-3 text-blue-100">
              <span className="text-white font-bold">•</span>
              Your site stays modern
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-slate-600 mt-10 text-lg font-medium">
        It&apos;s like having a website partner, not just a one-time build.
      </p>
    </Section>
  );
};
