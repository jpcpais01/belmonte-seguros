"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trust = [
  "100% imparcial",
  "+30 anos de experiência",
  "Parceria com a AON",
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92svh] items-center overflow-hidden"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero.jpeg"
        aria-hidden
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy-700/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />
      <div className="grain absolute inset-0 opacity-30" />

      <div className="container-page relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-3xl">
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory shadow-soft backdrop-blur"
          >
            <Sparkles className="size-3.5 text-gold-soft" />
            Mediação de seguros independente · Lisboa
          </motion.span>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance text-5xl leading-[1.04] text-ivory sm:text-6xl lg:text-7xl"
          >
            Acima de tudo,
            <br />
            <span className="font-display italic text-gold-soft">
              as pessoas.
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85"
          >
            Soluções de seguros à sua medida — para si, para a sua família e
            para a sua empresa. Comparamos as melhores opções de todas as
            seguradoras a operar em Portugal, com aconselhamento próximo e
            imparcial.
          </motion.p>

          <motion.div
            {...fade(0.24)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="accent" size="lg">
              <a href="#contactos">
                Pedir Simulação
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href="#seguros">Ver soluções</a>
            </Button>
          </motion.div>

          <motion.ul
            {...fade(0.34)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {trust.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 text-sm font-medium text-ivory/90"
              >
                <ShieldCheck className="size-4 text-gold-soft" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="h-9 w-5 rounded-full border border-white/30 p-1">
          <motion.span
            className="mx-auto block size-1.5 rounded-full bg-gold-soft"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
