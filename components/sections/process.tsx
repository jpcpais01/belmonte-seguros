import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { process } from "@/content/values";
import { icons } from "@/lib/icons";

export function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como funciona"
          title="Simples, do primeiro contacto ao acompanhamento"
          intro="Sem complicações nem letras pequenas. Um caminho claro até à solução certa para si."
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
          />
          {process.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <Reveal as="div" key={step.step} delay={i * 0.1} className="relative">
                <div className="flex flex-col">
                  <div className="relative z-10 grid size-14 place-items-center rounded-2xl border border-line bg-card text-navy shadow-soft">
                    {Icon && <Icon className="size-6" strokeWidth={1.6} />}
                    <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-gold text-xs font-bold text-navy shadow-soft">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 flex justify-center" delay={0.1}>
          <Button asChild variant="primary" size="lg">
            <a href="#contactos">Começar agora — é gratuito</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
