import { Heart, Star, ChevronRight } from "lucide-react";

export default function DestinationCard() {
  return (
    <div className="flex items-center justify-center min-h-screen z-100 p-8">
      {/* MAIN CARD CONTAINER 
        Adjust width (w-[320px]) and height (h-[420px]) as needed.
      */}
      <div className="relative w-[340px] h-[460px] rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer">
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000&auto=format&fit=crop"
          alt="Rio de Janeiro"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Gradient Overlay (Makes text readable) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Top Right Heart Button (Glass Effect) */}
        <button className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          <Heart size={20} strokeWidth={1.5} />
        </button>

        {/* Bottom Content Area */}
        <div className="absolute bottom-0 w-full p-6 flex flex-col gap-5">
          
          {/* Text Information */}
          <div>
            <p className="text-white/80 text-sm font-medium mb-1 drop-shadow-md">
              Brazil
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3 drop-shadow-lg">
              Rio de Janeiro
            </h2>
            
            {/* Ratings & Reviews */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white">
                <Star size={14} className="fill-white text-white" />
                <span className="font-semibold mt-0.5">5.0</span>
              </div>
              <span className="text-white/70 drop-shadow-md">143 reviews</span>
            </div>
          </div>

          {/* LIQUID GLASS "SEE MORE" BUTTON 
            Uses backdrop-blur, semi-transparent white, and an inner shine effect.
          */}
          <button className="relative w-full h-16 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center px-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden hover:bg-white/20 transition-all duration-300 active:scale-95 group/btn">
            
            {/* Liquid Shine Hover Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1s_forwards] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
            
            {/* Centered Text */}
            <span className="flex-1 text-center font-medium text-white text-lg tracking-wide pl-12 relative z-10">
              See more
            </span>
            
            {/* Arrow Button (Solid White) */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 relative z-10 shadow-md group-hover/btn:scale-105 transition-transform duration-300">
              <ChevronRight size={24} className="text-black ml-0.5" />
            </div>
            
          </button>
        </div>
      </div>

      {/* Global Styles for the shimmer effect (Add to your globals.css if preferred) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}