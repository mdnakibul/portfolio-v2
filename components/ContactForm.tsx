"use client";

import { useRef, useState } from "react";

type Status = "idle" | "sending" | "sent";

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
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;

    // Demo only — no backend wired up yet.
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden group"
    >
      {/* Decorative gradient corner */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-2xl bg-[radial-gradient(circle,rgba(221,183,255,0.3),transparent_70%)] group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

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
        disabled={status !== "idle"}
        className={`squishy-btn w-full relative z-10 font-label-bold text-label-bold py-4 px-8 rounded-lg overflow-hidden flex items-center justify-center gap-2 interactive-el ${
          status === "sent"
            ? "bg-surface-container text-tertiary border border-tertiary/30"
            : "bg-gradient-to-r from-primary to-inverse-primary text-on-primary"
        }`}
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
            <span>Sent!</span>
          </>
        )}
      </button>
    </form>
  );
}
