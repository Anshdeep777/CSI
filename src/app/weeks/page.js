import React from 'react'

const Page = () => {
  return (
    <div className='bg-black min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 mt-12 md:p-12 select-none overflow-x-hidden '>
      
      {/* Story-Based Page Heading */}
      <div className="text-center mb-10 md:mb-16 max-w-2xl mt-6">
        <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-green-400 font-bold tracking-widest uppercase mb-3">
          
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          The Escalation Grid
        </h1>
        <p className="text-zinc-500 text-xs md:text-sm mt-3 tracking-wide leading-relaxed max-w-md mx-auto border-t border-white/5 pt-3">
          Track your strategic deployment clearance. Active deployment phases are unlocked below; future operations remain restricted
        </p>
      </div>

      {/* Main Grid Wrapper */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full max-w-5xl relative">
        
        {/* Card 1: Week 1 Active */}
        <div className="w-full max-w-[380px] h-[500px] sm:h-[520px] rounded-[36px] relative overflow-hidden bg-zinc-900 border border-white/15 shadow-2xl group transition-all duration-300 hover:border-white/20">
          <img 
            src='/poster.png' 
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            alt="Active Operational Objective"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-3.5">
            <div>
              <p className='text-green-400 text-xs font-black tracking-widest uppercase mb-1'>Coming soon</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase">
                Week 01: Welcome To The Chaos
              </h2>
              <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                Drop directly into a high-pressure secure terminal where corporate survival violently collides with macro sustainability frameworks
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-green-500/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-green-400 uppercase border border-green-500/20">
                Soon!
              </span>
              <span className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-400 border border-white/5">
                #WEEK01
              </span>
            </div>
            
            <button className="w-full bg-white/30 text-black font-bold py-3 px-4 rounded-full text-sm transition-transform active:scale-[0.98] hover:bg-zinc-100/30 shadow-md">
              Coming soon
            </button>
          </div>
        </div>

        {/* Card 2: Upcoming Restricted Weeks */}
        <div className="w-full max-w-[380px] h-[500px] sm:h-[520px] rounded-[36px] relative overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl group transition-all duration-300 opacity-60">
          <img 
            src='/lock.png' 
            className='absolute inset-0 w-full h-full object-cover grayscale brightness-50'
            alt="Locked Vector Asset"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-3.5">
            <div>
              <p className='text-zinc-600 text-xs font-black tracking-widest uppercase mb-1'>Restricted Vector</p>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-400 tracking-wide uppercase">Upcoming Weeks</h2>
              <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                Future operational modules, life-cycle tracking baselines, and circular strategic pivots are locked pending clearance
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-zinc-500 uppercase border border-white/5">
                🔒 System Encrypted
              </span>
            </div>
            
            <button 
              disabled
              className="w-full bg-zinc-800 text-zinc-600 font-bold py-3 px-4 rounded-full text-sm cursor-not-allowed border border-white/5"
            >
              Access Restricted
            </button>
          </div>
        </div>

        {/* Responsive Character and Speech Bubble Container */}
        <div className="xl:absolute xl:-right-28 xl:bottom-0 flex flex-col items-center mt-8 xl:mt-0 z-30">
            {/* Speech Bubble */}
            <div className="relative bg-zinc-800 text-zinc-100 px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium mb-3 shadow-xl border border-white/10 tracking-wide animate-bounce">
                ready to explore weeks!!
                {/* Bubble Tip */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-800 border-r border-b border-white/10 transform rotate-45"></div>
            </div>
            
            {/* Character Image */}
            <img 
                src='/character_pose2.png' 
                alt="Operational Character"
                className="w-36 sm:w-44 xl:w-48 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
        </div>

      </div>
    </div>
  )
}

export default Page