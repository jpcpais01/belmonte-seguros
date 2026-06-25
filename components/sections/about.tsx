import Link from "next/link";
import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { about } from "@/content/values";
import teamImg from "@/public/team.jpg";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual — team photo */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-navy/10">
                <Image
                  src={teamImg}
                  alt="A equipa da Belmonte Seguros à entrada do escritório, no Parque das Nações"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  placeholder="blur"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 text-sm font-medium text-ivory/90">
                  A nossa equipa · Parque das Nações, Lisboa
                </p>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 -top-5 rounded-2xl border border-white/60 bg-white/90 px-5 py-3 text-center shadow-lift backdrop-blur sm:-right-6">
                <p className="font-display text-3xl leading-none text-navy">+30</p>
                <p className="mt-1 text-xs font-medium text-muted">
                  anos no setor
                </p>
              </div>
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
                <figcaption className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  <Quote className="size-4" />A nossa missão
                </figcaption>
                <blockquote className="mt-2 font-display text-lg leading-snug text-navy sm:text-xl">
                  “{about.mission}”
                </blockquote>
              </figure>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8">
                <Button asChild variant="primary" size="lg">
                  <Link href="/sobre-nos">
                    Conhecer a nossa história
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
