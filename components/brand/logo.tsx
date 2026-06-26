import Image from "next/image";
import logoImg from "@/public/logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Kept for API compatibility; the gold logo works on light and dark. */
  tone?: "dark" | "light";
  priority?: boolean;
};

/**
 * Belmonte Seguros logo - gold "CB" monogram with "Seguros & Benefícios".
 * Transparent PNG, so it sits cleanly on both light and navy backgrounds.
 */
export function Logo({ className, priority }: LogoProps) {
  return (
    <Image
      src={logoImg}
      alt="Belmonte Seguros - Seguros & Benefícios"
      priority={priority}
      sizes="220px"
      className={cn("h-10 w-auto sm:h-11", className)}
    />
  );
}
