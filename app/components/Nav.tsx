"use client";

import { useEffect, useState } from "react";

const links = [
  ["#projetos", "Projetos"],
  ["#institucionais", "Institucionais"],
  ["#processo", "Processo"],
  ["#sobre", "Sobre"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="nav__logo">FH</span>
          <span className="nav__name">
            flavio<span>.dev</span>
          </span>
        </a>
        <nav className="nav__links" aria-label="Navegação principal">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav__cta" href="#contato" onClick={() => setOpen(false)}>
            Vamos conversar
          </a>
        </nav>
        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
