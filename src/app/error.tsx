"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-slate-600 mb-8">
          We encountered an unexpected error. Sorry about that.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => reset()} variant="secondary">
            Try again
          </Button>
          <Button href="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
