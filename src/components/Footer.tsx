import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Contact */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-white font-bold text-2xl tracking-tight mb-6 block hover:text-blue-400 transition-colors"
            >
              sohamdev.studio
            </Link>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300 font-medium italic">
                High-performance websites for local services.
              </p>
              <p>Soham Bhutkar</p>
              <a
                href="mailto:soham@sohamdev.studio"
                className="hover:text-white transition-colors block"
              >
                soham@sohamdev.studio
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#process"
                    className="hover:text-white transition-colors"
                  >
                    How it works
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/audit"
                    className="hover:text-white transition-colors"
                  >
                    Request Audit
                  </Link>
                </li>
                <li>
                  <p className="text-slate-500">
                    Built for US local businesses
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} SohamDev Studio. All rights
            reserved.
          </p>
          <p>Hand-coded with ❤️</p>
        </div>
      </div>
    </footer>
  );
};
