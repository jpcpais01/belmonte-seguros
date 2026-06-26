import { Star } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { testimonials } from "@/content/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 text-gold-soft">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-current sm:size-[18px]" />
      ))}
    </div>
  );
}

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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full min-h-52 flex-col rounded-3xl border border-white/12 bg-white/[0.06] p-7 shadow-soft backdrop-blur-md sm:p-8">
                {t.quote ? (
                  <>
                    <Stars count={t.stars} />
                    <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ivory/90">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-ivory">
                      {t.name}
                    </figcaption>
                  </>
                ) : (
                  <div className="flex flex-1 flex-col items-center justify-center gap-4 py-6 text-center">
                    <Stars count={t.stars} />
                    <p className="text-base font-semibold text-ivory">{t.name}</p>
                  </div>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
