"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TbClick } from "react-icons/tb";
import {
  TriangleAlert,
  MessageSquare,
  Folder,
  FileText,
  BookOpen,
  Leaf,
  Send,
  AlertTriangle,
  Globe,
  Activity,
  ChevronRight,
  UploadCloud,
  Timer,
  CheckCircle2,
  Lock
} from "lucide-react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const tokens = {
  cyan: { glow: "rgba(34,211,238,0.18)", border: "rgba(34,211,238,0.25)", text: "#22d3ee", pulse: "#06b6d4" },
  green: { glow: "rgba(74,222,128,0.18)", border: "rgba(74,222,128,0.25)", text: "#4ade80", pulse: "#22c55e" },
  orange: { glow: "rgba(251,146,60,0.18)", border: "rgba(251,146,60,0.25)", text: "#fb923c", pulse: "#f97316" },
  red: { glow: "rgba(239,68,68,0.18)", border: "rgba(239,68,68,0.25)", text: "#ef4444", pulse: "#dc2626" },
};

const ScanLines = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
    style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 4px)" }}
  />
);

const Grain = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "128px 128px",
    }}
  />
);

const StatusBadge = ({ color, label, live = true }) => (
  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold" style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}>
    {live && <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />}
    {label}
  </span>
);

const DialogueBox = React.forwardRef(({ color, name, badge, children, className = "", pointer = "none" }, ref) => {
  const c = tokens[color] || tokens.cyan;
  const pointerStyles = {
    right: { right: "-10px", top: "50%", transform: "translateY(-50%) rotate(45deg)", borderColor: `transparent ${c.border} ${c.border} transparent` },
    left: { left: "-10px", top: "50%", transform: "translateY(-50%) rotate(225deg)", borderColor: `transparent ${c.border} ${c.border} transparent` },
    top: { top: "-10px", left: "50%", transform: "translateX(-50%) rotate(315deg)", borderColor: `transparent ${c.border} ${c.border} transparent` },
  };

  return (
    <div ref={ref} className={`relative w-full max-w-2xl ${className}`} style={{ background: "rgba(2,4,8,0.85)", backdropFilter: "blur(24px) saturate(180%)", border: `1px solid ${c.border}`, borderRadius: "16px", boxShadow: `0 0 0 1px rgba(255,255,255,0.04) inset, 0 24px 48px rgba(0,0,0,0.6), 0 0 32px ${c.glow}` }}>
      <span className="absolute top-0 left-0 w-6 h-6 pointer-events-none" style={{ borderTop: `2px solid ${c.text}`, borderLeft: `2px solid ${c.text}`, borderRadius: "16px 0 0 0", opacity: 0.6 }} />
      <span className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none" style={{ borderBottom: `2px solid ${c.text}`, borderRight: `2px solid ${c.text}`, borderRadius: "0 0 16px 0", opacity: 0.6 }} />
      {pointer !== "none" && <span className="hidden md:block absolute w-[18px] h-[18px]" style={{ background: "rgba(2,4,8,0.85)", border: `1px solid ${c.border}`, ...pointerStyles[pointer] }} />}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: `${c.border}` }}>
        <div className="flex items-center gap-3">
          <Activity size={13} style={{ color: c.text }} className="opacity-80" />
          <span className="text-[11px] tracking-[0.2em] uppercase font-bold" style={{ color: c.text }}>{name}</span>
        </div>
        <StatusBadge color={c.pulse} label={badge} />
      </div>
      <div className="p-5 md:p-8">{children}</div>
    </div>
  );
});
DialogueBox.displayName = "DialogueBox";

const DossierButton = ({ icon: Icon, label, color, accent, href }) => {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="group relative flex-1 flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs tracking-widest uppercase overflow-hidden transition-all duration-300 active:scale-[0.97] w-full"
      style={{ background: `${accent}10`, border: `1px solid ${accent}30`, color: accent }}
      onMouseEnter={(e) => { e.currentTarget.style.background = `${accent}1c`; e.currentTarget.style.borderColor = `${accent}60`; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = `${accent}10`; e.currentTarget.style.borderColor = `${accent}30`; }}
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${accent}08, transparent)` }} />
      <Icon size={15} className="shrink-0 relative z-10" />
      <span className="relative z-10 block text-left">{label}</span>
      <ChevronRight size={12} className="ml-auto relative z-10 opacity-40 group-hover:opacity-100 transition-opacity" />
    </Tag>
  );
};

const CharacterPanel = ({ src, alt, glowRef, imgRef, color, align = "start" }) => (
  <div className={`w-full max-w-lg flex flex-col items-center ${align === "end" ? "md:items-end" : "md:items-start"}`}>
    <div className="relative group shrink-0 md:-translate-y-10">
      <div ref={glowRef} className="absolute inset-0 rounded-full blur-3xl scale-125 opacity-50 pointer-events-none" style={{ background: tokens[color].pulse }} />
      <img ref={imgRef} src={src} alt={alt} className="w-40 md:w-72 lg:w-80 h-auto relative z-10 object-contain" style={{ filter: `drop-shadow(0 0 40px ${tokens[color].glow})`, maxHeight: "420px" }} />
    </div>
  </div>
);

const ChapterDivider = ({ icon: Icon, label, title, accent, highlight }) => (
  <div className="w-full py-20 flex flex-col items-center justify-center relative z-10">
    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 0%, ${accent}06 50%, transparent 100%)` }} />
    <div className="flex items-center gap-6 md:gap-12 w-full max-w-5xl px-8 relative z-10">
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${accent}60)` }} />
      <div className="flex flex-col items-center text-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: `${accent}10`, border: `1px solid ${accent}25` }}>
          <Icon size={12} style={{ color: accent }} className="animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: accent }}>{label}</span>
          <Icon size={12} style={{ color: accent }} className="animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[0.12em] uppercase" style={{ textShadow: `0 0 40px ${accent}50` }}>
          {title} <span style={{ color: highlight }}>{highlight}</span>
        </h2>
      </div>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }} />
    </div>
  </div>
);

const Cursor = ({ color }) => (
  <span className="inline-block w-[3px] h-[1.1em] ml-0.5 animate-pulse align-middle rounded-[1px]" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
);

const Page = () => {
  const [typedText, setTypedText] = useState("");
  const [activeTab, setActiveTab] = useState("discussions");
  const [activeWeek, setActiveWeek] = useState("week01"); // Added for Assignments Tab

  const fullText = "Listen up. The executive board is panicking, but you were brought here for a reason. Trust your instincts, give it your absolute best, and don't let the chaos overwhelm you. Are you ready to deploy?";
  const priyaText = "Welcome to the team. Sprint is bleeding money, and GreenBridge Capital just blocked our ₹800 Cr Series B. I need your consulting pod to figure out what we are actually dealing with. Let's talk.";
  const managerText = "Sprint is in absolute chaos. First, review the briefing on the core mechanics of consulting. Second, read the baseline on corporate sustainability. Consider this your initiation test: Based on those three pillars, submit a one-paragraph diagnostic of Sprint's 10-minute delivery model immediately to my secure drop folder.";
  const ceoText = "I don't understand why we are wasting precious operational time on this. Sprint is a hyper-growth tech company. Why does a rapid delivery app need to care about global sustainability limits when we are fighting for market share?";
  const manager2Text1 = "The CEO is aggressively pushing back. He views this as a PR exercise, not operational reality. You need to prove to him that this is a strict business survival issue. Access the research on why sustainability matters in modern business. Use this data to show him that ignoring this balance leads to critical social and environmental instability that directly threatens human life and long-term economic growth. Furthermore, it is essential for managing immediate risks, complying with increasing regulations, and attracting stable investment capital.";
  const manager2Text2 = "Then, read the brief on innovation. Frame your entire argument around the concept that sustainability identifies the specific needs and urgent requirements, while innovation creates the technical solutions to address those needs. We are here to innovate, not stall his company.";
  const manager3Text1 = "Sprint's massive waste problem didn't just appear out of nowhere. It is being violently driven by macro-economic forces. I need you to understand the overarching global context before we zoom in to audit their local dark-store operations.";
  const manager3Text2 = "Read the industry overview on global sustainability challenges. You need to understand how four primary forces are driving this systemic failure: Growing Population, Economic Growth, Rising Consumption, and Limited Resources. Pay special, focused attention to how a 'buy-and-throw-away' culture dangerously accelerates resource depletion and generates massive amounts of waste.";
  const priya2Text = "Our riders are getting into severe accidents because of the 10-minute timer. If we increase the timer to protect them, customers leave for Instantly. How do we fix this without completely breaking the company's unit economics?";
  
  const manager4Text1 = "She is looking at isolated symptoms and panicking, missing the entire system. Open your terminal and read the module on Systems Thinking. You must learn to distinguish the deep, underlying drivers—the root causes—from the visible, surface-level effects, which are just symptoms.";
  const manager4Text2 = "Next, review the briefing on Feedback Loops to understand the circular cause-and-effect processes dragging them down, where outputs are channeled back as inputs. Finally, master the concept of Trade-offs to understand situations where optimizing one sustainable outcome requires compromising or sacrificing another. We will use this exact architecture to build her problem map.";
  
  const manager5Text = "The time for theory is over. The executive board is waiting for our preliminary diagnostic, and GreenBridge Capital is monitoring our outputs. You must use the Systems Thinking and Trade-off frameworks to map Sprint's top three interconnected sustainability failures. Do not sugarcoat the reality. Expose the feedback loops destroying their rider safety and the root causes driving their packaging waste. Draft your analysis, ensure all claims are backed by the week's intel, and upload the 2-page diagnostic memo directly into the central hub before the weekend deadline.";

  const priyaBoxRef = useRef(null); const priyaTextRef = useRef(null); const priyaImgRef = useRef(null); const priyaGlowRef = useRef(null);
  const managerBoxRef = useRef(null); const managerTextRef = useRef(null); const managerImgRef = useRef(null); const managerGlowRef = useRef(null);
  const ceoBoxRef = useRef(null); const ceoTextRef = useRef(null); const ceoImgRef = useRef(null); const ceoGlowRef = useRef(null);
  const manager2ContainerRef = useRef(null); const manager2BoxRef1 = useRef(null); const manager2TextRef1 = useRef(null); const manager2BoxRef2 = useRef(null); const manager2TextRef2 = useRef(null); const manager2ImgRef = useRef(null); const manager2GlowRef = useRef(null);
  const manager3ContainerRef = useRef(null); const manager3BoxRef1 = useRef(null); const manager3TextRef1 = useRef(null); const manager3BoxRef2 = useRef(null); const manager3TextRef2 = useRef(null); const manager3ImgRef = useRef(null); const manager3GlowRef = useRef(null);
  const priya2BoxRef = useRef(null); const priya2TextRef = useRef(null); const priya2ImgRef = useRef(null); const priya2GlowRef = useRef(null);
  
  const manager4ContainerRef = useRef(null); const manager4BoxRef1 = useRef(null); const manager4TextRef1 = useRef(null); const manager4BoxRef2 = useRef(null); const manager4TextRef2 = useRef(null); const manager4ImgRef = useRef(null); const manager4GlowRef = useRef(null);
  
  const manager5ContainerRef = useRef(null); const manager5BoxRef = useRef(null); const manager5TextRef = useRef(null); const manager5ImgRef = useRef(null); const manager5GlowRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) clearInterval(timer);
      }, 40);
      return () => clearInterval(timer);
    }, 600);
    return () => clearTimeout(delay);
  }, [fullText]);

  useGSAP(() => {
    if (activeTab !== "discussions") return;

    const buildScene = ({ trigger, box, textEl, text, speed = 0.035, imgEl, glowEl }) => {
      const tl = gsap.timeline({ scrollTrigger: { trigger, start: "top 78%", once: true } });
      tl.from(box, { y: 60, opacity: 0, duration: 0.9, ease: "expo.out" }).to(textEl, { text, duration: text.length * speed, ease: "none" }, "+=0.15");
      gsap.to(imgEl, { y: -14, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(glowEl, { scale: 1.15, opacity: 0.7, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut" });
      return tl;
    };

    buildScene({ trigger: priyaBoxRef.current, box: priyaBoxRef.current, textEl: priyaTextRef.current, text: priyaText, imgEl: priyaImgRef.current, glowEl: priyaGlowRef.current });
    buildScene({ trigger: managerBoxRef.current, box: managerBoxRef.current, textEl: managerTextRef.current, text: managerText, speed: 0.025, imgEl: managerImgRef.current, glowEl: managerGlowRef.current });
    buildScene({ trigger: ceoBoxRef.current, box: ceoBoxRef.current, textEl: ceoTextRef.current, text: ceoText, imgEl: ceoImgRef.current, glowEl: ceoGlowRef.current });
    buildScene({ trigger: priya2BoxRef.current, box: priya2BoxRef.current, textEl: priya2TextRef.current, text: priya2Text, imgEl: priya2ImgRef.current, glowEl: priya2GlowRef.current });

    const m2Tl = gsap.timeline({ scrollTrigger: { trigger: manager2ContainerRef.current, start: "top 78%", once: true } });
    m2Tl.from([manager2BoxRef1.current, manager2BoxRef2.current], { y: 60, opacity: 0, duration: 0.9, ease: "expo.out", stagger: 0.25 })
      .to(manager2TextRef1.current, { text: manager2Text1, duration: manager2Text1.length * 0.018, ease: "none" }, "+=0.1")
      .to(manager2TextRef2.current, { text: manager2Text2, duration: manager2Text2.length * 0.025, ease: "none" }, "+=0.15");
    gsap.to(manager2ImgRef.current, { y: -14, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(manager2GlowRef.current, { scale: 1.15, opacity: 0.7, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut" });

    const m3Tl = gsap.timeline({ scrollTrigger: { trigger: manager3ContainerRef.current, start: "top 78%", once: true } });
    m3Tl.from([manager3BoxRef1.current, manager3BoxRef2.current], { y: 60, opacity: 0, duration: 0.9, ease: "expo.out", stagger: 0.25 })
      .to(manager3TextRef1.current, { text: manager3Text1, duration: manager3Text1.length * 0.028, ease: "none" }, "+=0.1")
      .to(manager3TextRef2.current, { text: manager3Text2, duration: manager3Text2.length * 0.025, ease: "none" }, "+=0.15");
    gsap.to(manager3ImgRef.current, { y: -14, duration: 2.7, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(manager3GlowRef.current, { scale: 1.15, opacity: 0.7, duration: 2.1, yoyo: true, repeat: -1, ease: "sine.inOut" });

    const m4Tl = gsap.timeline({ scrollTrigger: { trigger: manager4ContainerRef.current, start: "top 78%", once: true } });
    m4Tl.from([manager4BoxRef1.current, manager4BoxRef2.current], { y: 60, opacity: 0, duration: 0.9, ease: "expo.out", stagger: 0.25 })
      .to(manager4TextRef1.current, { text: manager4Text1, duration: manager4Text1.length * 0.025, ease: "none" }, "+=0.1")
      .to(manager4TextRef2.current, { text: manager4Text2, duration: manager4Text2.length * 0.025, ease: "none" }, "+=0.15");
    gsap.to(manager4ImgRef.current, { y: -14, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(manager4GlowRef.current, { scale: 1.15, opacity: 0.7, duration: 2.4, yoyo: true, repeat: -1, ease: "sine.inOut" });

    buildScene({ trigger: manager5ContainerRef.current, box: manager5BoxRef.current, textEl: manager5TextRef.current, text: manager5Text, speed: 0.02, imgEl: manager5ImgRef.current, glowEl: manager5GlowRef.current });

    gsap.utils.toArray(".chapter-divider").forEach((el) => {
      gsap.from(el, { y: 30, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
    });
  }, [activeTab]);

  const navItems = [
    { id: "discussions", label: "Discussions", Icon: MessageSquare, color: tokens.cyan },
    { id: "resources", label: "Resources", Icon: Folder, color: tokens.green },
    { id: "assignments", label: "Assignments", Icon: FileText, color: tokens.orange },
  ];

  const week01Assignments = [
    { 
      id: 1, 
      type: "Read for more info", 
      title: "MINOR TASK", 
      driveLink: "https://drive.google.com/file/d/1TODuPXOuXI7Pb8AoAUiIvZx8xvhPHgP1/view",
      isHighlight: false
    },
    { 
      id: 2, 
      type: "Read for more info", 
      title: "MAJOR DELIVERABLE", 
      driveLink: "https://drive.google.com/file/d/18wk9LaSnKra5y5wqjHlFO-DQbOnxXhES/view",
      isHighlight: true
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#030507] w-full overflow-hidden" style={{ fontFamily: "'Geist Mono', 'JetBrains Mono', 'Fira Code', monospace" }}>
      <ScanLines />
      <Grain />

      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-60 z-50 pt-24" style={{ background: "rgba(3,5,9,0.7)", backdropFilter: "blur(28px)", borderRight: "1px solid rgba(255,255,255,0.06)", boxShadow: "8px 0 40px rgba(0,0,0,0.5)" }}>
        <span className="absolute top-0 left-0 h-full w-[2px]" style={{ background: "linear-gradient(180deg, #22d3ee, #4ade80, transparent)" }} />
        <div className="px-5 pb-5 mb-2 border-b border-white/[0.06]">
          <p className="text-white font-black tracking-[0.2em] uppercase text-xs mb-0.5">Workspace</p>
          <p className="text-gray-600 text-[9px] tracking-[0.3em] uppercase">Secure Terminal</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1.5">
          {navItems.map(({ id, label, Icon, color }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-200 group"
                style={active ? { background: `${color.text}12`, border: `1px solid ${color.border}`, color: "white" } : { background: "transparent", border: "1px solid transparent", color: "#6b7280" }}
              >
                <Icon size={16} style={{ color: active ? color.text : undefined }} className={!active ? "group-hover:text-white transition-colors" : ""} />
                <span className="text-[11px] tracking-widest uppercase font-semibold">{label}</span>
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color.text, boxShadow: `0 0 6px ${color.text}` }} />}
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 md:ml-60 relative overflow-hidden">
        
        {activeTab === "discussions" && (
          <>
            <section className="min-h-[100dvh] w-full flex flex-col md:flex-row overflow-hidden relative">
              <div className="w-full md:w-[42%] h-[42vh] md:h-screen flex flex-col items-center justify-end md:justify-center p-5 md:p-10 z-10 border-t md:border-t-0 border-white/[0.04]">
                <CharacterPanel src="/manager.png" alt="Manager" glowRef={managerGlowRef} imgRef={managerImgRef} color="green" align="end" />
              </div>
              <div className="w-full md:w-[58%] flex-1 md:min-h-screen flex items-start md:items-center justify-center md:justify-start p-5 sm:p-10 md:pl-14 z-10 pb-14 md:pb-0">
                <DialogueBox ref={managerBoxRef} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Live Uplink" pointer="left" className="md:-translate-y-8">
                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed min-h-[140px]">
                    <span ref={managerTextRef} />
                    <Cursor color={tokens.green.text} />
                  </p>
                  <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.06] mt-5 relative z-10">
                    <p className="text-gray-300 text-sm flex gap-1 tracking-wide animate-pulse">
                      <span className="text-green-400 mr-2"><TbClick /></span> Click on the buttons to access docs:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative overflow-hidden rounded-xl p-[1px] group">
                        <div className="absolute inset-[-500%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#22d3ee_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative h-full w-full bg-[#020604] rounded-xl flex">
                          <DossierButton href="https://drive.google.com/file/d/1Dw9bavgsCLcR1zaWcTFVtG-RrnDYThYR/view" icon={BookOpen} label="DOSSIER: Consulting" color="green" accent="#22d3ee" />
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-xl p-[1px] group">
                        <div className="absolute inset-[-500%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#4ade80_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative h-full w-full bg-[#020604] rounded-xl flex">
                          <DossierButton href="https://drive.google.com/file/d/1etZkky5X8zz1ow8xp4m4n0lOjWeFV_Xo/view" icon={Leaf} label="DOSSIER: Sustainability" color="green" accent="#4ade80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogueBox>
              </div>
            </section>

            <ChapterDivider icon={AlertTriangle} label="Chapter-2" title="EXECUTIVE" accent="#f97316" highlight="PUSHBACK" />

            <section className="min-h-[100dvh] md:h-screen w-full flex flex-col-reverse md:flex-row overflow-hidden relative">
              <div className="w-full md:w-[58%] flex items-start md:items-center justify-center md:justify-end p-5 sm:p-10 md:pr-14 z-10 pb-14 md:pb-0">
                <DialogueBox ref={ceoBoxRef} color="orange" name="ARYAN_MEHTA // CEO" badge="Escalation Initiated" pointer="right" className="md:-translate-y-8">
                  <p className="text-sm md:text-xl text-gray-200 leading-relaxed min-h-[110px]">
                    <span ref={ceoTextRef} />
                    <Cursor color={tokens.orange.text} />
                  </p>
                </DialogueBox>
              </div>
              <div className="w-full md:w-[42%] h-[42vh] md:h-full flex flex-col items-center justify-end md:justify-center p-5 md:p-10 z-10">
                <CharacterPanel src="/aryanceo.png" alt="Aryan Mehta - CEO" glowRef={ceoGlowRef} imgRef={ceoImgRef} color="orange" align="start" />
              </div>
            </section>

            <section ref={manager2ContainerRef} className="min-h-[100dvh] w-full flex flex-col md:flex-row overflow-hidden relative">
              <div className="w-full md:w-[42%] h-[42vh] md:h-screen flex flex-col items-center justify-end md:justify-center p-5 md:p-10 z-10 border-t md:border-t-0 border-white/[0.04]">
                <CharacterPanel src="/managerpose2.png" alt="Manager" glowRef={manager2GlowRef} imgRef={manager2ImgRef} color="green" align="end" />
              </div>
              <div className="w-full md:w-[58%] flex-1 md:min-h-screen flex flex-col items-start justify-center p-5 sm:p-10 md:pl-14 z-10 pb-14 md:pb-0 gap-5">
                <DialogueBox ref={manager2BoxRef1} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Live Uplink" pointer="left">
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed min-h-[160px]">
                    <span ref={manager2TextRef1} />
                    <Cursor color={tokens.green.text} />
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/[0.06] mt-4">
                    <DossierButton href="https://drive.google.com/file/d/1UjjbVPDgw4O8G2o3ICFULH5IW-s9HoCs/view" icon={BookOpen} label="ASSET: Capital Markets" color="green" accent="#22d3ee" />
                  </div>
                </DialogueBox>
                <DialogueBox ref={manager2BoxRef2} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Live Uplink">
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed min-h-[120px]">
                    <span ref={manager2TextRef2} />
                    <Cursor color={tokens.green.text} />
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/[0.06] mt-4">
                    <DossierButton href="https://drive.google.com/file/d/1vAGhCyuUEuXr49k83TC034DJGz2HpSoZ/view" icon={FileText} label="ASSET: Bridging Innovation" color="green" accent="#818cf8" />
                  </div>
                </DialogueBox>
              </div>
            </section>

            <ChapterDivider icon={Globe} label="Chapter-3" title="MACRO-ECONOMIC" accent="#4ade80" highlight="ANALYSIS" />

            <section ref={manager3ContainerRef} className="min-h-[100dvh] w-full flex flex-col md:flex-row overflow-hidden relative">
              <div className="w-full md:w-[42%] h-[42vh] md:h-screen flex flex-col items-center justify-end md:justify-center p-5 md:p-10 z-10 border-t md:border-t-0 border-white/[0.04]">
                <CharacterPanel src="/managerpose3.png" alt="Manager" glowRef={manager3GlowRef} imgRef={manager3ImgRef} color="green" align="end" />
              </div>
              <div className="w-full md:w-[58%] flex-1 md:min-h-screen flex flex-col items-start justify-center p-5 sm:p-10 md:pl-14 z-10 pb-14 md:pb-0 gap-5">
                <DialogueBox ref={manager3BoxRef1} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Live Uplink" pointer="left">
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed min-h-[120px]">
                    <span ref={manager3TextRef1} />
                    <Cursor color={tokens.green.text} />
                  </p>
                </DialogueBox>
                <DialogueBox ref={manager3BoxRef2} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Live Uplink">
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed min-h-[150px]">
                    <span ref={manager3TextRef2} />
                    <Cursor color={tokens.green.text} />
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/[0.06] mt-4">
                    <DossierButton href="https://drive.google.com/file/d/1TODuPXOuXI7Pb8AoAUiIvZx8xvhPHgP1/view" icon={Globe} label="DOSSIER: Sustainability Drivers" color="green" accent="#4ade80" />
                  </div>
                </DialogueBox>
              </div>
            </section>

            <ChapterDivider icon={AlertTriangle} label="Critical Alert" title="URGENT CLIENT" accent="#ef4444" highlight="PING" />

            <section className="min-h-[100dvh] md:h-screen w-full flex flex-col-reverse md:flex-row overflow-hidden relative">
              <div className="w-full md:w-[58%] flex items-start md:items-center justify-center md:justify-end p-5 sm:p-10 md:pr-14 z-10 pb-14 md:pb-0">
                <DialogueBox ref={priya2BoxRef} color="cyan" name="PRIYA NAIR // COO" badge="High Priority" pointer="right" className="md:-translate-y-8">
                  <p className="text-sm md:text-xl text-gray-200 leading-relaxed min-h-[110px]">
                    <span ref={priya2TextRef} />
                    <Cursor color={tokens.cyan.text} />
                  </p>
                </DialogueBox>
              </div>
              <div className="w-full md:w-[42%] h-[42vh] md:h-full flex flex-col items-center justify-end md:justify-center p-5 md:p-10 z-10">
                <CharacterPanel src="/priyapose2.png" alt="Priya Nair" glowRef={priya2GlowRef} imgRef={priya2ImgRef} color="cyan" align="start" />
              </div>
            </section>

            <section ref={manager4ContainerRef} className="min-h-[100dvh] w-full flex flex-col md:flex-row overflow-hidden relative">
              <div className="w-full md:w-[42%] h-[42vh] md:h-screen flex flex-col items-center justify-end md:justify-center p-5 md:p-10 z-10 border-t md:border-t-0 border-white/[0.04]">
                <CharacterPanel src="/managerpose4.png" alt="Manager" glowRef={manager4GlowRef} imgRef={manager4ImgRef} color="green" align="end" />
              </div>
              <div className="w-full md:w-[58%] flex-1 md:min-h-screen flex flex-col items-start justify-center p-5 sm:p-10 md:pl-14 z-10 pb-14 md:pb-0 gap-5">
                
                <DialogueBox ref={manager4BoxRef1} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Live Uplink" pointer="left">
                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed min-h-[130px]">
                    <span ref={manager4TextRef1} />
                    <Cursor color={tokens.green.text} />
                  </p>
                  <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.06] mt-5 relative z-10">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative overflow-hidden rounded-xl p-[1px] group">
                        <div className="absolute inset-[-500%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#4ade80_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative h-full w-full bg-[#020604] rounded-xl flex">
                          <DossierButton href="https://drive.google.com/file/d/1rDMBv_UlwhtZshNkr7U1o-cxkk7L-4VX/view" icon={BookOpen} label="ASSET: Systems Thinking" color="green" accent="#4ade80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogueBox>

                <DialogueBox ref={manager4BoxRef2} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Live Uplink">
                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed min-h-[140px]">
                    <span ref={manager4TextRef2} />
                    <Cursor color={tokens.green.text} />
                  </p>
                  <div className="flex flex-col gap-4 pt-6 border-t border-white/[0.06] mt-5 relative z-10">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative overflow-hidden rounded-xl p-[1px] group">
                        <div className="absolute inset-[-500%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,#c084fc_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative h-full w-full bg-[#020604] rounded-xl flex">
                          <DossierButton href="https://drive.google.com/file/d/1rDMBv_UlwhtZshNkr7U1o-cxkk7L-4VX/view" icon={Activity} label="ASSET: Feedback & Trade-Offs" color="green" accent="#c084fc" />
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogueBox>

              </div>
            </section>

            <ChapterDivider icon={Timer} label="Weekend Deliverable" title="BOARD-READY" accent="#ef4444" highlight="MEMO" />

            <section ref={manager5ContainerRef} className="min-h-[100dvh] w-full flex flex-col md:flex-row overflow-hidden relative">
              <div className="w-full md:w-[42%] h-[42vh] md:h-screen flex flex-col items-center justify-end md:justify-center p-5 md:p-10 z-10 border-t md:border-t-0 border-white/[0.04]">
                <CharacterPanel src="/manager.png" alt="Manager" glowRef={manager5GlowRef} imgRef={manager5ImgRef} color="green" align="end" />
              </div>
              <div className="w-full md:w-[58%] flex-1 md:min-h-screen flex flex-col items-start justify-center p-5 sm:p-10 md:pl-14 z-10 pb-14 md:pb-0 gap-5">
                <DialogueBox ref={manager5BoxRef} color="green" name="GREENEDGE_MANAGER // POD LEAD" badge="Mission Directive" pointer="left">
                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed min-h-[220px]">
                    <span ref={manager5TextRef} />
                    <Cursor color={tokens.green.text} />
                  </p>
                  
                  <div className="mt-8 border border-cyan-500/30 bg-cyan-950/10 rounded-2xl p-6 relative z-10 overflow-hidden shadow-[inset_0_0_40px_rgba(34,211,238,0.05)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-cyan-500/20 pb-4">
                      <div>
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-bold mb-1">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                          SECURE DROPZONE // ACTIVE
                        </div>
                        <p className="text-gray-400 text-[10px] font-mono tracking-widest">Sprint Problem Map Architecture</p>
                      </div>
                      <div className="flex items-center gap-2 bg-red-950/50 border border-red-500/30 px-3 py-1.5 rounded-lg">
                        <Timer size={14} className="text-red-400 animate-pulse" />
                        <span className="text-red-400 font-mono text-[10px] tracking-widest uppercase font-bold">DEADLINE: SUN 23:59 IST</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2 text-gray-300 text-xs font-mono">
                        <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                        <span>Map Top 3 Interconnected Failures</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 text-xs font-mono">
                        <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                        <span>Expose Rider Safety Feedback Loops</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 text-xs font-mono">
                        <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                        <span>Identify Packaging Waste Root Causes</span>
                      </div>
                    </div>

                    {/* ASSIGNMENT LINKS MOVED HERE */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-cyan-500/20">
                       <a href="https://drive.google.com/file/d/1TODuPXOuXI7Pb8AoAUiIvZx8xvhPHgP1/view" target="_blank" rel="noopener noreferrer" className="flex-1 group relative flex items-center justify-center gap-2 px-4 py-4 bg-cyan-600/20 hover:bg-cyan-500/30 border border-cyan-500/40 rounded-xl transition-all duration-300 active:scale-[0.98] overflow-hidden">
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                          <span className="text-cyan-100 font-mono text-xs font-bold tracking-widest uppercase relative z-10">Minor Task Brief</span>
                       </a>
                        <a href="https://drive.google.com/file/d/18wk9LaSnKra5y5wqjHlFO-DQbOnxXhES/view" target="_blank" rel="noopener noreferrer" className="flex-1 group relative flex items-center justify-center gap-2 px-4 py-4 bg-red-600/20 hover:bg-red-500/30 border border-red-500/40 rounded-xl transition-all duration-300 active:scale-[0.98] overflow-hidden">
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-red-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                          <span className="text-red-100 font-mono text-xs font-bold tracking-widest uppercase relative z-10">Major Deliverable Brief</span>
                       </a>
                    </div>
                  </div>

                </DialogueBox>
              </div>
            </section>
          </>
        )}

        {activeTab === "assignments" && (
           <div className="min-h-screen py-16 px-6 sm:px-12">
           <div className="max-w-7xl mx-auto">
             
             <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
               <div>
                 <h1 className="text-3xl md:text-5xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 drop-shadow-lg">
                   Assignments
                 </h1>
                 <p className="text-zinc-500 mt-3 text-sm md:text-base tracking-wide max-w-2xl">
                   Track your operational deployment and structured deliverables.
                 </p>
               </div>
     
               <div className="flex gap-2 bg-zinc-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                 <button
                   onClick={() => setActiveWeek("week01")}
                   className={`px-6 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                     activeWeek === "week01"
                       ? "bg-zinc-200 text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                       : "text-zinc-500 hover:text-zinc-300"
                   }`}
                 >
                   Week 01
                 </button>
                 <button
                   onClick={() => setActiveWeek("week02")}
                   className={`px-6 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                     activeWeek === "week02"
                       ? "bg-zinc-200 text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                       : "text-zinc-500 hover:text-zinc-300"
                   }`}
                 >
                   Week 02
                 </button>
               </div>
             </div>
     
             {activeWeek === "week01" ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto md:mx-0">
                 {week01Assignments.map((task) => (
                   <a
                     key={task.id}
                     href={task.driveLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`group relative flex flex-col p-6 sm:p-8 rounded-[32px] border transition-all duration-300 hover:-translate-y-2 overflow-hidden backdrop-blur-md shadow-2xl
                       ${task.isHighlight 
                         ? "bg-gradient-to-br from-red-950/40 to-[#030507] border-red-500/30 hover:border-red-500/60 hover:shadow-[0_10px_40px_rgba(239,68,68,0.15)]" 
                         : "bg-gradient-to-br from-zinc-900/50 to-[#030507] border-white/10 hover:border-cyan-500/40 hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)]"
                       }`}
                   >
                     <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                       ${task.isHighlight ? "bg-gradient-to-br from-red-500/10 to-transparent" : "bg-gradient-to-br from-cyan-500/10 to-transparent"}`} 
                     />
     
                     <div className="flex items-center justify-between mb-6 relative z-10">
                       <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full border backdrop-blur-md shadow-sm
                         ${task.isHighlight 
                           ? "text-red-400 bg-red-950/50 border-red-500/30 animate-pulse" 
                           : "text-cyan-400 bg-cyan-950/40 border-cyan-500/30"}`}>
                         {task.type}
                       </span>
                       <div className={`${task.isHighlight ? "text-red-400" : "text-zinc-600 group-hover:text-cyan-400"} transition-colors bg-white/5 p-2 rounded-full border border-white/5`}>
                         <FileText className="w-5 h-5"/>
                       </div>
                     </div>
     
                     <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-zinc-100 leading-snug relative z-10 flex-1 mb-6">
                       {task.title}
                     </h3>
     
                     <div className="pt-5 border-t border-white/10 relative z-10 flex items-center justify-between">
                       <span className="text-[11px] text-zinc-500 font-medium uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                         Access Deliverable Brief
                       </span>
                       <span className="text-zinc-600 group-hover:translate-x-1 transition-transform">
                         <ChevronRight size={16}/>
                       </span>
                     </div>
                   </a>
                 ))}
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center w-full py-32 border border-dashed border-white/10 rounded-[40px] bg-zinc-900/20 max-w-4xl mx-auto md:mx-0 backdrop-blur-xl shadow-2xl">
                 <div className="bg-white/5 p-5 rounded-full mb-5 shadow-inner border border-white/5">
                   <Lock className="w-8 h-8 text-zinc-600"/>
                 </div>
                 <h3 className="text-2xl font-bold text-zinc-400 tracking-wider uppercase mb-3 drop-shadow-md">
                   Restricted Clearance
                 </h3>
                 <p className="text-sm text-zinc-500 max-w-md text-center tracking-wide leading-relaxed">
                   Week 02 operational assignments are currently locked. The system will deploy the assets when clearance is granted.
                 </p>
                 <span className="mt-8 bg-black/50 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black tracking-widest text-zinc-600 uppercase border border-white/5 shadow-inner">
                   System Encrypted
                 </span>
               </div>
             )}
     
           </div>
         </div>
        )}

      </main>
    </div>
  );
};

export default Page;