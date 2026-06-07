"use client";

import React from 'react';

// Inline SVG Icon for PDF/Drive Links
const DriveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <line x1="9" y1="15" x2="15" y2="15" />
  </svg>
);

// Inline SVG Icon for Form Uploads
const UploadIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

// Inline SVG Icon for the Locked State
const LockIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-8 h-8 text-zinc-600"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const Page = () => {
  const [activeWeek, setActiveWeek] = React.useState("week01");

  const week01Assignments = [
    { 
      id: 1, 
      type: "Read for more info", 
      title: "MINOR TASK", 
      driveLink: "https://drive.google.com/file/d/1TODuPXOuXI7Pb8AoAUiIvZx8xvhPHgP1/view",
      submitLink: "https://forms.gle/Zpx7AG7UipntJK9U9",
      isHighlight: false
    },
    { 
      id: 2, 
      type: "Read for more info", 
      title: "MAJOR DELIVERABLE", 
      driveLink: "https://drive.google.com/file/d/18wk9LaSnKra5y5wqjHlFO-DQbOnxXhES/view",
      submitLink: "https://forms.gle/VTPamWWCWgBxTvJo8",
      isHighlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-200 py-16 px-6 sm:px-12 font-sans selection:bg-cyan-900 selection:text-cyan-100 mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header & Toggle Switch */}
        <div className="mb-12 border-b border-white/10 pb-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500 drop-shadow-lg">
              Assignments
            </h1>
            <p className="text-zinc-500 mt-3 text-sm md:text-base tracking-wide max-w-2xl">
              Track your operational deployment and structured deliverables.
            </p>
          </div>

          {/* Glassmorphism Week Toggle Switch */}
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

        {/* Dynamic Content Area */}
        {activeWeek === "week01" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto md:mx-0">
            {week01Assignments.map((task) => (
              <div
                key={task.id}
                className={`group relative flex flex-col p-6 sm:p-8 rounded-[32px] border backdrop-blur-md shadow-2xl transition-all duration-300
                  ${task.isHighlight 
                    ? "bg-gradient-to-br from-red-950/20 via-zinc-900/10 to-black border-red-500/20 hover:border-red-500/40" 
                    : "bg-gradient-to-br from-zinc-900/40 via-zinc-900/10 to-black border-white/5 hover:border-cyan-500/30"
                  }`}
              >
                
                {/* Upper Document Block (Entire block behaves like a safe, massive link) */}
                <a 
                  href={task.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col group/doc cursor-pointer"
                >
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full border backdrop-blur-md shadow-sm
                      ${task.isHighlight 
                        ? "text-red-400 bg-red-950/50 border-red-500/30" 
                        : "text-cyan-400 bg-cyan-950/40 border-cyan-500/30"}`}>
                      {task.type}
                    </span>
                    <div className={`${task.isHighlight ? "text-red-400/80 group-hover/doc:text-red-400" : "text-zinc-600 group-hover/doc:text-cyan-400"} transition-colors bg-white/5 p-2.5 rounded-full border border-white/5`}>
                      <DriveIcon />
                    </div>
                  </div>

                  {/* Document Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-wide text-zinc-100 group-hover/doc:text-white transition-colors leading-snug mb-3">
                    {task.title}
                  </h3>

                  {/* Helper Text to show it's clickable */}
                  <p className="text-xs text-zinc-500 group-hover/doc:text-zinc-400 transition-colors tracking-wide flex items-center gap-1.5 mb-8">
                    Read Brief Document <span className="inline-block transition-transform group-hover/doc:translate-x-1">→</span>
                  </p>
                </a>

                {/* DEDICATED SUBMIT BUTTON (Completely isolated to prevent misclicks) */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  {task.isHighlight ? (
                    /* RED GLOW BUTTON - Major Task */
                    <a
                      href={task.submitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-br from-red-600/20 via-zinc-800/40 to-black/60 backdrop-blur-xl border-t border-l border-red-500/30 border-b border-r border-black/80 shadow-[0_0_20px_rgba(248,113,113,0.1),12px_12px_24px_rgba(0,0,0,0.5),inset_1px_1px_2px_rgba(248,113,113,0.2)] rounded-xl text-red-300 font-bold px-5 py-3 tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-all duration-300 md:hover:-translate-y-0.5 md:hover:scale-[1.01] md:hover:shadow-[0_0_25px_rgba(248,113,113,0.35),14px_14px_28px_rgba(0,0,0,0.7),inset_2px_2px_4px_rgba(248,113,113,0.4)] md:hover:from-red-600/30 md:hover:text-red-100 active:scale-95"
                    >
                      <UploadIcon className="w-4 h-4 text-red-400" />
                      <span className="drop-shadow-[0_0_6px_rgba(248,113,113,0.5)]">
                        Submit Major Task
                      </span>
                    </a>
                  ) : (
                    /* CYAN GLOW BUTTON - Minor Task */
                    <a
                      href={task.submitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-br from-cyan-500/20 via-zinc-800/40 to-black/60 backdrop-blur-xl border-t border-l border-cyan-400/30 border-b border-r border-black/80 shadow-[0_0_20px_rgba(6,182,212,0.1),12px_12px_24px_rgba(0,0,0,0.5),inset_1px_1px_2px_rgba(6,182,212,0.2)] rounded-xl text-cyan-300 font-bold px-5 py-3 tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-all duration-300 md:hover:-translate-y-0.5 md:hover:scale-[1.01] md:hover:shadow-[0_0_25px_rgba(6,182,212,0.35),14px_14px_28px_rgba(0,0,0,0.7),inset_2px_2px_4px_rgba(6,182,212,0.4)] md:hover:from-cyan-500/30 md:hover:text-cyan-100 active:scale-95"
                    >
                      <UploadIcon className="w-4 h-4 text-cyan-400" />
                      <span className="drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]">
                        Submit Minor Task
                      </span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Week 02 Locked State */
          <div className="flex flex-col items-center justify-center w-full py-32 border border-dashed border-white/10 rounded-[40px] bg-zinc-900/20 max-w-4xl mx-auto md:mx-0 backdrop-blur-xl shadow-2xl">
            <div className="bg-white/5 p-5 rounded-full mb-5 shadow-inner border border-white/5">
              <LockIcon />
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
  );
}

export default Page;