"use client";
import React, { useRef } from "react";
import { 
  BookOpen, 
  ListTodo, 
  Upload, 
  MessageSquare,
  Globe as LuGlobe,
  FolderSearch as LuFolderSearch,
  Cpu as LuBrainCircuit,
  CheckSquare as LuCheckSquare,
  AlertTriangle as LuAlertTriangle
} from 'lucide-react';

/* ──────────────── HOOKS & HELPERS ──────────────── */
// Removed useTypewriter hook

function TextBlock({ lines, speakers, speakerColors }) {
  return (
    <div className="space-y-4">
      {lines.map((line, i) => (
        <p key={i} className="flex items-start gap-2 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide min-h-[1.4em]">
          {speakers && speakers[i] && (
            <span className="font-bold shrink-0" style={{ color: speakerColors[i] }}>{speakers[i]}</span>
          )}
          <span>{line}</span>
        </p>
      ))}
    </div>
  );
}

const glassStyle = {
  background: "rgba(10, 10, 12, 0.7)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

/* ──────────────── MAIN COMPONENT ──────────────── */
export default function InteractiveESGModule() {
  const btns = [
    { id: 4, label: 'Discussion', icon: MessageSquare, url: '#', highlighted: true },
    { id: 1, label: 'Resources', icon: BookOpen, url: '/resources' },
    { id: 2, label: 'Tasks', icon: ListTodo, url: '/tasks' },
    { id: 3, label: 'Submissions', icon: Upload, url: '/tasks' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col font-mono text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-dvh w-full shrink-0 font-sans">
        <img
          src="/poster3.png"
          alt="poster3"
          className="w-full h-full object-cover object-top opacity-80"
        />

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.95)_100%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 z-10 pointer-events-none">
          <h2 className="text-blue-400 font-bold tracking-[0.25em] text-sm md:text-lg mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">
            Week 03 Corporate Simulator
          </h2>
          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-7xl text-center uppercase tracking-widest leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] max-w-5xl">
            Strategy, Materiality, <br className="hidden md:block" /> & Public Scrutiny
          </h1>
        </div>
      </div>

      {/* --- SIDEBAR / BOTTOM NAV --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 md:bottom-auto bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] rounded-full py-3 px-6 md:py-8 md:px-4 flex flex-row md:flex-col justify-between md:justify-start gap-2 md:gap-8 w-[90%] max-w-[400px] md:w-auto md:max-w-none z-50">
        {btns.map((btn) => {
          const Icon = btn.icon; 
          return (
            <a key={btn.id} href={btn.url} className="flex flex-col items-center gap-1 md:gap-2 group cursor-pointer w-1/4 md:w-auto">
              <div className={`p-2.5 md:p-3 rounded-full transition-all duration-300 ${
                btn.highlighted ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/10 group-hover:bg-blue-500' 
              }`}>
                <Icon size={18} className={`md:w-[20px] md:h-[20px] transition-colors duration-300 ${btn.highlighted ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
              </div>
              <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 text-center ${
                btn.highlighted ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-300'
              }`}>
                {btn.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* --- MAIN NARRATIVE CARDS --- */}
      <div className="relative w-full bg-gradient-to-b from-black via-[#040811] to-[#010206] z-10 flex flex-col items-center justify-center pt-24 pb-32 md:pb-24 px-4 md:px-16 overflow-hidden">
        
        {/* Decorative Background Blurs */}
        <div className="absolute top-1/12 left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/3 right-[-5%] w-[550px] h-[550px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <section className="max-w-4xl mx-auto relative z-10 space-y-16 pl-0 lg:pl-16">
          
          {/* --- WEEK 03 START --- */}
          <div className="text-center py-8">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-white/90">Week 03: ESG Strategy</h2>
            <p className="text-blue-400/80 uppercase tracking-widest mt-2 text-sm">Navigating reporting frameworks, stakeholder prioritization, and greenwashing.</p>
          </div>

          {/* CARD 1: ARYAN MEHTA PANIC */}
          <SpinCard color="#ef4444" shadow="rgba(239,68,68,0.15)" speed="8s" gradient="conic-gradient(from 0deg, transparent 40%, #ef4444 50%, #f97316 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 font-sans">
              <AvatarBox src="/gmail.png" alt="Aryan CEO" accent="#ef4444" accent2="#f97316" fallback="ID: CEO_AM" colSpan="lg:col-span-5" order="order-1" />
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2 text-xs md:text-sm tracking-wide">
                  <div className="space-y-1">
                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">INBOX: MARKET THREAT DETECTED</p>
                    <p className="text-gray-200">
                      <span className="text-zinc-500 font-bold">FROM:</span> <span className="font-semibold text-white">Aryan Mehta</span>
                      <span className="text-zinc-400 text-xs font-light"> (CEO, Sprint)</span>
                    </p>
                  </div>
                  <PulseBadge color="red" label="URGENT" />
                </div>
                <div style={glassStyle} className="p-4 rounded-2xl text-xs md:text-sm flex items-center gap-2">
                  <span className="text-red-500 font-black tracking-wider shrink-0">SUBJECT:</span>
                  <span className="text-gray-100 font-bold tracking-wide truncate">Instantly’s New Campaign</span>
                </div>
                <div className="relative overflow-hidden pt-2">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-red-500 to-orange-500" />
                  <div className="pl-4 md:pl-6">
                    <TextBlock
                      lines={[
                        "Have you seen the billboards? Instantly just launched a nationwide campaign claiming their entire 10-minute delivery network is '100% Eco-Friendly' and 'Carbon Neutral.'",
                        "We are losing market share by the hour. I want our PR team to launch a counter-campaign immediately using the packaging data you collected last week.",
                        "Give me some green metrics to blast out."
                      ]}
                      speakers={["", "", ""]}
                      speakerColors={["#f87171", "#f87171", "#fb923c"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SpinCard>

          {/* CARD 2: GREENEDGE MANAGER - GREENWASHING */}
          <SpinCard color="#10b981" shadow="rgba(16,185,129,0.15)" speed="6s" gradient="conic-gradient(from 0deg, transparent 40%, #10b981 50%, #059669 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                <SectionHeader accent="#10b981" channel="> CLIENT ESCALATION" from="GreenEdge Manager" tag="[ Strategy Pod ]" tagColor="#059669" />
                <ContextBar accent="#10b981" label="AVOIDING REGULATORY BACKLASH" />
                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "Aryan is panicking and about to make a fatal mistake. If he launches unverified sustainability claims to fight Instantly, the regulators and GreenBridge Capital will tear Sprint apart. We need to expose the competitor's lies and teach the board how real ESG reporting works.",
                      "First, you need to understand what constitutes a false claim. Open the asset on Greenwashing. You must learn the primary warning signs: vague language like 'eco-friendly', hidden trade-offs where a company focuses on a minor green attribute while ignoring massive systemic pollution, and a lack of third-party verification.",
                      "To prove to Aryan that we don't just rely on PR, you need to understand how the financial markets actually evaluate corporate claims. Read the dossier on ESG Frameworks. Understand how Environmental, Social, and Governance metrics work, and familiarize yourself with standardized frameworks like GRI, SASB, and TCFD that provide consistent, verifiable data to investors."
                    ]}
                    speakers={["[MGR_01]:", "[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#10b981", "#10b981", "#10b981"]}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <a href="https://drive.google.com/file/d/1irRumvd6zKGRO0hYc7ptlxpg-IN7JCGy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#10b981" shadow="#065f46" icon={<LuAlertTriangle size={15} />} label="📊 ASSET: Greenwashing & False Claims" />
                  </a>
                  <a href="https://drive.google.com/file/d/1jAkmeBx6394bWMxQ7qw2VYvtJbQxio9t/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#10b981" shadow="#065f46" icon={<LuFolderSearch size={15} />} label="📄 DOSSIER: ESG Fundamentals & Frameworks" />
                  </a>
                </div>
              </div>
              <AvatarBox src="/managerweek21.png" alt="Manager" accent="#10b981" accent2="#059669" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
            </div>
          </SpinCard>

          {/* CARD 3: MINOR ASSIGNMENT 1 */}
          <SpinCard color="#06b6d4" shadow="rgba(6,182,212,0.15)" speed="8s" gradient="conic-gradient(from 0deg, transparent 40%, #06b6d4 50%, #3b82f6 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <AvatarBox src="/managerweek23.png" alt="Manager" accent="#06b6d4" accent2="#3b82f6" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1" rounded />
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2">
                <SectionHeader accent="#06b6d4" channel="> MANAGER DIRECTIVE" from="GreenEdge Manager" />
                <ContextBar accent="#06b6d4" label="THE GREENWASHING AUDIT (MONDAY EOD)" />
                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "It is time to neutralize the threat. Your first directive is to analyze Instantly's '100% Carbon Neutral Delivery' claim.",
                      "You must identify two specific 'Sins of Greenwashing' present in their marketing and submit a brief paragraph to Aryan explaining exactly why this campaign represents a massive regulatory liability.",
                      "Do not let him release our PR."
                    ]}
                    speakers={["[MGR_01]:", "[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#06b6d4", "#06b6d4", "#ef4444"]}
                  />
                </div>
                <div className="pt-4">
                  <a href="https://drive.google.com/file/d/1_jzmFEZYqJN70xpizhOMpkYNMpAlZjXw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#06b6d4" shadow="#0e4d5f" icon={<LuCheckSquare size={15} />} label="Minor Assignment: The Greenwashing Audit" />
                  </a>
                </div>
              </div>
            </div>
          </SpinCard>

          {/* CARD 4: PRIYA NAIR & MATERIALITY */}
          <SpinCard color="#a855f7" shadow="rgba(168,85,247,0.15)" speed="6s" gradient="conic-gradient(from 0deg, transparent 40%, #a855f7 50%, #ec4899 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                <SectionHeader accent="#a855f7" channel="> EXECUTIVE ALIGNMENT" from="Priya Nair & Manager" />
                <ContextBar accent="#a855f7" label="PRIORITIZING THE CRISIS" />
                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "Okay, Aryan is backing down from the PR stunt. But GreenBridge Capital is sending in their auditors next week. We have gig-worker safety issues, plastic waste, dark-store emissions, and supply chain threats. We cannot fix them all simultaneously. What do we actually prioritize?",
                      "Priya is right. Treating a paper recycling program with the same weight as gig-worker fatalities is amateurish and will instantly spook institutional investors. You need to deploy a Materiality Assessment. Learn how to use the two axes: Stakeholder Expectations (importance to investors and communities) and Business Impact (risks to revenue and operations).",
                      "Before you map their priorities, you must also quantify the overarching climate risk dragging down their valuation. Review the difference between Physical Risks (acute events like floods destroying dark-store infrastructure) and Transition Risks (upcoming carbon taxes and policy shifts)."
                    ]}
                    speakers={["[P.NAIR]:", "[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#f472b6", "#10b981", "#10b981"]}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="https://drive.google.com/file/d/1baDzzwzpyMVLZsggFOU9f8rZIGxdMLds/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#a855f7" shadow="#4c1d95" icon={<LuBrainCircuit size={15} />} label="🧠 ASSET: The Materiality Assessment" />
                  </a>
                  <a href="https://drive.google.com/file/d/1O6IqKA2xzGrX8vkjShID4IhDsELijda7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#a855f7" shadow="#4c1d95" icon={<LuGlobe size={15} />} label="🌍 DOSSIER: Understanding Climate Risk" />
                  </a>
                </div>
              </div>
              <AvatarBox src="/priyanair.png" alt="Priya Nair" accent="#a855f7" accent2="#ec4899" fallback="ID: P.NAIR" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
            </div>
          </SpinCard>

          {/* CARD 5: FINAL DELIVERABLE WEEK 3 */}
          <SpinCard color="#ef4444" shadow="rgba(239,68,68,0.2)" speed="5s" gradient="conic-gradient(from 0deg, transparent 40%, #ef4444 50%, #b91c1c 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-red-500/20 pb-4 gap-2 text-xs md:text-sm tracking-wide">
                  <div className="space-y-1">
                    <p className="text-red-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">&gt; MISSION DIRECTIVE: THE MATERIALITY MATRIX</p>
                    <p className="text-gray-200">
                      <span className="text-red-600 font-bold">FROM:</span> <span className="font-semibold text-white">GreenEdge Manager</span>
                    </p>
                  </div>
                  <span className="inline-block bg-red-950/80 border border-red-500 text-red-400 font-black tracking-widest uppercase text-[10px] px-3 py-1 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse">
                    SUNDAY EOD
                  </span>
                </div>
                
                <div style={glassStyle} className="p-4 text-xs md:text-sm text-gray-300 italic border-l-2 border-red-500/50">
                  <p>The UI dashboard flashes red, locking in the Friday timeline. The raw data from Sprint's internal operations sits fragmented on the screen. The intern must synthesize the chaos into a structured executive document.</p>
                </div>

                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "GreenBridge Capital requires a formalized overview of Sprint's most critical sustainability risks.",
                      "You must plot five distinct sustainability issues on a Materiality Matrix (Stakeholder Concern vs. Business Impact).",
                      "Once plotted, select the single most 'Material' issue in the top-right quadrant and write a one-paragraph justification explaining why it must be Sprint's #1 ESG priority.",
                      "Upload the Matrix to the secure channel."
                    ]}
                    speakers={["[MGR_01]:", "[MGR_01]:", "[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#10b981", "#10b981", "#10b981", "#ef4444"]}
                  />
                </div>
                <div className="pt-4">
                  <a
                    href="https://drive.google.com/file/d/10ONabsfHO75j6aq5C1dJ18cgwHT77McU/view?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative w-full flex items-center justify-center gap-3 px-6 py-5 text-sm md:text-lg font-black uppercase tracking-[0.2em] text-white rounded-xl transition-all duration-100 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)",
                      boxShadow: "0 8px 0 #1a0000, 0 12px 24px rgba(239,68,68,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                      border: "1px solid rgba(239,68,68,0.4)",
                    }}
                  >
                    <Upload size={20} className="text-red-400 shrink-0" />
                    Major Assignment: The Materiality Matrix
                    <span className="absolute right-4 text-red-500 text-lg font-black animate-pulse">→</span>
                  </a>
                </div>
              </div>
              <AvatarBox src="/managerweek22.png" alt="Manager" accent="#ef4444" accent2="#f97316" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
            </div>
          </SpinCard>

        </section>
      </div>

    </div>
  );
}

/* ──────────────── REUSABLE SUB-COMPONENTS ──────────────── */
function SpinCard({ color, shadow, speed, gradient, children }) {
  return (
    <div className="relative rounded-[40px] md:rounded-[60px]" style={{ boxShadow: `0 0 50px ${shadow}` }}>
      <div style={glassStyle} className="absolute inset-0 rounded-[40px] md:rounded-[60px] pointer-events-none" />
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
      <div className="relative z-10 w-full p-6 md:p-14">
        {children}
      </div>
    </div>
  );
}

function AvatarBox({ src, alt, accent, accent2, fallback, colSpan, order, rounded }) {
  return (
    <div className={`${colSpan} flex items-center justify-center w-full p-2 lg:p-2 ${order}`}>
      <div
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
    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2 text-xs md:text-sm tracking-wide" style={{ borderBottom: `1px solid ${accent}33` }}>
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
    <div className="p-4 text-xs md:text-sm flex items-center gap-2 rounded-xl" style={{ borderLeft: `2px solid ${accent}`, background: "rgba(255,255,255,0.02)" }}>
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