import React, { forwardRef } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  withIcon?: boolean;
  isLoading?: boolean;
  href?: string;
  external?: boolean;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = "primary",
      fullWidth = false,
      withIcon = false,
      isLoading = false,
      className = "",
      href,
      external,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg px-6 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg",
      secondary:
        "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
      outline:
        "border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 bg-transparent",
    };

    const widthClass = fullWidth ? "w-full" : "";
    const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

    const content = (
      <>
        {isLoading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : null}
        {children}
        {!isLoading && withIcon && (
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </>
    );

    if (href) {
      const isExternal =
        external || href.startsWith("http") || href.startsWith("mailto");

      if (!isExternal) {
        return (
          <Link
            href={href}
            className={classes}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {content}
          </Link>
        );
      }

      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        className={`${classes} group`}
        disabled={isLoading || disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
