import Link from "next/link";
import React from "react";

type LinkProps = {
  children: React.ReactNode;
  href: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "accent";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
  external?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export default function CustomLink({
  children,
  href,
  size = "medium",
  color = "primary",
  variant = "solid",
  className = "",
  disabled = false,
  external = false,
  target,
  rel,
}: LinkProps) {
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    primary: {
      solid: "bg-slate-500 text-white hover:bg-slate-400",
      outline:
        "border-2 border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white",
      ghost: "text-slate-500 hover:bg-slate-100",
    },
    secondary: {
      solid: "bg-blue-200 text-slate-800 hover:bg-blue-300",
      outline:
        "border-2 border-blue-200 text-blue-800 hover:bg-blue-200 hover:text-slate-800",
      ghost: "text-blue-800 hover:bg-blue-50",
    },
    accent: {
      solid: "bg-purple-800 text-white hover:bg-purple-600",
      outline:
        "border-2 border-purple-800 text-purple-200 hover:bg-purple-800 hover:text-purple-100",
      ghost: "text-purple-5800 hover:bg-purple-200",
    },
  };

  const baseClasses =
    "rounded-lg font-medium transition-all duration-200 text-center no-underline disabled:opacity-50 disabled:cursor-not-allowed";

  const linkClasses = `${baseClasses} ${sizeClasses[size]} ${colorClasses[color][variant]} ${className}`;
  console.log(linkClasses);
  if (disabled) {
    return (
      <span
        className={`${linkClasses} cursor-not-allowed opacity-50`}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={linkClasses}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses} target={target} rel={rel}>
      {children}
    </Link>
  );
}
