"use client";

import { useEffect, useRef } from "react";

const VERT = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAG = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 mouse = u_mouse / u_resolution;

  // Moving color blobs
  float d1 = distance(uv, vec2(0.3 + 0.2 * sin(u_time * 0.5), 0.4 + 0.2 * cos(u_time * 0.3)));
  float d2 = distance(uv, vec2(0.7 + 0.1 * cos(u_time * 0.4), 0.6 + 0.2 * sin(u_time * 0.6)));
  float d3 = distance(uv, mouse);

  vec3 color1 = vec3(0.66, 0.33, 0.97); // Purple
  vec3 color2 = vec3(0.2, 0.6, 1.0);    // Blue
  vec3 color3 = vec3(0.0, 0.9, 0.7);    // Teal / Spring Green

  float blob1 = smoothstep(0.6, 0.0, d1);
  float blob2 = smoothstep(0.5, 0.0, d2);
  float blob3 = smoothstep(0.3, 0.0, d3) * 0.5; // Mouse influence

  vec3 finalColor = mix(vec3(0.04, 0.07, 0.15), color1, blob1);
  finalColor = mix(finalColor, color2, blob2);
  finalColor = mix(finalColor, color3, blob3);

  gl_FragColor = vec4(finalColor, 1.0);
}`;

export default function ShaderBackground({
  className,
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(syncSize)
        : null;
    ro?.observe(canvas);
    syncSize();

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const render = (t: number) => {
      if (!ro) syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    render(0);

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className={className} style={{ display: "block" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
