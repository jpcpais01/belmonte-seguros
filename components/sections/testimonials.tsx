import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="grain relative overflow-hidden bg-gradient-to-br from-navy via-navy-700 to-ocean py-20 sm:py-28">
      <div className="mesh-navy absolute inset-0 opacity-70" />
      <div className="container-page relative z-10">
        <SectionHeading
          tone="light"
          eyebrow="Quem confia em nós"
          title="Histórias de tranquilidade"
          intro="O que conta para nós é o que sentem as pessoas que acompanhamos todos os dias."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/12 bg-white/[0.06] p-7 shadow-soft backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-1 text-gold-soft">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ivory/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid size-11 place-items-center rounded-full bg-gold-tint font-display text-base text-navy">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold text-ivory">
                      {t.name}
                    </span>
                    <span className="block text-xs text-ivory/60">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
