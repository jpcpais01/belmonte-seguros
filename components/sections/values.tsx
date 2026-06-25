import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { values } from "@/content/values";
import { icons } from "@/lib/icons";

export function Values() {
  return (
    <section className="bg-ivory-deep/60 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="O que nos move"
          title="Os valores que guiam cada conselho"
          intro="Três princípios simples que orientam a forma como trabalhamos e cuidamos de cada cliente."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => {
            const Icon = icons[v.icon];
            return (
              <Reveal as="div" key={v.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-line bg-card p-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-navy text-gold-soft shadow-soft transition-transform duration-500 group-hover:scale-105">
                    {Icon && <Icon className="size-8" strokeWidth={1.5} />}
                  </div>
                  <h3 className="mt-6 text-2xl text-navy">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
