import Link from "next/link";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-ember text-white hover:bg-ember-deep shadow-[0_2px_0_0_var(--ember-deep)]",
  secondary:
    "bg-card text-ink border border-line-strong hover:border-ink-faint",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof styles;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
