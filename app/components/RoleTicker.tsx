"use client";

import { useEffect, useState } from "react";

const roles = [
  "sites que vendem",
  "painéis administrativos",
  "agendas online",
  "e-commerces",
  "sistemas com Firebase",
  "soluções com IA",
];

// Digita e apaga as frases do hero, como um terminal.
export default function RoleTicker() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const full = roles[index];
    const done = !deleting && text === full;
    const empty = deleting && text === "";
    const delay = done ? 1800 : deleting ? 35 : 70;

    const timer = window.setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      } else setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className="ticker" aria-live="off">
      {text}
      <i className="caret" aria-hidden="true" />
    </span>
  );
}
