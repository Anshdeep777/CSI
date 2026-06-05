'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card2Page from "../card2/page.js";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function GoldTag({ tagRef }) {
  const shineRef = useRef(null);
  const shineInnerRef = useRef(null);
  const isAnimating = useRef(false);

  const handleMouseEnter = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const shine = shineRef.current;
    const shineInner = shineInnerRef.current;

    gsap.set(shine, { x: '-100%', opacity: 1 });
    gsap.set(shineInner, { opacity: 1 });

    gsap.to(shine, {
      x: '250%',
      duration: 0.85,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(shine, { opacity: 0 });
        isAnimating.current = false;
      },
    });

    gsap.to(tagRef.current, {
      scale: 1.04,
      duration: 0.3,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <div
      ref={tagRef}
      className="flex items-center justify-center w-full mb-20 opacity-0"
      onMouseEnter={handleMouseEnter}
      style={{ cursor: 'pointer' }}
    >
      <div
        className="relative rounded-[32px] p-[6px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500"
        style={{
          width: 'clamp(300px, 30vw, 400px)',
          height: 'clamp(180px, 15vw, 240px)',
          background: 'linear-gradient(135deg, #f8e597 0%, #d4af37 35%, #8a5a19 60%, #d4af37 80%, #f8e597 100%)',
        }}
      >
        <style>{`
          .gold-tag-outer:hover {
            box-shadow:
              0 20px 40px rgba(0,0,0,0.8),
              0 0 30px 6px rgba(212,175,55,0.45),
              0 0 60px 10px rgba(212,175,55,0.2);
          }
          .gold-tag-outer {
            transition: box-shadow 0.4s ease, transform 0.5s ease;
          }
        `}</style>
        <div
          className="gold-tag-outer relative rounded-[32px] p-[6px] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            borderRadius: '32px',
            pointerEvents: 'none',
          }}
        />

        <div
          className="relative w-full h-full rounded-[26px] overflow-hidden flex items-center justify-center"
          style={{
            background:
              'linear-gradient(135deg, #cfa144 0%, #f5d78d 30%, #e8c46a 50%, #b38228 75%, #f5d78d 100%)',
            boxShadow: 'inset 0 0 15px rgba(138,90,25,0.8)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.15,
              mixBlendMode: 'overlay',
              background:
                'repeating-linear-gradient(90deg,transparent,transparent 1px,rgba(0,0,0,0.2) 1px,rgba(0,0,0,0.2) 2px)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.3,
              mixBlendMode: 'overlay',
              background:
                'repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(255,255,255,0.4) 2px,rgba(255,255,255,0.4) 4px)',
            }}
          />

          <div
            ref={shineRef}
            className="absolute inset-y-0 pointer-events-none"
            style={{
              left: 0,
              width: '60%',
              opacity: 0,
              zIndex: 20,
              transform: 'translateX(-100%)',
              background:
                'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.08) 30%, rgba(255,255,230,0.55) 45%, rgba(255,255,255,0.75) 50%, rgba(255,255,230,0.55) 55%, rgba(255,255,255,0.08) 70%, transparent 80%)',
              mixBlendMode: 'screen',
              filter: 'blur(1px)',
            }}
          >
            <div
              ref={shineInnerRef}
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(105deg, transparent 35%, rgba(255,255,200,0.0) 44%, rgba(255,255,220,0.6) 50%, rgba(255,255,200,0.0) 56%, transparent 65%)',
                mixBlendMode: 'screen',
              }}
            />
          </div>

          {[
            'top-4 left-4 md:top-5 md:left-5',
            'top-4 right-4 md:top-5 md:right-5',
            'bottom-4 left-4 md:bottom-5 md:left-5',
            'bottom-4 right-4 md:bottom-5 md:right-5',
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} rounded-full`}
              style={{
                width: 'clamp(10px,1.1vw,14px)',
                height: 'clamp(10px,1.1vw,14px)',
                background: '#d4af37',
                boxShadow:
                  'inset -2px -2px 4px rgba(100,60,10,0.8), inset 2px 2px 4px rgba(255,255,255,0.9), 2px 2px 3px rgba(0,0,0,0.4)',
              }}
            />
          ))}

          <h2
            className="relative z-10 font-sans font-black uppercase tracking-widest text-center leading-tight"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#5c4015',
              mixBlendMode: 'color-burn',
              textShadow:
                '1px 1px 1px rgba(255,255,255,0.4), -1px -1px 1px rgba(0,0,0,0.2)',
            }}
          >
            Sprint
            <br />
            2026
          </h2>
        </div>
      </div>
    </div>
  );
}

export default function CoolSection() {
  const sectionRef = useRef(null);
  const textBlockRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.set(textBlockRef.current, { opacity: 0, y: 50 });
      gsap.set(tagRef.current, { opacity: 0, scale: 0.8, y: 30 });
      gsap.set(leftLineRef.current, { scaleX: 0, transformOrigin: 'right center' });
      gsap.set(rightLineRef.current, { scaleX: 0, transformOrigin: 'left center' });

      tl.to(textBlockRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(
          [leftLineRef.current, rightLineRef.current],
          { scaleX: 1, duration: 0.8, ease: 'power3.inOut' },
          '-=0.4'
        )
        .to(
          tagRef.current,
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.5)' },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="lets-make-things-cool" className="relative z-20 w-full bg-transparent overflow-hidden text-white">
      <section
        ref={sectionRef}
        className="flex flex-col max-w-7xl mx-auto py-20 px-4 md:px-8"
      >
        <div className="flex items-center justify-center gap-4 md:gap-8 w-full mb-12">
          <div
            ref={leftLineRef}
            className="h-[2px] w-1/4 md:flex-grow rounded-full"
            style={{
              background: 'linear-gradient(to right, transparent, #6b7280)',
            }}
          />

          <div
            ref={textBlockRef}
            className="flex flex-col justify-center items-center w-full min-w-max"
          >
            <h1
              className="text-center font-extrabold tracking-tighter whitespace-nowrap bg-clip-text pb-1"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
                backgroundImage:
                  'linear-gradient(to bottom, #ffffff, #d1d5db, #6b7280)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))',
              }}
            >
              Let's Make Things Cool!
            </h1>
            <p className="flex items-center justify-center mt-3 font-medium text-gray-400 tracking-wide"
               style={{ fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
              Welcome to the Systems Architecture Core
            </p>
          </div>

          <div
            ref={rightLineRef}
            className="h-[2px] w-1/4 md:flex-grow rounded-full"
            style={{
              background: 'linear-gradient(to left, transparent, #6b7280)',
            }}
          />
        </div>

        <GoldTag tagRef={tagRef} />

        <Card2Page />
      </section>
    </div>
  );
}