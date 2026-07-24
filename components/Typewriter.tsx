"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_PHRASES = [
  "I build things.",
  "I break things (then fix them).",
  "I ship MERN apps.",
];

const TYPING_DELAY = 100;
const ERASING_DELAY = 50;
const NEW_TEXT_DELAY = 2000;

export default function Typewriter({
  phrases = DEFAULT_PHRASES,
}: {
  phrases?: string[];
}) {
  const [text, setText] = useState("");
  const state = useRef({ phrase: 0, char: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = state.current;
      const current = phrases[s.phrase];

      if (s.deleting) {
        s.char -= 1;
        setText(current.substring(0, s.char));
      } else {
        s.char += 1;
        setText(current.substring(0, s.char));
      }

      let speed = s.deleting ? ERASING_DELAY : TYPING_DELAY;

      if (!s.deleting && s.char === current.length) {
        speed = NEW_TEXT_DELAY;
        s.deleting = true;
      } else if (s.deleting && s.char === 0) {
        s.deleting = false;
        s.phrase = (s.phrase + 1) % phrases.length;
        speed = 500;
      }

      timer = setTimeout(tick, speed);
    };

    // Start after the initial reveal settles.
    timer = setTimeout(tick, 1000);
    return () => clearTimeout(timer);
  }, [phrases]);

  return (
    <span className="typewriter-text inline-block min-w-[200px] text-left">
      {text}
    </span>
  );
}
