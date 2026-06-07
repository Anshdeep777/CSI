'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AnimatedTimeline() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    let pathLength = 0;
    
    if (path) {
      pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
    }

    // Initialize all 5 nodes
    gsap.set('.timeline-node-1', { transformOrigin: 'center', scale: 0, opacity: 0 });
    gsap.set('.timeline-node-2', { transformOrigin: 'center', scale: 0, opacity: 0 });
    gsap.set('.timeline-node-3', { transformOrigin: 'center', scale: 0, opacity: 0 });
    gsap.set('.timeline-node-4', { transformOrigin: 'center', scale: 0, opacity: 0 });
    gsap.set('.timeline-node-5', { transformOrigin: 'center', scale: 0, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      defaults: { ease: 'power2.out' }
    });

    tl.to('.timeline-node-1', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.5)',
    });

    if (path) {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 3.0,
        ease: 'power2.inOut'
      }, "-=0.2");
    }

    tl.to('.timeline-node-2', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.5)',
    }, path ? "-=2.4" : "-=0.3")
    .to('.timeline-node-3', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.5)',
    }, path ? "-=1.8" : "-=0.3")
    .to('.timeline-node-4', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.5)',
    }, path ? "-=1.1" : "-=0.3")
    .to('.timeline-node-5', {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.5)',
    }, path ? "-=0.4" : "-=0.3");

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 overflow-hidden font-sans select-none"
    >
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
          THE OPERATIONS CYCLE
        </h2>
        <p className="text-emerald-400 text-xs sm:text-sm md:text-base mt-2 tracking-widest uppercase font-black border-t border-white/5 pt-2 max-w-sm mx-auto">
          ENGAGEMENT CADENCE
        </p>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col gap-10 relative w-full max-w-md px-4 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-1 before:bg-zinc-800">
        
        {/* NODE 01 */}
        <div className="timeline-node-1 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-zinc-200 flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(255,255,255,0.15)] shrink-0 z-10 text-zinc-200">
            01
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-zinc-100">Live Intel</h3>
            <span className="text-emerald-400 text-sm font-bold mt-0.5 tracking-wide uppercase">Weekly Dispatch</span>
            <span className="white font-bold text-xs mt-1 leading-relaxed font-semibold">High-density strategy sessions. Stand by for transmission alerts from your Pod Manager.</span>
          </div>
        </div>

        {/* NODE 02 */}
        <div className="timeline-node-2 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-zinc-400 flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(255,255,255,0.15)] shrink-0 z-10 white font-bold">
            02
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-zinc-100">Tactical</h3>
            <span className="text-emerald-400 text-sm font-bold mt-0.5 tracking-wide uppercase">Daily Portal Sync</span>
            <span className="white font-bold text-xs mt-1 leading-relaxed font-semibold">Access the terminal daily to decrypt briefs and execute minor operational diagnostics.</span>
          </div>
        </div>

        {/* NODE 03 */}
        <div className="timeline-node-3 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-zinc-500 flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(255,255,255,0.15)] shrink-0 z-10 text-zinc-500">
            03
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-zinc-100">Comms Network</h3>
            <span className="text-emerald-400 text-sm font-bold mt-0.5 tracking-wide uppercase">Daily Case Drops</span>
            <span className="white font-bold text-xs mt-1 leading-relaxed font-semibold">Monitor the secure WhatsApp channel for rapid-fire, real-world case debates.</span>
          </div>
        </div>

        {/* NODE 04 */}
        <div className="timeline-node-4 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-zinc-600 flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(255,255,255,0.15)] shrink-0 z-10 text-zinc-600">
            04
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-zinc-100">Deployment</h3>
            <span className="text-emerald-400 text-sm font-bold mt-0.5 tracking-wide uppercase">Cycle Deadline</span>
            <span className="white font-bold text-xs mt-1 leading-relaxed font-semibold">Deploy your major strategic deliverables before the weekly system lockout.</span>
          </div>
        </div>

        {/* NODE 05 */}
        <div className="timeline-node-5 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-zinc-700 flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(255,255,255,0.15)] shrink-0 z-10 text-zinc-700">
            05
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-zinc-100">Clearance</h3>
            <span className="text-emerald-400 text-sm font-bold mt-0.5 tracking-wide uppercase">Post-Submission</span>
            <span className="white font-bold text-xs mt-1 leading-relaxed font-semibold">Execute the automated assessment quiz to verify your intelligence sync.</span>
          </div>
        </div>

      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block w-full max-w-6xl h-auto">
        <svg
          viewBox="0 0 1000 650"
          className="w-full h-auto overflow-visible drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#6b7280" />
              <stop offset="75%" stopColor="#f3f4f6" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>

            <filter id="metallicGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComponentTransfer in="blur" result="glow">
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Sine Curve Path connection */}
          <path
            ref={pathRef}
            d="M 100 450 C 200 450, 220 200, 300 200 C 380 200, 420 450, 500 450 C 580 450, 620 200, 700 200 C 780 200, 820 450, 900 450"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-60"
          />

          {/* NODE 01 (Neeche content) */}
          <g className="timeline-node-1">
            <circle
              cx="100" cy="450" r="40"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="6" filter="url(#metallicGlow)"
            />
            <text x="100" y="456" textAnchor="middle" fill="#e4e4e7" fontSize="16" fontWeight="bold" letterSpacing="1">01</text>
            
            <text x="100" y="525" textAnchor="middle" fill="#f3f4f6" fontSize="16" fontWeight="bold">Live Intel</text>
            <text x="100" y="548" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" letterSpacing="0.5">WEEKLY DISPATCH</text>
            <text x="100" y="575" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">High-density strategy sessions.</text>
            <text x="100" y="595" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Stand by for transmission alerts</text>
          </g>

          {/* NODE 02 (Upar content) */}
          <g className="timeline-node-2">
            <circle
              cx="300" cy="200" r="40"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="6" filter="url(#metallicGlow)"
            />
            <text x="300" y="206" textAnchor="middle" fill="#e4e4e7" fontSize="16" fontWeight="bold" letterSpacing="1">02</text>
            
            <text x="300" y="75" textAnchor="middle" fill="#f3f4f6" fontSize="16" fontWeight="bold">Tactical</text>
            <text x="300" y="98" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" letterSpacing="0.5">DAILY PORTAL SYNC</text>
            <text x="300" y="125" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Access terminal daily to decrypt</text>
            <text x="300" y="145" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">briefs & execute diagnostics.</text>
          </g>

          {/* NODE 03 (Neeche content) */}
          <g className="timeline-node-3">
            <circle
              cx="500" cy="450" r="40"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="6" filter="url(#metallicGlow)"
            />
            <text x="500" y="456" textAnchor="middle" fill="#e4e4e7" fontSize="16" fontWeight="bold" letterSpacing="1">03</text>
            
            <text x="500" y="525" textAnchor="middle" fill="#f3f4f6" fontSize="16" fontWeight="bold">Comms Network</text>
            <text x="500" y="548" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" letterSpacing="0.5">DAILY CASE DROPS</text>
            <text x="500" y="575" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Monitor secure WhatsApp channel</text>
            <text x="500" y="595" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">for rapid-fire case debates.</text>
          </g>

          {/* NODE 04 (Upar content) */}
          <g className="timeline-node-4">
            <circle
              cx="700" cy="200" r="40"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="6" filter="url(#metallicGlow)"
            />
            <text x="700" y="206" textAnchor="middle" fill="#e4e4e7" fontSize="16" fontWeight="bold" letterSpacing="1">04</text>
            
            <text x="700" y="75" textAnchor="middle" fill="#f3f4f6" fontSize="16" fontWeight="bold">Deployment</text>
            <text x="700" y="98" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" letterSpacing="0.5">CYCLE DEADLINE</text>
            <text x="700" y="125" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Deploy strategic deliverables</text>
            <text x="700" y="145" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">before weekly system lockout.</text>
          </g>

          {/* NODE 05 (Neeche content) */}
          <g className="timeline-node-5">
            <circle
              cx="900" cy="450" r="40"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="6" filter="url(#metallicGlow)"
            />
            <text x="900" y="456" textAnchor="middle" fill="#e4e4e7" fontSize="16" fontWeight="bold" letterSpacing="1">05</text>
            
            <text x="900" y="525" textAnchor="middle" fill="#f3f4f6" fontSize="16" fontWeight="bold">Clearance</text>
            <text x="900" y="548" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" letterSpacing="0.5">POST-SUBMISSION</text>
            <text x="900" y="575" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Execute automated assessment quiz</text>
            <text x="900" y="595" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">to verify your intelligence sync.</text>
          </g>
        </svg>
      </div>
    </div>
  );
}