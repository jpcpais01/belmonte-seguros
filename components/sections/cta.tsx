import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Cta() {
  return (
    <section className="py-10 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.25rem] bg-navy px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
            <Image
              src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 75rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-navy/85 to-ocean/85" />
            <div className="mesh-navy absolute inset-0 opacity-60" />
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
                encontrar a solução certa - com a tranquilidade de quem está
                sempre do seu lado.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
  );
}
