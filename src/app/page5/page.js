'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// --- 3D METALLIC CARD (GREEN THEME) ---
const Metallic3DGreenCard = ({ number, title, subtitle, children, elRef }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;

    const maxTilt = 8;
    const rotateY = (mouseX - 0.5) * maxTilt * 2; 
    const rotateX = -(mouseY - 0.5) * maxTilt * 2; 

    setRotation({ x: rotateX, y: rotateY });
    setGlarePosition({ x: mouseX * 100, y: mouseY * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
        className="relative w-full h-full flex flex-col min-h-[220px] cursor-default transition-transform duration-200 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="w-full h-full flex flex-col rounded-2xl bg-gradient-to-br from-green-300 via-[#475569] to-green-900 p-[2px] shadow-[0_15px_30px_rgba(34,197,94,0.1)]">
          <div className="relative w-full h-full flex-grow rounded-[14px] bg-gradient-to-b from-[#111a14] to-[#050a07] overflow-hidden flex flex-col p-6 md:p-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
            
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.6 : 0,
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(34,197,94,0.15) 0%, transparent 60%)`,
                mixBlendMode: 'screen'
              }}
            />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,1)_2px,rgba(255,255,255,1)_4px)] mix-blend-overlay" />

            <div className="relative z-10 flex flex-col flex-grow" style={{ transform: 'translateZ(30px)' }}>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs sm:text-sm font-mono text-green-500/80 tracking-[0.2em] uppercase">{subtitle}</p>
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded bg-green-950/50 border border-green-800/50 text-green-400 font-mono text-xs font-bold shadow-[inset_0_0_8px_rgba(34,197,94,0.3)]">
                    {number}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-green-200 tracking-tight leading-tight uppercase">
                  {title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-transparent mt-3" />
              </div>

              <div className="text-gray-300 text-sm md:text-base font-medium leading-relaxed flex-grow">
                {children}
              </div>

              <div className="flex justify-between items-end border-t border-gray-800 pt-4 mt-6">
                <div className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center bg-black/50">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 tracking-widest">SYS.ON // 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ProtocolPage() {
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

  // The text to be typed out
  const mrGreenDialogue = `"Listen closely, recruit. The architecture you build here will define your future. The mission ahead is split into two critical phases. Pay attention, your clearance depends on it."`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Mr. Green enters
      tl.fromTo(charRef.current, 
        { x: -100, opacity: 0, filter: 'brightness(0)' },
        { x: 0, opacity: 1, filter: 'brightness(1)', duration: 1.2, ease: 'power3.out' }
      )
      
      // 2. Dialogue Box opens (HUD wipe effect)
      .fromTo(dialogueBoxRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 0.5, ease: 'power2.out' },
        "-=0.4" // Overlap with character entrance
      )
      
      // 3. Typing Effect: Stagger the opacity of each character
      .to(dialogueTextRef.current.children, {
        opacity: 1,
        duration: 0.01,
        stagger: 0.03, // Speed of the typing
        ease: 'none'
      })

      // 4. Main Header drops in after typing finishes
      .fromTo(headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        "+=0.2"
      )

      // 5. Cards deal themselves onto the screen (Game-like 3D flip-and-slide)
      .fromTo(cardRefs.current,
        { x: 100, opacity: 0, rotationY: -15, scale: 0.9 },
        { x: 0, opacity: 1, rotationY: 0, scale: 1, duration: 0.8, stagger: 0.25, ease: 'back.out(1.2)' },
        "-=0.2"
      );

      // Character Breathing Animation
      gsap.to(charRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-transparent bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0a140f] via-[#050806] to-black flex items-center justify-center p-4 md:p-6 overflow-hidden font-sans relative"
    >
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(34,197,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.2)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
        
        {/* LEFT COLUMN: Character */}
        <div ref={charRef} className="lg:col-span-5 relative flex justify-center lg:justify-end h-[40vh] sm:h-[50vh] lg:h-[85vh]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />
          <img 
            src="/character.png" 
            alt="Mr. Green" 
            className="h-full object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.15)] relative z-10"
          />
        </div>

        {/* RIGHT COLUMN: Dialogue, Header & Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center py-8 lg:py-0">
          
          {/* Mr. Green's Dialogue Box (HUD Style) */}
          <div 
            ref={dialogueBoxRef} 
            className="relative border-l-4 border-green-500 bg-[#0a1a10]/80 p-4 md:p-5 mb-8 rounded-r-lg shadow-[0_0_20px_rgba(34,197,94,0.1)] backdrop-blur-sm"
          >
            {/* Top Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-500 to-transparent" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-green-500/30" />
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
             <div className="flex flex-col gap-2 mb-4">
  {/* Highlighted Name Badge */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
    <p className="w-fit px-4 py-1.5 bg-green-950/60 border border-green-800/50 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.2)] text-green-400 font-mono text-lg md:text-xl uppercase tracking-widest backdrop-blur-sm">
      System Comm // Mr. Shukla Lab Wale
    </p>
  </div>
  
  {/* Funny Subtitle/Lore Note */}
  <p className="text-green-500/70 font-mono text-xs md:text-xl pl-5 italic border-l border-green-800/50 ml-1">
    * Warning: Your code might be running an entire AI infrastructure, but if you haven't drawn the margin lines and written the index with a blue pen, he won't check your file.
  </p>
</div>
            </div>
            
            {/* Typing Effect Container */}
            <p 
              ref={dialogueTextRef} 
              className="text-green-50/90 font-medium text-md md:text-2xl leading-relaxed italic whitespace-pre-wrap"
            >
              {mrGreenDialogue.split('').map((char, index) => (
                <span key={index} className="opacity-0">
                  {char}
                </span>
              ))}
            </p>
          </div>
          
          {/* Main Protocol Header */}
          <div ref={headerRef} className="mb-6 opacity-0">
            <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-green-100 to-green-500 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(34,197,94,0.2)]">
              The Two-Phase Protocol
            </h1>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-6">
            <Metallic3DGreenCard 
              elRef={addToRefs} 
              number="01" 
              subtitle="Weeks 1–3"
              title="The Baseline Infrastructure"
            >
              <p className="mb-4">
                Phase 1 is your <strong className="text-white">basic training</strong>. We will cover the foundational nodes of sustainability architecture: system boundaries, mathematical ledgers, and lifecycle analysis. You will be assigned specific, step-by-step tasks each week.
              </p>
              
              <div className="p-3 bg-red-950/40 border border-red-900/50 rounded shadow-inner text-red-300 text-sm font-mono flex items-start gap-3 mt-4">
                <span className="text-red-500 mt-0.5">⚠</span>
                <p>Do not skip these missions. Even partial architectures must be submitted, as incomplete data drastically impacts your clearance eligibility for the Core Team.</p>
              </div>
            </Metallic3DGreenCard>

            <Metallic3DGreenCard 
              elRef={addToRefs} 
              number="02" 
              subtitle="Weeks 4–6"
              title="Advanced Threat Vectors"
            >
              <p>
                The data volume will exceed generalist capacities. You will select a <strong className="text-white">specialized track</strong>. You will dive deep into specialized tooling, competing directly against peers in your track to solve a massive, real-world corporate data leak.
              </p>
            </Metallic3DGreenCard>
          </div>
          
        </div>
      </div>
    </div>
  );
}