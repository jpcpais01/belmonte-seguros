import { Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Cta() {
  return (
    <section className="py-10 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-navy via-navy-700 to-ocean px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
            <div className="mesh-navy absolute inset-0 opacity-80" />
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-teal/15 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft backdrop-blur">
                Simulação gratuita e sem compromisso
              </span>
              <h2 className="mt-6 text-3xl text-ivory sm:text-5xl sm:leading-[1.08]">
                Vamos proteger o que é
                <br />
                <span className="font-display italic text-gold-soft">
                  importante para si.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ivory/75">
                Fale com a nossa equipa hoje. Em poucos minutos, ajudamos a
                encontrar a solução certa — com a tranquilidade de quem está
                sempre do seu lado.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg">
                  <a href="#contactos">
                    Pedir Simulação
                    <ArrowRight className="size-4" />
                  </a>
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
  );
}
