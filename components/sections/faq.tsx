import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";

export function Faq() {
  return (
    <section className="bg-ivory-deep/60 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Perguntas frequentes"
              title="As suas dúvidas, esclarecidas"
              intro="Não encontra a resposta que procura? Fale connosco - estamos a um telefonema de distância."
            />
            <Reveal className="mt-8">
              <Button asChild variant="primary" size="md">
                <a href={site.phoneHref}>Ligar {site.phone}</a>
              </Button>
            </Reveal>
          </div>

          <Reveal>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
