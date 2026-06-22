"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  House,
  CalendarDays,
  Medal,
  Users,
  ArrowDown,
  ExternalLink,
  Bell,
} from "lucide-react";
import DemoPage from "./demo/page.js";
import Page2 from "./page2/page.js";
import Page3 from "./page3/page.js";
import Page5 from "./page5/page.js";
import Page4 from "./page4/page.js";

export default function SparkleBackground() {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "SUMMER CAMP 2026";

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
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

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
      canvas.height = window.innerHeight;
      particles = Array.from(
        { length: 150 },
        () => new Particle(canvas.width, canvas.height),
      );
      stationaryStars = Array.from(
        { length: 40 },
        () =>
          new StationaryStar(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
          ),
      );
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

  const scrollToSection = () => {
    const targetSection = document.getElementById("lets-make-things-cool");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-x-hidden flex flex-col">
      {/* BULLETPROOF CSS INJECTION */}
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-custom-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: custom-marquee 25s linear infinite;
        }
        @keyframes border-glow-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-border-glow-flow {
          background-size: 200% 200%;
          animation: border-glow-flow 3s ease infinite;
        }
      `}</style>

      <div className="fixed top-[90px] left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-4xl p-[2px] rounded-full overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)]">
        {/* Animated Colorful Border Underlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-400 animate-border-glow-flow opacity-80 blur-[1px]"></div>

        {/* Inner Glass Content Container */}
        <div className="relative bg-zinc-950/90 backdrop-blur-xl w-full h-full rounded-full flex items-center px-4 py-2">
          {/* Static Left Icon Block */}
          <div className="flex items-center gap-2 pr-3 border-r border-white/20 shrink-0 z-10 bg-transparent">
            <Bell className="w-4 h-4 text-emerald-400 animate-bounce" />
            <span className="text-[10px] sm:text-xs font-black tracking-widest text-white uppercase drop-shadow-md">
              News
            </span>
          </div>

          {/* Marquee Text Block */}
          <div
            className="flex-1 overflow-hidden whitespace-nowrap ml-3"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <div className="animate-custom-marquee text-[11px] sm:text-xs font-bold tracking-widest text-zinc-300 uppercase">
              📅WEEK 03 IS LIVE! &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
              😎WEEK 02 SUBMISSIONS ARE LIVE ! 
              &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;🚀 EXPLORE RESOURCES OF WEEK03!  &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp; 
              
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Background Grid/Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 h-screen overflow-hidden">
        <div
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] sm:blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(46, 204, 113, 0.12) 0%, transparent 70%)",
          }}
        />
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      {/* Hero Section */}
      <main className="relative z-10 pt-[180px] md:pt-[200px] pb-12 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 min-h-[calc(100vh-100px)] gap-10 md:gap-0 flex-grow">
        <div className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <p className="text-gray-400 tracking-[0.25em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base mb-3 md:mb-4">
            Club of
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            SUSTAINABILITY
          </h1>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_20px_rgba(76,217,100,0.3)]">
            & INNOVATION
          </h1>

          <div className="flex items-center gap-4 mt-6 sm:mt-10 w-full max-w-[280px] sm:max-w-md">
            <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent to-gray-600"></div>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-gray-300 uppercase whitespace-nowrap">
              Presents
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mt-6 sm:mt-8 italic drop-shadow-xl flex items-center min-h-[2.5rem] sm:min-h-[3.5rem] md:min-h-[4rem]">
            {typedText}
            <span className="inline-block w-[3px] sm:w-[5px] md:w-[8px] h-[24px] sm:h-[36px] md:h-[48px] bg-green-400 ml-2 animate-pulse rounded-sm"></span>
          </h3>

          <button
            onClick={scrollToSection}
            className="group flex items-center justify-center gap-3 mt-8 sm:mt-12 w-fit px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-sm sm:text-lg md:text-xl rounded-full transition-all duration-300 border-b-4 border-l-2 border-r-2 border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] bg-[linear-gradient(#22c55e,#22c55e),linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.1),rgba(0,0,0,0.4))] shadow-[0_10px_20px_rgba(46,204,113,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:scale-105 hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] active:scale-95"
          >
            <span>Read info before starting</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-y-1.5" />
          </button>
        </div>

        <div className="w-full md:w-[45%] flex items-center justify-center relative">
          <div className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-green-500/20 blur-[60px] sm:blur-[100px] rounded-full z-0"></div>
          <img
            src="./summer.png"
            alt="Summer Camp Vector"
            className="w-[65%] max-w-[220px] sm:w-[70%] sm:max-w-[320px] md:max-w-[500px] md:w-full object-contain relative z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] md:hover:-translate-y-3 transition-transform duration-500"
          />
        </div>
      </main>

      {/* Additional Pages Layout */}
      <div className="relative z-10">
        <Page2 />
        <Page3 />
        <Page5 />
        <Page4 />
      </div>

      <footer className="relative z-10 w-full mt-auto py-24 px-6 bg-transparent flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white text-center uppercase tracking-[0.15em] leading-snug drop-shadow-2xl">
          MADE WITH LOVE ❤️
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mt-2 block">
            BY CSI WEB TEAM
          </span>
        </h2>
      </footer>
    </div>
  );
}
