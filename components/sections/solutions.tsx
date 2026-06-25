import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { solutions } from "@/content/solutions";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Solutions() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 bg-ivory-deep/60 py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Soluções por perfil"
          title="Pensadas para si — e para o seu negócio"
          intro="Quer proteja a sua família ou lidere uma empresa, desenhamos a combinação certa de seguros e benefícios para cada realidade."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {solutions.map((sol, i) => {
            const Icon = icons[sol.icon];
            const dark = sol.id === "empresas";
            return (
              <Reveal as="article" key={sol.id} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-10",
                    dark
                      ? "grain border-navy-700 bg-gradient-to-br from-navy via-navy-700 to-ocean text-ivory"
                      : "border-line bg-card"
                  )}
                >
                  {dark && <div className="mesh-navy absolute inset-0 opacity-80" />}
                  <div className="relative z-10 flex h-full flex-col">
                    <div
                      className={cn(
                        "grid size-14 place-items-center rounded-2xl",
                        dark ? "bg-white/10 text-gold-soft" : "bg-gold-tint text-gold"
                      )}
                    >
                      {Icon && <Icon className="size-7" strokeWidth={1.6} />}
                    </div>

                    <p
                      className={cn(
                        "mt-6 text-xs font-semibold uppercase tracking-[0.16em]",
                        dark ? "text-gold-soft" : "text-gold"
                      )}
                    >
                      {sol.eyebrow}
                    </p>
                    <h3
                      className={cn(
                        "mt-2 text-2xl sm:text-3xl",
                        dark && "text-ivory"
                      )}
                    >
                      {sol.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 max-w-md text-[15px] leading-relaxed",
                        dark ? "text-ivory/75" : "text-ink-soft"
                      )}
                    >
                      {sol.description}
                    </p>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      {sol.offerings.map((off) => (
                        <div key={off.title}>
                          <p
                            className={cn(
                              "text-sm font-semibold",
                              dark ? "text-ivory" : "text-navy"
                            )}
                          >
                            {off.title}
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {off.items.map((it) => (
                              <li
                                key={it}
                                className={cn(
                                  "rounded-full border px-3 py-1 text-xs font-medium",
                                  dark
                                    ? "border-white/15 bg-white/5 text-ivory/85"
                                    : "border-line bg-ivory text-ink-soft"
                                )}
                              >
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-2">
                      <Button
                        asChild
                        variant={dark ? "accent" : "primary"}
                        size="md"
                      >
                        <a href="#contactos">
                          {sol.cta}
                          <ArrowRight className="size-4" />
                        </a>
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
