'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const awardsData = [
  {
    id: 1,
    badgeBg: 'linear-gradient(145deg,#9f6ee0,#6c2fbf)',
    badgeShadow: 'rgba(140,80,240,0.55)',
    date: '12 Oct 2019',
    status: 'Winner',
    title: 'MSMI Media UX Award\n2018–19',
    location: 'Toronto, Canada',
    color: '#a855f7',
    dotColor: '#c084fc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <rect x="2" y="6" width="20" height="12" rx="3" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    badgeBg: 'linear-gradient(145deg,#4fa8f8,#1a6ddb)',
    badgeShadow: 'rgba(59,130,246,0.55)',
    date: '28 Dec 2019',
    status: 'Gold Winner',
    title: 'Apple Design Award\n2018–19',
    location: 'United States',
    color: '#3b82f6',
    dotColor: '#60a5fa',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    id: 3,
    badgeBg: 'linear-gradient(145deg,#f5c842,#c9940a)',
    badgeShadow: 'rgba(234,179,8,0.55)',
    date: '28 Nov 2019',
    status: 'Asia Pacific',
    title: 'Yellow Dot Design Award\n2019–20',
    location: 'United Nation',
    color: '#eab308',
    dotColor: '#fde047',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    id: 4,
    badgeBg: 'linear-gradient(145deg,#4ade80,#16a34a)',
    badgeShadow: 'rgba(34,197,94,0.55)',
    date: '28 Nov 2019',
    status: 'Runner Up',
    title: "Indiana's Best Design\n2019–20",
    location: 'North America',
    color: '#22c55e',
    dotColor: '#86efac',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <polygon points="5,3 19,12 5,21" />
      </svg>
    ),
  },
  {
    id: 5,
    badgeBg: 'linear-gradient(145deg,#f5c842,#c9940a)',
    badgeShadow: 'rgba(234,179,8,0.55)',
    date: '30 Dec 2019',
    status: 'Silver Winner',
    title: 'UMO UX India Award\n2020–21',
    location: 'Hyderabad, India',
    color: '#eab308',
    dotColor: '#fde047',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <polygon points="12,2 22,20 2,20" />
      </svg>
    ),
  },
  {
    id: 6,
    badgeBg: 'linear-gradient(145deg,#f87171,#c01f1f)',
    badgeShadow: 'rgba(239,68,68,0.55)',
    date: '13 Aug 2019',
    status: 'Winner',
    title: 'Best Music Album\n2018–19',
    location: 'Mumbai, India',
    color: '#ef4444',
    dotColor: '#fca5a5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Exo+2:wght@300;400;600&display=swap');

  .awards-page {
    min-height: 100vh;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 140px 20px; /* Added extra padding to allow for scrolling */
    font-family: 'Exo 2', sans-serif;
    position: relative;
    overflow-x: hidden;
  }
  .awards-page::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px);
    pointer-events: none;
    z-index: 0;
  }
  .awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
    max-width: 1050px;
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .award-wrap {
    perspective: 900px;
    cursor: pointer;
    position: relative;
    opacity: 0; /* Handled by GSAP now */
  }
  .award-glow-bg {
    position: absolute;
    inset: -8px;
    border-radius: 28px;
    opacity: 0;
    transition: opacity 0.3s ease;
    filter: blur(18px);
    z-index: -1;
  }
  .award-wrap:hover .award-glow-bg { opacity: 1; }
  .award-card {
    position: relative;
    min-height: 300px;
    border-radius: 20px;
    padding: 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.12s ease-out, box-shadow 0.12s ease-out;
    background: linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(200,200,210,0.10) 18%, rgba(80,80,100,0.08) 40%, rgba(255,255,255,0.14) 60%, rgba(60,60,80,0.08) 80%, rgba(255,255,255,0.18) 100%), #111118;
    border-top: 1.5px solid rgba(255,255,255,0.55);
    border-left: 1.5px solid rgba(255,255,255,0.28);
    border-right: 1.5px solid rgba(255,255,255,0.10);
    border-bottom: 2px solid rgba(0,0,0,0.9);
    box-shadow: 0 12px 40px rgba(0,0,0,0.85), 0 4px 12px rgba(0,0,0,0.6), inset 1px 1px 0 rgba(255,255,255,0.25), inset -1px -1px 0 rgba(0,0,0,0.6);
    will-change: transform;
  }
  .award-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 55%;
    background: linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 40%, transparent 70%);
    border-radius: 20px 20px 0 0;
    pointer-events: none;
    z-index: 1;
  }
  .award-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px);
    pointer-events: none;
    z-index: 1;
  }
  .award-wrap:hover .award-card {
    box-shadow: 0 22px 60px rgba(0,0,0,0.9), 0 8px 20px rgba(0,0,0,0.7), inset 1px 1px 0 rgba(255,255,255,0.35), inset -1px -1px 0 rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06);
  }
  .award-deco-glow {
    position: absolute;
    bottom: -30px; right: -30px;
    width: 200px; height: 200px;
    border-radius: 50%;
    opacity: 0.18;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 0;
  }
  .award-wrap:hover .award-deco-glow { opacity: 0.36; }
  .award-rivet {
    position: absolute;
    width: 7px; height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6) 0%, rgba(120,120,140,0.4) 55%, rgba(40,40,60,0.8) 100%);
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 1px 2px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3);
    z-index: 3;
  }
  .award-top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 2;
  }
  .award-badge {
    width: 50px; height: 50px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-top: 1.5px solid rgba(255,255,255,0.65);
    border-left: 1.5px solid rgba(255,255,255,0.35);
    border-right: 1.5px solid rgba(0,0,0,0.5);
    border-bottom: 2px solid rgba(0,0,0,0.75);
  }
  .award-date {
    font-family: 'Rajdhani', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: rgba(180,180,195,0.55);
    text-transform: uppercase;
    margin-top: 4px;
    text-shadow: 0 1px 0 rgba(255,255,255,0.08), 0 -1px 0 rgba(0,0,0,0.5);
  }
  .award-mid {
    margin-top: 36px;
    position: relative;
    z-index: 2;
  }
  .award-status {
    font-family: 'Rajdhani', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #888 0%, #ccc 40%, #888 70%, #bbb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 1px 0 rgba(0,0,0,0.7));
  }
  .award-title {
    font-family: 'Rajdhani', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
    white-space: pre-line;
    letter-spacing: 0.02em;
    background: linear-gradient(165deg, #ffffff 0%, #d0d0da 20%, #f8f8ff 35%, #909098 55%, #e0e0ea 70%, #ffffff 85%, #b0b0ba 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 1px 0 rgba(255,255,255,0.25)) drop-shadow(0 2px 3px rgba(0,0,0,0.8)) drop-shadow(0 -1px 0 rgba(0,0,0,0.4));
  }
  .award-accent-line {
    height: 1px;
    width: 40px;
    margin-top: 10px;
    border-radius: 2px;
    opacity: 0.5;
  }
  .award-bottom-row {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
  }
  .award-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .award-location {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: rgba(160,160,175,0.6);
    text-shadow: 0 1px 0 rgba(255,255,255,0.06), 0 -1px 0 rgba(0,0,0,0.4);
  }
`;

function AwardCard({ award }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    card.style.transform = `rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg) translateZ(10px)`;
  }

  function handleMouseLeave() {
    if (cardRef.current) cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  }

  return (
    <div className="award-wrap" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="award-glow-bg" style={{ background: `radial-gradient(circle, ${award.color}44 0%, transparent 70%)` }} />
      <div className="award-card" ref={cardRef}>
        <div className="award-rivet" style={{ top: 10, left: 10 }} />
        <div className="award-rivet" style={{ top: 10, right: 10 }} />
        <div className="award-rivet" style={{ bottom: 10, left: 10 }} />
        <div className="award-rivet" style={{ bottom: 10, right: 10 }} />
        <div className="award-deco-glow" style={{ background: `radial-gradient(circle, ${award.color} 0%, transparent 70%)` }} />

        <div className="award-top-row">
          <div className="award-badge" style={{ background: award.badgeBg, boxShadow: `0 6px 18px ${award.badgeShadow}, 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.4)` }}>
            {award.icon}
          </div>
          <span className="award-date">{award.date}</span>
        </div>

        <div className="award-mid">
          <p className="award-status">{award.status}</p>
          <h3 className="award-title">{award.title}</h3>
          <div className="award-accent-line" style={{ background: `linear-gradient(90deg, ${award.color}, transparent)` }} />
        </div>

        <div className="award-bottom-row">
          <div className="award-dot" style={{ background: award.dotColor, boxShadow: `0 0 6px ${award.dotColor}` }} />
          <span className="award-location">{award.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function AwardsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap.context creates a safe scope for React 18 strict mode cleanup
    const ctx = gsap.context(() => {
      
      // Select all `.award-wrap` elements inside our container
      const cards = gsap.utils.toArray('.award-wrap');

      // Set their initial pre-animated state
      gsap.set(cards, { 
        y: 60, 
        opacity: 0,
        rotationX: 10
      });

      // Batch them so they stagger nicely as they scroll into view
      ScrollTrigger.batch(cards, {
        start: 'top 85%', // Trigger when the top of the element hits 85% down the viewport
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.2)',
            overwrite: true
          });
        },
        // Optional: Reset them if scrolled back up past them, 
        // remove this if you only want them to animate once.
        onLeaveBack: (elements) => {
          gsap.set(elements, { 
            y: 60, 
            opacity: 0,
            rotationX: 10,
            overwrite: true 
          });
        }
      });

    }, containerRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="awards-page" ref={containerRef}>
        <div className="awards-grid">
          {awardsData.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </>
  );
}