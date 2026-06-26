import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pedir Simulação",
  description:
    "Peça a sua simulação de seguro gratuita e sem compromisso. Comparamos as melhores soluções de todas as seguradoras a operar em Portugal.",
  alternates: { canonical: "/simulacao" },
};

const benefits = [
  "100% gratuita e sem compromisso",
  "Comparamos todas as seguradoras a operar em Portugal",
  "Um gestor de conta dedicado a acompanhá-lo",
  "Resposta rápida, por quem percebe do assunto",
];

export default function SimulacaoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="grain mesh-warm relative overflow-hidden pt-30 pb-10 sm:pt-36 sm:pb-12">
          <div className="container-page relative z-10">
            <Reveal>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-navy"
              >
                <ArrowLeft className="size-4" />
                Voltar ao início
              </Link>
              <span className="eyebrow mb-4 mt-6 block">
                Simulação gratuita
              </span>
              <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Peça a sua simulação
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Conte-nos o que precisa de proteger. Em poucos minutos,
                preparamos uma proposta à sua medida - sem custos e sem
                compromisso.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="pb-20 sm:pb-28">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              {/* Form */}
              <Reveal>
                <div className="rounded-[2rem] border border-line bg-card p-6 shadow-lift sm:p-9">
                  <h2 className="text-2xl text-navy">Os seus dados</h2>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    Preencha o formulário e entraremos em contacto consigo
                    brevemente.
                  </p>
                  <div className="mt-7">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                <Reveal delay={0.08}>
                  <div className="grain relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-700 to-ocean p-8 text-ivory shadow-soft">
                    <div className="mesh-navy absolute inset-0 opacity-70" />
                    <div className="relative z-10">
                      <ShieldCheck className="size-9 text-gold-soft" />
                      <h2 className="mt-4 text-2xl text-ivory">
                        Porquê pedir uma simulação?
                      </h2>
                      <ul className="mt-5 space-y-3">
                        {benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold text-navy">
                              <Check className="size-3.5" strokeWidth={3} />
                            </span>
                            <span className="text-[15px] leading-relaxed text-ivory/85">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="rounded-[2rem] border border-line bg-card p-7 shadow-soft">
                    <h2 className="text-lg text-navy">
                      Prefere falar connosco?
                    </h2>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <a
                          href={site.phoneHref}
                          className="flex items-center gap-3 text-navy transition-colors hover:text-ocean"
                        >
                          <span className="grid size-10 place-items-center rounded-xl bg-navy text-gold-soft">
                            <Phone className="size-5" />
                          </span>
                          <span className="font-semibold">{site.phone}</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={site.emailHref}
                          className="flex items-center gap-3 text-navy transition-colors hover:text-ocean"
                        >
                          <span className="grid size-10 place-items-center rounded-xl bg-navy text-gold-soft">
                            <Mail className="size-5" />
                          </span>
                          <span className="font-semibold">{site.email}</span>
                        </a>
                      </li>
                      <li className="flex items-center gap-3 text-ink-soft">
                        <span className="grid size-10 place-items-center rounded-xl bg-ivory-deep text-navy">
                          <Clock className="size-5" />
                        </span>
                        <span className="text-sm">{site.hours}</span>
                      </li>
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
