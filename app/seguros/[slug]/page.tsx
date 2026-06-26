import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { services, servicesBySlug } from "@/content/services";
import { site } from "@/content/site";
import { icons } from "@/lib/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = servicesBySlug[slug];
  if (!s) return {};
  return {
    title: s.title,
    description: s.summary,
    alternates: { canonical: s.href },
    openGraph: {
      title: s.title,
      description: s.summary,
      images: [{ url: s.image, alt: s.imageAlt }],
    },
  };
}

export default async function SeguroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = servicesBySlug[slug];
  if (!s) notFound();

  const Icon = icons[s.icon];
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="grain mesh-warm relative overflow-hidden pt-30 pb-10 sm:pt-36 sm:pb-12">
          <div className="container-page relative z-10">
            <Reveal>
              <Link
                href="/#seguros"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-navy"
              >
                <ArrowLeft className="size-4" />
                Os nossos seguros
              </Link>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-navy text-gold-soft">
                  {Icon && <Icon className="size-6" strokeWidth={1.7} />}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {s.tag}
                </span>
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                {s.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                {s.detail.intro}
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
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 80rem"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Coverages */}
        <section className="py-14 sm:py-20">
          <div className="container-page">
            <Reveal>
              <span className="eyebrow mb-4">Coberturas</span>
              <h2 className="text-3xl sm:text-4xl">O que pode incluir</h2>
              {s.detail.note && (
                <p className="mt-3 text-ink-soft">{s.detail.note}</p>
              )}
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {s.detail.groups.map((g, i) => (
                <Reveal as="div" key={g.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-line bg-card p-7 shadow-soft sm:p-8">
                    <h3 className="text-xl text-navy">{g.title}</h3>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {g.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2.5 text-[15px] text-ink-soft"
                        >
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold-tint text-gold">
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

        {/* CTA */}
        <section className="pb-16 sm:pb-24">
          <div className="container-page">
            <Reveal>
              <div className="grain relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-navy-700 to-ocean px-6 py-12 text-center shadow-lift sm:px-12 sm:py-14">
                <div className="mesh-navy absolute inset-0 opacity-80" />
                <div className="relative z-10 mx-auto max-w-2xl">
                  <h2 className="text-2xl text-ivory sm:text-4xl">
                    Quer uma proposta para o seu {s.title.toLowerCase()}?
                  </h2>
                  <p className="mx-auto mt-3 max-w-lg text-ivory/75">
                    A simulação é gratuita e sem compromisso.
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

        {/* Other insurances */}
        <section className="pb-20 sm:pb-28">
          <div className="container-page">
            <h2 className="text-2xl text-navy sm:text-3xl">Outros seguros</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((o) => {
                const OIcon = icons[o.icon];
                return (
                  <Link
                    key={o.slug}
                    href={o.href}
                    className="group flex items-center gap-4 rounded-3xl border border-line bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-gold-tint text-gold">
                      {OIcon && <OIcon className="size-6" strokeWidth={1.7} />}
                    </span>
                    <span className="flex-1 font-semibold text-navy">
                      {o.title}
                    </span>
                    <ArrowUpRight className="size-5 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
