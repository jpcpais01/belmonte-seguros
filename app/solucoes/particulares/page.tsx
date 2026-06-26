import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { particularesTypes, particularesIntro } from "@/content/solucoes-detail";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Particulares & Famílias",
  description:
    "Soluções de seguros para si e para a sua família: multirriscos imóvel e recheio, obras de arte, proteção de rendas, empregada doméstica e vida habitação.",
  alternates: { canonical: "/solucoes/particulares" },
};

export default function ParticularesPage() {
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
                Para si e para a sua família
              </span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Particulares &amp; Famílias
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {particularesIntro}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Types grid */}
        <section className="py-12 sm:py-16">
          <div className="container-page">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {particularesTypes.map((t, i) => (
                <Reveal as="article" key={t.title} delay={(i % 3) * 0.08}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-lg text-navy">{t.title}</h2>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
                        {t.description}
                      </p>
                    </div>
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
              <div className="grain relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-navy-700 to-ocean px-6 py-12 text-center shadow-lift sm:px-12 sm:py-14">
                <div className="mesh-navy absolute inset-0 opacity-80" />
                <div className="relative z-10 mx-auto max-w-2xl">
                  <h2 className="text-2xl text-ivory sm:text-4xl">
                    Vamos proteger a sua família?
                  </h2>
                  <p className="mx-auto mt-3 max-w-lg text-ivory/75">
                    Diga-nos o que precisa de proteger. A simulação é gratuita e
                    sem compromisso.
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
