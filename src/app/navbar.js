"use client";

import { useState } from "react";
import Link from "next/link";
import {
  House,
  CalendarDays,
  Medal,
  Users,
  Menu,
  X,
  ChevronDown,
  Lock,
  PhoneCall, // ADDED: PhoneCall icon for Contact Us
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const weekOptions = [
    { label: "All weeks", path: "/weeks" },
    { label: "week01", path: "/weeks/01" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] transform-gpu h-[70px] md:h-[80px] flex justify-between items-center px-4 md:px-8 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 pointer-events-auto md:pointer-events-none md:bg-transparent md:backdrop-blur-none md:border-none transition-all duration-300">
      <Link
        href="/"
        className="flex items-center h-full pointer-events-auto shrink-0 group"
      >
        <img
          src="/logo.png"
          alt="Camp Logo"
          className="h-9 md:h-12 w-auto object-contain drop-shadow-md shrink-0 transition-transform group-hover:scale-105"
        />
        <h1 className="text-xl md:text-3xl font-bold text-white ml-2 md:ml-3 block truncate">
          CSI
        </h1>
      </Link>

      {/* DESKTOP CENTER NAVIGATION */}
      {/* Adjusted gap from 60px to lg:gap-[60px] gap-8 to fit the new link nicely on smaller desktop screens */}
      <nav className="hidden md:flex shrink-0 pointer-events-auto px-12 h-full bg-[#050505]/80 backdrop-blur-md rounded-b-[60px] items-center justify-center border-b-8 border-l-2 border-r-2 border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] bg-[linear-gradient(#050505,#050505),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.3),rgba(0,0,0,0.5))] shadow-[0_10px_30px_rgba(46,204,113,0.2),inset_0_2px_4px_rgba(255,255,255,0.3)]">
        <div className="flex items-center justify-center gap-8 lg:gap-[50px] text-xl relative">
          <Link
            href="/"
            className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group"
          >
            <House className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden lg:block">Home</span>
          </Link>

          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <button className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group py-4">
              <CalendarDays className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
                <Link
                  key={week.label}
                  href={week.path}
                  className="px-4 py-2.5 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-green-500/20 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>{week.label}</span>
                  
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/leaderboard"
            className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group"
          >
            <Medal className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden lg:block">Leaderboard</span>
          </Link>

          {/* ADDED: Contact Us Desktop Link */}
          <Link
            href="/contact"
            className="text-white hover:text-green-400 transition-colors drop-shadow-md flex gap-2 items-center justify-center group"
          >
            <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden lg:block">Contact</span>
          </Link>
        </div>
      </nav>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center justify-end h-full pointer-events-auto gap-2 sm:gap-3 shrink-0">
        <Link
          href="/characters"
          className="group relative px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-full text-xs sm:text-sm md:text-base font-bold text-gray-100 transition-all duration-300 border-t border-l border-r border-b-[3px] md:border-b-4 border-transparent [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] bg-[linear-gradient(#1a1f26,#0d1117),linear-gradient(to_bottom,rgba(255,255,255,0.4),rgba(255,255,255,0.05),rgba(0,0,0,0.8))] shadow-[0_5px_15px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_20px_rgba(46,204,113,0.4),inset_0_1px_2px_rgba(255,255,255,0.4)] active:scale-95 flex items-center gap-1.5 sm:gap-2 shrink-0"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e] shrink-0" />
          <span className="hidden xl:block tracking-wide whitespace-nowrap">
            Meet Characters
          </span>
          <span className="hidden sm:block xl:hidden tracking-wide whitespace-nowrap">
            Characters
          </span>
          <Users className="w-4 h-4 sm:hidden text-green-400 group-hover:text-white transition-colors shrink-0" />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden items-center justify-center w-9 h-9 rounded-xl bg-[#111] border border-white/10 text-white hover:text-green-400 hover:border-green-500/40 transition-all duration-300 shadow-md"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div 
        className={`md:hidden absolute top-[70px] left-0 w-full bg-[#050505]/98 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.9)] px-5 py-6 flex flex-col gap-4 pointer-events-auto transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-200 hover:text-green-400 transition-colors flex gap-3 items-center text-base font-medium py-2.5 px-3 rounded-lg hover:bg-white/5"
        >
          <House className="w-5 h-5 text-green-400" />
          <span>Home</span>
        </Link>

        <div className="flex flex-col">
          <button
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="text-gray-200 hover:text-green-400 transition-colors flex justify-between items-center text-base font-medium py-2.5 px-3 rounded-lg hover:bg-white/5 w-full text-left"
          >
            <div className="flex gap-3 items-center">
              <CalendarDays className="w-5 h-5 text-green-400" />
              <span>Weeks</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${isMobileDropdownOpen ? "rotate-180 text-green-400" : ""}`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out pl-11 overflow-hidden ${
              isMobileDropdownOpen
                ? "grid-rows-[1fr] opacity-100 mt-1"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden flex flex-col gap-1 border-l border-white/10 pl-3">
              {weekOptions.map((week) => (
                <Link
                  key={week.label}
                  href={week.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileDropdownOpen(false);
                  }}
                  className="text-sm text-gray-400 hover:text-green-400 py-2 uppercase tracking-wide transition-colors flex items-center gap-2"
                >
                  <span>{week.label}</span>
                  {week.label === "week01" ? (
                   ""
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/leaderboard"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-200 hover:text-green-400 transition-colors flex gap-3 items-center text-base font-medium py-2.5 px-3 rounded-lg hover:bg-white/5"
        >
          <Medal className="w-5 h-5 text-green-400" />
          <span>Leaderboard</span>
        </Link>

        {/* ADDED: Contact Us Mobile Link */}
        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-200 hover:text-green-400 transition-colors flex gap-3 items-center text-base font-medium py-2.5 px-3 rounded-lg hover:bg-white/5"
        >
          <PhoneCall className="w-5 h-5 text-green-400" />
          <span>Contact us</span>
        </Link>
      </div>
    </header>
  );
}