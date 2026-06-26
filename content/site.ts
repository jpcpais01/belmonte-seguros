/**
 * Central site content (European Portuguese).
 * Edit company-wide copy, contacts and navigation here.
 */

export const site = {
  name: "Belmonte Seguros",
  legalName: "Belmonte Seguros - Seguros e Benefícios",
  tagline: "Acima de tudo, as pessoas.",
  subtitle: "Soluções de seguros à sua medida.",
  description:
    "Mediação de seguros independente em Lisboa. Aconselhamos famílias e empresas e comparamos as melhores soluções de seguros e benefícios de todas as seguradoras a operar em Portugal.",

  phone: "+351 211 602 044",
  phoneHref: "tel:+351211602044",
  email: "geral@belmonte-seguros.pt",
  emailHref: "mailto:geral@belmonte-seguros.pt",

  hours: "Segunda a Sexta, 9h00 - 18h00",

  // Note: substituir pelo número real de registo na ASF antes de publicar.
  asf: "Mediador registado na ASF sob o n.º 0000000000",
  asfUrl: "https://www.asf.com.pt/",

  addresses: [
    {
      label: "Porta do Mar",
      street: "Porta do Mar, 4 B",
      area: "Parque das Nações",
      postal: "1990-136 Lisboa",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Porta+do+Mar+4+B+Parque+das+Nações+Lisboa",
    },
    {
      label: "Alameda dos Oceanos",
      street: "Alameda dos Oceanos, 22 A",
      area: "Parque das Nações",
      postal: "1990-217 Lisboa",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Alameda+dos+Oceanos+22+A+Parque+das+Nações+Lisboa",
    },
  ],

  social: {
    instagram: "https://www.instagram.com/belmonte_seguros.beneficios/",
    facebook: "https://www.facebook.com/",
    linkedin: "https://pt.linkedin.com/company/belmonte-seguros-benefícios",
  },

  legalLinks: [
    { label: "Livro de Reclamações", href: "https://www.livroreclamacoes.pt/" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Informação Legal", href: "/informacao-legal" },
  ],
} as const;

export const nav = [
  { label: "Início", href: "/#inicio" },
  { label: "Seguros", href: "/#seguros" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Notícias", href: "/#blog" },
  { label: "Contactos", href: "/#contactos" },
] as const;

