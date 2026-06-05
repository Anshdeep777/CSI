"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { TriangleAlert, MessageSquare, Folder, FileText, Mail } from "lucide-react";
import VikramPage from '@/app/vikram/page.js';

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-black w-full overflow-hidden">
      
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-black/40 backdrop-blur-2xl border-r border-white/10 z-50 pt-[80px] shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
        <div className="px-6 pb-6 border-b border-white/5 relative">
          <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-green-500" />
          <h2 className="text-white font-black tracking-widest uppercase text-sm">Workspace</h2>
          <p className="text-gray-500 text-[10px] mt-1 tracking-widest">SECURE TERMINAL</p>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-3">
          <TabButton 
            active={pathname === "/"} 
            onClick={() => router.push("/")} 
            icon={<MessageSquare size={18} />} 
            label="Discussions" 
            color="cyan" 
          />
          <TabButton 
            active={pathname === "/resources"} 
            onClick={() => router.push("/resources")} 
            icon={<Folder size={18} />} 
            label="Resources" 
            color="green" 
          />
          <TabButton 
            active={pathname === "/tasks"} 
            onClick={() => router.push("/tasks")} 
            icon={<FileText size={18} />} 
            label="Tasks" 
            color="red" 
          />
        </nav>

        <div className="p-6 border-t border-white/5 bg-gradient-to-t from-green-500/[0.02] to-transparent">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-green-400">CSI</span>
          </div>
        </div>
      </aside>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-xl border-t border-white/10 z-50 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-around px-2 py-3">
          <MobileTabButton 
            active={pathname === "/"} 
            onClick={() => router.push("/")} 
            icon={<MessageSquare size={20} />} 
            label="Comms" 
            color="cyan" 
          />
          <MobileTabButton 
            active={pathname === "/resources"} 
            onClick={() => router.push("/resources")} 
            icon={<Folder size={20} />} 
            label="Files" 
            color="green" 
          />
          <MobileTabButton 
            active={pathname === "/tasks"} 
            onClick={() => router.push("/tasks")} 
            icon={<FileText size={20} />} 
            label="Tasks" 
            color="red" 
          />
        </div>
      </nav>

      <main className="flex-1 md:ml-64 relative w-full pb-24 md:pb-10">
        
        <div className="relative min-h-[90dvh] md:min-h-screen w-full flex items-center pt-10 md:pt-0">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:gap-0 items-center">
            
            <div className="flex flex-col items-center lg:items-start justify-center p-6 md:p-8 lg:pl-16 backdrop-blur-[2px]">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-red-500 font-bold tracking-widest uppercase mb-4 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
                System Active • Supply Chain Audit Protocol
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none uppercase text-center lg:text-left transition-all">
                WEEK 02: <br />
                <span className="text-green-400 flex gap-2 md:gap-3 items-center justify-center lg:justify-start mt-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                  THE PLASTIC BOMB
                  <TriangleAlert className="text-red-500 fill-red-500/20 animate-pulse w-8 h-8 md:w-9 md:h-9 shrink-0" />
                </span>
              </h1>

              <div className="relative group max-w-md w-full mt-8 md:mt-12">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/5 rounded-2xl blur-xl pointer-events-none" />
                
                <div className="relative p-6 bg-[#060709]/95 border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-100 tracking-wide mb-2">
                    Operational Dashboard
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium mb-6">
                    Access Life Cycle Assessments, evaluate Scope emissions data, and manage critical supply chain interventions assigned by the CSCO.
                  </p>

                  <div className="border-t border-white/5 pt-4 mb-5">
                    <span className="text-xs font-black tracking-widest uppercase text-green-400 block mb-1">
                      Current Objective
                    </span>
                    <p className="text-xs text-gray-500 font-medium">
                      Quantify environmental hotspots, establish GHG baselines, and engineer circular packaging interventions. Initiate audit.
                    </p>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 border border-green-500/30 bg-gradient-to-r from-green-950/40 to-emerald-900/40 hover:from-green-900/40 hover:to-emerald-800/40 rounded-xl py-3.5 text-xs text-green-300 hover:text-white font-bold tracking-wider uppercase transition-all duration-200 active:scale-[0.99]">
                    <span className="tracking-wider">Initiate Supply Chain Audit</span>
                    <span className="text-green-400 group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-16">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                
                <img
                  src="/poster.png"
                  className="w-full h-auto relative z-10 border border-white/10 bg-zinc-950 rounded-2xl drop-shadow-[0_25px_65px_rgba(0,0,0,0.9)] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  alt="Operations Strategic Team Poster"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
            
            <div className="shrink-0 relative group mt-2">
              <div className="absolute inset-0 bg-cyan-500/40 blur-2xl rounded-full opacity-70" />
              <img
                src="/vikram.png"
                className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto relative z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] object-contain transition-transform duration-500 hover:scale-105"
                alt="Vikram Shah"
              />
            </div>

            <div className="relative flex-1 w-full max-w-2xl p-5 md:p-6 bg-[#060709]/95 border border-cyan-500/30 rounded-2xl shadow-[0_20px_50px_rgba(239,68,68,0.05)]">
              <div className="absolute hidden lg:block top-12 -left-[9px] w-4 h-4 bg-[#060709] border-b border-l border-red-500/30 rotate-45" />
              <div className="absolute lg:hidden -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#060709] border-t border-l border-red-500/30 rotate-45" />
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-red-400 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]" />
                  <div className="tracking-wide">
                    <span className="text-gray-500 font-semibold">FROM:</span>{" "}
                    <span className="text-white font-bold font-sans">Vikram Shah</span>{" "}
                    <span className="text-gray-400 text-[10px] md:text-[11px]">(Chief Supply Chain Officer, Sprint)</span>
                  </div>
                </div>
                <span className="bg-red-950/40 text-red-400 font-black tracking-widest uppercase text-[9px] px-2 py-0.5 rounded border border-red-500/20">
                  Secure Comms
                </span>
              </div>

              <div className="mb-4 text-xs flex items-center gap-1.5">
                <span className="text-gray-600 font-bold shrink-0">SUBJECT:</span>
                <span className="text-gray-200 font-bold tracking-wide truncate">Code Red — SnackCo Ultimatum.</span>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans pl-3.5 border-l-2 border-red-500/30 bg-gradient-to-r from-red-500/[0.01] to-transparent py-1 pr-1">
                SnackCo just gave us exactly 60 days to fix our plastic packaging, or they pull their entire product line from our dark stores. I need hard, verifiable data on our footprint and real, deployable solutions. Do not give me wishful thinking or greenwashed PR.
              </p>
            </div>

          </div>
        </div>

        <div className="w-full relative z-20 bg-black">
          <VikramPage />
        </div>

      </main>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label, color }) => {
  const colorMap = {
    cyan: "text-cyan-400 bg-cyan-400",
    green: "text-green-400 bg-green-400",
    red: "text-red-400 bg-red-400",
  };
  
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ease-out group ${
        active 
          ? "bg-white/10 border-white/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] scale-[1.02]" 
          : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5 hover:scale-[1.02]"
      }`}
    >
      <div className={`${active ? colorMap[color].split(' ')[0] : `text-gray-500 group-hover:${colorMap[color].split(' ')[0]}`} transition-colors duration-300`}>
        {icon}
      </div>
      <span className="text-sm tracking-wide">{label}</span>
      {active && <span className={`ml-auto w-1.5 h-1.5 rounded-full animate-pulse ${colorMap[color].split(' ')[1]}`} />}
    </button>
  );
};

const MobileTabButton = ({ active, onClick, icon, label, color }) => {
  const colorMap = {
    cyan: "text-cyan-400 bg-cyan-400/20",
    green: "text-green-400 bg-green-400/20",
    red: "text-red-400 bg-red-400/20",
  };

  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1.5 p-2 w-full max-w-[80px] rounded-xl transition-all duration-300 ${
        active ? colorMap[color].split(' ')[1] : "hover:bg-white/5"
      }`}
    >
      <div className={`${active ? colorMap[color].split(' ')[0] : "text-gray-500"} transition-colors duration-300`}>
        {icon}
      </div>
      <span className={`text-[9px] uppercase tracking-wider ${active ? "text-white font-bold" : "text-gray-500"}`}>
        {label}
      </span>
    </button>
  );
};

export default Page;