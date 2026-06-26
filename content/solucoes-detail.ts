/** Detail content for the Soluções por perfil pages. */

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export type FamilyType = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

/** Particulares & Famílias — 6 insurance types (from tipo/familia). */
export const particularesTypes: FamilyType[] = [
  {
    title: "Multirrisco Imóvel",
    description:
      "Um pacote de coberturas para o edifício, moradia ou apartamento, dirigido a quem habita ou arrenda. O capital seguro é determinado pelo valor de reconstrução do imóvel.",
    image: img("1460317442991-0ec209397118"),
    imageAlt: "Edifício de apartamentos com varandas",
  },
  {
    title: "Multirrisco Recheio",
    description:
      "Proteção dos conteúdos normais e especiais da casa, para proprietários e inquilinos, com módulos de capital entre 15.000€ e 100.000€.",
    image: img("1586023492125-27b2c045efd7"),
    imageAlt: "Sala de estar moderna e acolhedora",
  },
  {
    title: "Obras de Arte",
    description:
      "Cobertura para colecionadores privados e para o transporte especializado, protegendo as suas coleções contra perda ou danos materiais.",
    image: img("1577720580479-7d839d829c73"),
    imageAlt: "Pintura emoldurada",
  },
  {
    title: "Proteção Rendas",
    description:
      "Protege o senhorio perante a possibilidade de o inquilino deixar de pagar a renda, designadamente em caso de desemprego involuntário.",
    image: img("1521791136064-7986c2920216"),
    imageAlt: "Aperto de mão a selar um acordo",
  },
  {
    title: "Empregada Doméstica",
    description:
      "Seguro obrigatório por lei, que cobre eventuais acidentes ocorridos com os empregados domésticos durante o horário de trabalho.",
    image: img("1581578731548-c64695cc6952"),
    imageAlt: "Profissional a limpar uma janela em casa",
  },
  {
    title: "Vida Habitação",
    description:
      "Seguro de vida associado ao crédito habitação, que cobre os riscos de morte e invalidez, garantindo a liquidação da dívida junto do banco.",
    image: img("1600585154340-be6161a56a0c"),
    imageAlt: "Moradia moderna ao final do dia",
  },
];

export const particularesIntro =
  "Da casa ao recheio, das rendas à proteção de quem trabalha consigo — reunimos as soluções certas para proteger a sua família e o seu património.";

/** Empresas (from tipo/empresas). */
export const empresas = {
  intro: "Conheça as nossas soluções para Empresas",
  description:
    "No mundo empresarial, os desafios são constantes e a segurança do seu negócio, colaboradores e património é essencial para o crescimento sustentável. Na Belmonte Seguros & Benefícios, oferecemos soluções completas e personalizadas que garantem a proteção da sua empresa contra riscos imprevistos. Confie na nossa experiência e compromisso.",
  image: img("1600880292203-757bb62b4baf"),
  imageAlt: "Equipa a celebrar um bom resultado no escritório",
  pdf: "/Belmonte-Seguros-Apresentacao-2025.pdf",
  groups: [
    {
      title: "Soluções de Seguros",
      subtitle: "Bens, pessoas e responsabilidades",
      items: [
        "Multirriscos",
        "Responsabilidade Civil",
        "Frota Automóvel",
        "Acidentes de Trabalho",
      ],
    },
    {
      title: "Programas de Benefícios",
      subtitle: "Cuidar de quem faz a empresa acontecer",
      items: ["Saúde", "Vida", "Acidentes", "Reforma"],
    },
  ],
} as const;
