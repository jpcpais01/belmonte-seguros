/** Blog / Notícias - articles with Unsplash covers and body content. */

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  image: string;
  imageAlt: string;
  body: Block[];
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const posts: Post[] = [
  {
    slug: "como-escolher-seguro-saude",
    category: "Saúde",
    title: "Como escolher o seguro de saúde certo para a sua família",
    excerpt:
      "Rede de prestadores, capitais, períodos de carência: o que olhar antes de decidir, explicado de forma simples.",
    date: "2026-05-18",
    readingTime: "5 min",
    author: "Equipa Belmonte",
    image: img("1505751172876-fa1923c5c528"),
    imageAlt: "Estetoscópio sobre uma superfície clara",
    body: [
      {
        type: "p",
        text: "Escolher um seguro de saúde é, acima de tudo, escolher tranquilidade. Mas com tantas opções no mercado, é fácil ficar com dúvidas. Reunimos aqui o essencial para tomar uma decisão informada, sem letras pequenas.",
      },
      {
        type: "h2",
        text: "1. Comece pela rede de prestadores",
      },
      {
        type: "p",
        text: "A rede convencionada determina os médicos, clínicas e hospitais a que terá acesso com condições especiais. Verifique se inclui os prestadores que já utiliza e se cobre a sua zona de residência e de trabalho.",
      },
      {
        type: "h2",
        text: "2. Olhe para os capitais e coberturas",
      },
      {
        type: "p",
        text: "Consultas, exames, internamento, estomatologia e parto têm normalmente limites anuais. Mais importante do que o capital mais alto é o equilíbrio entre as coberturas que realmente vai usar e o prémio que paga.",
      },
      {
        type: "h2",
        text: "3. Não ignore os períodos de carência",
      },
      {
        type: "p",
        text: "São os prazos que tem de aguardar até poder usar determinada cobertura. Conhecê-los à partida evita surpresas - sobretudo em situações planeadas, como um parto ou uma cirurgia.",
      },
      {
        type: "p",
        text: "Na Belmonte, comparamos por si as soluções de várias seguradoras e ajudamos a encontrar o seguro de saúde mais adequado ao seu momento de vida. Fale connosco para uma simulação gratuita.",
      },
    ],
  },
  {
    slug: "ppr-vale-a-pena",
    category: "Poupança",
    title: "PPR: vale mesmo a pena para a sua reforma?",
    excerpt:
      "Vantagens fiscais, flexibilidade e horizonte temporal - tudo o que precisa de saber sobre Planos Poupança Reforma.",
    date: "2026-04-30",
    readingTime: "6 min",
    author: "Equipa Belmonte",
    image: img("1579621970795-87facc2f976d"),
    imageAlt: "Frasco de vidro com moedas e uma pequena planta a crescer",
    body: [
      {
        type: "p",
        text: "O Plano Poupança Reforma (PPR) é um dos instrumentos de poupança mais populares em Portugal - e por boas razões. Mas será que faz sentido para si? Vamos por partes.",
      },
      {
        type: "h2",
        text: "Vantagens fiscais",
      },
      {
        type: "p",
        text: "Os PPR oferecem benefícios à entrada (dedução à coleta, dentro dos limites legais) e, sobretudo, à saída, com uma tributação reduzida sobre os ganhos quando respeita as condições previstas na lei. É um forte incentivo à poupança de longo prazo.",
      },
      {
        type: "h2",
        text: "Flexibilidade e risco",
      },
      {
        type: "p",
        text: "Existem PPR mais conservadores e outros com maior exposição aos mercados. A escolha deve refletir o seu perfil de risco e o tempo que falta até à reforma: quanto mais longo o horizonte, maior a margem para procurar rendibilidade.",
      },
      {
        type: "h2",
        text: "O fator tempo",
      },
      {
        type: "p",
        text: "O grande aliado de um PPR é o tempo. Reforços regulares, mesmo que pequenos, beneficiam do efeito dos juros compostos ao longo dos anos. Começar cedo faz, quase sempre, toda a diferença.",
      },
      {
        type: "p",
        text: "Quer perceber qual o PPR mais indicado para os seus objetivos? Ajudamos a comparar soluções e a construir um plano à sua medida.",
      },
    ],
  },
  {
    slug: "rever-seguros-anualmente",
    category: "Dicas",
    title: "Porque deve rever os seus seguros uma vez por ano",
    excerpt:
      "A vida muda - e as suas apólices devem acompanhar. Um pequeno hábito que pode poupar-lhe dinheiro e dores de cabeça.",
    date: "2026-04-08",
    readingTime: "4 min",
    author: "Equipa Belmonte",
    image: img("1450101499163-c8848c66ca85"),
    imageAlt: "Pessoa a assinar documentos com uma caneta",
    body: [
      {
        type: "p",
        text: "Contratou os seus seguros há uns anos e nunca mais lhes tocou? Não está sozinho. Mas as apólices que faziam sentido no passado podem já não ser as ideais hoje.",
      },
      {
        type: "h2",
        text: "A sua vida mudou - os seguros também devem mudar",
      },
      {
        type: "p",
        text: "Um novo filho, uma mudança de casa, um carro diferente, um aumento de rendimento. Cada marco de vida altera aquilo que precisa de proteger. Uma revisão anual garante que as coberturas continuam ajustadas à sua realidade.",
      },
      {
        type: "h2",
        text: "Pagar a mais (ou estar a descoberto)",
      },
      {
        type: "p",
        text: "Com o tempo, é comum acumular coberturas que já não usa - ou, pior, descobrir lacunas só no momento do sinistro. Rever as apólices permite eliminar duplicações e reforçar o que realmente importa.",
      },
      {
        type: "p",
        text: "A boa notícia: não tem de o fazer sozinho. O seu gestor de conta na Belmonte revê consigo, sem compromisso, todas as apólices e sugere melhorias. Uma conversa por ano pode valer muito.",
      },
    ],
  },
  {
    slug: "seguro-automovel-o-que-cobre",
    category: "Automóvel",
    title: "Seguro automóvel: o que está (e não está) coberto",
    excerpt:
      "Responsabilidade civil, danos próprios, assistência em viagem: entenda as coberturas antes de pôr o carro a andar.",
    date: "2026-03-22",
    readingTime: "5 min",
    author: "Equipa Belmonte",
    image: img("1502877338535-766e1452684a"),
    imageAlt: "Automóvel desportivo azul estacionado numa rua",
    body: [
      {
        type: "p",
        text: "O seguro automóvel é obrigatório, mas nem todos são iguais. Conhecer as coberturas ajuda-o a conduzir mais descansado - e a evitar surpresas em caso de acidente.",
      },
      {
        type: "h2",
        text: "Responsabilidade civil: o mínimo obrigatório",
      },
      {
        type: "p",
        text: "Cobre os danos que possa causar a terceiros. É a base legal de qualquer seguro automóvel, mas, por si só, não protege o seu próprio veículo.",
      },
      {
        type: "h2",
        text: "Danos próprios: proteção para o seu carro",
      },
      {
        type: "p",
        text: "Inclui coberturas como choque, colisão e capotamento, furto, incêndio e fenómenos da natureza. Faz sentido sobretudo em viaturas mais recentes ou de maior valor. Atenção às franquias - o valor que fica a seu cargo em cada sinistro.",
      },
      {
        type: "h2",
        text: "Assistência em viagem e extras",
      },
      {
        type: "p",
        text: "Reboque, veículo de substituição, proteção do condutor ou quebra isolada de vidros são exemplos de coberturas que fazem a diferença no dia a dia. O segredo está em ajustar o pacote ao uso real do carro.",
      },
      {
        type: "p",
        text: "Ajudamos a comparar propostas de várias seguradoras e a escolher o equilíbrio certo entre proteção e prémio. Peça-nos uma simulação.",
      },
    ],
  },
  {
    slug: "proteger-a-casa-seguro-habitacao",
    category: "Casa",
    title: "Proteger a casa: o que um bom seguro de habitação cobre",
    excerpt:
      "Edifício, recheio e responsabilidade civil: o guia simples para proteger o seu lar e tudo o que ele guarda.",
    date: "2026-03-05",
    readingTime: "5 min",
    author: "Equipa Belmonte",
    image: img("1560518883-ce09059eeffa"),
    imageAlt: "Pequena casa em miniatura com um molho de chaves",
    body: [
      {
        type: "p",
        text: "A casa é, para a maioria das pessoas, o bem mais valioso - e o que guarda as memórias de uma vida. Um bom seguro de habitação protege as duas coisas: a estrutura e o que existe lá dentro.",
      },
      {
        type: "h2",
        text: "Edifício vs. recheio",
      },
      {
        type: "p",
        text: "A cobertura de edifício protege a construção em si (paredes, instalações, estruturas). A de recheio cobre os seus bens - móveis, eletrodomésticos, roupa e objetos pessoais. Se é proprietário, idealmente precisa de ambas; se é inquilino, normalmente basta o recheio.",
      },
      {
        type: "h2",
        text: "Para além do incêndio",
      },
      {
        type: "p",
        text: "Um seguro completo vai muito além do fogo: inclui danos por água, fenómenos naturais, furto, quebra de vidros e responsabilidade civil - por exemplo, se uma fuga de água em sua casa afetar o vizinho.",
      },
      {
        type: "h2",
        text: "Assistência ao domicílio",
      },
      {
        type: "p",
        text: "Canalizador, eletricista ou serralheiro em caso de emergência são coberturas práticas que poupam tempo e dinheiro quando algo corre mal. Vale a pena confirmar o que está incluído.",
      },
      {
        type: "p",
        text: "Quer rever a proteção da sua casa? Analisamos a sua situação e encontramos a solução certa, seja proprietário, senhorio ou inquilino.",
      },
    ],
  },
  {
    slug: "seguro-de-vida-tranquilidade",
    category: "Vida",
    title: "Seguro de vida: tranquilidade para quem mais ama",
    excerpt:
      "Mais do que uma apólice, é uma forma de cuidar da família. Saiba quando faz sentido e como ajustar o capital.",
    date: "2026-02-19",
    readingTime: "6 min",
    author: "Equipa Belmonte",
    image: img("1511895426328-dc8714191300"),
    imageAlt: "Grupo de pessoas de mãos dadas na praia ao pôr do sol",
    body: [
      {
        type: "p",
        text: "Falar de seguro de vida é, no fundo, falar de quem fica. É a forma de garantir que, perante o inesperado, a família mantém estabilidade e não herda preocupações financeiras.",
      },
      {
        type: "h2",
        text: "Quando faz sentido",
      },
      {
        type: "p",
        text: "Sempre que há pessoas que dependem de si - filhos, cônjuge - ou compromissos de longo prazo, como um crédito habitação. Nestes casos, o seguro de vida deixa de ser um extra e passa a ser um pilar de proteção.",
      },
      {
        type: "h2",
        text: "Como definir o capital",
      },
      {
        type: "p",
        text: "Uma boa referência é considerar as dívidas em curso, os rendimentos que a família perderia e os objetivos importantes, como a educação dos filhos. O capital deve ser suficiente para manter o nível de vida durante o tempo necessário.",
      },
      {
        type: "h2",
        text: "Coberturas complementares",
      },
      {
        type: "p",
        text: "Invalidez por doença ou acidente e proteção contra doenças graves são exemplos de coberturas que reforçam a tranquilidade, protegendo também o próprio em vida, e não apenas em caso de morte.",
      },
      {
        type: "p",
        text: "Cada família é diferente. Ajudamos a desenhar um seguro de vida ajustado à sua realidade, com aconselhamento próximo e sem pressões.",
      },
    ],
  },
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
