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
  image: string;
  imageAlt: string;
  accent: "navy" | "gold" | "teal" | "ocean";
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const services: Service[] = [
  {
    slug: "vida",
    title: "Seguro de Vida",
    tag: "Proteção familiar",
    icon: "HeartPulse",
    summary:
      "Proteja quem mais ama perante imprevistos e doenças graves, com a tranquilidade de quem sabe que a família fica amparada.",
    image: img("1609220136736-443140cffec6"),
    imageAlt: "Pai a brincar com os filhos ao ar livre",
    accent: "gold",
  },
  {
    slug: "saude",
    title: "Seguro de Saúde",
    tag: "Bem-estar",
    icon: "Stethoscope",
    summary:
      "Acesso rápido a médicos, clínicas e hospitais de qualidade, para si e para a sua família, quando mais precisa.",
    image: img("1631217868264-e5b90bb7e133"),
    imageAlt: "Médica a conversar com uma paciente",
    accent: "teal",
  },
  {
    slug: "automovel",
    title: "Seguro Automóvel",
    tag: "Mobilidade",
    icon: "Car",
    summary:
      "Conduza descansado com assistência em viagem e apoio dedicado em caso de acidente ou avaria, onde quer que esteja.",
    image: img("1503376780353-7e6692767b70"),
    imageAlt: "Automóvel a circular numa estrada",
    accent: "ocean",
  },
  {
    slug: "casa",
    title: "Seguro de Casa",
    tag: "O seu lar",
    icon: "Home",
    summary:
      "Proteja o seu lar e o seu património — para proprietários, senhorios e inquilinos — contra os imprevistos do dia a dia.",
    image: img("1568605114967-8130f3a36994"),
    imageAlt: "Casa acolhedora ao final do dia",
    accent: "navy",
  },
  {
    slug: "acidentes",
    title: "Acidentes Pessoais",
    tag: "Segurança",
    icon: "ShieldCheck",
    summary:
      "Um apoio essencial em caso de acidente, que garante estabilidade financeira a si e a quem de si depende.",
    image: img("1461896836934-ffe607ba8211"),
    imageAlt: "Atleta em posição de partida numa pista",
    accent: "gold",
  },
  {
    slug: "reforma",
    title: "Reforma & Poupança",
    tag: "Futuro",
    icon: "PiggyBank",
    summary:
      "Construa o seu futuro com soluções de poupança e reforma pensadas para crescer consigo, ao seu ritmo.",
    image: img("1447752875215-b2761acb3c5d"),
    imageAlt: "Caminho tranquilo numa floresta",
    accent: "teal",
  },
];
