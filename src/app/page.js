"use client";
import React, { useEffect, useRef } from "react";

export default function SparkleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Particle Logic
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDirection: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.2;
        this.speedX = Math.random() * 0.1 - 0.05;
        this.speedY = Math.random() * 0.1 - 0.05;
        this.opacity = Math.random();
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

        this.opacity += 0.003 * this.fadeDirection;
        if (this.opacity >= 1 || this.opacity <= 0.1) this.fadeDirection *= -1;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(180, 25To implement this in Next.js, we’ll create a client-side5, 200, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 80 }, () => new Particle(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    init();
    animate();

    // Cleanup to prevent memory leaks on route change
    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg component using `useRef` and `useEffect`. This ensures the animation only runs in the browser and cleans up properly when the page changes.

This implementation includes-[#050505]">
      {/* The Glow Aura (Tailwind) */}
      <div 
        className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-[120px]"
        style the **sparkles**, the **soft green glow**, and the **subtle grid lines** seen in `image_117db4.jpg`.={{ background: "radial-gradient(circle, rgba(46, 204, 113, 0.12) 0

### 1. The Sparkle Component
Create a new file at `components/SparkleBackground.tsx`. I've optimized this to handle window%, transparent 70%)" }}
      />
      
      {/* The Sparkle Canvas */}
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}