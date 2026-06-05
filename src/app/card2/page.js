'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const featuresData = [
  {
    id: 1,
    badgeBg: 'linear-gradient(145deg,#9f6ee0,#6c2fbf)',
    badgeShadow: 'rgba(140,80,240,0.55)',
    tag: '01',
    status: 'Expertise',
    title: 'Learn Sustainability\nLike Industry Pros',
    location: 'Industry Standard',
    color: '#a855f7',
    dotColor: '#c084fc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 2,
    badgeBg: 'linear-gradient(145deg,#4fa8f8,#1a6ddb)',
    badgeShadow: 'rgba(59,130,246,0.55)',
    tag: '02',
    status: 'Engagement',
    title: 'Live Interactive\nSessions',
    location: 'Real-time Access',
    color: '#3b82f6',
    dotColor: '#60a5fa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 3,
    badgeBg: 'linear-gradient(145deg,#f5c842,#c9940a)',
    badgeShadow: 'rgba(234,179,8,0.55)',
    tag: '03',
    status: 'Practice',
    title: 'Hands-On Assignments\n& Quizzes',
    location: 'Skill Assessment',
    color: '#eab308',
    dotColor: '#fde047',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 4,
    badgeBg: 'linear-gradient(145deg,#4ade80,#16a34a)',
    badgeShadow: 'rgba(34,197,94,0.55)',
    tag: '04',
    status: 'Practical',
    title: 'Build a Real\nSustainability Project',
    location: 'Hands-on Output',
    color: '#22c55e',
    dotColor: '#86efac',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 5,
    badgeBg: 'linear-gradient(145deg,#f5c842,#c9940a)',
    badgeShadow: 'rgba(234,179,8,0.55)',
    tag: '05',
    status: 'Career',
    title: 'Certification &\nPortfolio Building',
    location: 'Verified Achievement',
    color: '#eab308',
    dotColor: '#fde047',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    id: 6,
    badgeBg: 'linear-gradient(145deg,#f87171,#c01f1f)',
    badgeShadow: 'rgba(239,68,68,0.55)',
    tag: '06',
    status: 'Community',
    title: 'Join the Next Gen\nof Change-Makers',
    location: 'Global Network',
    color: '#ef4444',
    dotColor: '#fca5a5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.6))' }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Exo+2:wght@300;400;600&display=swap');

  .features-page {
    min-height: 100vh;
    background: transparent;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 20px 140px 20px; 
    font-family: 'Exo 2', sans-serif;
    position: relative;
    overflow-x: hidden;
  }
  .features-page::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px);
    pointer-events: none;
    z-index: 0;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
    max-width: 1050px;
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .feature-wrap {
    perspective: 900px;
    cursor: pointer;
    position: relative;
    opacity: 0; 
  }
  .feature-glow-bg {
    position: absolute;
    inset: -8px;
    border-radius: 28px;
    opacity: 0;
    transition: opacity 0.3s ease;
    filter: blur(18px);
    z-index: -1;
  }
  .feature-wrap:hover .feature-glow-bg { opacity: 1; }
  .feature-card {
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
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 55%;
    background: linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 40%, transparent 70%);
    border-radius: 20px 20px 0 0;
    pointer-events: none;
    z-index: 1;
  }
  .feature-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px);
    pointer-events: none;
    z-index: 1;
  }
  .feature-wrap:hover .feature-card {
    box-shadow: 0 22px 60px rgba(0,0,0,0.9), 0 8px 20px rgba(0,0,0,0.7), inset 1px 1px 0 rgba(255,255,255,0.35), inset -1px -1px 0 rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06);
  }
  .feature-deco-glow {
    position: absolute;
    bottom: -30px; right: -30px;
    width: 200px; height: 200px;
    border-radius: 50%;
    opacity: 0.18;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 0;
  }
  .feature-wrap:hover .feature-deco-glow { opacity: 0.36; }
  .feature-rivet {
    position: absolute;
    width: 7px; height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.6) 0%, rgba(120,120,140,0.4) 55%, rgba(40,40,60,0.8) 100%);
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 1px 2px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3);
    z-index: 3;
  }
  .feature-top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 2;
  }
  .feature-badge {
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
  .feature-tag {
    font-family: 'Rajdhani', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: rgba(180,180,195,0.55);
    text-transform: uppercase;
    margin-top: 4px;
    text-shadow: 0 1px 0 rgba(255,255,255,0.08), 0 -1px 0 rgba(0,0,0,0.5);
  }
  .feature-mid {
    margin-top: 36px;
    position: relative;
    z-index: 2;
  }
  .feature-status {
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
  .feature-title {
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
  .feature-accent-line {
    height: 1px;
    width: 40px;
    margin-top: 10px;
    border-radius: 2px;
    opacity: 0.5;
  }
  .feature-bottom-row {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
  }
  .feature-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .feature-location {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: rgba(160,160,175,0.6);
    text-shadow: 0 1px 0 rgba(255,255,255,0.06), 0 -1px 0 rgba(0,0,0,0.4);
  }
`;

function FeatureCard({ feature }) {
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
    <div className="feature-wrap" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="feature-glow-bg" style={{ background: `radial-gradient(circle, ${feature.color}44 0%, transparent 70%)` }} />
      <div className="feature-card" ref={cardRef}>
        <div className="feature-rivet" style={{ top: 10, left: 10 }} />
        <div className="feature-rivet" style={{ top: 10, right: 10 }} />
        <div className="feature-rivet" style={{ bottom: 10, left: 10 }} />
        <div className="feature-rivet" style={{ bottom: 10, right: 10 }} />
        <div className="feature-deco-glow" style={{ background: `radial-gradient(circle, ${feature.color} 0%, transparent 70%)` }} />

        <div className="feature-top-row">
          <div className="feature-badge" style={{ background: feature.badgeBg, boxShadow: `0 6px 18px ${feature.badgeShadow}, 0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.4)` }}>
            {feature.icon}
          </div>
          <span className="feature-tag">{feature.tag}</span>
        </div>

        <div className="feature-mid">
          <p className="feature-status">{feature.status}</p>
          <h3 className="feature-title">{feature.title}</h3>
          <div className="feature-accent-line" style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }} />
        </div>

        <div className="feature-bottom-row">
          <div className="feature-dot" style={{ background: feature.dotColor, boxShadow: `0 0 6px ${feature.dotColor}` }} />
          <span className="feature-location">{feature.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.feature-wrap');

      gsap.set(cards, { 
        y: 60, 
        opacity: 0,
        rotationX: 10
      });

      ScrollTrigger.batch(cards, {
        start: 'top 85%',
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

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="features-page" ref={containerRef}>
        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </>
  );
}