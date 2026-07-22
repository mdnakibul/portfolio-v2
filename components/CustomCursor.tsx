"use client";

import { useEffect, useRef } from "react";

/**
 * A soft trailing circle that follows the mouse with spring-like damping and
 * grows when hovering interactive elements. Renders nothing on touch devices
 * (the native cursor stays hidden only on fine pointers — see globals.css).
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Skip on coarse/touch pointers.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Damped follow — the "damping: 20"-ish lag from the design.
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    // Delegate hover state so it also covers elements mounted later.
    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      el.closest("a, button, .interactive-el") !== null;

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) cursor.classList.add("hovering");
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) cursor.classList.remove("hovering");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div id="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
