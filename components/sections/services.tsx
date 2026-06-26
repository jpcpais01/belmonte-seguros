"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RevealGroup, itemVariants } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/content/services";
import { icons } from "@/lib/icons";

export function Services() {
  return (
    <section id="seguros" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Os nossos seguros"
          title="Proteção para cada parte da sua vida"
          intro="Reunimos as melhores soluções do mercado num só lugar. Escolha o que precisa de proteger — nós tratamos do resto."
        />

        <ServiceGrid />
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => {
        const Icon = icons[s.icon];
        return (
          <motion.article
            key={s.slug}
            variants={itemVariants}
            className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl border border-navy-700 p-7 text-ivory shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift"
          >
            {/* Background image */}
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/30" />

            {/* Top: icon + tag */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="grid size-12 place-items-center rounded-2xl bg-white/15 text-gold-soft ring-1 ring-white/20 backdrop-blur-md">
                {Icon && <Icon className="size-6" strokeWidth={1.7} />}
              </div>
              <span className="rounded-full bg-white/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-gold-soft ring-1 ring-white/15 backdrop-blur-md">
                {s.tag}
              </span>
            </div>

            {/* Bottom: title + summary + CTA */}
            <div className="relative z-10 mt-6 [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl text-ivory">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ivory/85">
                {s.summary}
              </p>
              <Link
                href="/simulacao"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-soft transition-colors hover:text-gold"
              >
                Pedir simulação
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </RevealGroup>
  );
}
