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
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem]">
            Trabalhamos com todas as seguradoras a operar em Portugal
          </h2>
        </Reveal>
      </div>

      <Reveal className="mt-12 flex flex-col gap-5 sm:mt-16 sm:gap-6">
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
            className="flex h-32 w-60 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white px-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:h-36 sm:w-72"
          >
            <Image
              src={p.logo}
              alt={`Seguradora ${p.name}`}
              style={{ transform: `scale(${p.scale})` }}
              className="max-h-15 max-w-[170px] object-contain sm:max-h-16 sm:max-w-[200px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
