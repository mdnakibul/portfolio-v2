"use client";

import { useRef } from "react";

type TiltCardProps = {
  className?: string;
  /** Max tilt in degrees (default 5). */
  max?: number;
  children: React.ReactNode;
};

/**
 * Wraps content in a container that tilts toward the cursor in 3D and lifts
 * slightly on hover, settling back on leave.
 */
export default function TiltCard({
  className,
  max = 5,
  children,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -max;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * max;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
