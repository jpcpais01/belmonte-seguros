import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/brand/social-icons";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contactos" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Info */}
          <div>
            <Reveal>
              <span className="eyebrow mb-4">Contactos</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
                Vamos encontrar a solução certa para si
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                Conte-nos o que precisa de proteger. Respondemos com rapidez e
                sem compromisso — a simulação é gratuita.
              </p>
            </Reveal>

            <Reveal className="mt-8" delay={0.05}>
              <ul className="space-y-3">
                <ContactRow icon={<Phone className="size-5" />} href={site.phoneHref}>
                  <span className="text-sm text-muted">Telefone</span>
                  <span className="font-semibold text-navy">{site.phone}</span>
                </ContactRow>
                <ContactRow icon={<Mail className="size-5" />} href={site.emailHref}>
                  <span className="text-sm text-muted">Email</span>
                  <span className="font-semibold text-navy">{site.email}</span>
                </ContactRow>
                <ContactRow icon={<Clock className="size-5" />}>
                  <span className="text-sm text-muted">Horário</span>
                  <span className="font-semibold text-navy">{site.hours}</span>
                </ContactRow>
              </ul>
            </Reveal>

            <Reveal className="mt-6 grid gap-3 sm:grid-cols-2" delay={0.1}>
              {site.addresses.map((addr) => (
                <a
                  key={addr.label}
                  href={addr.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border border-line bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-gold-tint text-gold">
                    <MapPin className="size-5" />
                  </span>
                  <span className="leading-snug">
                    <span className="block text-sm font-semibold text-navy">
                      {addr.label}
                    </span>
                    <span className="block text-sm text-ink-soft">
                      {addr.street}
                    </span>
                    <span className="block text-sm text-muted">
                      {addr.area} · {addr.postal}
                    </span>
                  </span>
                </a>
              ))}
            </Reveal>

            <Reveal className="mt-6 flex items-center gap-3" delay={0.12}>
              <Social href={site.social.instagram} label="Instagram">
                <InstagramIcon className="size-5" />
              </Social>
              <Social href={site.social.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-[18px]" />
              </Social>
              <Social href={site.social.facebook} label="Facebook">
                <FacebookIcon className="size-[18px]" />
              </Social>
            </Reveal>

            {/* Map */}
            <Reveal className="mt-6" delay={0.14}>
              <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
                <iframe
                  title="Mapa — Belmonte Seguros, Parque das Nações, Lisboa"
                  src="https://www.google.com/maps?q=Parque+das+Na%C3%A7%C3%B5es+Lisboa+Porta+do+Mar&output=embed"
                  className="h-56 w-full grayscale-[0.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form card */}
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-line bg-card p-6 shadow-lift sm:p-9">
              <h3 className="text-xl text-navy">Pedir simulação gratuita</h3>
              <p className="mt-1.5 text-sm text-ink-soft">
                Preencha o formulário e entraremos em contacto consigo.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  href,
  children,
}: {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-gold-soft">
        {icon}
      </span>
      <span className="flex flex-col leading-tight">{children}</span>
    </>
  );
  const className =
    "flex items-center gap-4 rounded-2xl px-2 py-1.5 transition-colors hover:bg-ivory-deep/70";
  return (
    <li>
      {href ? (
        <a href={href} className={className}>
          {inner}
        </a>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </li>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-line bg-card text-navy shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy hover:text-ivory hover:shadow-lift"
    >
      {children}
    </a>
  );
}
