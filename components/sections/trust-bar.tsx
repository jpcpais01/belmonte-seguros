import { Reveal } from "@/components/motion/reveal";
import { stats, partners } from "@/content/site";

export function TrustBar() {
  return (
    <section className="relative border-y border-line/70 bg-card/60 py-14 sm:py-16">
      <div className="container-page">
        {/* Stats */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="div" key={s.label} delay={i * 0.06}>
              <div className="flex flex-col">
                <dt className="order-2 mt-1 text-sm leading-snug text-muted">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-4xl font-medium text-navy sm:text-5xl">
                  {s.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Partners */}
        <div className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Trabalhamos com todas as seguradoras a operar em Portugal
          </p>
          <div className="marquee-mask relative mt-7 flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
              {[...partners, ...partners].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap font-display text-xl font-medium text-navy/35 transition-colors hover:text-navy/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
