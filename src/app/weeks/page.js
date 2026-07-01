"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [showToast, setShowToast] = useState(true);

  // Automatically dismiss the glassmorphism alert after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 mt-12 md:p-12 select-none overflow-x-hidden relative pb-24 lg:pb-12">
      {/* Glassmorphism Instruction Notification */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md animate-fade-in-out">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-center">
            <p className="text-zinc-200 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
              Go through the flow, scroll down to see all weeks, and access the
              relevant docs in them!!
            </p>
          </div>
        </div>
      )}

      <div className="text-center mb-10 md:mb-16 max-w-2xl mt-6">
        <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-green-400 font-bold tracking-widest uppercase mb-3"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          The Escalation Grid
        </h1>
        <p className="text-zinc-500 text-xs md:text-sm mt-3 tracking-wide leading-relaxed max-w-md mx-auto border-t border-white/5 pt-3">
          Track your strategic deployment clearance. Active deployment phases
          are unlocked below; future operations remain restricted
        </p>
      </div>

      {/* Added flex-wrap and expanded max-width to handle the additional card smoothly */}
      <div className="flex flex-col lg:flex-row flex-wrap gap-6 items-center justify-center w-full max-w-7xl relative">
        {/* Card 1: Active Deployment */}
        <div
          onClick={() => router.push("/weeks/01")}
          className="w-full max-w-[380px] h-[500px] sm:h-[520px] rounded-[36px] relative overflow-hidden bg-zinc-900 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.15)] group transition-all duration-300 hover:border-green-400/60 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] cursor-pointer"
        >
          <img
            src="/poster.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt="Active Operational Objective"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-3.5">
            <div>
              <p className="text-green-400 text-xs font-black tracking-widest uppercase mb-1 animate-pulse">
                Active Now
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                Week 01: Welcome To The Chaos
              </h2>
              <p className="text-xs text-white/80 font-bold mt-2 leading-relaxed">
                Drop directly into a high-pressure secure terminal where
                corporate survival violently collides with macro sustainability
                frameworks
              </p>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-green-500/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-green-400 uppercase border border-green-500/40">
                Unlocked
              </span>
              <span className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-300 border border-white/10">
                #WEEK01
              </span>
            </div>

            <button className="w-full bg-green-500 text-black font-bold py-3 px-4 rounded-full text-sm transition-transform active:scale-[0.98] hover:bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              Explore
            </button>
          </div>
        </div>

        {/* Card 2: Active Deployment */}
        <div
          onClick={() => router.push("/weeks/02")}
          className="w-full max-w-[380px] h-[500px] sm:h-[520px] rounded-[36px] relative overflow-hidden bg-zinc-900 border border-red-500/30 shadow-[0_0_30px_rgba(34,197,94,0.15)] group transition-all duration-300 hover:border-red-400/60 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] cursor-pointer"
        >
          <img
            src="/posterweek2.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt="Active Operational Objective"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-3.5">
            <div>
              <p className="text-red-500 text-xs font-black tracking-widest uppercase mb-1 animate-pulse">
                Active Now
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                Week 02: The Plastic Bomb
              </h2>
              <p className="text-xs text-white/80 font-bold mt-2 leading-relaxed">
                Sprint faces a critical 60-day ultimatum from SnackCo to
                overhaul its plastic packaging or risk losing their entire
                product line. To avert this crisis, we must urgently cut through
                the PR and deliver hard environmental footprint data paired with
                concrete, deployable solutions!
              </p>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-red-500/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-red-500 uppercase border border-red-500/40">
                Unlocked
              </span>
              <span className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-300 border border-white/10">
                #WEEK02
              </span>
            </div>

            <button className="w-full bg-red-500 font-bold py-3 px-4 rounded-full text-sm transition-transform active:scale-[0.98] hover:bg-red-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              Explore
            </button>
          </div>
        </div>

        {/* Card 3: New Active Deployment (Week 03) */}
        <div
          onClick={() => router.push("/weeks/03")}
          className="w-full max-w-[380px] h-[500px] sm:h-[520px] rounded-[36px] relative overflow-hidden bg-zinc-900 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] group transition-all duration-300 hover:border-blue-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] cursor-pointer"
        >
          <img
            src="/poster3.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt="Active Operational Objective"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-3.5">
            <div>
              <p className="text-blue-500 text-xs font-black tracking-widest uppercase mb-1 animate-pulse">
                Active Now
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                Week 03: ESG Strategy, Materiality, & Public Scrutiny
              </h2>
              <p className="text-xs text-white/80 font-bold mt-2 leading-relaxed">
                Instantly just launched a nationwide campaign claiming their
                entire 10-minute delivery network is "100% Eco-Friendly". Expose the competitor's lies and teach the board how real
                ESG reporting works.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-blue-500/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-blue-400 uppercase border border-blue-500/40">
                Unlocked
              </span>
              <span className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-300 border border-white/10">
                #WEEK03
              </span>
            </div>

            <button className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full text-sm transition-transform active:scale-[0.98] hover:bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              Explore
            </button>
          </div>
        </div>

        {/* Card 4: New Active Deployment (Week 04) */}
        <div
          onClick={() => router.push("/weeks/04")}
          className="w-full max-w-[380px] h-[500px] sm:h-[520px] rounded-[36px] relative overflow-hidden bg-zinc-900 border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.15)] group transition-all duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] cursor-pointer"
        >
          <img
            src="/poster4.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt="Active Operational Objective"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-3.5">
            <div>
              <p className="text-yellow-400 text-xs font-black tracking-widest uppercase mb-1 animate-pulse">
                Active Now
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                Week 04: Designing Solutions & Strategy Roadmaps
              </h2>
              <p className="text-xs text-white/80 font-bold mt-2 leading-relaxed">
                A ₹800 Cr funding freeze looms over the sustainability
                initiative. Audit supplier ethics, learn how green bonds and
                ESG investing finance the pivot, and sequence a 36-month
                roadmap to sell the board on quick wins, operational shifts,
                and structural transformation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-yellow-500/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-yellow-400 uppercase border border-yellow-500/40">
                Unlocked
              </span>
              <span className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-300 border border-white/10">
                #WEEK04
              </span>
            </div>

            <button className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded-full text-sm transition-transform active:scale-[0.98] hover:bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
              Explore
            </button>
          </div>
        </div>

        {/* Card 5: Restricted */}
        <div className="w-full max-w-[380px] h-[500px] sm:h-[520px] rounded-[36px] relative overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl group transition-all duration-300 opacity-60">
          <img
            src="/lock.png"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
            alt="Locked Vector Asset"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-3.5">
            <div>
              <p className="text-zinc-600 text-xs font-black tracking-widest uppercase mb-1">
                Restricted Vector
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-400 tracking-wide uppercase">
                Upcoming Weeks
              </h2>
              <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                Future operational modules, life-cycle tracking baselines, and
                circular strategic pivots are locked pending clearance
              </p>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-500 uppercase border border-white/5">
                🔒 System Encrypted
              </span>
            </div>

            <button
              disabled
              className="w-full bg-zinc-800 text-zinc-600 font-bold py-3 px-4 rounded-full text-sm cursor-not-allowed border border-white/5"
            >
              Access Restricted
            </button>
          </div>
        </div>

        {/* Character Mascot Wrapper */}
        <div className="xl:absolute xl:-right-28 xl:bottom-0 flex flex-col items-center mt-8 xl:mt-0 z-30">
          <div className="relative bg-zinc-800 text-zinc-100 px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium mb-3 shadow-xl border border-white/10 tracking-wide animate-bounce">
            ready to explore weeks!!
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-800 border-r border-b border-white/10 transform rotate-45"></div>
          </div>

          <img
            src="/character_pose2.png"
            alt="Operational Character"
            className="w-36 sm:w-44 xl:w-48 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      {/* Responsive Scroll Down Indicator (Hidden on wide desktops where layout fits side-by-side) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 lg:hidden pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          Scroll Down
        </span>
        <div className="flex flex-col items-center -space-y-1">
          <svg
            className="w-4 h-4 text-green-500/80 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            className="w-4 h-4 text-green-500/40 animate-bounce [animation-delay:0.2s]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page;