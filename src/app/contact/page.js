"use client";

import React from "react";
import { FiMail,FiInstagram } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 relative overflow-hidden mt-10">
      
      {/* Decorative background circles */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      {/* Main Card Container */}
      <div className="w-full max-w-6xl bg-[#1e1e24] rounded-[32px] shadow-2xl flex flex-col-reverse md:flex-row relative z-10 overflow-hidden border border-white/5 min-h-[600px]">
        
        {/* LEFT COLUMN: Metallic Info */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest mb-2 text-center md:text-left">
            CONTACT US
          </h1>
          
          <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
            <h2 className="text-[#2e5bf0] font-bold tracking-widest text-sm uppercase">
              Get in touch
            </h2>
            <div className="h-[2px] w-12 bg-[#2e5bf0]"></div>
          </div>

          <div className="flex flex-col gap-5 w-full max-w-md mx-auto md:mx-0">
            {/* METALLIC CARD: Email */}
            <div 
              className="flex items-center gap-5 p-5 rounded-2xl transition-transform hover:scale-[1.02] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #f0f0f0 0%, #c4c4c4 45%, #9d9d9d 55%, #dfdfdf 100%)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.8), inset -2px -2px 6px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.4)"
              }}
            >
              <div className="w-12 h-12 rounded-full shrink-0 bg-[#1e1e24] flex items-center justify-center shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)]">
                <FiMail className="w-5 h-5 text-gray-300" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email</span>
                <span className="text-lg font-black text-gray-900 tracking-wide truncate">Csi.iitbhu@gmail.com</span>
              </div>
            </div>

           

            {/* METALLIC CARD: Instagram */}
            <div 
              className="flex items-center gap-5 p-5 rounded-2xl transition-transform hover:scale-[1.02] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #f0f0f0 0%, #c4c4c4 45%, #9d9d9d 55%, #dfdfdf 100%)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.8), inset -2px -2px 6px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.4)"
              }}
            >
              <div className="w-12 h-12 rounded-full shrink-0 bg-[#1e1e24] flex items-center justify-center shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)]">
                <FiInstagram className="w-5 h-5 text-gray-300" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Instagram</span>
                <span className="text-lg font-black text-gray-900 tracking-wide truncate">@csi_iitbhu</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Phone Image & Register QR */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-[#17171d] relative overflow-hidden shadow-[inset_10px_0_20px_rgba(0,0,0,0.2)] min-h-[400px]">
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-[#2e5bf0] rounded-full blur-[110px] opacity-20 z-0"></div>

          {/* Phone Icon/Image - Restored to large size */}
          <img 
            src="/contact.png" 
            alt="3D Blue Telephone" 
            className="w-full h-full max-w-[70%] max-h-[70%] object-contain relative z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] mb-8 md:mb-0"
          />

          {/* Register QR Section - Floats on desktop, stacks on mobile */}
          <div className="flex flex-col items-center gap-2 relative z-20 md:absolute md:bottom-8 md:right-8">
            <h3 className="text-white font-bold tracking-widest text-sm uppercase drop-shadow-md">
              Register here
            </h3>
            <div 
              className="p-2 rounded-2xl transition-transform hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #f0f0f0 0%, #c4c4c4 45%, #9d9d9d 55%, #dfdfdf 100%)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5), inset 2px 2px 4px rgba(255,255,255,0.9), inset -2px -2px 6px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.4)"
              }}
            >
              {/* Added a white background wrapper so the QR is reliably scannable */}
              <div className="bg-white p-1 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
                <img 
                  src="/qrcode.png" 
                  alt="Register QR Code" 
                  className="w-24 h-24 object-contain rounded-lg" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}