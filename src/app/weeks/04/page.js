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
  AlertTriangle as LuAlertTriangle,
  TrendingUp as LuTrendingUp,
  Map as LuMap
} from 'lucide-react';

/* ──────────────── CENTRALIZED LINKS OBJECT ──────────────── */
// Just paste your Google Drive or document links in the empty quotes below
const RESOURCE_LINKS = {
  supplyChainDossier: "https://drive.google.com/file/d/13huTSZ5C6k-Dq83r_k-b7JwK_BXjKWmM/view?usp=sharing", 
  riskIdentificationMinor: "", 
  sustainableFinanceAsset: "", 
  emergingTrendsDossier: "https://drive.google.com/file/d/1ZgUhOtEqXmI-Uc1pX0YibTmHxh-Y8Ggn/view?usp=sharing", 
  goalSettingDossier: "https://drive.google.com/file/d/16eoIJCCK59uDag-GfR0qHLcop5U2Avxs/view?usp=sharing",
  roadmapMajor: "" 
};

/* ──────────────── HOOKS & HELPERS ──────────────── */
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
export default function InteractiveESGModuleWeek4() {
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
          src="/poster4.png" // Blank as requested for missing imagery
          alt="poster4"
          className="w-full h-full object-cover object-top opacity-80"
        />

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.95)_100%)]"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 z-10 pointer-events-none">
          <h2 className="text-yellow-400 font-bold tracking-[0.25em] text-sm md:text-lg mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">
            Week 04 Corporate Simulator
          </h2>
          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-7xl text-center uppercase tracking-widest leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] max-w-5xl">
            Designing Solutions & <br className="hidden md:block" /> Strategy Roadmaps
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
                btn.highlighted ? 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'bg-white/10 group-hover:bg-yellow-500' 
              }`}>
                <Icon size={18} className={`md:w-[20px] md:h-[20px] transition-colors duration-300 ${btn.highlighted ? 'text-black' : 'text-gray-300 group-hover:text-black'}`} />
              </div>
              <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-colors duration-300 text-center ${
                btn.highlighted ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-300'
              }`}>
                {btn.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* --- MAIN NARRATIVE CARDS --- */}
      <div className="relative w-full bg-gradient-to-b from-black via-[#0a0704] to-[#050301] z-10 flex flex-col items-center justify-center pt-24 pb-32 md:pb-24 px-4 md:px-16 overflow-hidden">
        
        {/* Decorative Background Blurs */}
        <div className="absolute top-1/12 left-[-10%] w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/3 right-[-5%] w-[550px] h-[550px] bg-yellow-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-orange-400/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <section className="max-w-4xl mx-auto relative z-10 space-y-16 pl-0 lg:pl-16">
          
          {/* --- WEEK 04 START --- */}
          <div className="text-center py-8">
            <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-white/90">Week 04: Designing Solutions</h2>
            <p className="text-yellow-400/80 uppercase tracking-widest mt-2 text-sm">Supply chain ethics, long-term implementation, and sustainable finance.</p>
          </div>

          {/* CARD 1: VIKRAM SHAH SUPPLY CHAIN */}
          <SpinCard color="#eab308" shadow="rgba(234,179,8,0.15)" speed="8s" gradient="conic-gradient(from 0deg, transparent 40%, #eab308 50%, #ca8a04 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 font-sans">
              <AvatarBox src="/gmail.png" alt="Vikram Shah CSCO" accent="#eab308" accent2="#ca8a04" fallback="ID: CSCO_VS" colSpan="lg:col-span-5" order="order-1" />
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2 text-xs md:text-sm tracking-wide">
                  <div className="space-y-1">
                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">INBOX: SUPPLY CHAIN VULNERABILITY</p>
                    <p className="text-gray-200">
                      <span className="text-zinc-500 font-bold">FROM:</span> <span className="font-semibold text-white">Vikram Shah</span>
                      <span className="text-zinc-400 text-xs font-light"> (CSCO, Sprint)</span>
                    </p>
                  </div>
                  <PulseBadge color="amber" label="URGENT" />
                </div>
                <div style={glassStyle} className="p-4 rounded-2xl text-xs md:text-sm flex items-center gap-2">
                  <span className="text-yellow-500 font-black tracking-wider shrink-0">SUBJECT:</span>
                  <span className="text-gray-100 font-bold tracking-wide truncate">Procurement Expansion</span>
                </div>
                <div className="relative overflow-hidden pt-2">
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-yellow-500 to-amber-500" />
                  <div className="pl-4 md:pl-6">
                    <TextBlock
                      lines={[
                        "To offset the costs of our new packaging strategy, my team is expanding our supplier base to source cheaper electronic components for our automated dark-store warehousing systems.",
                        "We selected vendors entirely based on price and speed.",
                        "Let me know if this creates any compliance issues."
                      ]}
                      speakers={["", "", ""]}
                      speakerColors={["#fde047", "#fde047", "#eab308"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SpinCard>

          {/* CARD 2: GREENEDGE MANAGER - PROCUREMENT AUDIT */}
          <SpinCard color="#ca8a04" shadow="rgba(202,138,4,0.15)" speed="6s" gradient="conic-gradient(from 0deg, transparent 40%, #ca8a04 50%, #a16207 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                <SectionHeader accent="#ca8a04" channel="> CLIENT MEETING TRANSCRIPT" from="GreenEdge Manager" tag="[ Procurement Audit ]" tagColor="#a16207" />
                <ContextBar accent="#ca8a04" label="SUPPLIER SUSTAINABILITY" />
                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "Read the dossier on Sustainable Supply Chains. You must understand that sustainability extends far beyond Sprint's own dark stores.",
                      "Master the concepts of Responsible Sourcing and Supplier Sustainability, including the auditing of third-party vendors for human rights violations, deforestation, and fair wages."
                    ]}
                    speakers={["[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#ca8a04", "#ca8a04"]}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  <a href={RESOURCE_LINKS.supplyChainDossier} target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#ca8a04" shadow="#713f12" icon={<LuFolderSearch size={15} />} label="🔬 DOSSIER: Sustainable Supply Chains & Ethical Procurement" />
                  </a>
                </div>
              </div>
              <AvatarBox src="/managerweek23.png" alt="Manager" accent="#ca8a04" accent2="#a16207" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
            </div>
          </SpinCard>

          {/* CARD 3: MINOR ASSIGNMENT 1 (WEEK 4) */}
          <SpinCard color="#d97706" shadow="rgba(217,119,6,0.15)" speed="8s" gradient="conic-gradient(from 0deg, transparent 40%, #d97706 50%, #eab308 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <AvatarBox src="/managerweek22.png" alt="Manager" accent="#d97706" accent2="#eab308" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1" rounded />
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2">
                <SectionHeader accent="#d97706" channel="> MANAGER DIRECTIVE" from="GreenEdge Manager" />
                <ContextBar accent="#d97706" label="RISK IDENTIFICATION (MONDAY EOD)" />
                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "Intercept Vikram's procurement strategy.",
                      "Your directive is to identify one severe Environmental Risk and one severe Social Risk associated with the upstream extraction and procurement of raw materials for electronics.",
                      "Submit your findings as a two-point hazard brief to the CSCO immediately."
                    ]}
                    speakers={["[MGR_01]:", "[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#d97706", "#d97706", "#b45309"]}
                  />
                </div>
                <div className="pt-4">
                  <a href={RESOURCE_LINKS.riskIdentificationMinor} target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#d97706" shadow="#78350f" icon={<LuCheckSquare size={15} />} label="Minor Assignment: Risk Identification" />
                  </a>
                </div>
              </div>
            </div>
          </SpinCard>

          {/* CARD 4: ARYAN MEHTA & FINANCING THE PIVOT */}
          <SpinCard color="#f59e0b" shadow="rgba(245,158,11,0.15)" speed="6s" gradient="conic-gradient(from 0deg, transparent 40%, #f59e0b 50%, #ca8a04 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                <SectionHeader accent="#f59e0b" channel="> EXECUTIVE ALIGNMENT" from="Aryan Mehta & Manager" />
                <ContextBar accent="#f59e0b" label="FINANCING THE PIVOT" />
                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "I see the risks. I see the materiality matrix. But electrifying our delivery fleet and overhauling our supply chain will cost hundreds of crores. How do we even finance a transition this massive without bankrupting the company?",
                      "This is where we secure the company's future. Open the brief on Sustainable Finance. Learn how global capital is shifting. You need to understand ESG Investing and how Green Bonds function as fixed-income securities earmarked specifically for climate and environmental projects.",
                      "Finally, review the horizon of sustainability. Understand the macro shifts of the Energy Transition (fossil fuels to renewables) and Climate Adaptation (building resilient infrastructure to cope with unavoidable climate impacts). We will use these trends to justify our roadmap to the board."
                    ]}
                    speakers={["[CEO_AM]:", "[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#fbbf24", "#ca8a04", "#ca8a04"]}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href={RESOURCE_LINKS.sustainableFinanceAsset} target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#f59e0b" shadow="#78350f" icon={<LuTrendingUp size={15} />} label="📈 ASSET: Intro to Sustainable Finance" />
                  </a>
                  <a href={RESOURCE_LINKS.emergingTrendsDossier} target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#f59e0b" shadow="#78350f" icon={<LuGlobe size={15} />} label="🌍 DOSSIER: Emerging Trends (Energy & Adaptation)" />
                  </a>
                </div>
              </div>
              <AvatarBox src="/aryanceo.png" alt="Aryan Mehta" accent="#f59e0b" accent2="#ca8a04" fallback="ID: CEO_AM" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
            </div>
          </SpinCard>

          {/* CARD 5: FINAL DELIVERABLE WEEK 4 */}
          <SpinCard color="#facc15" shadow="rgba(250,204,21,0.2)" speed="5s" gradient="conic-gradient(from 0deg, transparent 40%, #facc15 50%, #b45309 60%, transparent 80%)">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-7 space-y-6 w-full text-left order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-yellow-500/20 pb-4 gap-2 text-xs md:text-sm tracking-wide">
                  <div className="space-y-1">
                    <p className="text-yellow-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">&gt; MISSION DIRECTIVE: THE 36-MONTH STRATEGY ROADMAP</p>
                    <p className="text-gray-200">
                      <span className="text-yellow-600 font-bold">FROM:</span> <span className="font-semibold text-white">GreenEdge Manager</span>
                    </p>
                  </div>
                  <span className="inline-block bg-yellow-950/80 border border-yellow-500 text-yellow-400 font-black tracking-widest uppercase text-[10px] px-3 py-1 shadow-[0_0_10px_rgba(250,204,21,0.5)] animate-pulse">
                    SUNDAY EOD
                  </span>
                </div>
                
                <div style={glassStyle} className="p-4 text-xs md:text-sm text-gray-300 italic border-l-2 border-yellow-500/50">
                  <p>The digital workspace clears. A blank, 3-stage strategic roadmap template populates the screen. The ₹800 Cr funding freeze timer ticks down. Over the past four weeks, the analyst has identified the carbon footprint, mapped ESG risks, and exposed supply chain vulnerabilities. Now, they must sequence the cure.</p>
                </div>

                <div style={glassStyle} className="relative overflow-hidden pt-2 p-6 rounded-2xl">
                  <TextBlock
                    lines={[
                      "The CEO understands the problems, but if we do not present a sequential, financially viable plan to the board immediately, the sustainability initiative will be permanently defunded. You must submit a 36-Month Sustainability Roadmap in Slide Deck format.",
                      "Months 1-6 (Quick Wins): Identify one low-cost, high-visibility intervention. Months 6-18 (Operational Shifts): Propose one medium-term transition.",
                      "Months 18-36 (Structural Transformation): Propose one massive capital expenditure project to fundamentally alter the business model.",
                      "Draft the deck. Justify the capital allocation. Next week, we enter the Capstone, and you pitch this to the investors to unlock the ₹800 Cr. Do not fail."
                    ]}
                    speakers={["[MGR_01]:", "[MGR_01]:", "[MGR_01]:", "[MGR_01]:"]}
                    speakerColors={["#ca8a04", "#ca8a04", "#ca8a04", "#b45309"]}
                  />
                </div>
                <div className="flex flex-col gap-4 pt-4">
                  <a href={RESOURCE_LINKS.goalSettingDossier} target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90">
                    <Btn3D color="#facc15" shadow="#78350f" icon={<LuMap size={15} />} label="🌍 DOSSIER: Corporate Goal Setting & Roadmaps" />
                  </a>
                  <a
                    href={RESOURCE_LINKS.roadmapMajor}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative w-full flex items-center justify-center gap-3 px-6 py-5 text-sm md:text-lg font-black uppercase tracking-[0.2em] text-white rounded-xl transition-all duration-100 hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #451a03 0%, #78350f 100%)",
                      boxShadow: "0 8px 0 #1a0d00, 0 12px 24px rgba(250,204,21,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
                      border: "1px solid rgba(250,204,21,0.4)",
                    }}
                  >
                    <Upload size={20} className="text-yellow-400 shrink-0" />
                    Major Assignment: 36-Month Roadmap
                    <span className="absolute right-4 text-yellow-500 text-lg font-black animate-pulse">→</span>
                  </a>
                </div>
              </div>
              <AvatarBox src="/managerweek21.png" alt="Manager" accent="#facc15" accent2="#f97316" fallback="ID: MGR_01" colSpan="lg:col-span-5" order="order-1 lg:order-2" rounded />
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
        {src ? (
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
        ) : null}
        <div className={`${src ? 'hidden fallback-label' : ''} absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-center px-4`} style={{ color: `${accent}80` }}>
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
    red: { bg: "bg-amber-950/40", border: "border-amber-500/30", text: "text-amber-400" },
    amber: { bg: "bg-amber-950/40", border: "border-amber-500/30", text: "text-amber-400" }
  };
  const theme = colorMap[color] || colorMap.red;
  return (
    <span className={`inline-block ${theme.bg} border ${theme.border} ${theme.text} font-black tracking-widest uppercase text-[10px] px-3 py-1 rounded-md shadow-[0_0_15px_rgba(234,179,8,0.15)] animate-pulse`}>
      {label}
    </span>
  );
}