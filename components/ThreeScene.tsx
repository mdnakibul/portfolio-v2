"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Floating, slowly rotating geometric shapes standing in for the MERN stack
 * (MongoDB / Express / React / Node), with subtle mouse parallax.
 */
export default function ThreeScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0), // MongoDB
      new THREE.TorusGeometry(0.6, 0.2, 16, 100), // Express / Node
      new THREE.OctahedronGeometry(0.7, 0), // React
      new THREE.BoxGeometry(1, 1, 1), // Node / general
    ];
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xa855f7, shininess: 100 }), // Purple
      new THREE.MeshPhongMaterial({ color: 0x3b82f6, shininess: 100 }), // Blue
      new THREE.MeshPhongMaterial({ color: 0x10b981, shininess: 100 }), // Green
      new THREE.MeshPhongMaterial({ color: 0xf59e0b, shininess: 100 }), // Orange
    ];

    const items = geometries.map((geo, i) => {
      const mesh = new THREE.Mesh(geo, materials[i]);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        -5
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      group.add(mesh);
      return {
        mesh,
        rotSpeed: 0.01 + Math.random() * 0.01,
        floatOffset: Math.random() * Math.PI * 2,
      };
    });

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;
      items.forEach((item, i) => {
        item.mesh.rotation.x += item.rotSpeed;
        item.mesh.rotation.y += item.rotSpeed;
        item.mesh.position.y += Math.sin(time + item.floatOffset) * 0.005;
        // Subtle mouse parallax
        item.mesh.position.x +=
          (mouseX * (i + 1) * 0.5 - item.mesh.position.x) * 0.05;
        item.mesh.position.y +=
          (-mouseY * (i + 1) * 0.5 - item.mesh.position.y) * 0.05;
      });
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
