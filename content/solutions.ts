/**
 * Two-audience split: Particulares & Famílias vs Empresas,
 * each with the two core offerings (Seguros + Benefícios).
 */
export type Solution = {
  id: "particulares" | "empresas";
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  offerings: { title: string; items: string[] }[];
  cta: string;
};

export const solutions: Solution[] = [
  {
    id: "particulares",
    eyebrow: "Para si e para a sua família",
    title: "Particulares & Famílias",
    description:
      "Aconselhamento próximo e imparcial para proteger o que constrói ao longo da vida — as pessoas, a casa, o carro e os seus projetos.",
    icon: "Users",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mãe e filhos em casa, num momento tranquilo",
    offerings: [
      {
        title: "Soluções de Seguros",
        items: ["Vida", "Saúde", "Automóvel", "Casa", "Acidentes Pessoais"],
      },
      {
        title: "Poupança & Futuro",
        items: ["Reforma (PPR)", "Poupança", "Educação dos filhos"],
      },
    ],
    cta: "Proteger a minha família",
  },
  {
    id: "empresas",
    eyebrow: "Para a sua empresa e equipa",
    title: "Empresas",
    description:
      "Programas de seguros e benefícios que protegem o negócio e cuidam de quem faz a empresa acontecer, reforçando o seu pacote de valor.",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Equipa a celebrar um bom resultado no escritório",
    offerings: [
      {
        title: "Soluções de Seguros",
        items: ["Multirriscos", "Responsabilidade Civil", "Frota Automóvel", "Acidentes de Trabalho"],
      },
      {
        title: "Programas de Benefícios",
        items: ["Saúde", "Vida", "Acidentes", "Reforma"],
      },
    ],
    cta: "Falar sobre a minha empresa",
  },
];
