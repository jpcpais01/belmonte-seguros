"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RevealGroup, itemVariants } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/content/services";
import { icons, accentClasses } from "@/lib/icons";

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
        const a = accentClasses[s.accent];
        return (
          <motion.article
            key={s.slug}
            variants={itemVariants}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-card p-7 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift ${a.border}`}
          >
            {/* accent glow */}
            <div
              aria-hidden
              className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${a.glow}`}
            />
            {/* watermark icon */}
            {Icon && (
              <Icon
                aria-hidden
                strokeWidth={1}
                className={`pointer-events-none absolute -bottom-6 -right-4 size-36 opacity-[0.06] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 ${a.text}`}
              />
            )}

            <div className="relative z-10 flex flex-1 flex-col">
              <div className="flex items-center justify-between gap-3">
                <div
                  className={`grid size-14 place-items-center rounded-2xl ${a.bg} ${a.text}`}
                >
                  {Icon && <Icon className="size-7" strokeWidth={1.6} />}
                </div>
                <span
                  className={`rounded-full bg-ivory px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] ${a.text}`}
                >
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-6 text-xl text-navy">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {s.summary}
              </p>

              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-sm text-ink-soft"
                  >
                    <Check className={`mt-0.5 size-4 shrink-0 ${a.text}`} />
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#contactos"
                className={`mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-navy transition-colors ${a.linkHover}`}
              >
                Pedir simulação
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.article>
        );
      })}
    </RevealGroup>
  );
}
