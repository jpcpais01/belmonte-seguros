"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Sparkles, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/public/hero.jpeg";

const trust = [
  "100% imparcial",
  "+30 anos de experiência",
  "Parceria com a AON",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="grain mesh-warm relative overflow-hidden pt-30 pb-16 sm:pt-36 sm:pb-24 lg:pt-40"
    >
      {/* soft glows */}
      <div className="pointer-events-none absolute -left-24 top-24 -z-0 size-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-0 size-80 rounded-full bg-teal/10 blur-3xl" />

      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy shadow-soft backdrop-blur"
          >
            <Sparkles className="size-3.5 text-gold" />
            Mediação de seguros independente · Lisboa
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-5xl leading-[1.04] sm:text-6xl lg:text-7xl"
          >
            Acima de tudo,
            <br />
            <span className="font-display italic text-gold">as pessoas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Soluções de seguros à sua medida — para si, para a sua família e
            para a sua empresa. Comparamos as melhores opções de todas as
            seguradoras a operar em Portugal, com aconselhamento próximo e
            imparcial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="primary" size="lg">
              <a href="#contactos">
                Pedir Simulação
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#seguros">Ver soluções</a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {trust.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft"
              >
                <ShieldCheck className="size-4 text-teal" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();
  const float = (d: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: d,
          },
        };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-navy/10">
        <Image
          src={heroImg}
          alt="Emblema dourado da Belmonte Seguros"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-7">
          <p className="font-display text-2xl text-ivory drop-shadow">
            A sua tranquilidade,
            <br />
            bem protegida.
          </p>
          <p className="mt-2 text-sm text-ivory/80">
            Seguros · Saúde · Benefícios · Poupança
          </p>
        </div>
      </div>

      {/* Floating card — gestor de conta */}
      <motion.div
        {...float(0)}
        className="absolute -left-4 top-10 w-52 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lift backdrop-blur-md sm:-left-8"
      >
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-gold-tint font-display text-lg text-gold">
            PB
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-navy">Gestor dedicado</p>
            <p className="text-xs text-muted">sempre do seu lado</p>
          </div>
        </div>
      </motion.div>

      {/* Floating card — rating */}
      <motion.div
        {...float(1.2)}
        className="absolute -right-3 bottom-16 w-44 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lift backdrop-blur-md sm:-right-6"
      >
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-current" />
          ))}
        </div>
        <p className="mt-1.5 text-sm font-semibold text-navy">
          Clientes que confiam
        </p>
        <p className="text-xs text-muted">Acompanhamento próximo e humano</p>
      </motion.div>
    </motion.div>
  );
}
