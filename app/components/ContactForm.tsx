"use client";

import { useState, type FormEvent } from "react";
import { sendContactMessage } from "@/lib/firebase";

const types = ["Site institucional", "Loja virtual", "Sistema / painel", "Agendamento online", "Outro"];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [type, setType] = useState(types[0]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Campo escondido: robôs costumam preencher, pessoas não.
    if (data.get("website")) return;

    setStatus("sending");
    try {
      await sendContactMessage({
        name: String(data.get("name")).trim(),
        contact: String(data.get("contact")).trim(),
        type,
        message: String(data.get("message")).trim(),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-done" role="status">
        <span className="pulse-dot" />
        <h3>Mensagem recebida.</h3>
        <p>Obrigado pelo contato! Vou responder o mais rápido possível.</p>
        <button className="btn ghost" type="button" onClick={() => setStatus("idle")}>
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <fieldset className="chips">
        <legend>O que você precisa?</legend>
        {types.map((t) => (
          <button
            type="button"
            key={t}
            className={t === type ? "chip active" : "chip"}
            aria-pressed={t === type}
            onClick={() => setType(t)}
          >
            {t}
          </button>
        ))}
      </fieldset>

      <div className="field-row">
        <label className="field">
          <span>Nome</span>
          <input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Seu nome" />
        </label>
        <label className="field">
          <span>E-mail ou WhatsApp</span>
          <input name="contact" required minLength={5} maxLength={120} placeholder="Como te respondo?" />
        </label>
      </div>
      <label className="field">
        <span>Mensagem</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder="Conte um pouco sobre o projeto ou a oportunidade..."
        />
      </label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-foot">
        <button className="btn primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          <span aria-hidden="true">→</span>
        </button>
        {status === "error" && (
          <p className="form-error" role="alert">
            Não consegui enviar agora. Tente de novo em instantes ou me chame pelo GitHub.
          </p>
        )}
      </div>
    </form>
  );
}
