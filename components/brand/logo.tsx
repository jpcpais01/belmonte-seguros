import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** "dark" = for light backgrounds; "light" = for navy backgrounds. */
  tone?: "dark" | "light";
  showWordmark?: boolean;
};

/**
 * Belmonte Seguros logo: an abstract "shelter / canopy" mark
 * (protection) paired with a serif wordmark.
 */
export function Logo({
  className,
  tone = "dark",
  showWordmark = true,
}: LogoProps) {
  const word = tone === "light" ? "text-ivory" : "text-navy";
  const sub = tone === "light" ? "text-gold-soft" : "text-gold";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className="size-9 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-xl font-medium tracking-tight",
              word
            )}
          >
            Belmonte
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
              sub
            )}
          >
            Seguros
          </span>
        </span>
      )}
    </span>
  );
}

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill="var(--color-navy)" />
      {/* protective canopy / arch */}
      <path
        d="M9 22c0-6.075 4.925-11 11-11s11 4.925 11 11"
        stroke="var(--color-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M14 24c0-3.314 2.686-6 6-6s6 2.686 6 6"
        stroke="var(--color-ocean-soft)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* the person being sheltered */}
      <circle cx="20" cy="27.5" r="2.6" fill="var(--color-ivory)" />
    </svg>
  );
}
