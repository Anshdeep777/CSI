import { PhoneCallIcon } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-black min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 select-none overflow-hidden relative'>
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <div className="w-full max-w-md sm:max-w-lg bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 sm:p-8 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col items-center text-center relative z-10 transition-all duration-300 hover:border-white/15">
        
        {/* Top Window Bar Replication */}
        <div className="absolute top-6 left-6 sm:left-8 flex gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
          <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
          <span className="w-3 h-3 rounded-full bg-green-600 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
        </div>

        {/* 404 Image Container */}
        <div className="mt-8 sm:mt-4 mb-4 w-full max-w-[180px] sm:max-w-[240px] aspect-square flex items-center justify-center">
          <img 
            src="/lock.png" 
            alt="Lock"
            className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Huge 404 Display */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Locked!!
        </h1>

        {/* Status Subtitle */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800/60 border border-white/5 rounded-full text-[10px] font-black tracking-widest text-zinc-400 uppercase mt-2 mb-6">
          
         This page will be made available at the appropriate time
        </div>

        {/* Informative Error Message */}
        <div className="space-y-3 max-w-sm border-t border-white/5 pt-6 w-full">
          <h2 className="text-base sm:text-lg font-bold text-zinc-200 tracking-wide uppercase">
            Module Unavailable
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed tracking-wide">
            This page is currently unavailable. The core interface is locked and will be fully deployed soon. In the meantime, feel free to explore the rest of the app!
          </p>
          
        </div>
        <button className="group flex items-center gap-2 px-6 py-2.5 mt-4 text-sm font-semibold text-white bg-black/60 border border-white/10 rounded-full shadow-lg backdrop-blur-lg transition-all duration-300 hover:bg-black/80 hover:border-white/30 active:scale-95">
  <PhoneCallIcon className="w-4 h-4 text-slate-300 transition-colors group-hover:text-white" />
  Contact us
</button>

      </div>
    </div>
  )
}

export default Page