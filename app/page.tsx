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
      "Um site que desenvolvi para apresentar os servicos da Unity Laser, com foco em brindes personalizados, gravacao a laser e pedidos de orcamento.",
    stack: ["React", "Firebase", "Vercel", "SEO", "Responsivo"],
    impact: [
      "Projeto publicado e acessivel para clientes reais.",
      "Organizacao das informacoes para mostrar o que a empresa faz e facilitar o contato.",
      "Experiencia pratica com interface responsiva, deploy e configuracao do site em producao.",
    ],
  },
  {
    name: "Dispemaq",
    type: "E-commerce e painel administrativo",
    url: "https://dispemaq-fe9ef.web.app/admin.html",
    preview: "dispemaq",
    summary:
      "Projeto de e-commerce e painel administrativo no qual participei desenvolvendo recursos para produtos, clientes, pedidos, banners e logistica.",
    stack: ["JavaScript", "Firebase", "Firestore", "Storage", "Melhor Envio"],
    impact: [
      "Painel administrativo com areas separadas para facilitar a gestao do site.",
      "Cadastro e organizacao de produtos com dados, imagens, preco e informacoes de envio.",
      "Aprendizado importante sobre sistemas mais completos, dados em nuvem e rotinas de loja.",
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
  "ChatGPT",
  "Codex",
  "Claude",
  "Atendimento ao cliente",
  "Levantamento de requisitos",
  "Melhoria de processos",
];

const senaiLearning = [
  {
    title: "Logica e base de programacao",
    text: "Foi onde comecei a organizar melhor meu raciocinio para resolver problemas com codigo, passo por passo.",
  },
  {
    title: "Desenvolvimento web",
    text: "Aprendi a criar paginas, pensar em responsividade e transformar uma ideia em uma tela que outras pessoas conseguem usar.",
  },
  {
    title: "Projetos e documentacao",
    text: "Uso GitHub e Notion para registrar minha evolucao, guardar estudos e acompanhar o que vou construindo.",
  },
  {
    title: "Banco de dados e integracao",
    text: "Nos projetos, comecei a trabalhar com cadastros, autenticacao, leitura e gravacao de informacoes em sistemas reais.",
  },
];

const processHighlights = [
  "Converso com clientes para entender o que eles precisam antes de pensar em tela ou codigo.",
  "Transformo ideias soltas em tarefas, telas, melhorias e solucoes mais claras para o negocio.",
  "Uso IA como apoio no estudo, na criacao, na revisao de codigo e na organizacao de caminhos possiveis.",
  "Mesmo em nivel iniciante, ja participo do processo inteiro: conversa, ideia, desenvolvimento, teste, ajuste e publicacao.",
];

export const metadata: Metadata = {
  title: "Flavio Henrique Furlanetto Pradela | Portfolio",
  description:
    "Portfolio de desenvolvedor de Flavio Henrique Furlanetto Pradela com estudos, projetos, IA, atendimento a clientes e resolucao de problemas.",
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
            <a href="#sobre">Sobre</a>
            <a href="#processo">Processo</a>
            <a href="#projetos">Projetos</a>
            <a href="#senai">SENAI</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Desenvolvimento web | IA | Solucoes para clientes</span>
            <h1>Flavio Henrique Furlanetto Pradela</h1>
            <p className="lead">
              Sou estudante de Desenvolvimento de Sistemas no SENAI e venho
              construindo minha caminhada na programacao com projetos reais,
              contato com clientes e muita vontade de resolver problemas. Hoje
              nao fico apenas no codigo: eu tambem converso, organizo ideias,
              penso em melhorias, testo caminhos e uso IA como apoio para
              aprender e entregar melhor.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#sobre">
                Me conhecer
              </a>
              <a className="button primary" href="#projetos">
                Ver projetos
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
              <img src="/flavio-henrique.jpg" alt="Foto de Flavio Henrique Furlanetto Pradela" />
            </div>
            <div>
              <span className="panel-kicker">Quem sou eu</span>
              <h2>Desenvolvedor em formacao com visao de projeto completo</h2>
              <p>
                Este portfolio reune o que venho aprendendo e construindo:
                sites, sistemas, atendimento a clientes, organizacao de ideias e
                solucoes que ajudam empresas no dia a dia.
              </p>
            </div>
            <div className="metrics">
              <span>
                <strong>2009</strong>
                nascimento
              </span>
              <span>
                <strong>2+</strong>
                projetos reais
              </span>
              <span>
                <strong>SENAI</strong>
                termino em 2026
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section intro" id="sobre">
        <div>
          <span className="eyebrow">Sobre mim</span>
          <h2>Meu interesse por tecnologia virou pratica.</h2>
        </div>
        <p>
          Desde pequeno sempre tive curiosidade por computadores, sites,
          softwares e por tudo que envolve tecnologia. Quando tive meu primeiro
          contato de verdade com programacao, percebi que era uma area em que eu
          conseguia aprender, testar, errar, melhorar e ver as ideias tomando
          forma. Isso me motivou a entrar no curso tecnico de Desenvolvimento de
          Sistemas do SENAI, que termino este ano. Com o tempo, comecei a ir
          alem das aulas: passei a participar de projetos reais, conversar com
          clientes e entender que desenvolver tambem e saber ouvir, organizar e
          transformar necessidades em solucoes.
        </p>
      </section>

      <section className="section proof" id="processo">
        <div className="section-heading">
          <span className="eyebrow">Como eu trabalho hoje</span>
          <h2>Estou aprendendo a cuidar do processo inteiro</h2>
          <p>
            Ainda estou no inicio, mas nos projetos que aparecem eu acabo
            assumindo varias partes: conversar com o cliente, entender a dor,
            propor melhoria, desenvolver, testar, ajustar e colocar no ar.
            Uso ferramentas de IA como ChatGPT, Codex e Claude para acelerar
            estudo, explorar solucoes e revisar ideias, mas a parte humana do
            processo continua sendo minha.
          </p>
        </div>
        <div className="proof-grid">
          {processHighlights.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="section-heading">
          <span className="eyebrow">Projetos</span>
          <h2>Alguns trabalhos que ja desenvolvi ou participei</h2>
          <p>
            Aqui estao alguns projetos que fazem parte da minha caminhada. Eles
            representam pratica real: conversar com cliente, entender o que a
            empresa precisa, pensar em melhorias, desenvolver telas, organizar
            informacoes e publicar algo que outras pessoas realmente usam.
            Clique nos cards para abrir os projetos.
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
          <h2>Meu curso tecnico em Desenvolvimento de Sistemas</h2>
          <p>
            No SENAI, comecei a entender a programacao com mais base e direcao.
            O curso me ajudou a sair da curiosidade e entrar em uma rotina de
            estudo, projetos, logica, desenvolvimento web e sistemas. A previsao
            e terminar o curso ainda este ano.
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
          <span className="eyebrow">Tecnologia</span>
          <h2>Ferramentas e assuntos que venho estudando</h2>
          <p>
            Ainda estou evoluindo, mas essas sao algumas tecnologias e praticas
            que ja aparecem nos meus estudos e projetos. Tambem uso IA no meu
            fluxo de trabalho, principalmente para estudar, comparar solucoes,
            revisar codigo e transformar ideias em tarefas mais claras.
          </p>
        </div>
        <div className="skills-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section timeline">
        <div className="section-heading">
          <span className="eyebrow">Evolucao</span>
          <h2>Um resumo da minha caminhada</h2>
        </div>
        <div className="timeline-list">
          <article>
            <span>Base</span>
            <h3>Curiosidade por computadores</h3>
            <p>Sempre gostei de entender como sites e softwares funcionam, e essa curiosidade acabou me aproximando da programacao.</p>
          </article>
          <article>
            <span>Formacao</span>
            <h3>SENAI e desenvolvimento de sistemas</h3>
            <p>No curso tecnico, comecei a construir uma base mais organizada em logica, web, banco de dados e projetos.</p>
          </article>
          <article>
            <span>Pratica</span>
            <h3>Projetos, clientes e IA</h3>
            <p>Hoje aplico o que aprendo em projetos reais, conversando com clientes e usando IA como ferramenta de apoio no processo.</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contato">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Este e meu espaco para mostrar o que venho construindo.</h2>
          <p>
            Meu objetivo com este portfolio e reunir minha evolucao como
            desenvolvedor: os estudos, os projetos, as conversas com clientes,
            as decisoes de produto e as solucoes que vou criando. Conforme eu
            aprender mais e participar de novos projetos, este site tambem vai
            evoluir junto comigo.
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
