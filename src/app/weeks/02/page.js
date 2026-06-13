"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  Globe as LuGlobe,
  Menu as LuMenu,
  X as LuX,
  UploadCloud as LuUploadCloud,
  BookOpen as LuBookOpen,
  Swords as LuSwords,
  FolderSearch as LuFolderSearch,
  Cpu as LuBrainCircuit,
  CheckSquare as LuSquareCheck,
  ListTodo as LuListTodo
} from "lucide-react";

function useTypewriter(lines, delay = 0, speed = 28) {
  const [displayed, setDisplayed] = useState(lines.map(() => ""));
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let lineIdx = 0;
    let charIdx = 0;
    let timeout;

    const tick = () => {
      if (lineIdx >= lines.length) return;
      const line = lines[lineIdx];
      if (charIdx <= line.length) {
        setDisplayed(prev => {
          const next = [...prev];
          next[lineIdx] = line.slice(0, charIdx);
          return next;
        });
        charIdx++;
        timeout = setTimeout(tick, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        timeout = setTimeout(tick, 380);
      }
    };

    timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [started, lines, delay, speed]);

  return { displayed, ref };
}

function TypewriterBlock({
  lines,
  delay = 0,
  speed = 22,
  speakers,
  speakerColors,
}) {
  const { displayed, ref } = useTypewriter(lines, delay, speed);
  return (
    <div ref={ref} className="space-y-4">
      {lines.map((_, i) => (
        <p key={i} className="flex items-start gap-2 text-xs md:text-lg leading-relaxed tracking-wide min-h-[1.4em]">
          {speakers[i] && (
            <span className="font-bold shrink-0" style={{ color: speakerColors[i] }}>{speakers[i]}</span>
          )}
          <span>{displayed[i]}<span className="animate-pulse opacity-60">{displayed[i].length < lines[i].length && displayed[i] !== "" ? "▋" : ""}</span></span>
        </p>
      ))}
    </div>
  );
}

const btn3d = `
  relative inline-flex items-center gap-2 font-black uppercase tracking-widest
  transition-all duration-100 select-none
  active:[transform:translateY(4px)_translateX(1px)]
`;

// Shared Glassmorphism styles
const glassStyle = {
  background: "rgba(10, 10, 12, 0.7)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#0c0705] text-white font-mono flex flex-col lg:flex-row pb-20 lg:pb-0">
      
      {/* ── HEADER FOR MOBILE GLASS NAV BUTTONS ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">
       
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-white"
        >
          {sidebarOpen ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </div>

      {/* ── DESKTOP SIDEBAR / MOBILE DRAWER (GLASSMORPHISM) ── */}
      <aside 
        style={glassStyle}
        className={`
          fixed inset-y-0 left-0 z-40 w-72 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out
          lg:translate-x-0 shrink-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          mt-[65px] lg:mt-0 shadow-[20px_0_40px_rgba(0,0,0,0.5)]
        `}
      >
        <div className="space-y-8">
          <div className="hidden lg:block border-b border-white/10 pb-4">
            
           
          </div>

          <nav className="space-y-2">
            <p className="text-[11px] font-bold text-zinc-500 tracking-widest uppercase px-3 mb-3">Navigation</p>
            <a
              href="/"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 bg-red-500/20 text-red-400 border border-red-500/30"
            >
              <LuSwords size={16} /> Mission Logs
            </a>
            <a
              href="/resources"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 text-zinc-400 hover:bg-white/5"
            >
              <LuBookOpen size={16} /> Briefing Resources
            </a>
            <a
              href="/tasks"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 text-zinc-400 hover:bg-white/5"
            >
              <LuListTodo size={16} /> Target Tasks
            </a>
           
          </nav>
        </div>

        <div className="border-t border-white/5 pt-4 text-center">
          <p className="text-[10px] text-zinc-600 font-mono tracking-widest">SYSTEM STATUS: SECURE</p>
        </div>
      </aside>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="flex-1 w-full lg:w-[calc(100%-18rem)] lg:ml-72 relative min-h-screen pt-[65px] lg:pt-0">
        
        {/* ── MAIN MISSION BRIEFING (ALWAYS VISIBLE NOW) ── */}
        <div className="animate-fadeIn">
          <div className="relative min-h-screen w-full flex items-center p-4 md:px-16">
            <img
              src="/posterweek2.png"
              alt="Background Poster"
              className="absolute inset-0 w-full h-full object-cover object-center md:object-none z-0"
            />
            <div className="absolute inset-0 w-full h-full bg-black/50 md:bg-black/40 bg-gradient-to-t from-[#0c0705] via-transparent to-black/40 z-10" />

            <div className="relative z-20 flex flex-col gap-6 max-w-xl w-full">
              {/* ── HERO CARD WITH MASKED ANIMATED BORDER ── */}
              <div className="relative rounded-[40px] md:rounded-[48px] shadow-[0_0_35px_rgba(239,68,68,0.25)]">
                <div style={glassStyle} className="absolute inset-0 rounded-[40px] md:rounded-[48px] pointer-events-none" />
                
                {/* The Mask Layer ensuring gradient ONLY shows on the 1px border */}
                <div 
                  className="absolute inset-0 rounded-[40px] md:rounded-[48px] pointer-events-none overflow-hidden"
                  style={{
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                >
                  <div
                    className="absolute inset-[-200%] animate-spin z-0"
                    style={{ 
                      backgroundImage: "conic-gradient(from 0deg, transparent 30%, #ef4444 45%, #22c55e 55%, #06b6d4 65%, transparent 80%)",
                      animationDuration: "4s",
                      animationTimingFunction: "linear"
                    }}
                  />
                </div>

                <div className="relative z-10 w-full space-y-4 p-6 md:p-8 font-sans">
                  <h1 className="text-3xl md:text-5xl font-black tracking-wide text-white">WEEK 02:</h1>
                  <h1 className="text-3xl md:text-5xl text-red-500 font-[600] tracking-wide leading-tight">THE PLASTIC BOMB</h1>
                  
                  <p className="text-xs md:text-lg text-gray-300 leading-relaxed">
                    SnackCo just gave us exactly 60 days to fix our plastic packaging, or they pull their entire product line from our dark stores...
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById("mission-cards-anchor");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${btn3d} w-fit bg-orange-500 text-black text-lg md:text-xl px-6 py-3 rounded-full font-sans`}
                style={{
                  boxShadow: "0 6px 0 #92400e, 0 8px 16px rgba(0,0,0,0.5)",
                  transform: "translateY(0)",
                }}
                onMouseDown={e => (e.currentTarget.style.boxShadow = "0 2px 0 #92400e, 0 3px 6px rgba(0,0,0,0.4)")}
                onMouseUp={e => (e.currentTarget.style.boxShadow = "0 6px 0 #92400e, 0 8px 16px rgba(0,0,0,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 6px 0 #92400e, 0 8px 16px rgba(0,0,0,0.5)")}
              >
                Start adventure
                <LuSwords className="transition-transform duration-300 group-hover:rotate-12" size={20} />
              </button>
            </div>
          </div>

          <div id="mission-cards-anchor" className="relative min-h-screen w-full bg-gradient-to-b from-[#0c0705] via-[#040811] to-[#010206] px-4 md:px-16 py-24 z-20 overflow-hidden">
            <div className="absolute top-1/12 left-[-10%] w-[600px] h-[600px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/3 right-[-5%] w-[550px] h-[550px] bg-pink-500/20 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-12 left-1/3 w-[450px] h-[450px] bg-blue-700/10 blur-[120px] rounded-full pointer-events-none z-0" />
            
            <section className="max-w-4xl mx-auto relative z-10 space-y-16">

              {/* CARD 1 */}
              <SpinCard color="#ef4444" shadow="rgba(239,68,68,0.15)" speed="8s" gradient="conic-gradient(from 0deg, transparent 40%, #ef4444 50%, #f97316 60%, transparent 80%)">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 font-sans">
                  <AvatarBox src="/gmail.png" alt="gmail" accent="#ef4444" accent2="#f97316" fallback="CSCO Intel Image" colSpan="lg:col-span-5" order="order-1" />
                  <div className="lg:col-span-7 space-y-6 w-full text-left order-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2 text-xs md:text-lg tracking-wide">
                      <div className="space-y-1">
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Incoming Transmission</p>
                        <p className="text-gray-200">
                          <span className="text-zinc-500 font-bold">FROM:</span> <span className="font-semibold text-white">Vikram Shah</span>
                          <span className="text-zinc-400 text-xs font-light"> (Chief Supply Chain Officer, Sprint)</span>
                        </p>
                      </div>
                      <PulseBadge color="red" label="CRITICAL PRIORITY" />
                    </div>
                    <div style={glassStyle} className="p-4 rounded-2xl text-xs md:text-lg flex items-center gap-2">
                      <span className="text-red-500 font-black tracking-wider shrink-0">SUBJECT:</span>
                      <span className="text-gray-100 font-bold tracking-wide truncate">Code Red — SnackCo Ultimatum</span>
                    </div>
                    <div className="relative overflow-hidden pt-2">
                      <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-red-500 to-orange-500" />
                      <div className="pl-4 md:pl-6">
                        <TypewriterBlock
                          delay={600}
                          lines={[
                            "SnackCo just gave us exactly 60 days to fix our plastic packaging, or they pull their entire product line from our dark stores.",
                            "I need hard, verifiable data on our footprint and real, deployable solutions.",
                            "Do not give me wishful thinking or greenwashed PR.",
                          ]}
                          speakers={["", "", ""]}
                          speakerColors={["#f87171", "#f87171", "#fb923c"]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SpinCard>

              {/* CARD 2 */}
              <SpinCard color="#10b981" shadow="rgba(16,185,129,0.15)" speed="6s" gradient="conic-gradient(from 0deg, transparent 40%, #10b981 50%, #059669 60%, transparent 80%)">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                  <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                    <SectionHeader accent="#10b981" channel="> SECURE_CHANNEL_OPEN" from="GreenEdge Manager" tag="[ Pod Leader ]" tagColor="#059669" />
                    <ContextBar accent="#10b981" label="SUPPLY CHAIN AUDIT" />
                    <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                      <TypewriterBlock
                        delay={300}
                        lines={[
                          "I need to know exactly how much damage a single grocery bag is doing to the planet. Where do you even start calculating that when our data is this fragmented?",
                          "We start at the absolute source. Pull up the briefing on Life Cycle Assessments. You need to learn this systematic, scientific method for quantifying environmental impacts associated with a product throughout its entire existence.",
                          "Read the brief on Cradle-to-grave thinking to understand how to comprehensively track impacts from the initial acquisition of resources to final disposal.",
                        ]}
                        speakers={["[V.SHAH]:", "[MGR_01]:", "[MGR_01]:"]}
                        speakerColors={["#fb923c", "#10b981", "#10b981"]}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <a href="https://drive.google.com/file/d/1uUw-OuSB-qOhQNrx9vcljAKj_aNzgnSX/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#10b981" shadow="#065f46" icon={<LuFolderSearch size={15} />} label="Intro to LCA" />
                      </a>
                      <a href="https://drive.google.com/file/d/12Cr9k48ptHo3EGlL9EOOdTcUAxwxNP1a/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#10b981" shadow="#065f46" icon={<LuFolderSearch size={15} />} label="Cradle-to-Grave Analysis" />
                      </a>
                    </div>
                  </div>
                  <AvatarBox src="/vikram.png" alt="vikramc:\Users\Madaan INFOTECH\Downloads\vikram.png" accent="#10b981" accent2="#059669" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
                </div>
              </SpinCard>

              {/* CARD 3 */}
              <SpinCard color="#06b6d4" shadow="rgba(6,182,212,0.15)" speed="8s" gradient="conic-gradient(from 0deg, transparent 40%, #06b6d4 50%, #3b82f6 60%, transparent 80%)">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                  <AvatarBox src="/managerweek21.png" alt="Manager" accent="#06b6d4" accent2="#3b82f6" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1" rounded />
                  <div className="lg:col-span-7 space-y-6 w-full text-left order-2">
                    <SectionHeader accent="#06b6d4" channel="> STRATEGY_ALIGNMENT" from="Project Log" />
                    <ContextBar accent="#06b6d4" label="THE EMISSIONS LEDGER" />
                    <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                      <TypewriterBlock
                        delay={300}
                        lines={[
                          "Sprint's board only understands numbers, and right now, they are blind. We need to convert their chaotic plastic waste and delivery fleet operations into a standardized, undeniable metric.",
                          "Access the technical guide on Carbon Accounting. Read how to formally quantify and track the greenhouse gas emissions produced by an organization to establish a clear data baseline.",
                          "Dive deep into the emissions classifications. Categorize the emissions of Sprint's petrol delivery bikes, the dark store grid electricity, and their purchased plastic packaging into Scope 1, 2, or 3.",
                        ]}
                        speakers={["[MGR_01]:", "[MGR_01]:", "[MGR_01]:"]}
                        speakerColors={["#10b981", "#10b981", "#10b981"]}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      <a href="https://drive.google.com/file/d/1M66tyh-AYabr4Ksr97O6yU_NwmKFhoh1/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#06b6d4" shadow="#0e4d5f" icon={<LuGlobe size={15} />} label="Carbon Accounting" />
                      </a>
                      <a href="https://drive.google.com/file/d/1zbiuTt2tVnIKweLzJEWqTWQbibhMUP-o/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#06b6d4" shadow="#0e4d5f" icon={<LuGlobe size={15} />} label="Scope 1, 2, 3 Emissions" />
                      </a>
                    </div>
                  </div>
                </div>
              </SpinCard>

              {/* CARD 4 */}
              <SpinCard color="#a855f7" shadow="rgba(168,85,247,0.15)" speed="6s" gradient="conic-gradient(from 0deg, transparent 40%, #a855f7 50%, #ec4899 60%, transparent 80%)">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                  <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                    <SectionHeader accent="#a855f7" channel="> STRATEGY_ALIGNMENT" from="Project Log" />
                    <ContextBar accent="#a855f7" label="HOTSPOT IDENTIFICATION" />
                    <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                      <TypewriterBlock
                        delay={300}
                        lines={[
                          "Okay, we have the total footprint. It's massive and it's a liability. We only have the capital budget to fix one specific part of the supply chain right now. Which one do we target first?",
                          "This is where consulting adds lethal value. Read the methodology on identifying Environmental Hotspots. You must learn how to pinpoint the specific stage, process, or material in a product's life cycle that creates the largest environmental impact.",
                          "Then, read the framework on Comparing Alternatives. We will use this exact method to objectively compare the total impact of single-use plastic bags versus reusable glass or cloth totes over a defined period.",
                        ]}
                        speakers={["[V.SHAH]:", "[MGR_01]:", "[MGR_01]:"]}
                        speakerColors={["#fb923c", "#10b981", "#10b981"]}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href="https://drive.google.com/file/d/14UPLZ6XijwydAThJdpsKYXLh-9o_gDMx/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#a855f7" shadow="#4c1d95" icon={<LuBrainCircuit size={15} />} label="Locating Hotspots" />
                      </a>
                      <a href="https://drive.google.com/file/d/1agzPqR0vwC1XodyIl87XPGpIKAxme4up/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#a855f7" shadow="#4c1d95" icon={<LuBrainCircuit size={15} />} label="Comparing Alternatives" />
                      </a>
                    </div>
                  </div>
                  <AvatarBox src="/managerweek22.png" alt="Vikram Shah" accent="#a855f7" accent2="#ec4899" fallback="ID: V.SHAH" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
                </div>
              </SpinCard>

              {/* CARD 5 */}
              <SpinCard color="#ec4899" shadow="rgba(236,72,153,0.15)" speed="6s" gradient="conic-gradient(from 0deg, transparent 40%, #ec4899 50%, #f43f5e 60%, transparent 80%)">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                  <AvatarBox src="/priyaweek2.png" alt="Priya Nair" accent="#ec4899" accent2="#f43f5e" fallback="ID: P.NAIR" colSpan="lg:col-span-5" order="order-1" rounded />
                  <div className="lg:col-span-7 space-y-6 w-full text-left order-2">
                    <SectionHeader accent="#ec4899" channel="> EXECUTIVE_ALIGNMENT" from="Project Log" />
                    <ContextBar accent="#ec4899" label="THE CIRCULAR PIVOT" />
                    <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                      <TypewriterBlock
                        delay={300}
                        lines={[
                          "So we found the hotspots in our packaging. Now what? Do we just procure thinner plastic bags to save weight?",
                          "Thinner plastic is a weak, linear solution to a fundamentally circular problem. Open the briefing on the Circular Economy. Read the overview on the traditional 'Take-Make-Dispose' linear economy and deeply understand why relying on endless resource extraction is inherently unsustainable.",
                          "Study the Circular economy principles, specifically focusing on designing out waste and pollution from the absolute start. Finally, review the hierarchy of Reuse, Repair, and Recycling. Note that recycling is strictly considered the last option.",
                        ]}
                        speakers={["[P.NAIR]:", "[MGR_01]:", "[MGR_01]:"]}
                        speakerColors={["#f472b6", "#10b981", "#10b981"]}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href="https://drive.google.com/file/d/1AnA7LjEoyXqEBgkBvneQ0m_yNImncKIq/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#ec4899" shadow="#831843" icon={<LuGlobe size={15} />} label="Linear vs Circular Models" />
                      </a>
                      <a href="https://drive.google.com/file/d/12A-l73fULUY_txcjY-LkoWC1f94SqcYi/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                        <Btn3D color="#ec4899" shadow="#831843" icon={<LuFolderSearch size={15} />} label="Reuse Hierarchy" />
                      </a>
                    </div>
                  </div>
                </div>
              </SpinCard>

              {/* CARD 6 */}
              <SpinCard color="#ef4444" shadow="rgba(239,68,68,0.2)" speed="5s" gradient="conic-gradient(from 0deg, transparent 40%, #ef4444 50%, #b91c1c 60%, transparent 80%)">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                  <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-red-500/20 pb-4 gap-2 text-xs md:text-lg tracking-wide">
                      <div className="space-y-1">
                        <p className="text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">&gt; MISSION_DIRECTIVE</p>
                        <p className="text-gray-200">
                          <span className="text-red-600 font-bold">FROM:</span> <span className="font-semibold text-white">GreenEdge Manager</span>
                        </p>
                      </div>
                      <span className="inline-block bg-red-950/80 border border-red-500 text-red-400 font-black tracking-widest uppercase text-[10px] px-3 py-1 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse">
                        FINAL DOSSIER
                      </span>
                    </div>
                    <div style={glassStyle} className="p-4 text-xs md:text-lg flex items-center gap-2 rounded-xl">
                      <span className="text-red-500 font-black tracking-wider shrink-0">&gt; DEADLINE:</span>
                      <span className="text-gray-100 font-bold tracking-wide truncate">SNACKCO ULTIMATUM: 56 DAYS REMAINING</span>
                    </div>
                    <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                      <TypewriterBlock
                        delay={300}
                        lines={[
                          "Vikram is standing by, and SnackCo's procurement head is demanding an answer. You have all the data.",
                          "Using your LCA analysis to pinpoint the hotspots and the Circular Economy principles to design the intervention, you must draft a formal, executive-level memo to the CSCO.",
                          "Outline a strictly costed, strategic plan to replace Sprint's single-use plastic packaging. Justify the financial trade-offs, detail the precise Scope 3 emission reductions, and finalize the document for board review.",
                          "Upload the memo to the secure channel before Sunday midnight. If the math fails, Sprint loses 12% of their GMV.",
                        ]}
                        speakers={["[MGR_01]:", "[MGR_01]:", "[MGR_01]:", "[MGR_01]:"]}
                        speakerColors={["#10b981", "#10b981", "#10b981", "#ef4444"]}
                      />
                    </div>
                    <div className="pt-4">
                      <a
                        href="/tasks"
                        className="relative w-full flex items-center justify-center gap-3 px-6 py-5 text-lg font-black uppercase tracking-[0.2em] text-white rounded-xl transition-all duration-100 hover:opacity-90"
                        style={{
                          background: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)",
                          boxShadow: "0 8px 0 #1a0000, 0 12px 24px rgba(239,68,68,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                          border: "1px solid rgba(239,68,68,0.4)",
                        }}
                      >
                        <LuGlobe size={20} className="text-red-400 shrink-0" />
                        Assignments and submissions
                        <span className="absolute right-4 text-red-500 text-lg font-black animate-pulse">→</span>
                      </a>
                    </div>
                  </div>
                  <AvatarBox src="/managerweek23.png" alt="Manager" accent="#ef4444" accent2="#f97316" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
                </div>
              </SpinCard>

            </section>
          </div>
        </div>

      </main>

      {/* ── MOBILE SYSTEM NAVIGATION FOOTER BLOCK ── */}
      <nav 
        style={glassStyle}
        className="lg:hidden fixed bottom-4 left-4 right-4 z-50 h-16 rounded-2xl flex items-center justify-around px-2 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
      >
        <a 
          href="/" 
          className="flex flex-col items-center justify-center gap-1 w-14 h-12 rounded-xl transition-all text-red-400 bg-red-500/10"
        >
          <LuSwords size={18} />
          <span className="text-[8px] font-bold uppercase tracking-wider">Mission</span>
        </a>
        <a 
          href="/resources" 
          className="flex flex-col items-center justify-center gap-1 w-14 h-12 rounded-xl transition-all text-zinc-500 hover:bg-emerald-500/10 hover:text-emerald-400"
        >
          <LuBookOpen size={18} />
          <span className="text-[8px] font-bold uppercase tracking-wider">Briefs</span>
        </a>
        <a 
          href="/tasks" 
          className="flex flex-col items-center justify-center gap-1 w-14 h-12 rounded-xl transition-all text-zinc-500 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          <LuListTodo size={18} />
          <span className="text-[8px] font-bold uppercase tracking-wider">Tasks</span>
        </a>
        <a 
          href="/tasks" 
          className="flex flex-col items-center justify-center gap-1 w-14 h-12 rounded-xl transition-all text-zinc-500 hover:bg-purple-500/10 hover:text-purple-400"
        >
          <LuUploadCloud size={18} />
          <span className="text-[8px] font-bold uppercase tracking-wider">Upload</span>
        </a>
      </nav>
    </div>
  );
}

/* ──────────────── REUSABLE SUB-COMPONENTS ──────────────── */

function SpinCard({ color, shadow, speed, gradient, children }) {
  return (
    <div className="relative rounded-[40px] md:rounded-[60px]" style={{ boxShadow: `0 0 50px ${shadow}` }}>
      {/* Glass background */}
      <div style={glassStyle} className="absolute inset-0 rounded-[40px] md:rounded-[60px] pointer-events-none" />
      
      {/* Animated Border - Masked to prevent bleeding into the content */}
      <div
        className="absolute inset-0 rounded-[40px] md:rounded-[60px] pointer-events-none overflow-hidden"
        style={{
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        <div
          className="absolute inset-[-200%] animate-spin z-0"
          style={{
            backgroundImage: gradient,
            animationDuration: speed,
            animationTimingFunction: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full p-6 md:p-14">
        {children}
      </div>
    </div>
  );
}

function AvatarBox({ src, alt, accent, accent2, fallback, colSpan, order, rounded }) {
  return (
    // FIX 1: Changed `lg:p-6` to `lg:p-2` (or even lg:p-0). This removes the invisible margins squeezing your box on desktop.
    <div className={`${colSpan} flex items-center justify-center w-full p-2 lg:p-2 ${order}`}>
      <div
        // Kept aspect-square so it remains a perfect box, scaling naturally with the column width.
        className="w-full aspect-square overflow-hidden p-4 shadow-2xl relative group/avatar"
        style={{
          background: "rgba(20, 20, 25, 0.6)",
          border: `1px solid ${accent}4d`,
          borderRadius: rounded ? "40px" : "24px",
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain transition duration-700 ease-out group-hover/avatar:scale-105 filter brightness-110 contrast-125 ${rounded ? "rounded-[32px]" : ""}`}
          onError={e => {
            e.currentTarget.style.display = "none";
            const label = e.currentTarget.parentElement?.querySelector(".fallback-label");
            if (label) label.classList.remove("hidden");
          }}
        />
        <div className="fallback-label hidden absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-center px-4" style={{ color: `${accent}80` }}>
          [ {fallback} ]
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ accent, channel, from, tag, tagColor }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2 text-xs md:text-lg tracking-wide" style={{ borderBottom: `1px solid ${accent}33` }}>
      <div className="space-y-1">
        <p className="font-bold uppercase tracking-widest text-[10px] md:text-xs" style={{ color: accent }}>{channel}</p>
        <p className="text-gray-200">
          <span className="font-bold" style={{ color: accent }}>FROM:</span>{" "}
          <span className="font-semibold text-white">{from}</span>
          {tag && <span className="text-zinc-500 text-[10px] uppercase ml-2" style={tagColor ? { color: tagColor } : {}}>{tag}</span>}
        </p>
      </div>
    </div>
  );
}

function ContextBar({ accent, label }) {
  return (
    <div className="p-4 text-xs md:text-lg flex items-center gap-2 rounded-xl" style={{ borderLeft: `2px solid ${accent}`, background: "rgba(255,255,255,0.02)" }}>
      <span className="font-black tracking-wider shrink-0" style={{ color: accent }}>&gt; CONTEXT:</span>
      <span className="text-gray-100 font-bold tracking-wide truncate">{label}</span>
    </div>
  );
}

function Btn3D({ color, shadow, icon, label }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="flex items-center justify-start gap-3 px-4 py-3 text-xs font-black uppercase tracking-widest transition-all duration-75 rounded-xl cursor-pointer w-full"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}40`,
        color: color,
        boxShadow: `0 4px 0 ${shadow}, inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}
      onMouseDown={e => {
        e.currentTarget.style.boxShadow = `0 1px 0 ${shadow}`;
        e.currentTarget.style.transform = "translateY(3px)";
      }}
      onMouseUp={e => {
        e.currentTarget.style.boxShadow = `0 4px 0 ${shadow}, inset 0 1px 0 rgba(255,255,255,0.05)`;
        e.currentTarget.style.transform = "translateY(0)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = `0 4px 0 ${shadow}, inset 0 1px 0 rgba(255,255,255,0.05)`;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {icon}
      <span className="text-left truncate">{label}</span>
    </div>
  );
}

function PulseBadge({ color, label }) {
  const colorMap = {
    red: { bg: "bg-red-950/40", border: "border-red-500/30", text: "text-red-400" }
  };
  const theme = colorMap[color] || colorMap.red;
  return (
    <span className={`inline-block ${theme.bg} border ${theme.border} ${theme.text} font-black tracking-widest uppercase text-[10px] px-3 py-1 rounded-md shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse`}>
      {label}
    </span>
  );
}