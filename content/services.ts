/**
 * Insurance lines shown in the "Seguros" grid.
 * `icon` maps to a lucide-react icon resolved in the section component.
 */
export type Service = {
  slug: string;
  title: string;
  tag: string;
  icon: string;
  summary: string;
  points: string[];
  accent: "navy" | "gold" | "teal" | "ocean";
};

export const services: Service[] = [
  {
    slug: "vida",
    title: "Seguro de Vida",
    tag: "Proteção familiar",
    icon: "HeartPulse",
    summary:
      "Proteja quem mais ama perante imprevistos e doenças graves, com a tranquilidade de quem sabe que a família fica amparada.",
    points: [
      "Proteção do agregado familiar",
      "Cobertura em caso de doença grave",
      "Capital ajustado à fase da sua vida",
    ],
    accent: "gold",
  },
  {
    slug: "saude",
    title: "Seguro de Saúde",
    tag: "Bem-estar",
    icon: "Stethoscope",
    summary:
      "Acesso rápido a médicos, clínicas e hospitais de qualidade, para si e para a sua família, quando mais precisa.",
    points: [
      "Rede alargada de prestadores",
      "Consultas, exames e internamento",
      "Medicina dentária e bem-estar",
    ],
    accent: "teal",
  },
  {
    slug: "automovel",
    title: "Seguro Automóvel",
    tag: "Mobilidade",
    icon: "Car",
    summary:
      "Conduza descansado com assistência em viagem e apoio dedicado em caso de acidente ou avaria, onde quer que esteja.",
    points: [
      "Assistência em viagem 24/7",
      "Apoio em caso de acidente",
      "Coberturas à medida do seu carro",
    ],
    accent: "ocean",
  },
  {
    slug: "casa",
    title: "Seguro de Casa",
    tag: "O seu lar",
    icon: "Home",
    summary:
      "Proteja o seu lar e o seu património — para proprietários, senhorios e inquilinos — contra os imprevistos do dia a dia.",
    points: [
      "Incêndio, danos e fenómenos naturais",
      "Recheio e responsabilidade civil",
      "Assistência ao domicílio",
    ],
    accent: "navy",
  },
  {
    slug: "acidentes",
    title: "Acidentes Pessoais",
    tag: "Segurança",
    icon: "ShieldCheck",
    summary:
      "Um apoio essencial em caso de acidente, que garante estabilidade financeira a si e a quem de si depende.",
    points: [
      "Cobertura em caso de invalidez",
      "Despesas de tratamento",
      "Proteção dentro e fora do trabalho",
    ],
    accent: "gold",
  },
  {
    slug: "reforma",
    title: "Reforma & Poupança",
    tag: "Futuro",
    icon: "PiggyBank",
    summary:
      "Construa o seu futuro com soluções de poupança e reforma pensadas para crescer consigo, ao seu ritmo.",
    points: [
      "Planos Poupança Reforma (PPR)",
      "Poupança flexível e fiscalmente eficiente",
      "Objetivos de longo prazo",
    ],
    accent: "teal",
  },
];
