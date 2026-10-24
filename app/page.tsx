import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Nav from "./components/Nav";
import RoleTicker from "./components/RoleTicker";
import SiteEffects from "./components/SiteEffects";
import {
  archive,
  emailAddress,
  githubUrl,
  labProjects,
  linkedinUrl,
  liveProjects,
  notionUrl,
  skills,
  whatsappNumber,
  workflow,
} from "./data";

const pad = (n: number) => String(n).padStart(2, "0");

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SiteEffects />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-spot" aria-hidden="true" />
      <Nav />

      <main>
        {/* ───────── HERO ───────── */}
        <section className="hero" id="inicio">
          <div className="wrap hero__grid">
            <div className="hero__copy">
              <p className="status-pill">
                <span className="pulse-dot" /> Disponível para novos projetos
              </p>
              <h1>
                <span className="hero__hello">Olá, eu sou</span>
                <span className="hero__name">Flávio Henrique</span>
              </h1>
              <p className="hero__role">
                <span className="mono">&gt; construo</span> <RoleTicker />
              </p>
              <p className="hero__lead">
                Desenvolvedor web e estudante de Desenvolvimento de Sistemas no SENAI. Cuido do processo
                inteiro — da conversa com o cliente até o site no ar — e hoje tenho{" "}
                <strong>{liveProjects.length} projetos em produção</strong> sendo usados por empresas e
                profissionais de verdade.
              </p>
              <div className="hero__actions">
                <a className="btn primary" href="#projetos" data-track="hero_projetos">
                  Ver projetos <Arrow />
                </a>
                <a className="btn ghost" href="#contato" data-track="hero_contato">
                  Fale comigo
                </a>
                <a className="icon-link" href={githubUrl} target="_blank" rel="noreferrer" data-track="hero_github" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="portrait">
                <div className="portrait__ring" aria-hidden="true" />
                <div className="portrait__frame">
                  <Image
                    src="/flavio-henrique.webp"
                    alt="Foto de Flávio Henrique Furlanetto Pradela"
                    width={854}
                    height={1280}
                    priority
                  />
                  <span className="portrait__scan" aria-hidden="true" />
                  <i className="corner tl" />
                  <i className="corner tr" />
                  <i className="corner bl" />
                  <i className="corner br" />
                </div>
                <div className="hud hud--a mono">
                  <span>ID</span> FHP·DEV
                </div>
                <div className="hud hud--b mono">
                  <span className="pulse-dot" /> {liveProjects.length} sites online
                </div>
                <div className="hud hud--c mono">
                  <span>STACK</span> React · Firebase
                </div>
              </div>
            </div>
          </div>

          <div className="wrap">
            <dl className="stats" data-reveal>
              <div>
                <dt>Sites em produção</dt>
                <dd>{pad(liveProjects.length)}</dd>
              </div>
              <div>
                <dt>Em desenvolvimento</dt>
                <dd>{pad(labProjects.length)}</dd>
              </div>
              <div>
                <dt>Repositórios</dt>
                <dd>20+</dd>
              </div>
              <div>
                <dt>Técnico SENAI</dt>
                <dd>2026</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ───────── MARQUEE ───────── */}
        <div className="marquee" aria-label="Tecnologias">
          <div className="marquee__track">
            {[...skills, ...skills].map((s, i) => (
              <span key={`${s}-${i}`} aria-hidden={i >= skills.length}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ───────── PROJETOS EM PRODUÇÃO ───────── */}
        <section className="section" id="projetos">
          <div className="wrap">
            <header className="section-head" data-reveal>
              <p className="kicker mono">
                <span>01</span> Em produção
              </p>
              <h2>
                Sites reais, <em>clientes reais.</em>
              </h2>
              <p>
                Todos os projetos abaixo estão no ar e são usados no dia a dia por quem me contratou. Clique para
                abrir o site de verdade.
              </p>
            </header>

            <div className="projects">
              {liveProjects.map((p, i) => (
                <article
                  className={`project ${i % 2 ? "project--flip" : ""}`}
                  key={p.id}
                  style={{ "--accent": p.accent } as React.CSSProperties}
                  data-reveal
                >
                  <a
                    className="project__shot"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    data-track={`projeto_${p.id}`}
                    aria-label={`Abrir o site ${p.name}`}
                  >
                    <div className="browser">
                      <div className="browser__bar">
                        <i />
                        <i />
                        <i />
                        <span className="mono">{p.domain}</span>
                      </div>
                      <Image src={p.image} alt={`Página inicial do site ${p.name}`} width={1440} height={900} />
                    </div>
                    <span className="project__open mono">
                      Abrir site <Arrow />
                    </span>
                  </a>

                  <div className="project__info">
                    <div className="project__meta mono">
                      <span className="project__index">
                        {pad(i + 1)}/{pad(liveProjects.length)}
                      </span>
                      <span className="badge badge--live">
                        <span className="pulse-dot" /> Online
                      </span>
                    </div>
                    <h3>{p.name}</h3>
                    <p className="project__client">{p.client}</p>
                    <p className="project__segment mono">{p.segment}</p>
                    <p className="project__summary">{p.summary}</p>
                    <ul className="project__features">
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <ul className="tags" aria-label="Tecnologias">
                      {p.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <a className="project__link" href={p.url} target="_blank" rel="noreferrer" data-track={`projeto_link_${p.id}`}>
                      Visitar {p.domain} <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── LAB ───────── */}
        <section className="section section--alt" id="lab">
          <div className="wrap">
            <header className="section-head" data-reveal>
              <p className="kicker mono">
                <span>02</span> Em construção
              </p>
              <h2>
                No laboratório <em>agora.</em>
              </h2>
              <p>Projetos que estou desenvolvendo neste momento — de IoT com ESP32 a protótipos com IA.</p>
            </header>

            <div className="lab">
              {labProjects.map((p) => (
                <article className="lab-card" key={p.name} data-reveal>
                  <div className="lab-card__top mono">
                    <span className="badge badge--build">
                      <span className="pulse-dot" /> Building
                    </span>
                    <span>{p.tag}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <div className="progress" role="img" aria-label={`Progresso estimado: ${p.progress}%`}>
                    <span style={{ width: `${p.progress}%` }} />
                  </div>
                  <p className="progress__label mono">
                    <span>progresso</span> {p.progress}%
                  </p>
                  <ul className="tags">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="terminal" data-reveal>
              <div className="terminal__bar">
                <i />
                <i />
                <i />
                <span className="mono">~/flavio/estudos</span>
              </div>
              <div className="terminal__body mono">
                <p className="terminal__cmd">
                  <span className="prompt">flavio@senai</span>:<span className="path">~/estudos</span>$ ls --projetos-academicos
                </p>
                <ul>
                  {archive.map((a) => (
                    <li key={a.name}>
                      <span className="t-name">{a.name}/</span>
                      <span className="t-desc">{a.desc}</span>
                      <span className="t-stack">{a.stack}</span>
                    </li>
                  ))}
                </ul>
                <p className="terminal__cmd">
                  <span className="prompt">flavio@senai</span>:<span className="path">~/estudos</span>$ open{" "}
                  <a href={githubUrl} target="_blank" rel="noreferrer" data-track="terminal_github">
                    github.com/flaviohfp
                  </a>
                  <i className="caret" aria-hidden="true" />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── PROCESSO ───────── */}
        <section className="section" id="processo">
          <div className="wrap">
            <header className="section-head" data-reveal>
              <p className="kicker mono">
                <span>03</span> Processo
              </p>
              <h2>
                Do primeiro papo <em>ao site no ar.</em>
              </h2>
              <p>
                Não fico só no código: eu converso, organizo ideias, desenvolvo, testo, publico e continuo
                acompanhando depois da entrega.
              </p>
            </header>

            <ol className="pipeline">
              {workflow.map((w) => (
                <li key={w.step} data-reveal>
                  <span className="pipeline__step mono">{w.step}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── SOBRE ───────── */}
        <section className="section section--alt" id="sobre">
          <div className="wrap about">
            <div className="about__text" data-reveal>
              <p className="kicker mono">
                <span>04</span> Sobre mim
              </p>
              <h2>
                Curiosidade que <em>virou profissão.</em>
              </h2>
              <p>
                Desde pequeno eu queria entender como sites e softwares funcionavam. Quando tive meu primeiro
                contato real com programação, percebi que era ali que eu conseguia aprender, testar, errar,
                melhorar e ver ideias ganhando forma.
              </p>
              <p>
                Isso me levou ao curso técnico de Desenvolvimento de Sistemas no SENAI, que concluo em 2026. Mas
                fui além das aulas: comecei a atender clientes, entender o negócio deles e entregar sites,
                lojas e painéis que hoje fazem parte da rotina dessas empresas.
              </p>
              <p>
                Uso IA (ChatGPT, Claude e Codex) como parceira para estudar, comparar soluções e revisar código
                — mas a escuta, as decisões e o cuidado com o cliente continuam sendo meus.
              </p>
              <div className="about__links">
                <a className="btn ghost" href={githubUrl} target="_blank" rel="noreferrer" data-track="sobre_github">
                  GitHub <Arrow />
                </a>
                <a className="btn ghost" href={notionUrl} target="_blank" rel="noreferrer" data-track="sobre_notion">
                  Notion de estudos <Arrow />
                </a>
              </div>
            </div>

            <ol className="timeline" data-reveal>
              <li>
                <span className="mono">Base</span>
                <h3>Curiosidade por tecnologia</h3>
                <p>Computadores, sites e softwares sempre me chamaram atenção.</p>
              </li>
              <li>
                <span className="mono">SENAI</span>
                <h3>Desenvolvimento de Sistemas</h3>
                <p>Lógica, C, Java, banco de dados, web, APIs e projetos integradores.</p>
              </li>
              <li>
                <span className="mono">Clientes</span>
                <h3>Primeiros projetos reais</h3>
                <p>Sites e sistemas publicados para empresas e profissionais da região.</p>
              </li>
              <li className="is-now">
                <span className="mono">Agora</span>
                <h3>{liveProjects.length} sites em produção</h3>
                <p>E-commerce, agendamentos, catálogos e painéis com Firebase — e mais vindo.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ───────── CONTATO ───────── */}
        <section className="section contact" id="contato">
          <div className="wrap contact__grid">
            <div className="contact__intro" data-reveal>
              <p className="kicker mono">
                <span>05</span> Contato
              </p>
              <h2>
                Tem um projeto em mente? <em>Bora tirar do papel.</em>
              </h2>
              <p>
                Site para o seu negócio, loja virtual, agenda online ou uma oportunidade de trabalho — me manda
                uma mensagem e eu respondo rapidinho.
              </p>
              <ul className="contact__list mono">
                {emailAddress && (
                  <li>
                    <span>e-mail</span>
                    <a href={`mailto:${emailAddress}`} data-track="contato_email">
                      {emailAddress}
                    </a>
                  </li>
                )}
                {whatsappNumber && (
                  <li>
                    <span>whatsapp</span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Flávio! Vi seu portfólio.")}`}
                      target="_blank"
                      rel="noreferrer"
                      data-track="contato_whatsapp"
                    >
                      Chamar no WhatsApp
                    </a>
                  </li>
                )}
                {linkedinUrl && (
                  <li>
                    <span>linkedin</span>
                    <a href={linkedinUrl} target="_blank" rel="noreferrer" data-track="contato_linkedin">
                      /in/{linkedinUrl.replace(/\/$/, "").split("/").pop()}
                    </a>
                  </li>
                )}
                <li>
                  <span>github</span>
                  <a href={githubUrl} target="_blank" rel="noreferrer" data-track="contato_github">
                    /flaviohfp
                  </a>
                </li>
                <li>
                  <span>estudos</span>
                  <a href={notionUrl} target="_blank" rel="noreferrer" data-track="contato_notion">
                    Notion SENAI
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact__card" data-reveal>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner mono">
          <span>© {new Date().getFullYear()} Flávio Henrique Furlanetto Pradela</span>
          <span>Feito com Next.js + Firebase</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </>
  );
}
