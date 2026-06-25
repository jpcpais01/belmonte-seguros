import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Compass,
  Phone,
  ArrowRight,
  ArrowLeft,
  Quote,
} from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { about, values, timeline, team } from "@/content/values";
import { site } from "@/content/site";
import { icons } from "@/lib/icons";
import teamImg from "@/public/team.jpg";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Belmonte Seguros: a nossa história desde 1989, a missão, a visão, os valores e a equipa que coloca, acima de tudo, as pessoas em primeiro lugar.",
  alternates: { canonical: "/sobre-nos" },
};

const avatarStyles = [
  "bg-gold-tint text-gold",
  "bg-ocean/10 text-ocean",
  "bg-teal/10 text-teal",
  "bg-navy/10 text-navy",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function SobreNosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="grain mesh-warm relative overflow-hidden pt-30 pb-12 sm:pt-36 sm:pb-16">
          <div className="container-page relative z-10">
            <Reveal>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-navy"
              >
                <ArrowLeft className="size-4" />
                Voltar ao início
              </Link>
              <span className="eyebrow mb-4 mt-6 block">Sobre Nós</span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Acima de tudo,{" "}
                <span className="font-display italic text-gold">as pessoas.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Somos uma mediadora de seguros independente, em Lisboa, que
                aconselha famílias e empresas com proximidade, competência e
                total imparcialidade.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Team photo */}
        <section className="pb-4">
          <div className="container-page">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-navy/10">
                <Image
                  src={teamImg}
                  alt="A equipa da Belmonte Seguros à entrada do escritório, no Parque das Nações"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 80rem"
                  placeholder="blur"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 text-sm font-medium text-ivory/90 sm:p-8">
                  A equipa Belmonte · Parque das Nações, Lisboa
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-24">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal>
                <span className="eyebrow mb-4">Quem somos</span>
                <h2 className="text-3xl sm:text-4xl">
                  Uma equipa que cuida de cada cliente como único.
                </h2>
              </Reveal>
              <div className="space-y-5">
                {about.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.05 * i}>
                    <p className="text-lg leading-relaxed text-ink-soft">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-ivory-deep/60 py-16 sm:py-24">
          <div className="container-page">
            <Reveal className="flex flex-col items-center text-center">
              <span className="eyebrow mb-4">O nosso percurso</span>
              <h2 className="max-w-2xl text-3xl sm:text-4xl">
                Mais de três décadas a proteger pessoas
              </h2>
            </Reveal>

            <div className="relative mt-14 grid gap-8 md:grid-cols-3">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block"
              />
              {timeline.map((item, i) => (
                <Reveal as="div" key={item.year} delay={i * 0.1} className="relative">
                  <div className="relative z-10 inline-flex h-16 items-center rounded-2xl border border-line bg-card px-5 font-display text-2xl text-navy shadow-soft">
                    {item.year}
                    <span className="ml-3 size-2.5 rounded-full bg-gold" />
                  </div>
                  <h3 className="mt-5 text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24">
          <div className="container-page">
            <div className="grid gap-5 md:grid-cols-2">
              <Reveal as="div">
                <div className="grain relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-700 to-ocean p-8 text-ivory shadow-soft sm:p-10">
                  <div className="mesh-navy absolute inset-0 opacity-70" />
                  <div className="relative z-10">
                    <div className="grid size-14 place-items-center rounded-2xl bg-white/10 text-gold-soft">
                      <Target className="size-7" strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-6 text-2xl text-ivory">A nossa missão</h3>
                    <p className="mt-3 text-lg leading-relaxed text-ivory/80">
                      {about.mission}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal as="div" delay={0.08}>
                <div className="h-full rounded-[2rem] border border-line bg-card p-8 shadow-soft sm:p-10">
                  <div className="grid size-14 place-items-center rounded-2xl bg-gold-tint text-gold">
                    <Compass className="size-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-2xl text-navy">A nossa visão</h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                    {about.vision}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-ivory-deep/60 py-16 sm:py-24">
          <div className="container-page">
            <Reveal className="flex flex-col items-center text-center">
              <span className="eyebrow mb-4">O que nos move</span>
              <h2 className="max-w-2xl text-3xl sm:text-4xl">
                Os valores que guiam cada conselho
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {values.map((v, i) => {
                const Icon = icons[v.icon];
                return (
                  <Reveal as="div" key={v.title} delay={i * 0.1}>
                    <div className="h-full rounded-3xl border border-line bg-card p-8 text-center shadow-soft">
                      <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-navy text-gold-soft shadow-soft">
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

        {/* Team */}
        <section className="py-16 sm:py-24">
          <div className="container-page">
            <Reveal className="flex flex-col items-center text-center">
              <span className="eyebrow mb-4">A equipa</span>
              <h2 className="max-w-2xl text-3xl sm:text-4xl">
                Pessoas reais, sempre do seu lado
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                Jovem, dinâmica e experiente. Cada cliente tem um gestor de conta
                dedicado, disponível para o apoiar em tudo o que precisar.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {team.map((member, i) => (
                <Reveal as="div" key={member.name} delay={(i % 4) * 0.06}>
                  <div className="flex h-full flex-col items-center rounded-3xl border border-line bg-card p-6 text-center shadow-soft">
                    <div
                      className={`grid size-16 place-items-center rounded-full font-display text-xl ${avatarStyles[i % avatarStyles.length]}`}
                    >
                      {initials(member.name)}
                    </div>
                    <p className="mt-4 font-semibold text-navy">{member.name}</p>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 sm:pb-28">
          <div className="container-page">
            <Reveal>
              <div className="grain relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-navy-700 to-ocean px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
                <div className="mesh-navy absolute inset-0 opacity-80" />
                <div className="relative z-10 mx-auto max-w-2xl">
                  <Quote className="mx-auto size-8 text-gold-soft/70" />
                  <h2 className="mt-4 text-3xl text-ivory sm:text-4xl">
                    Vamos cuidar do que é importante para si?
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-lg text-ivory/75">
                    Fale com a nossa equipa. A simulação é gratuita e sem
                    compromisso.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button asChild variant="accent" size="lg">
                      <Link href="/#contactos">
                        Pedir Simulação
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="light" size="lg">
                      <a href={site.phoneHref}>
                        <Phone className="size-4" />
                        {site.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
