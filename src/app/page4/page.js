"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// --- 3D METALLIC EVALUATION CARD (PINK THEME) ---
const Metallic3DEvalCard = ({ number, title, children, elRef }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    // Reduced tilt for a smoother, more premium feel
    const maxTilt = 7; 
    const rotateY = (mouseX - 0.5) * maxTilt * 2;
    const rotateX = -(mouseY - 0.5) * maxTilt * 2;

    setRotation({ x: rotateX, y: rotateY });
    setGlarePosition({ x: mouseX * 100, y: mouseY * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly reset position via CSS transition
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div ref={elRef} className="w-full h-full perspective-[1200px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full flex flex-col min-h-[240px] cursor-default transition-transform duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Outer Metallic Border */}
        <div className="w-full h-full flex flex-col rounded-2xl bg-gradient-to-br from-pink-400/80 via-[#334155] to-pink-900/80 p-[1px] shadow-[0_15px_40px_rgba(236,72,153,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(236,72,153,0.25)]">
          {/* Inner Dark Card */}
          <div className="relative w-full h-full flex-grow rounded-[15px] bg-gradient-to-b from-[#140f12] to-[#080507] overflow-hidden flex flex-col p-5 md:p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            
            {/* Interactive Glare Effect */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-in-out"
              style={{
                opacity: isHovered ? 0.7 : 0,
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(236,72,153,0.2) 0%, transparent 50%)`,
                mixBlendMode: "screen",
              }}
            />
            {/* Scanline Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,1)_2px,rgba(255,255,255,1)_4px)] mix-blend-overlay" />

            {/* Content (Lifted for 3D effect) */}
            <div
              className="relative z-10 flex flex-col flex-grow transition-transform duration-300 ease-out"
              style={{ transform: isHovered ? "translateZ(40px)" : "translateZ(20px)" }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] sm:text-xs font-mono text-pink-500/80 tracking-[0.25em]">
                    EVALUATION
                  </p>
                  <span className="flex items-center justify-center w-7 h-7 rounded bg-pink-950/40 border border-pink-800/40 text-pink-400 font-mono text-xs font-bold shadow-[inset_0_0_10px_rgba(236,72,153,0.2)]">
                    {number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-pink-200 tracking-tight leading-tight">
                  {title}
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-pink-500 to-transparent mt-3" />
              </div>

              <div className="text-gray-400 text-sm font-medium leading-relaxed flex-grow">
                {children}
              </div>

              <div className="flex justify-between items-end border-t border-gray-800/60 pt-4 mt-5">
                <div className="w-5 h-5 rounded-full border border-gray-700/50 flex items-center justify-center bg-black/50">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse shadow-[0_0_8px_#ec4899]" />
                </div>
                <span className="font-mono text-[9px] text-gray-500 tracking-[0.3em]">
                  SYS.ON // 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function EvaluationPage() {
  const containerRef = useRef(null);
  const charRef = useRef(null);
  const dialogueBoxRef = useRef(null);
  const dialogueTextRef = useRef(null);
  const headerRef = useRef(null);

  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const missPinkDialogue = `"Listen closely, interns. The Sprint account is a massive liability and the investors are watching. Your performance isn't graded on an academic curve; it is evaluated on actual output. Engage with the daily WhatsApp case drops, pass your weekly quizzes, and submit your strategic memos. Break into the Top 5 Leaderboard, and prove you belong at this firm."`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // 1. Character slides in smoothly
      tl.fromTo(
        charRef.current,
        { x: 80, opacity: 0, filter: "blur(10px)" },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "expo.out",
        }
      )
        // 2. Header fades in
        .fromTo(
          headerRef.current,
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8"
        )
        // 3. Dialogue Box wipes in
        .fromTo(
          dialogueBoxRef.current,
          { scaleX: 0, opacity: 0, transformOrigin: "right" },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        // 4. Typing Effect (slightly faster for better UX)
        .to(dialogueTextRef.current.children, {
          opacity: 1,
          duration: 0.01,
          stagger: 0.015,
          ease: "none",
        })
        // 5. 3D Cards stagger in with a slight blur
        .fromTo(
          cardRefs.current,
          { y: 40, opacity: 0, rotationX: -10, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=0.5"
        );

      // Character Breathing Animation
      gsap.to(charRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-transparent mt-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#110811] via-[#050508] to-black flex items-center justify-center p-4 md:p-8 overflow-hidden font-sans relative"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(236,72,153,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.3)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
        
        {/* LEFT COLUMN: Dialogue, Header & Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0">
          
          {/* Header Section */}
          <div ref={headerRef} className="mb-6 opacity-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-pink-500 tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              EVALUATION & CLEARANCE PROTOCOLS
            </h1>
          </div>

          {/* Miss Pink's Dialogue Box */}
          <div
            ref={dialogueBoxRef}
            className="relative border-r-2 border-pink-500/80 bg-[#160710]/60 p-5 md:p-6 mb-10 rounded-l-xl shadow-[0_0_30px_rgba(236,72,153,0.08)] backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-pink-500/80 to-transparent" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-pink-500/20 rounded-bl-xl" />

            <div className="flex flex-col gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse shadow-[0_0_10px_#ec4899]" />
                <p className="w-fit px-4 py-1 bg-pink-950/40 border border-pink-800/40 rounded-full text-pink-300 font-mono text-sm md:text-base uppercase tracking-widest backdrop-blur-sm shadow-[inset_0_0_10px_rgba(236,72,153,0.1)]">
                  MISS. PINK (INTERNAL AUDIT PARTNER)
                </p>
              </div>

              <p className="text-pink-500/60 font-mono text-xs md:text-sm pl-5 italic border-l-2 border-pink-800/30 ml-1.5">
                * Role: Lead Auditor at GreenEdge Consulting. She reviews all intern deliverables. No greenwashed metric, logical fallacy, or plagiarized memo gets past her desk.
              </p>
            </div>
            
            <p
              ref={dialogueTextRef}
              className="text-pink-50/95 font-medium text-base md:text-lg lg:text-xl leading-relaxed italic whitespace-pre-wrap"
            >
              {missPinkDialogue.split("").map((char, index) => (
                <span key={index} className="opacity-0">
                  {char}
                </span>
              ))}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 items-stretch">
            <Metallic3DEvalCard
              elRef={addToRefs}
              number="01"
              title="Complete Every Deliverable"
            >
              Throughout the 4-week core engagement, you must manage daily case study drops on WhatsApp, weekly automated quizzes, and major Sunday assignments. Submit everything you draft. In consulting, a flawed materiality assessment is always better than a missed deadline. The work cycle resets every Saturday—do not fall behind.
            </Metallic3DEvalCard>

            <Metallic3DEvalCard
              elRef={addToRefs}
              number="02"
              title="The Firm Leaderboard"
            >
              Your major assignments, quiz scores, and active participation directly drive your internal ranking. At the close of each week, the Top 5 Analysts will be announced on the main dashboard. Points are heavily awarded for analytical rigor, structured thinking, and exposing real corporate vulnerabilities.
            </Metallic3DEvalCard>

            <Metallic3DEvalCard
              elRef={addToRefs}
              number="03"
              title="The Capstone Pitch"
            >
              The engagement concludes in Week 5. You must synthesize four weeks of data into a single, high-stakes boardroom deck. Your ultimate objective is to convince GreenBridge Capital to release Sprint's frozen ₹800 crore Series B funding. This final strategy pitch dictates your ultimate standing within the firm.
            </Metallic3DEvalCard>

            <Metallic3DEvalCard
              elRef={addToRefs}
              number="04"
              title="Certifications & Clearance"
            >
              Survival has its rewards. All Analysts who successfully complete the 5-week program and submit their deliverables will earn an official Certificate of Completion. The absolute top performers will receive a Merit Certification, with the highest ranks bypassing standard interviews for direct entry into the CSI Tech Core Team.
            </Metallic3DEvalCard>
          </div>
        </div>

        {/* RIGHT COLUMN: Character (Moved to order-1 on mobile so she appears first) */}
        <div
          ref={charRef}
          className="lg:col-span-5 relative flex justify-center lg:justify-end h-[40vh] sm:h-[50vh] lg:h-[85vh] order-1 lg:order-2 opacity-0"
        >
          {/* Glowing Pink backlight behind character */}
          <div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[400px] h-[280px] md:h-[400px] bg-pink-600/15 blur-[120px] rounded-full pointer-events-none" />

          <img
            src="/character2.png" 
            alt="Miss. Pink"
            className="h-full object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.2)] relative z-10"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
}