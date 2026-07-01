"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  House,
  CalendarDays,
  Medal,
  Users,
  Menu,
  X,
  ChevronDown,
  Lock,
  PhoneCall,
  Swords,
} from "lucide-react";
import { TbSmartHome } from "react-icons/tb";
import { PiCalendarStarDuotone } from "react-icons/pi";

// Green spinner overlay
function NavLoader({ loading }) {
  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none transition-opacity duration-300"
      style={{ opacity: loading ? 1 : 0 }}
    >
      <div
        className="w-10 h-10 rounded-full border-[3px] border-white/10 border-t-green-400"
        style={{ animation: loading ? "navSpin 0.7s linear infinite" : "none" }}
      />
      <style>{`@keyframes navSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Stop spinner when route changes
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const navigate = (href, closeMobile = false) => {
    if (href === pathname) return;
    setLoading(true);
    if (closeMobile) {
      setIsMobileMenuOpen(false);
      setIsMobileDropdownOpen(false);
    }
    router.push(href);
  };

  const weekOptions = [
    { label: "All weeks", path: "/weeks" },
    { label: "Week01", path: "/weeks/01" },
    { label: "Week02", path: "/weeks/02" },
     { label: "Week03", path: "/weeks/03" },
     { label: "Week04", path: "/weeks/04" }
  ];

  return (
    <>
      <NavLoader loading={loading} />
      {/* TOP HEADER */}
      <header className="fixed top-0 left-0 w-full z-[9995] transform-gpu h-[70px] md:h-[80px] flex justify-between items-center px-4 md:px-8 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 pointer-events-auto md:pointer-events-none md:bg-transparent md:backdrop-blur-none md:border-none transition-all duration-300">
        <button
          onClick={() => navigate("/")}
          className="flex items-center h-full pointer-events-auto shrink-0 group bg-transparent border-none p-0 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt="Camp Logo"
            className="h-9 md:h-12 w-auto object-contain drop-shadow-md shrink-0 transition-transform group-hover:scale-105"
          />
          <h1 className="text-xl md:text-3xl font-bold text-white ml-2 md:ml-3 block truncate">
            CSI
          </h1>
        </button>

        {/* DESKTOP CENTER NAVIGATION */}
        <nav className="hidden md:flex shrink-0 pointer-events-auto px-12 h-full bg-[#050505]/80 backdrop-blur-md rounded-b-[60px] items-center justify-center border-b-8 border-l-2 border-r-2 border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] bg-[linear-gradient(#050505,#050505),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.3),rgba(0,0,0,0.5))] shadow-[0_10px_30px_rgba(46,204,113,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]">
          <div className="flex items-center justify-center gap-8 lg:gap-[50px] text-xl relative">
            <button
              onClick={() => navigate("/")}
              className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group bg-transparent border-none cursor-pointer"
            >
              <TbSmartHome className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:block">Home</span>
            </button>

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <button className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group py-4">
                <PiCalendarStarDuotone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="hidden lg:block">Weeks</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isDesktopDropdownOpen ? "rotate-180 text-green-400" : ""}`}
                />
              </button>

              <div
                className={`absolute top-[100%] left-1/2 -translate-x-1/2 min-w-[160px] bg-[#050505]/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-[0_10px_30px_rgba(46,204,113,0.15)] flex flex-col gap-1 transition-all duration-200 origin-top ${
                  isDesktopDropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {weekOptions.map((week) => (
                  <button
                    key={week.label}
                    onClick={() => {
                      setIsDesktopDropdownOpen(false);
                      navigate(week.path);
                    }}
                    className="px-4 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-green-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-2 w-full bg-transparent border-none cursor-pointer"
                  >
                    <span>{week.label}</span>
                    <Swords />
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate("/leaderboard")}
              className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group bg-transparent border-none cursor-pointer"
            >
              <Medal className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:block">Leaderboard</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group bg-transparent border-none cursor-pointer"
            >
              <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:block">Contact</span>
            </button>
          </div>
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center justify-end h-full pointer-events-auto gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => navigate("/characters")}
            className="group relative px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm md:text-base font-bold text-gray-100 transition-all duration-300 border-t border-l border-r border-b-[3px] md:border-b-4 border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] bg-[linear-gradient(#1a1f26,#0d1117),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.05),rgba(0,0,0,0.8))] shadow-[0_5px_15px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_20px_rgba(46,204,113,0.4),inset_0_1px_2px_rgba(255,255,255,0.4)] active:scale-95 flex items-center gap-1.5 sm:gap-2 shrink-0"
          >
            <span className="hidden xl:block tracking-wide whitespace-nowrap">
              Meet Characters
            </span>
            <span className="hidden sm:block xl:hidden tracking-wide whitespace-nowrap">
              Characters
            </span>
            <Users className="w-4 h-4 sm:hidden text-green-400 group-hover:text-white transition-colors shrink-0" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-white/10 text-white hover:text-green-400 hover:border-green-500/40 transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-red-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE UNIQUE BOTTOM SHEET CONTAINER */}
      <div
        className={`md:hidden fixed inset-0 z-[99999] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Deep blur backdrop background mask layer */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Unique Glassmorphism Dock sliding explicitly from bottom of the screen */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-zinc-950/30 backdrop-blur-3xl border-t-4 border-white/10 rounded-t-[40px] px-6 pt-5 pb-10 flex flex-col gap-3.5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] shadow-[inset_0_4px_12px_rgba(34,197,94,0.3)] border-x border-white/5 transition-transform duration-500 ease-out transform-gpu ${
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Top Panel Actions: Drag handle and explicit red close button option */}
          <div className="flex items-center justify-between w-full mb-2 px-1">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              Navigation Terminal
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 active:scale-90 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Home option */}
          <button
            onClick={() => navigate("/", true)}
            className="text-zinc-200 hover:text-green-400 transition-all flex gap-4 items-center text-base font-bold py-3.5 px-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 active:bg-white/[0.08] w-full text-left cursor-pointer"
          >
            <TbSmartHome className="w-5 h-5 text-green-400" />
            <span className="tracking-wide">Home</span>
          </button>

          {/* Operational Weeks Option Dropdown block inside glass dock */}
          <div className="flex flex-col w-full">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="text-zinc-200 hover:text-green-400 transition-all flex justify-between items-center text-base font-bold py-3.5 px-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 active:bg-white/[0.08] w-full text-left cursor-pointer"
            >
              <div className="flex gap-4 items-center">
                <PiCalendarStarDuotone className="w-5 h-5 text-green-400" />
                <span className="tracking-wide">Weeks</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 text-zinc-500 ${isMobileDropdownOpen ? "rotate-180 text-green-400" : ""}`}
              />
            </button>

            {/* Inner dynamic expandable submenus */}
            <div
              className={`grid transition-all duration-300 ease-in-out pl-12 overflow-hidden ${isMobileDropdownOpen ? "grid-rows-[1fr] opacity-100 mt-2 mb-1" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden flex flex-col gap-1.5 border-l border-white/10 pl-3">
                {weekOptions.map((week) => (
                  <button
                    key={week.path}
                    onClick={() => navigate(week.path, true)}
                    className="text-sm font-semibold text-zinc-400 hover:text-green-400 py-2.5 px-3 rounded-xl hover:bg-white/[0.03] uppercase tracking-wider transition-all flex items-center justify-between w-full text-left bg-transparent border border-transparent hover:border-white/5 cursor-pointer"
                  >
                    <span>{week.label}</span>
                    <Swords className="w-4 h-4 text-zinc-600 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard grid link */}
          <button
            onClick={() => navigate("/leaderboard", true)}
            className="text-zinc-200 hover:text-green-400 transition-all flex gap-4 items-center text-base font-bold py-3.5 px-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 active:bg-white/[0.08] w-full text-left cursor-pointer"
          >
            <Medal className="w-5 h-5 text-green-400" />
            <span className="tracking-wide">Leaderboard</span>
          </button>

          {/* Contact Support block */}
          <button
            onClick={() => navigate("/contact", true)}
            className="text-zinc-200 hover:text-green-400 transition-all flex gap-4 items-center text-base font-bold py-3.5 px-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 active:bg-white/[0.08] w-full text-left cursor-pointer"
          >
            <PhoneCall className="w-5 h-5 text-green-400" />
            <span className="tracking-wide">Contact us</span>
          </button>
        </div>
      </div>
    </>
  );
}
