import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely (clsx + tailwind-merge).
 * Used across all UI primitives and sections.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
