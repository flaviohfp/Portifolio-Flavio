export const githubUrl = "https://github.com/flaviohfp";
export const notionUrl =
  "https://app.notion.com/p/Flavio-Henrique-Notion-SENAI-V2-19739bd1596f8004a450cfc86573cd19";

// Preencha para exibir no site; campos vazios ficam escondidos.
export const emailAddress: string = "flaviopradela26@gmail.com";
export const whatsappNumber: string = "5549999251022"; // só números com DDI e DDD
export const linkedinUrl: string = ""; // ex: "https://www.linkedin.com/in/seu-perfil"

export type LiveProject = {
  id: string;
  name: string;
  client: string;
  segment: string;
  url: string;
  domain: string;
  image: string;
  summary: string;
  features: string[];
  stack: string[];
  accent: string;
};

// Sites publicados e usados por clientes reais.
export const liveProjects: LiveProject[] = [
  {
    id: "dispemaq",
    name: "Dispemaq",
    client: "Dispemaq · Peças para máquinas pesadas",
    segment: "E-commerce + painel administrativo",
    url: "https://dispemaq-fe9ef.web.app",
    domain: "dispemaq-fe9ef.web.app",
    image: "/projects/dispemaq.jpg",
    summary:
      "Loja virtual completa de peças para linha amarela, com catálogo multimarcas, carrinho, conta do cliente e um painel para a equipe gerenciar tudo sem depender de programador.",
    features: [
      "Busca por peça, código ou máquina e filtros por marca",
      "Checkout com Mercado Pago e frete calculado no servidor",
      "Painel admin: produtos, pedidos, clientes, banners e logística",
      "Backend em Cloud Functions com webhooks e regras de segurança",
    ],
    stack: ["JavaScript", "Vite", "Firebase", "Cloud Functions", "Firestore", "Mercado Pago"],
    accent: "#ff7a1a",
  },
  {
    id: "unity-laser",
    name: "Unity Laser",
    client: "Unity Laser · Guaporé/RS",
    segment: "Site institucional + catálogo",
    url: "https://unity-laser.vercel.app",
    domain: "unity-laser.vercel.app",
    image: "/projects/unity-laser.jpg",
    summary:
      "Presença digital premium para uma empresa de gravação e corte a laser: catálogo de produtos personalizados, galeria de trabalhos e pedidos de orçamento direto pelo site.",
    features: [
      "Catálogo e galeria gerenciados pelo próprio cliente",
      "Fluxo de orçamento e contato rápido por WhatsApp",
      "SEO local, sitemap e headers de segurança (CSP)",
      "Identidade escura e dourada alinhada à marca",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Firebase", "Vercel"],
    accent: "#d6a84a",
  },
  {
    id: "bruna-studio-nails",
    name: "Bruna Studio Nails",
    client: "Bruna da Silva · Nail designer em Chapecó",
    segment: "Agendamento online + gestão",
    url: "https://bruna-studio-nails-54d2d.web.app",
    domain: "bruna-studio-nails-54d2d.web.app",
    image: "/projects/bruna-studio-nails.jpg",
    summary:
      "Site com agenda online em 3 passos que calcula sozinho os horários livres, e um painel onde a Bruna controla agenda, clientes e financeiro do estúdio.",
    features: [
      "Horários livres calculados pela duração dos serviços",
      "Portfólio com filtros e botão “Quero esse modelo”",
      "Resumo pronto para WhatsApp e evento no Google Agenda",
      "Painel com agenda, clientes e financeiro",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firestore", "Firebase Auth"],
    accent: "#e05a7a",
  },
  {
    id: "silvana-penteados",
    name: "Silvana Furlanetto",
    client: "Silvana Furlanetto · Penteados de prenda",
    segment: "Reservas por evento + financeiro",
    url: "https://silvanapenteados-d4cb0.web.app",
    domain: "silvanapenteados-d4cb0.web.app",
    image: "/projects/silvana-penteados.jpg",
    summary:
      "Plataforma de reservas de penteados por rodeio: as clientes escolhem o evento e a categoria, e a Silvana organiza reservas, pagamentos e lucro em um painel próprio.",
    features: [
      "Agenda de rodeios com reserva por categoria e CTG",
      "Painel com status, horários combinados e pagamentos",
      "Financeiro: receitas, despesas e lucro por rodeio e mês",
      "Portfólio de fotos gerenciado pelo painel",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firestore", "Firebase Auth", "Hosting"],
    accent: "#c86bd8",
  },
  {
    id: "maria-hoffmann",
    name: "Maria Hoffmann",
    client: "Maria Hoffmann · Social media",
    segment: "Portfólio profissional",
    url: "https://portifolio-maria-hoffmann.vercel.app",
    domain: "portifolio-maria-hoffmann.vercel.app",
    image: "/projects/maria-hoffmann.jpg",
    summary:
      "Portfólio editorial para uma social media, transformando um PDF em um site rápido, elegante e responsivo para apresentar serviços e cases.",
    features: [
      "Layout editorial com tipografia refinada",
      "Galerias com ampliação de imagens",
      "Zero dependências: carrega rápido em qualquer celular",
      "Publicado na Vercel com validação de build",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    accent: "#c98a5e",
  },
];

export type InstitutionalProject = {
  id: string;
  name: string;
  event: string;
  award?: string;
  image?: string;
  repo?: string;
  summary: string;
  features: string[];
  stack: string[];
};

// Competições, desafios de empresas e projetos do SENAI.
export const institutionalProjects: InstitutionalProject[] = [
  {
    id: "hackased",
    name: "Central de Atendimento Multicanal",
    event: "Hackased · desafio IXC",
    award: "2º lugar",
    image: "/projects/hackased.jpg",
    summary:
      "Desafiados por jurados da IXC a resolver um problema antigo da empresa, criamos uma central que reúne WhatsApp, Instagram, Facebook e Telegram em um único painel de atendimento.",
    features: [
      "Perfis de atendente e gestor",
      "Conversas de todos os canais em um só lugar",
      "Histórico com filtros e estatísticas por canal",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: "grand-prix",
    name: "Vale Smart Route",
    event: "Grand Prix SENAI · desafio Vale",
    image: "/projects/grand-prix.jpg",
    summary:
      "Sistema de roteirização inteligente em tempo real para operações industriais da Vale, com acesso por cargo e mapa de simulação da frota.",
    features: [
      "Painéis para despacho, operação e manutenção",
      "Simulação de rotas e chamados no mapa",
      "Autenticação e dados em tempo real com Firebase",
    ],
    stack: ["React", "TypeScript", "Firebase", "Gemini", "shadcn/ui"],
  },
  {
    id: "estacionamento",
    name: "Estacionamento Inteligente",
    event: "SENAI · IoT com ESP32",
    summary:
      "Painel web servido pela própria ESP32 que mostra em tempo real se cada vaga está livre ou ocupada, a partir de sensores ultrassônicos.",
    features: ["Leitura de sensores HC-SR04", "API REST na ESP32", "Painel atualizado em tempo real"],
    stack: ["C++", "ESP32", "HTML", "JavaScript"],
  },
  {
    id: "saep",
    name: "Sistema para Clínica Veterinária",
    event: "SAEP 2026 · prova prática SENAI",
    repo: "https://github.com/flaviohfp/Flavio_Henrique_SAEP",
    summary:
      "Desenvolvido na prova do SAEP em 3 horas e sem internet: cadastro de tutores e pets e agendamento de consultas para uma clínica que ainda controlava tudo no papel.",
    features: [
      "Login com senha criptografada (bcrypt) e sessão que expira em 15 min",
      "CPF dos tutores criptografado no banco, seguindo a LGPD",
      "Banco relacional modelado com DER e requisitos documentados",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Bootstrap", "JavaScript"],
  },
];

export const archive = [
  { name: "easyroom", desc: "App de reservas de hotel (em trio)", stack: "Java · UX/UI" },
  { name: "crise-de-1929", desc: "Site escolar com quiz e carrossel", stack: "HTML · CSS · JS" },
  { name: "guia-de-sobrevivencia", desc: "Guia de monstros de jogos (em grupo)", stack: "HTML · CSS · JS" },
  { name: "coffee-tao", desc: "Site de cafeteria", stack: "HTML · CSS" },
  { name: "jogo-memoria", desc: "Jogo da memória no navegador", stack: "JavaScript" },
  { name: "avaliacao", desc: "Layout responsivo com Flexbox e Grid", stack: "HTML · CSS" },
  { name: "ads-senai", desc: "Todo o conteúdo do curso técnico", stack: "C · Java · MySQL · Web" },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Firebase",
  "Firestore",
  "Cloud Functions",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Java",
  "C / C++",
  "ESP32",
  "Git & GitHub",
  "Vercel",
  "Mercado Pago",
  "APIs REST",
  "IA aplicada",
];

export const workflow = [
  {
    step: "01",
    title: "Escuta",
    text: "Converso direto com o cliente para entender o negócio, a dor real e o que precisa funcionar no dia a dia.",
  },
  {
    step: "02",
    title: "Desenho",
    text: "Transformo a conversa em telas, fluxos e tarefas claras, pensando primeiro em quem vai usar.",
  },
  {
    step: "03",
    title: "Construção",
    text: "Desenvolvo site, painel e banco de dados, usando IA (ChatGPT, Claude, Codex) para acelerar e revisar.",
  },
  {
    step: "04",
    title: "Publicação",
    text: "Coloco no ar, ajusto com o feedback do cliente e continuo dando suporte depois da entrega.",
  },
];
