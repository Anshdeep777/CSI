"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { File } from "lucide-react";

const students = [
  { rank: 1, name: "1st Position", rollNo: "SAMPLE-01" },
  { rank: 2, name: "2nd Position", rollNo: "SAMPLE-02" },
  { rank: 3, name: "3rd Position", rollNo: "SAMPLE-03" },
];

const podiumColors = {
  1: { 
    metalMain: "from-[#d4af37] via-[#f9e596] to-[#aa7c11]", 
    metalInner: "from-[#2a220b] to-[#120d03]",
    crown: "🥇", 
    glow: "shadow-[0_0_40px_rgba(212,175,55,0.4)]",
    engraveColor: "text-yellow-500",
    borderTop: "border-[#f9e596]",
    borderBottom: "border-[#6b4e07]"
  },
  2: { 
    metalMain: "from-[#c0c0c0] via-[#f0f0f0] to-[#808080]", 
    metalInner: "from-[#1a1a1a] to-[#0a0a0a]",
    crown: "🥈", 
    glow: "shadow-[0_0_30px_rgba(192,192,192,0.3)]",
    engraveColor: "text-gray-300",
    borderTop: "border-[#ffffff]",
    borderBottom: "border-[#404040]"
  },
  3: { 
    metalMain: "from-[#cd7f32] via-[#f4a460] to-[#8b4513]", 
    metalInner: "from-[#241308] to-[#0f0703]",
    crown: "🥉", 
    glow: "shadow-[0_0_30px_rgba(205,127,50,0.3)]",
    engraveColor: "text-orange-400",
    borderTop: "border-[#f4a460]",
    borderBottom: "border-[#4a2408]"
  },
};

const FIREWORK_COLORS = ["#fbbf24", "#c084fc", "#34d399", "#f472b6", "#60a5fa", "#ffffff"];

export default function LeaderboardPage() {
  const [mounted, setMounted] = useState(false);
  
  const containerRef = useRef(null);
  const podiumRefs = useRef([]);
  const tableRef = useRef(null);
  const rowRefs = useRef([]);
  const fabRef = useRef(null);
  
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        podiumRefs.current,
        { y: 80, opacity: 0, scale: 0.9, rotationX: 15 },
        { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" }
      )
      .fromTo(
        tableRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        rowRefs.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        fabRef.current,
        { scale: 0, rotation: -45, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.2"
      );
    }, containerRef);

    const timer = setTimeout(() => {
      triggerFireworks();
    }, 1200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const triggerFireworks = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    createExplosion(window.innerWidth * 0.2, window.innerHeight);
    createExplosion(window.innerWidth * 0.5, window.innerHeight);
    createExplosion(window.innerWidth * 0.8, window.innerHeight);

    if (!animationRef.current) {
      loop();
    }
  };

  const createExplosion = (x, y) => {
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      particlesRef.current.push(new Particle(x, y, color));
    }
  };

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4; 
      
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - 10; 
      this.alpha = 1;
      this.decay = Math.random() * 0.015 + 0.01;
      this.size = Math.random() * 3 + 2;
    }
    update() {
      this.vy += 0.2; 
      this.vx *= 0.98; 
      this.vy *= 0.98; 
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
    }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.restore();
    }
  }

  const loop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((p, index) => {
      p.update();
      p.draw(ctx);
      if (p.alpha <= 0) {
        particlesRef.current.splice(index, 1);
      }
    });

    if (particlesRef.current.length > 0) {
      animationRef.current = requestAnimationFrame(loop);
    } else {
      animationRef.current = null;
    }
  };

  const handleCardHover = (index, isEntering) => {
    if(podiumRefs.current[index]) {
      gsap.to(podiumRefs.current[index], {
        y: isEntering ? -10 : 0,
        rotationX: isEntering ? 5 : 0,
        boxShadow: isEntering 
          ? "0 20px 40px rgba(0,0,0,0.8), inset 0 2px 0 rgba(255,255,255,0.4)" 
          : "0 10px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
        duration: 0.4,
        ease: "power2.out"
      });
    }
  }

  const top3 = [students[1], students[0], students[2]]; 

  return (
    <div ref={containerRef} className="min-h-screen bg-[#06060c] text-white font-sans overflow-x-hidden relative opacity-100 py-10">
      
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[100]" style={{ width: '100%', height: '100%' }} />

      <button 
        ref={fabRef}
        onClick={triggerFireworks}
        className="fixed bottom-6 right-6 z-[110] bg-gradient-to-br from-purple-500 to-indigo-700 text-white rounded-full p-4 shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-colors duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group opacity-0 border border-indigo-400/30"
        title="Burst Crackers!"
      >
        <span className="text-xl md:text-2xl font-bold flex items-center gap-2 group-hover:animate-pulse">
          🎆 <span className="hidden sm:inline">Crackers!!</span>
        </span>
      </button>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {mounted && [...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-200"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4 + 0.1,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-16 pb-0 perspective-[1000px]">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-950/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-1.5 bg-indigo-500/30 blur-md rounded-full" />

        <div className="flex justify-center items-end gap-4 md:gap-8 px-4 pb-0">
          {top3.map((student, index) => {
            const style = podiumColors[student.rank];
            const isFirst = student.rank === 1;
            
            return (
              <div
                key={student.rank}
                ref={(el) => (podiumRefs.current[index] = el)}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
                className={`relative flex flex-col items-center rounded-xl bg-gradient-to-br ${style.metalMain} p-[2px] opacity-0 cursor-default shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}
                style={{
                  width: isFirst ? 190 : 160,
                  marginBottom: isFirst ? 0 : 20,
                  transformStyle: "preserve-3d"
                }}
              >
                <div 
                  className={`w-full h-full rounded-[10px] bg-gradient-to-b ${style.metalInner} flex flex-col items-center relative overflow-hidden`}
                  style={{
                    paddingTop: isFirst ? 28 : 20,
                    paddingBottom: 20,
                    boxShadow: "inset 0px 4px 15px rgba(0,0,0,0.8), inset 0px 1px 1px rgba(255,255,255,0.1)"
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none mix-blend-overlay"></div>

                  <div className="text-center mb-6 relative z-10">
                    <div className="text-3xl mb-1 filter drop-shadow-md">{style.crown}</div>
                    
                    <div 
                      className={`font-black ${isFirst ? "text-3xl" : "text-xl"} ${style.engraveColor} uppercase tracking-widest`}
                      style={{
                        textShadow: "1px 1px 1px rgba(255,255,255,0.1), -1px -1px 2px rgba(0,0,0,0.9)"
                      }}
                    >
                      {student.rank === 1 ? "1st" : student.rank === 2 ? "2nd" : "3rd"}
                    </div>
                  </div>

                  <div className="text-center w-full px-2 relative z-10">
                    <div 
                      className={`font-bold tracking-wider uppercase text-gray-400 ${isFirst ? "text-[13px]" : "text-[11px]"}`}
                      style={{ textShadow: "1px 1px 1px rgba(255,255,255,0.05), -1px -1px 1px rgba(0,0,0,0.8)" }}
                    >
                      {student.name}
                    </div>
                    <div 
                      className="text-[9px] text-gray-600 mt-2 font-mono tracking-[0.2em]"
                      style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.03), -1px -1px 1px rgba(0,0,0,0.8)" }}
                    >
                      {student.rollNo}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="relative z-10 mt-0"
          style={{
            height: 70,
            background: "radial-gradient(ellipse 70% 100% at 50% 100%, #110e1a 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-4 md:mx-10 mb-24 mt-4">
        <div ref={tableRef} className="rounded-2xl border border-white/5 bg-[#111118]/80 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.6)] overflow-hidden opacity-0">
          <div className="flex items-center gap-4 px-6 py-5 border-b border-white/5 bg-white/[0.01]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center text-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]">
              🏆
            </div>
            <File className="w-7 h-7 text-gray-400" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-gray-500 text-[11px] uppercase tracking-widest bg-black/40">
                  <th className="pl-6 pr-4 py-5 text-left font-semibold">Rank</th>
                  <th className="px-4 py-5 text-left font-semibold">Name</th>
                  <th className="px-4 py-5 text-left font-semibold">Roll No</th>
                  
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {students.map((student, index) => {
                  return (
                    <tr
                      key={student.rank}
                      ref={(el) => (rowRefs.current[index] = el)}
                      className="transition-colors opacity-0 hover:bg-white/[0.02]"
                    >
                      <td className="pl-6 pr-4 py-4">
                        <span
                          className={`font-black text-lg ${
                            student.rank === 1
                              ? "text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]"
                              : student.rank === 2
                              ? "text-gray-400 drop-shadow-[0_0_8px_rgba(156,163,175,0.3)]"
                              : student.rank === 3
                              ? "text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]"
                              : "text-gray-600"
                          }`}
                        >
                          #{String(student.rank).padStart(2, "0")}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-semibold text-gray-200 text-sm tracking-wide">{student.name}</span>
                      </td>
                      <td className="px-4 py-4 text-gray-500 font-mono text-xs tracking-widest">{student.rollNo}</td>
                      <td className="px-4 py-4">
                        
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.8; }
        }
        body { background: #06060c; }
      `}</style>
    </div>
  );
}