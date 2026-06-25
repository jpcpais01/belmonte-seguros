import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { partners, type Partner } from "@/content/partners";

export function TrustBar() {
  const rowA = partners.slice(0, 8);
  const rowB = partners.slice(8);

  return (
    <section className="relative border-y border-line/70 bg-card/50 py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-col items-center text-center">
          <span className="eyebrow mb-4">Parcerias de confiança</span>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Trabalhamos com todas as seguradoras a operar em Portugal
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            Como somos independentes, comparamos as soluções das principais
            seguradoras do mercado — e recomendamos, com total imparcialidade, a
            mais indicada para si.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 flex flex-col gap-4 sm:mt-14 sm:gap-5">
        <LogoRow items={rowA} direction="normal" />
        <LogoRow items={rowB} direction="reverse" />
      </Reveal>
    </section>
  );
}

function LogoRow({
  items,
  direction,
}: {
  items: Partner[];
  direction: "normal" | "reverse";
}) {
  const loop = [...items, ...items];
  const anim = direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="marquee-row marquee-mask overflow-hidden">
      <ul className={`flex w-max gap-4 sm:gap-5 ${anim}`}>
        {loop.map((p, i) => (
          <li
            key={`${p.name}-${i}`}
            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:h-24 sm:w-48"
          >
            <Image
              src={p.logo}
              alt={`Seguradora ${p.name}`}
              className="max-h-10 max-w-[120px] object-contain sm:max-h-11 sm:max-w-[140px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
