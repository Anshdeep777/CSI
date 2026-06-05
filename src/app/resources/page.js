"use client"
import React, { useState } from "react";

// Inline SVG Document Icon
const DocumentIcon = ({ className = "w-6 h-6 text-zinc-400" }) => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const Page = () => {
  const [activeWeek, setActiveWeek] = useState("week01");

  const documents = [
    {
      id: 1,
      title: "The Fundamentals of Consulting",
      imageUrl: "/one.png",
      driveLink: "https://drive.google.com/file/d/1Dw9bavgsCLcR1zaWcTFVtG-RrnDYThYR/view",
      week: "week01",
    },
    {
      id: 2,
      title: "The Three Pillars of Sustainability",
      imageUrl: "/two.png",
      driveLink: "https://drive.google.com/file/d/1etZkky5X8zz1ow8xp4m4n0lOjWeFV_Xo/view",
      week: "week01",
    },
    {
      id: 3,
      title: "Sustainability in Capital Markets",
      imageUrl: "/three.png",
      driveLink: "https://drive.google.com/file/d/1UjjbVPDgw4O8G2o3ICFULH5IW-s9HoCs/view",
      week: "week01",
    },
    {
      id: 4,
      title: "Bridging Sustainability and Innovation",
      imageUrl: "/four.png",
      driveLink: "https://drive.google.com/file/d/1vAGhCyuUEuXr49k83TC034DJGz2HpSoZ/view",
      week: "week01",
    },
     {
      id: 5,
      title: "Global Sustainability Drivers",
      imageUrl: "/five.png",
      driveLink: "https://drive.google.com/file/d/1lxNF2Y95GreJdtijwEvjaEniWv6Bk6-R/view",
      week: "week01",
    },
    {
      id: 6,
      title: "Systems Thinking Frameworks",
      imageUrl: "/six.png",
      driveLink: "https://drive.google.com/file/d/1rDMBv_UlwhtZshNkr7U1o-cxkk7L-4VX/view",
      week: "week01",
    },
    {
      id: 7,
      title: "Feedback Loops and Trade-Offs",
      imageUrl: "/seven.png",
      driveLink: "https://drive.google.com/file/d/1nXKtu4KBEj8oYxL_hr8CdnI54aKgNT1b/view?usp=sharing",
      week: "week01",
    },
  ];

  const filteredDocs = documents.filter((doc) => doc.week === activeWeek);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 mt-10 px-6 py-12 flex flex-col items-center mt-10">
      
      {/* Story-Based Page Heading */}
      <div className="text-center mb-10 md:mb-12 max-w-2xl mt-6 w-full">
        <div className="flex items-center justify-center gap-3 text-[10px] md:text-xs text-zinc-400 font-bold tracking-widest uppercase mb-4">
          <DocumentIcon />
          <span>Core Reference Materials</span>
          <DocumentIcon />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] mb-3">
          Document Library
        </h1>
        
        <p className="text-zinc-500 text-xs md:text-sm mt-3 tracking-wide leading-relaxed max-w-md mx-auto border-t border-white/5 pt-3">
          Access fundamental strategy guides, sustainability frameworks, and capital market insights.
        </p>
      </div>

      {/* Week Filter Toggle & Highlighted Mother Link */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex gap-4 bg-zinc-900/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
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
        
        {/* Highlighted Mother Link Button */}
        <a 
          href="https://drive.google.com/drive/folders/1FFmrwthLLzjJBJz9aVwlxzTC6wO8PoYK"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 group active:scale-95"
        >
          <DocumentIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
            Explore All Resources At Once
          </span>
          <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
            →
          </span>
        </a>
      </div>

      {/* Conditional Rendering: Grid or Empty State */}
      {filteredDocs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 justify-items-center max-w-7xl w-full mx-auto">
          {filteredDocs.map((doc) => (
            <a
              key={doc.id}
              href={doc.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[260px] overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-600/20 via-zinc-800/40 to-black/60 backdrop-blur-xl border-t border-l border-white/20 border-b border-r border-black/80 shadow-[12px_12px_24px_rgba(0,0,0,0.9),inset_1px_1px_2px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[16px_16px_32px_rgba(0,0,0,1),inset_2px_2px_4px_rgba(255,255,255,0.3)] hover:from-zinc-500/30 group"
            >
              <div className="h-[280px] w-full p-2 bg-black/20 relative">
                <img
                  src={doc.imageUrl}
                  alt={doc.title}
                  className="h-full w-full object-cover rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <DocumentIcon />
                </div>
              </div>

              <div className="p-5 bg-gradient-to-t from-black/80 to-transparent">
                <h2 className="text-center text-zinc-300 font-medium text-lg tracking-wide drop-shadow-lg">
                  {doc.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      ) : (
        /* Empty State for Week 02 */
        <div className="flex flex-col items-center justify-center w-full py-24 border border-dashed border-white/10 rounded-[36px] bg-zinc-900/30 max-w-4xl mx-auto backdrop-blur-sm">
          <div className="bg-white/5 p-4 rounded-full mb-4">
            <DocumentIcon className="w-8 h-8 text-zinc-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-400 tracking-wide uppercase mb-2">
            Restricted Clearance
          </h3>
          <p className="text-sm text-zinc-500 max-w-sm text-center tracking-wide leading-relaxed">
            Week 02 operational documents are currently locked. System will deploy assets when clearance is granted.
          </p>
          <span className="mt-6 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider text-zinc-500 uppercase border border-white/5">
            🔒 Encrypted
          </span>
        </div>
      )}
      
    </div>
  );
};

export default Page;