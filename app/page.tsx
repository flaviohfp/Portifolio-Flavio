import type { Metadata } from "next";

const githubUrl = "https://github.com/flaviohfpmeu";
const notionUrl =
  "https://app.notion.com/p/Flavio-Henrique-Notion-SENAI-V2-19739bd1596f8004a450cfc86573cd19";

const clientProjects = [
  {
    name: "Unity Laser",
    type: "Site comercial em producao",
    url: "https://unity-laser.vercel.app",
    preview: "unity",
    summary:
      "Vitrine digital para empresa de brindes personalizados, gravacao a laser e orcamentos corporativos.",
    stack: ["React", "Firebase", "Vercel", "SEO", "Responsivo"],
    impact: [
      "Pagina publicada e acessivel para clientes reais.",
      "Estrutura voltada para apresentacao de servicos, confianca e geracao de orcamento.",
      "Configuracao de seguranca, performance e deploy em producao.",
    ],
  },
  {
    name: "Dispemaq",
    type: "E-commerce e painel administrativo",
    url: "https://dispemaq-fe9ef.web.app/admin.html",
    preview: "dispemaq",
    summary:
      "Loja com area administrativa para gerenciar produtos, clientes, pedidos, banners, avaliacoes e logistica.",
    stack: ["JavaScript", "Firebase", "Firestore", "Storage", "Melhor Envio"],
    impact: [
      "Painel com abas para visao geral, pedidos, clientes, produtos, site e banners.",
      "Fluxo de cadastro de produtos com imagens, preco, logistica, peso e dimensoes.",
      "Integracao de frete com Melhor Envio e estrutura para operacao de vendas.",
    ],
  },
];

const skills = [
  "HTML semantico",
  "CSS responsivo",
  "JavaScript",
  "React",
  "Firebase",
  "Firestore",
  "Autenticacao",
  "Deploy",
  "Git e GitHub",
  "Consumo de APIs",
  "Nocoes de UX",
  "Manutencao de sistemas",
];

const senaiLearning = [
  {
    title: "Logica e base de programacao",
    text: "Construcao de raciocinio, algoritmos, variaveis, condicionais, repeticao e organizacao de solucoes.",
  },
  {
    title: "Desenvolvimento web",
    text: "Criacao de interfaces responsivas com HTML, CSS e JavaScript, sempre pensando em usabilidade.",
  },
  {
    title: "Projetos e documentacao",
    text: "Registro de estudos no Notion, versionamento no GitHub e evolucao continua por entregas praticas.",
  },
  {
    title: "Banco de dados e integracao",
    text: "Aprendizado aplicado em cadastros, autenticacao, leitura e gravacao de dados para sistemas reais.",
  },
];

const strengths = [
  "Ja colocou projetos reais no ar para clientes, lidando com entrega, ajustes e responsabilidade.",
  "Aprende rapido e transforma estudo em produto, com foco em resolver problema de negocio.",
  "Tem experiencia pratica com loja, painel administrativo, Firebase, deploy e integracao de servico externo.",
  "Busca vaga junior com postura de evolucao, organizacao e vontade de contribuir desde o primeiro mes.",
];

export const metadata: Metadata = {
  title: "Flavio Henrique Pradela | Portfolio Desenvolvedor Junior",
  description:
    "Portfolio pessoal de Flavio Henrique Pradela com projetos reais, estudos no SENAI, sites para clientes e foco em desenvolvimento web.",
};

function ProjectPreview({ kind, name }: { kind: string; name: string }) {
  return (
    <div className={`site-preview site-preview--${kind}`} aria-label={`Preview visual do projeto ${name}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <small>{name}</small>
      </div>
      {kind === "unity" ? (
        <div className="preview-screen unity-screen">
          <div className="preview-nav">
            <strong>Unity Laser</strong>
            <em>Orcamento</em>
          </div>
          <div className="preview-hero">
            <span>Brindes personalizados</span>
            <h4>Gravacao a laser para empresas</h4>
            <p>Produtos corporativos, personalizacao e contato comercial.</p>
          </div>
          <div className="preview-products">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : (
        <div className="preview-screen dispemaq-screen">
          <div className="preview-nav">
            <strong>Dispemaq</strong>
            <em>Painel</em>
          </div>
          <div className="dashboard-row">
            <span />
            <span />
            <span />
          </div>
          <div className="dashboard-table">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="dashboard-actions">
            <b />
            <b />
          </div>
        </div>
      )}
      <div className="open-overlay">Clique para abrir o site real</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegacao principal">
          <a className="brand" href="#inicio" aria-label="Inicio">
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
            <span className="eyebrow">Desenvolvedor em formacao | Web | Sistemas</span>
            <h1>Flavio Henrique Pradela</h1>
            <p className="lead">
              Desenvolvedor junior em evolucao, com projetos reais publicados,
              experiencia pratica em sites para clientes e formacao continua pelo
              SENAI. Quero entrar na IXC para crescer com time, codigo de
              producao e problemas reais.
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
            <div className="photo-frame">
              <img src="/flavio-henrique.jpg" alt="Foto de Flavio Henrique Pradela" />
            </div>
            <div>
              <span className="panel-kicker">Objetivo atual</span>
              <h2>Programador Junior na IXC</h2>
              <p>
                Sou Flavio Henrique Pradela, perfil pratico, com base tecnica em
                interfaces, sistemas administrativos, dados em nuvem e deploy.
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
          Meu diferencial e ja ter sentido a pressao boa de entregar sistemas
          para uso real: site que precisa abrir no celular, painel que precisa
          organizar produto, cliente e pedido, integracao que precisa funcionar
          sem confundir quem usa. Ainda estou no comeco da carreira, mas ja
          tenho repertorio de pratica e vontade de evoluir com qualidade.
        </p>
      </section>

      <section className="section" id="projetos">
        <div className="section-heading">
          <span className="eyebrow">Projetos reais</span>
          <h2>Sites e sistemas feitos para clientes</h2>
          <p>
            Trabalhos com objetivo comercial, publicados para empresas reais e
            usados como vitrine, gestao ou apoio de vendas. Clique em qualquer
            card para abrir o projeto funcionando.
          </p>
        </div>

        <div className="projects-grid">
          {clientProjects.map((project) => (
            <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
              <ProjectPreview kind={project.preview} name={project.name} />
              <div className="project-head">
                <span>{project.type}</span>
                <strong>Abrir site</strong>
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
            </a>
          ))}
        </div>
      </section>

      <section className="section split" id="senai">
        <div className="section-heading">
          <span className="eyebrow">SENAI</span>
          <h2>O que ja aprendi e continuo aprendendo</h2>
          <p>
            Minha formacao esta sendo conectada com projetos praticos: cada
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
          <span className="eyebrow">Stack e competencias</span>
          <h2>Ferramentas que ja uso na pratica</h2>
        </div>
        <div className="skills-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section proof">
        <div className="section-heading">
          <span className="eyebrow">Por que eu para junior?</span>
          <h2>Base tecnica, vontade de aprender e entrega real</h2>
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
          <span className="eyebrow">Evolucao</span>
          <h2>Minha trajetoria ate aqui</h2>
        </div>
        <div className="timeline-list">
          <article>
            <span>Estudo</span>
            <h3>Fundamentos no SENAI</h3>
            <p>Construindo base de programacao, web, documentacao e boas praticas.</p>
          </article>
          <article>
            <span>Pratica</span>
            <h3>Primeiros projetos de cliente</h3>
            <p>Desenvolvendo paginas e sistemas que precisam funcionar fora do ambiente de estudo.</p>
          </article>
          <article>
            <span>Proximo passo</span>
            <h3>Entrada em time de desenvolvimento</h3>
            <p>Busco uma oportunidade junior para aprender com revisao, rotina, produto e codigo de producao.</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contato">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Vamos conversar sobre a vaga?</h2>
          <p>
            Este portfolio reune minha pratica real e minha evolucao. Estou
            pronto para aprender com o time, contribuir com dedicacao e crescer
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
