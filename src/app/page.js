"use client";
import React, { useEffect, useRef, useState } from "react";
import { House, CalendarDays, Medal } from "lucide-react";
import DemoPage from "./demo/page.js"; // Adjust path if necessary
import Page2 from "./page2/page.js"
import Page3 from "./page3/page.js"

export default function SparkleBackground() {
  const canvasRef = useRef(null);

  // State for the typing effect
  const [typedText, setTypedText] = useState("");
  const fullText = "SUMMER CAMP 2026";

  // Typing Effect Logic
  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        currentIndex++;
        setTypedText(fullText.slice(0, currentIndex));

        if (currentIndex >= fullText.length) {
          clearInterval(intervalId);
        }
      }, 100);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Canvas Particle Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let stationaryStars = [];

    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random();
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update(width, height) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;

        this.opacity += 0.003 * this.fadeDirection;
        if (this.opacity >= 1 || this.opacity <= 0.1) {
          this.fadeDirection *= -1;
        }
      }

      draw(context) {
        context.fillStyle = `rgba(180, 255, 200, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    class StationaryStar {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random();
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.opacity += 0.005 * this.fadeDirection;
        if (this.opacity >= 1 || this.opacity <= 0.1) {
          this.fadeDirection *= -1;
        }
      }

      draw(context) {
        context.fillStyle = `rgba(255, 165, 0, ${this.opacity})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const drawGrid = (context, width, height) => {
      const gridSize = 100;
      const navbarHeight = 80;
      context.strokeStyle = "rgba(255, 255, 255, 0.04)";
      context.lineWidth = 2;

      context.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
      }
      for (let y = navbarHeight; y <= height; y += gridSize) {
        context.moveTo(0, y);
        context.lineTo(width, y);
      }
      context.stroke();
    };

    const init = () => {
      canvas.width = window.innerWidth;
      // Keep canvas constrained to viewport height for the hero background
      canvas.height = window.innerHeight; 

      particles = Array.from({ length: 200 }, () => new Particle(canvas.width, canvas.height));
      stationaryStars = Array.from({ length: 40 }, () => new StationaryStar(Math.random() * canvas.width, Math.random() * canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid(ctx, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      stationaryStars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Removed `overflow-hidden` so the page can scroll naturally
    <div className="relative min-h-screen w-full bg-[#050505]">
      {/* 1. Navbar */}
      <div className="p-4 flex items-center relative z-50">
        <img
          src="./logo.png"
          alt="Camp Logo"
          className="h-10 md:h-12 w-auto object-contain drop-shadow-md"
        />
        <h1 className="text-3xl font-bold text-white ml-4">CSI</h1>
      </div>
      
      <nav
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[50%] h-[80px] z-[100] 
        bg-[#050505]/80 backdrop-blur-md rounded-b-[60px] flex items-center justify-center
        border-b-8 border-l-2 border-r-2 
        border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box]
        bg-[linear-gradient(#050505,#050505),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.3),rgba(0,0,0,0.5))]
        shadow-[0_10px_30px_rgba(46,204,113,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]"
      >
        <div className="flex items-center justify-center gap-[40px] md:gap-[80px] text-xl md:text-2xl">
          <button className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center">
            <House size={24} />
            <span className="hidden md:block">Home</span>
          </button>

          <button className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center">
            <CalendarDays size={24} />
            <span className="hidden md:block">Weeks</span>
          </button>

          <button className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center">
            <Medal size={24} />
            <span className="hidden md:block">Leaderboard</span>
          </button>
        </div>
      </nav>

      {/* 2. Hero Background Layer (Aura + Canvas) - Kept fixed to viewport */}
      <div className="fixed inset-0 pointer-events-none z-0 h-screen overflow-hidden">
        <div
          className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(46, 204, 113, 0.12) 0%, transparent 70%)",
          }}
        />
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      {/* 3. Main Hero Content Layer */}
      <main className="relative z-10 pt-[80px] w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 min-h-[calc(100vh-80px)]">
        {/* Left Column: Text */}
        <div className="w-full md:w-[55%] h-auto flex flex-col justify-center py-12 md:py-0">
          <p className="text-gray-400 tracking-[0.3em] uppercase text-sm md:text-base mb-4 ml-1">
            Club of
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            SUSTAINABILITY
          </h1>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_20px_rgba(76,217,100,0.3)]">
            & INNOVATION
          </h1>

          <div className="flex items-center gap-6 mt-12 w-full max-w-md">
            <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent to-gray-600"></div>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-300 uppercase">
              Presents
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          {/* Typing Effect Container */}
          <h3 className="text-4xl md:text-6xl font-black text-white mt-8 italic drop-shadow-xl flex items-center min-h-[3rem] md:min-h-[4rem]">
            {typedText}
            <span className="inline-block w-[6px] md:w-[10px] h-[35px] md:h-[50px] bg-green-400 ml-2 animate-pulse rounded-sm"></span>
          </h3>

          <button
            className="
              mt-12 w-fit px-8 py-4 text-white font-bold text-xl rounded-full transition-all duration-300
              border-b-4 border-l-2 border-r-2 border-transparent 
              [background-clip:padding-box,border-box] [background-origin:padding-box,border-box]
              bg-[linear-gradient(#22c55e,#22c55e),linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.1),rgba(0,0,0,0.4))]
              shadow-[0_10px_20px_rgba(46,204,113,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)]
              hover:scale-105 hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] active:scale-95
            "
          >
            Start Adventure 🚀
          </button>
        </div>

        {/* Right Column: Vector Image */}
        <div className="w-full md:w-[45%] flex items-center justify-center relative py-12 md:py-0">
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-green-500/20 blur-[100px] rounded-full z-0"></div>
          <img
            src="./summer.png"
            alt="Summer Camp Vector"
            className="w-full max-w-[400px] md:max-w-[500px] object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:translate-y-[-10px] transition-transform duration-500"
          />
        </div>

        
      </main>

      <Page2/>

      <Page3/>

      
    </div>
  );
}