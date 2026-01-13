import React from "react";
import { Button } from "./Button";

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Modern websites for local service businesses —{" "}
          <span className="text-blue-600">without upfront cost</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          I design, host, and maintain high-performance websites for US-based
          local businesses. One monthly fee. Everything handled.
        </p>

        <p className="text-slate-500 font-medium mb-10">
          Built specifically for US-based local service businesses (plumbing,
          HVAC, contractors).
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button
            href="/audit"
            variant="primary"
            className="text-lg px-8 py-4 shadow-xl shadow-blue-600/20"
            withIcon
          >
            Request Free Website Audit
          </Button>
          <span className="text-sm text-slate-500 font-medium">
            No obligation · Delivered in 24 hours
          </span>
        </div>
      </div>
    </section>
  );
};
