import { Check, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { about } from "@/content/values";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <Reveal className="order-2 lg:order-1">
            <div className="grain relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sand via-ivory-deep to-gold-tint p-8 shadow-soft sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy shadow-soft backdrop-blur">
                <span className="size-1.5 rounded-full bg-gold" />
                No setor desde 1989
              </span>

              <div className="relative mt-8">
                <Quote className="size-9 text-gold/50" />
                <p className="mt-3 font-display text-3xl leading-snug text-navy sm:text-4xl">
                  {about.lead}
                </p>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2.5 rounded-xl border border-white/60 bg-white/55 px-4 py-3 text-sm font-medium text-navy shadow-sm backdrop-blur"
                  >
                    <Check className="size-4 shrink-0 text-teal" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow mb-4">{about.eyebrow}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
                {about.title}
              </h2>
            </Reveal>

            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-[15px] leading-relaxed text-ink-soft sm:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <figure className="mt-8 rounded-2xl border-l-4 border-gold bg-card p-6 shadow-soft">
                <figcaption className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  A nossa missão
                </figcaption>
                <blockquote className="mt-2 font-display text-lg leading-snug text-navy sm:text-xl">
                  “{about.mission}”
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
