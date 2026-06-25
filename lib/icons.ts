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
  { bg: string; text: string; glow: string; border: string; linkHover: string }
> = {
  navy: {
    bg: "bg-navy/10",
    text: "text-navy",
    glow: "bg-navy/15",
    border: "group-hover:border-navy/30",
    linkHover: "group-hover:text-ocean",
  },
  gold: {
    bg: "bg-gold-tint",
    text: "text-gold",
    glow: "bg-gold/25",
    border: "group-hover:border-gold/40",
    linkHover: "group-hover:text-gold",
  },
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    glow: "bg-teal/20",
    border: "group-hover:border-teal/30",
    linkHover: "group-hover:text-teal",
  },
  ocean: {
    bg: "bg-ocean/10",
    text: "text-ocean",
    glow: "bg-ocean/20",
    border: "group-hover:border-ocean/30",
    linkHover: "group-hover:text-ocean",
  },
};
