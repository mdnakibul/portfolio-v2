"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

// Public by design — Web3Forms access keys are meant to live in the frontend.
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (see .env.local).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const FIELD_INPUT =
  "peer w-full bg-surface-dim border border-white/10 rounded-lg px-4 pt-6 pb-2 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-all duration-300 placeholder-transparent interactive-el";

const FIELD_LABEL =
  "absolute left-4 top-4 text-on-surface-variant font-label-bold text-label-bold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-primary peer-valid:top-2 peer-valid:text-[11px] peer-valid:text-on-surface-variant cursor-text";

function Field({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div className="relative z-10">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          required
          placeholder={label}
          className={`${FIELD_INPUT} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          placeholder={label}
          className={FIELD_INPUT}
        />
      )}
      <label htmlFor={id} className={FIELD_LABEL}>
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget; // capture before await (event is pooled)
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    // Nicer inbox subject line.
    formData.set(
      "subject",
      `Portfolio contact: ${formData.get("subject") || "New message"}`
    );

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const buttonClass =
    status === "sent"
      ? "bg-surface-container text-tertiary border border-tertiary/30"
      : status === "error"
        ? "bg-surface-container text-error border border-error/30"
        : "bg-gradient-to-r from-primary to-inverse-primary text-on-primary";

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden group"
    >
      {/* Decorative gradient corner */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(221,183,255,0.3),transparent_70%)] group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Field id="name" label="Full Name" />
        <Field id="email" label="Email Address" type="email" />
      </div>
      <div className="mb-6">
        <Field id="subject" label="Subject" />
      </div>
      <div className="mb-8">
        <Field id="message" label="Your Message" textarea />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`squishy-btn w-full relative z-10 font-label-bold text-label-bold py-4 px-8 rounded-lg overflow-hidden flex items-center justify-center gap-2 interactive-el disabled:opacity-80 ${buttonClass}`}
      >
        {status === "idle" && (
          <>
            <span>Send Message</span>
            <span className="material-symbols-outlined text-lg">send</span>
          </>
        )}
        {status === "sending" && (
          <>
            <span className="material-symbols-outlined animate-spin">sync</span>
            <span>Sending...</span>
          </>
        )}
        {status === "sent" && (
          <>
            <span className="material-symbols-outlined">check_circle</span>
            <span>Sent! I&apos;ll be in touch.</span>
          </>
        )}
        {status === "error" && (
          <>
            <span className="material-symbols-outlined">error</span>
            <span>Something went wrong — try again</span>
          </>
        )}
      </button>
    </form>
  );
}
