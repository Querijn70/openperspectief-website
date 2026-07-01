import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:scale-105 active:scale-100";
  const variants = {
    primary:
      "bg-op-blauw text-white shadow-md hover:bg-op-blauw-dark hover:shadow-lg",
    secondary:
      "border-2 border-op-paars bg-white text-op-paars hover:bg-op-paars hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <ArrowRight className="h-4 w-4" />
      {children}
    </Link>
  );
}
