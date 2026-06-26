/**
 * Insurance lines shown in the "Seguros" grid + their detail pages.
 * `icon` maps to a lucide-react icon resolved in the section component.
 */
export type Service = {
  slug: string;
  href: string;
  title: string;
  tag: string;
  icon: string;
  summary: string;
  image: string;
  imageAlt: string;
  accent: "navy" | "gold" | "teal" | "ocean";
  detail: {
    intro: string;
    note?: string;
    groups: { title: string; items: string[] }[];
  };
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const services: Service[] = [
  {
    slug: "vida",
    href: "/seguros/vida",
    title: "Seguro de Vida",
    tag: "Proteção familiar",
    icon: "HeartPulse",
    summary:
      "Proteja quem mais ama perante imprevistos e doenças graves, com a tranquilidade de quem sabe que a família fica amparada.",
    image: img("1609220136736-443140cffec6"),
    imageAlt: "Pai a brincar com os filhos ao ar livre",
    accent: "gold",
    detail: {
      intro:
        "O Seguro de Vida protege quem mais ama perante imprevistos, doenças graves ou perda de rendimento. Ajudamos a escolher a solução certa para cada fase da sua vida.",
      note: "Disponível em vários planos, ajustáveis às suas necessidades.",
      groups: [
        {
          title: "Vida Crédito Habitação",
          items: ["Morte", "Invalidez"],
        },
        {
          title: "Vida Previdência",
          items: [
            "Doenças graves",
            "Morte",
            "Invalidez",
            "Incapacidade temporária",
            "Poupança reforma",
          ],
        },
      ],
    },
  },
  {
    slug: "saude",
    href: "/seguros/saude",
    title: "Seguro de Saúde",
    tag: "Bem-estar",
    icon: "Stethoscope",
    summary:
      "Acesso rápido a médicos, clínicas e hospitais de qualidade, para si e para a sua família, quando mais precisa.",
    image: img("1631217868264-e5b90bb7e133"),
    imageAlt: "Médica a conversar com uma paciente",
    accent: "teal",
    detail: {
      intro:
        "O Seguro de Saúde garante acesso rápido a médicos, clínicas e hospitais de qualidade, para si e para a sua família, quando mais precisa.",
      note: "Disponível em 3 planos (I, II e III).",
      groups: [
        {
          title: "Saúde e bem-estar",
          items: [
            "Internamento hospitalar e parto",
            "Consultas, tratamentos e exames",
            "Tratamentos oncológicos (Fundação Champalimaud)",
            "Estomatologia",
            "Óculos (aros e lentes)",
            "Medicamentos",
          ],
        },
        {
          title: "Proteção",
          items: [
            "Doenças graves",
            "Morte",
            "Invalidez",
            "Incapacidade por doença",
          ],
        },
      ],
    },
  },
  {
    slug: "automovel",
    href: "/seguros/automovel",
    title: "Seguro Automóvel",
    tag: "Mobilidade",
    icon: "Car",
    summary:
      "Conduza descansado com assistência em viagem e apoio dedicado em caso de acidente ou avaria, onde quer que esteja.",
    image: img("1503376780353-7e6692767b70"),
    imageAlt: "Automóvel a circular numa estrada",
    accent: "ocean",
    detail: {
      intro:
        "Conduza descansado. O Seguro Automóvel protege-o a si, ao seu carro e a terceiros, com assistência em viagem e apoio dedicado em caso de acidente ou avaria.",
      note: "Disponível em 3 planos (I, II e III).",
      groups: [
        {
          title: "Coberturas de base",
          items: [
            "Responsabilidade civil",
            "Assistência em viagem",
            "Ocupantes",
            "Proteção jurídica",
            "Quebra de vidros",
          ],
        },
        {
          title: "Coberturas adicionais",
          items: [
            "Danos próprios",
            "Veículo de substituição",
            "Proteção especial do condutor",
          ],
        },
      ],
    },
  },
  {
    slug: "casa",
    href: "/seguros/casa",
    title: "Seguro de Casa",
    tag: "O seu lar",
    icon: "Home",
    summary:
      "Proteja o seu lar e o seu património - para proprietários, senhorios e inquilinos - contra os imprevistos do dia a dia.",
    image: img("1568605114967-8130f3a36994"),
    imageAlt: "Casa acolhedora ao final do dia",
    accent: "navy",
    detail: {
      intro:
        "Proteja o seu lar e o seu património - para proprietários, senhorios e inquilinos - contra os imprevistos do dia a dia.",
      note: "Disponível em 5 planos (I a V).",
      groups: [
        {
          title: "Garantias",
          items: [
            "Imóvel",
            "Recheio",
            "Imóvel + recheio",
            "Fenómenos sísmicos",
            "Empregada doméstica",
            "Animais de estimação",
            "Equipamento eletrónico",
            "Desporto e acidentes",
          ],
        },
      ],
    },
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
);
