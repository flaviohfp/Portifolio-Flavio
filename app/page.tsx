import type { Metadata } from "next";

const githubUrl = "https://github.com/flaviohfpmeu";
const notionUrl =
  "https://app.notion.com/p/Flavio-Henrique-Notion-SENAI-V2-19739bd1596f8004a450cfc86573cd19";

const clientProjects = [
  {
    name: "Unity Laser",
    type: "Site comercial em produção",
    url: "https://unity-laser.vercel.app",
    summary:
      "Vitrine digital para empresa de brindes personalizados, gravação a laser e orçamentos corporativos.",
    stack: ["React", "Firebase", "Vercel", "SEO", "Responsivo"],
    impact: [
      "Página publicada e acessível para clientes reais.",
      "Estrutura voltada para apresentação de serviços, confiança e geração de orçamento.",
      "Configuração de segurança, performance e deploy em produção.",
    ],
  },
  {
    name: "Dispemaq",
    type: "E-commerce e painel administrativo",
    url: "https://dispemaq-fe9ef.web.app/admin.html",
    summary:
      "Loja com área administrativa para gerenciar produtos, clientes, pedidos, banners, avaliações e logística.",
    stack: ["JavaScript", "Firebase", "Firestore", "Storage", "Melhor Envio"],
    impact: [
      "Painel com abas para visão geral, pedidos, clientes, produtos, site e banners.",
      "Fluxo de cadastro de produtos com imagens, preço, logística, peso e dimensões.",
      "Integração de frete com Melhor Envio e estrutura para operação de vendas.",
    ],
  },
];

const skills = [
  "HTML semântico",
  "CSS responsivo",
  "JavaScript",
  "React",
  "Firebase",
  "Firestore",
  "Autenticação",
  "Deploy",
  "Git e GitHub",
  "Consumo de APIs",
  "Noções de UX",
  "Manutenção de sistemas",
];

const senaiLearning = [
  {
    title: "Lógica e base de programação",
    text: "Construção de raciocínio, algoritmos, variáveis, condicionais, repetição e organização de soluções.",
  },
  {
    title: "Desenvolvimento web",
    text: "Criação de interfaces responsivas com HTML, CSS e JavaScript, sempre pensando em usabilidade.",
  },
  {
    title: "Projetos e documentação",
    text: "Registro de estudos no Notion, versionamento no GitHub e evolução contínua por entregas práticas.",
  },
  {
    title: "Banco de dados e integração",
    text: "Aprendizado aplicado em cadastros, autenticação, leitura e gravação de dados para sistemas reais.",
  },
];

const strengths = [
  "Já colocou projetos reais no ar para clientes, lidando com entrega, ajustes e responsabilidade.",
  "Aprende rápido e transforma estudo em produto, com foco em resolver problema de negócio.",
  "Tem experiência prática com loja, painel administrativo, Firebase, deploy e integração de serviço externo.",
  "Busca vaga júnior com postura de evolução, organização e vontade de contribuir desde o primeiro mês.",
];

export const metadata: Metadata = {
  title: "Flávio Henrique | Portfólio Desenvolvedor Júnior",
  description:
    "Portfólio pessoal de Flávio Henrique com projetos reais, estudos no SENAI, sites para clientes e foco em desenvolvimento web.",
};

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Início">
            FH
          </a>
          <div className="navlinks">
            <a href="#projetos">Projetos</a>
            <a href="#senai">SENAI</a>
            <a href="#skills">Skills</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Desenvolvedor em formação | Web | Sistemas</span>
            <h1>Flávio Henrique</h1>
            <p className="lead">
              Desenvolvedor júnior em evolução, com projetos reais publicados,
              experiência prática em sites para clientes e formação contínua pelo
              SENAI. Quero entrar na IXC para crescer com time, código de
              produção e problemas reais.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Ver projetos reais
              </a>
              <a className="button secondary" href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button ghost" href={notionUrl} target="_blank" rel="noreferrer">
                Notion SENAI
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Resumo profissional">
            <div className="avatar">FH</div>
            <div>
              <span className="panel-kicker">Objetivo atual</span>
              <h2>Vaga de Programador Júnior na IXC</h2>
              <p>
                Perfil prático, com base técnica em construção de interfaces,
                sistemas administrativos, dados em nuvem e deploy.
              </p>
            </div>
            <div className="metrics">
              <span>
                <strong>2+</strong>
                projetos reais
              </span>
              <span>
                <strong>SENAI</strong>
                em andamento
              </span>
              <span>
                <strong>Full web</strong>
                front + dados
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section intro">
        <div>
          <span className="eyebrow">Sobre mim</span>
          <h2>Eu construo, publico, aprendo e melhoro.</h2>
        </div>
        <p>
          Meu diferencial é já ter sentido a pressão boa de entregar sistemas
          para uso real: site que precisa abrir no celular, painel que precisa
          organizar produto, cliente e pedido, integração que precisa funcionar
          sem confundir quem usa. Ainda estou no começo da carreira, mas já
          tenho repertório de prática e vontade de evoluir com qualidade.
        </p>
      </section>

      <section className="section" id="projetos">
        <div className="section-heading">
          <span className="eyebrow">Projetos reais</span>
          <h2>Sites e sistemas feitos para clientes</h2>
          <p>
            Trabalhos com objetivo comercial, publicados para empresas reais e
            usados como vitrine, gestão ou apoio de vendas.
          </p>
        </div>

        <div className="projects-grid">
          {clientProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-head">
                <span>{project.type}</span>
                <a href={project.url} target="_blank" rel="noreferrer">
                  Abrir site
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ul>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="senai">
        <div className="section-heading">
          <span className="eyebrow">SENAI</span>
          <h2>O que já aprendi e continuo aprendendo</h2>
          <p>
            Minha formação está sendo conectada com projetos práticos: cada
            conceito estudado vira tela, regra, cadastro, deploy ou melhoria.
          </p>
          <a className="inline-link" href={notionUrl} target="_blank" rel="noreferrer">
            Ver meu Notion de estudos
          </a>
        </div>
        <div className="learning-list">
          {senaiLearning.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <span className="eyebrow">Stack e competências</span>
          <h2>Ferramentas que já uso na prática</h2>
        </div>
        <div className="skills-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section proof">
        <div className="section-heading">
          <span className="eyebrow">Por que eu para júnior?</span>
          <h2>Base técnica, fome de aprender e entrega real</h2>
        </div>
        <div className="proof-grid">
          {strengths.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline">
        <div className="section-heading">
          <span className="eyebrow">Evolução</span>
          <h2>Minha trajetória até aqui</h2>
        </div>
        <div className="timeline-list">
          <article>
            <span>Estudo</span>
            <h3>Fundamentos no SENAI</h3>
            <p>Construindo base de programação, web, documentação e boas práticas.</p>
          </article>
          <article>
            <span>Prática</span>
            <h3>Primeiros projetos de cliente</h3>
            <p>Desenvolvendo páginas e sistemas que precisam funcionar fora do ambiente de estudo.</p>
          </article>
          <article>
            <span>Próximo passo</span>
            <h3>Entrada em time de desenvolvimento</h3>
            <p>Busco uma oportunidade júnior para aprender com revisão, rotina, produto e código de produção.</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contato">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Vamos conversar sobre a vaga?</h2>
          <p>
            Este portfólio reúne minha prática real e minha evolução. Estou
            pronto para aprender com o time, contribuir com dedicação e crescer
            como programador.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={githubUrl} target="_blank" rel="noreferrer">
            Ver GitHub
          </a>
          <a className="button secondary" href={notionUrl} target="_blank" rel="noreferrer">
            Ver Notion
          </a>
        </div>
      </section>
    </main>
  );
}
