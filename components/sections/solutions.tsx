import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { solutions } from "@/content/solutions";
import { icons } from "@/lib/icons";

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 bg-ivory-deep/60 py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Soluções por perfil"
          title="Pensadas para si - e para o seu negócio"
          intro="Quer proteja a sua família ou lidere uma empresa, desenhamos a combinação certa de seguros e benefícios para cada realidade."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {solutions.map((sol, i) => {
            const Icon = icons[sol.icon];
            return (
              <Reveal as="article" key={sol.id} delay={i * 0.1}>
                <div className="grain relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-navy-700 p-8 text-ivory shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-10">
                  {/* Background photo */}
                  <Image
                    src={sol.image}
                    alt={sol.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/68 to-navy/40" />
                  <div className="mesh-navy absolute inset-0 opacity-25" />

                  <div className="relative z-10 flex h-full flex-col [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
                    <div className="grid size-14 place-items-center rounded-2xl bg-white/10 text-gold-soft backdrop-blur-sm">
                      {Icon && <Icon className="size-7" strokeWidth={1.6} />}
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                      {sol.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl text-ivory sm:text-3xl">
                      {sol.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ivory/80">
                      {sol.description}
                    </p>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      {sol.offerings.map((off) => (
                        <div key={off.title}>
                          <p className="text-sm font-semibold text-ivory">
                            {off.title}
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {off.items.map((it) => (
                              <li
                                key={it}
                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-ivory/90 backdrop-blur-sm"
                              >
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-2">
                      <Button asChild variant="accent" size="md">
                        <Link href={sol.href}>
                          {sol.cta}
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
