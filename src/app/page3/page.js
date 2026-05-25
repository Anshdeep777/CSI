'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedTimeline() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  
  // Refs for the groups (Circle + Text)
  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // 1. Initial State Setup
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength, 
    });

    // Set origin points precisely to the center of each circle so they scale properly
    gsap.set(node1Ref.current, { transformOrigin: '150px 450px', scale: 0, opacity: 0 });
    gsap.set(node2Ref.current, { transformOrigin: '450px 250px', scale: 0, opacity: 0 });
    gsap.set(node3Ref.current, { transformOrigin: '850px 200px', scale: 0, opacity: 0 });

    // 2. The Animation Timeline
    const tl = gsap.timeline({ 
      delay: 0.5,
      defaults: { ease: 'power2.out' }
    });

    tl.to(node1Ref.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.7, 
        ease: 'back.out(1.5)' 
      })
      // Draw the connecting line
      .to(path, { 
        strokeDashoffset: 0, 
        duration: 2.5, 
        ease: 'power2.inOut' 
      }, "-=0.2")
      // Pop Node 2 exactly when the line passes its position
      .to(node2Ref.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.7, 
        ease: 'back.out(1.5)' 
      }, "-=1.4")
      // Pop Node 3 right as the line finishes
      .to(node3Ref.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.7, 
        ease: 'back.out(1.5)' 
      }, "-=0.3");

    return () => tl.kill(); 
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-[700px] bg-[#09090b] flex items-center justify-center p-4 overflow-hidden font-sans"
    >
      <svg 
        viewBox="0 0 1000 650" 
        className="w-full max-w-6xl h-auto drop-shadow-2xl overflow-visible"
      >
        <defs>
          {/* Chrome / Metallic Gradient for the Borders */}
          <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />    {/* Bright silver */}
            <stop offset="25%" stopColor="#ffffff" />   {/* Pure white reflection */}
            <stop offset="50%" stopColor="#6b7280" />   {/* Darker metal core */}
            <stop offset="75%" stopColor="#f3f4f6" />   {/* Light reflection */}
            <stop offset="100%" stopColor="#1f2937" />  {/* Deep shadow edge */}
          </linearGradient>

          {/* Outer Glow Filter for the metallic rings */}
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

        {/* The connecting timeline path */}
        <path
          ref={pathRef}
          d="M 150 450 C 300 450, 300 250, 450 250 C 600 250, 700 200, 850 200"
          fill="none"
          stroke="#374151"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* --- NODE 1: The Briefing --- */}
        <g ref={node1Ref}>
          <circle 
            cx="150" cy="450" r="45" 
            fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="8" filter="url(#metallicGlow)"
          />
          <text x="150" y="456" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold" letterSpacing="2">01</text>
          
          <text x="150" y="530" textAnchor="middle" fill="#f3f4f6" fontSize="20" fontWeight="bold">The Zero-Day Briefing</text>
          <text x="150" y="555" textAnchor="middle" fill="#9ca3af" fontSize="15">Sunday @ 20:00 IST</text>
          <text x="150" y="580" textAnchor="middle" fill="#4b5563" fontSize="13">Mandatory Live Ops Call</text>
        </g>

        {/* --- NODE 2: The Build --- */}
        <g ref={node2Ref}>
          <circle 
            cx="450" cy="250" r="45" 
            fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="8" filter="url(#metallicGlow)"
          />
          <text x="450" y="256" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold" letterSpacing="2">02</text>
          
          <text x="450" y="330" textAnchor="middle" fill="#f3f4f6" fontSize="20" fontWeight="bold">The Build</text>
          <text x="450" y="355" textAnchor="middle" fill="#9ca3af" fontSize="15">Monday – Thursday</text>
          <text x="450" y="380" textAnchor="middle" fill="#4b5563" fontSize="13">Data Room & Architecture</text>
        </g>

        {/* --- NODE 3: The Drop --- */}
        <g ref={node3Ref}>
          <circle 
            cx="850" cy="200" r="45" 
            fill="#09090b" stroke="url(#chromeGradient)" strokeWidth="8" filter="url(#metallicGlow)"
          />
          <text x="850" y="206" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold" letterSpacing="2">03</text>

          <text x="850" y="280" textAnchor="middle" fill="#f3f4f6" fontSize="20" fontWeight="bold">The Drop</text>
          <text x="850" y="305" textAnchor="middle" fill="#9ca3af" fontSize="15">Friday @ 23:59 IST</text>
          <text x="850" y="330" textAnchor="middle" fill="#4b5563" fontSize="13">Submit & Deploy</text>
        </g>

      </svg>
    </div>
  );
}