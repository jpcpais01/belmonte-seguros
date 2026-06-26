"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/brand/social-icons";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon, size: "size-[17px]" },
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon, size: "size-4" },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon, size: "size-4" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b bg-navy transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-white/10 bg-navy/95 shadow-lift backdrop-blur-xl"
            : "border-transparent"
        )}
      >
        <div className="container-page flex h-18 items-center justify-between py-3">
          <Link href="/" aria-label="Belmonte Seguros - início" className="py-1">
            <Logo priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-sm font-medium text-ivory/75 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            {/* Social icons */}
            <div className="flex items-center gap-1.5 border-r border-white/15 pr-4">
              {socials.map(({ href, label, Icon, size }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full text-ivory/70 transition-all duration-300 hover:bg-white/10 hover:text-gold-soft"
                >
                  <Icon className={size} />
                </a>
              ))}
            </div>

            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-ivory transition-colors hover:text-gold-soft"
            >
              <Phone className="size-4 text-gold-soft" />
              {site.phone}
            </a>
            <Button asChild variant="accent" size="sm">
              <Link href="/simulacao">Pedir Simulação</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/5 text-ivory shadow-soft lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-18 z-40 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="container-page flex flex-col gap-1 pt-6"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 font-display text-2xl text-ivory"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-6 flex flex-col gap-4">
                <Button asChild variant="accent" size="lg">
                  <Link href="/simulacao" onClick={() => setOpen(false)}>
                    Pedir Simulação
                  </Link>
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-1 text-base font-medium text-ivory"
                >
                  <Phone className="size-4 text-gold-soft" />
                  {site.phone}
                </a>
                <div className="mt-2 flex items-center justify-center gap-3">
                  {socials.map(({ href, label, Icon, size }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-ivory/80 transition-all duration-300 hover:bg-gold hover:text-navy"
                    >
                      <Icon className={size} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
