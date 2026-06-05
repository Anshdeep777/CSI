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

    gsap.set('.timeline-node-1', { transformOrigin: 'center', scale: 0, opacity: 0 });
    gsap.set('.timeline-node-2', { transformOrigin: 'center', scale: 0, opacity: 0 });
    gsap.set('.timeline-node-3', { transformOrigin: 'center', scale: 0, opacity: 0 });
    gsap.set('.timeline-node-4', { transformOrigin: 'center', scale: 0, opacity: 0 });

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
        stagger: 0.1,
      });

    if (path) {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: 'power2.inOut'
      }, "-=0.2");
    }

    tl.to('.timeline-node-2', {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.5)',
      }, path ? "-=1.8" : "-=0.3")
      .to('.timeline-node-3', {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.5)',
      }, path ? "-=1.1" : "-=0.3")
      .to('.timeline-node-4', {
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
          The Operations Cycle
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 tracking-widest uppercase font-semibold border-t border-white/5 pt-2 max-w-sm mx-auto">
          Weekly Cadence
        </p>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col gap-10 relative w-full max-w-md px-4 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-1 before:bg-gray-800">
        
        <div className="timeline-node-1 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-gray-400 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0 z-10 text-gray-400">
            01
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-100">Live Intel Sessions</h3>
            <span className="text-blue-400 text-sm font-medium mt-0.5">Monday & Thursday</span>
            <span className="text-gray-500 text-xs mt-1">Mandatory sessions (Recordings linked post-session)</span>
          </div>
        </div>

        <div className="timeline-node-2 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-gray-500 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0 z-10 text-gray-500">
            02
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-100">Tactical Execution</h3>
            <span className="text-blue-400 text-sm font-medium mt-0.5">Daily</span>
            <span className="text-gray-500 text-xs mt-1">Resource reading and minor tasks</span>
          </div>
        </div>

        <div className="timeline-node-3 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-gray-600 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0 z-10 text-gray-600">
            03
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-100">Major Deployment</h3>
            <span className="text-blue-400 text-sm font-medium mt-0.5">Sunday EOD</span>
            <span className="text-gray-500 text-xs mt-1">Architecture deployment (Final Submission)</span>
          </div>
        </div>

        <div className="timeline-node-4 flex gap-6 items-start relative">
          <div className="w-10 h-10 rounded-full bg-[#09090b] border-4 border-gray-700 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0 z-10 text-gray-700">
            04
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-100">Clearance Quiz</h3>
            <span className="text-blue-400 text-sm font-medium mt-0.5">Post-Submission</span>
            <span className="text-gray-500 text-xs mt-1">Automated clearance assessment</span>
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

          {/* Adjusted path to accommodate 4 nodes */}
          <path
            ref={pathRef}
            d="M 120 450 C 250 450, 250 200, 380 200 C 510 200, 510 450, 640 450 C 770 450, 770 200, 900 200"
            fill="none"
            stroke="#374151"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <g className="timeline-node-1">
            <circle
              cx="120" cy="450" r="45"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="8" filter="url(#metallicGlow)"
            />
            <text x="120" y="456" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold" letterSpacing="2">01</text>
            <text x="120" y="530" textAnchor="middle" fill="#f3f4f6" fontSize="18" fontWeight="bold">Live Intel</text>
            <text x="120" y="555" textAnchor="middle" fill="#60a5fa" fontSize="14">Mon & Thu</text>
            <text x="120" y="580" textAnchor="middle" fill="#4b5563" fontSize="12">Mandatory Sessions</text>
          </g>

          <g className="timeline-node-2">
            <circle
              cx="380" cy="200" r="45"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="8" filter="url(#metallicGlow)"
            />
            <text x="380" y="206" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold" letterSpacing="2">02</text>
            <text x="380" y="100" textAnchor="middle" fill="#f3f4f6" fontSize="18" fontWeight="bold">Tactical</text>
            <text x="380" y="125" textAnchor="middle" fill="#60a5fa" fontSize="14">Daily</text>
            <text x="380" y="150" textAnchor="middle" fill="#4b5563" fontSize="12">Reading & Minor Tasks</text>
          </g>

          <g className="timeline-node-3">
            <circle
              cx="640" cy="450" r="45"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="8" filter="url(#metallicGlow)"
            />
            <text x="640" y="456" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold" letterSpacing="2">03</text>
            <text x="640" y="530" textAnchor="middle" fill="#f3f4f6" fontSize="18" fontWeight="bold">Deployment</text>
            <text x="640" y="555" textAnchor="middle" fill="#60a5fa" fontSize="14">Sunday EOD</text>
            <text x="640" y="580" textAnchor="middle" fill="#4b5563" fontSize="12">Major Architecture Submission</text>
          </g>

          <g className="timeline-node-4">
            <circle
              cx="900" cy="200" r="45"
              fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="8" filter="url(#metallicGlow)"
            />
            <text x="900" y="206" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold" letterSpacing="2">04</text>
            <text x="900" y="100" textAnchor="middle" fill="#f3f4f6" fontSize="18" fontWeight="bold">Clearance</text>
            <text x="900" y="125" textAnchor="middle" fill="#60a5fa" fontSize="14">Post-Submission</text>
            <text x="900" y="150" textAnchor="middle" fill="#4b5563" fontSize="12">Automated Quiz</text>
          </g>
        </svg>
      </div>
    </div>
  );
}