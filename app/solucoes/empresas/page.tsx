import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  FileText,
  Download,
  Check,
} from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { empresas } from "@/content/solucoes-detail";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Empresas",
  description:
    "Soluções de seguros e programas de benefícios para empresas: multirriscos, responsabilidade civil, frota, acidentes de trabalho, saúde, vida, acidentes e reforma.",
  alternates: { canonical: "/solucoes/empresas" },
};

export default function EmpresasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="grain mesh-warm relative overflow-hidden pt-30 pb-12 sm:pt-36 sm:pb-16">
          <div className="container-page relative z-10">
            <Reveal>
              <Link
                href="/#solucoes"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-navy"
              >
                <ArrowLeft className="size-4" />
                Soluções
              </Link>
              <span className="eyebrow mb-4 mt-6 block">
                Para a sua empresa e equipa
              </span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                {empresas.intro}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {empresas.description}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Cover */}
        <section className="pb-4">
          <div className="container-page">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-navy/10 sm:aspect-[21/9]">
                <Image
                  src={empresas.image}
                  alt={empresas.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 80rem"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-14 sm:py-20">
          <div className="container-page">
            <Reveal>
              <span className="eyebrow mb-4">As nossas soluções</span>
              <h2 className="text-3xl sm:text-4xl">
                Proteção para o negócio e para a equipa
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {empresas.groups.map((g, i) => (
                <Reveal as="div" key={g.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-line bg-card p-7 shadow-soft sm:p-8">
                    <h3 className="text-xl text-navy">{g.title}</h3>
                    <p className="mt-1 text-sm text-gold">{g.subtitle}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {g.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-center gap-2.5 text-[15px] text-ink-soft"
                        >
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-gold-tint text-gold">
                            <Check className="size-3.5" strokeWidth={3} />
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PDF */}
        <section className="pb-14 sm:pb-20">
          <div className="container-page">
            <Reveal>
              <div className="flex flex-col items-start gap-6 rounded-[2rem] border border-line bg-ivory-deep/50 p-7 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy text-gold-soft">
                    <FileText className="size-7" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-xl text-navy">
                      Apresentação Belmonte Seguros
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      Conheça em detalhe as nossas soluções para empresas.
                    </p>
                  </div>
                </div>
                <Button asChild variant="primary" size="lg">
                  <a href={empresas.pdf} target="_blank" rel="noopener noreferrer">
                    <Download className="size-4" />
                    Ver apresentação (PDF)
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 sm:pb-28">
          <div className="container-page">
            <Reveal>
              <div className="grain relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-navy-700 to-ocean px-6 py-12 text-center shadow-lift sm:px-12 sm:py-14">
                <div className="mesh-navy absolute inset-0 opacity-80" />
                <div className="relative z-10 mx-auto max-w-2xl">
                  <h2 className="text-2xl text-ivory sm:text-4xl">
                    Vamos falar sobre a sua empresa?
                  </h2>
                  <p className="mx-auto mt-3 max-w-lg text-ivory/75">
                    Desenhamos um programa à medida do seu negócio e da sua
                    equipa. Sem compromisso.
                  </p>
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button asChild variant="accent" size="lg">
                      <Link href="/simulacao">
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
