import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/brand/social-icons";
import { Logo } from "@/components/brand/logo";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-navy text-ivory/80">
      <div className="mesh-navy absolute inset-0 opacity-50" />
      <div className="container-page relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              Mediação de seguros independente em Lisboa. Aconselhamos famílias e
              empresas, sempre com as pessoas em primeiro lugar.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <FooterSocial href={site.social.instagram} label="Instagram">
                <InstagramIcon className="size-[18px]" />
              </FooterSocial>
              <FooterSocial href={site.social.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-4" />
              </FooterSocial>
              <FooterSocial href={site.social.facebook} label="Facebook">
                <FacebookIcon className="size-4" />
              </FooterSocial>
            </div>
          </div>

          {/* Navegação */}
          <FooterCol title="Navegação">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Seguros */}
          <FooterCol title="Seguros">
            {services.map((s) => (
              <FooterLink key={s.slug} href="/#seguros">
                {s.title.replace("Seguro de ", "").replace("Seguro ", "")}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contactos */}
          <FooterCol title="Contactos">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 text-sm text-ivory/70 transition-colors hover:text-gold-soft"
              >
                <Phone className="size-4 text-gold-soft" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 text-sm text-ivory/70 transition-colors hover:text-gold-soft"
              >
                <Mail className="size-4 text-gold-soft" />
                {site.email}
              </a>
            </li>
            {site.addresses.map((addr) => (
              <li
                key={addr.label}
                className="flex items-start gap-2.5 text-sm text-ivory/70"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-soft" />
                <span>
                  {addr.street}, {addr.postal}
                </span>
              </li>
            ))}
          </FooterCol>
        </div>

        {/* Legal / compliance */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-ivory/55">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-gold-soft" />
            <p>
              {site.legalName}. {site.asf}. A atividade de mediação de seguros é
              supervisionada pela{" "}
              <a
                href={site.asfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold-soft/50 underline-offset-2 hover:text-gold-soft"
              >
                ASF — Autoridade de Supervisão de Seguros e Fundos de Pensões
              </a>
              .
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-ivory/55 sm:flex-row">
            <p>
              © {year} {site.legalName}. Todos os direitos reservados.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {site.legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      l.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="transition-colors hover:text-gold-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ivory">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-ivory/70 transition-colors hover:text-gold-soft"
      >
        {children}
      </a>
    </li>
  );
}

function FooterSocial({
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
      className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-ivory/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy"
    >
      {children}
    </a>
  );
}
