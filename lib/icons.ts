import {
  HeartPulse,
  Stethoscope,
  Car,
  Home,
  ShieldCheck,
  PiggyBank,
  Users,
  Building2,
  Handshake,
  Award,
  Target,
  MessageCircle,
  Search,
  ListChecks,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

/** Resolve icon name strings (used in /content) to lucide components. */
export const icons: Record<string, LucideIcon> = {
  HeartPulse,
  Stethoscope,
  Car,
  Home,
  ShieldCheck,
  PiggyBank,
  Users,
  Building2,
  Handshake,
  Award,
  Target,
  MessageCircle,
  Search,
  ListChecks,
  LifeBuoy,
};

export const accentClasses: Record<
  string,
  { bg: string; text: string; ring: string }
> = {
  navy: { bg: "bg-navy/10", text: "text-navy", ring: "group-hover:ring-navy/20" },
  gold: { bg: "bg-gold-tint", text: "text-gold", ring: "group-hover:ring-gold/30" },
  teal: { bg: "bg-teal/10", text: "text-teal", ring: "group-hover:ring-teal/20" },
  ocean: { bg: "bg-ocean/10", text: "text-ocean", ring: "group-hover:ring-ocean/20" },
};
