"use client";

import { useRef, useCallback } from "react";

export default function TiltCard() {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const glareRef = useRef(null);
  const animRef = useRef(0);
  const stateRef = useRef({
    currentRotX: 0,
    currentRotY: 0,
    targetRotX: 0,
    targetRotY: 0,
    isHovering: false,
  });

  const lerp = (a, b, t) => a + (b - a) * t;

  const startAnimation = useCallback(() => {
    const animate = () => {
      const s = stateRef.current;
      s.currentRotX = lerp(s.currentRotX, s.targetRotX, 0.12);
      s.currentRotY = lerp(s.currentRotY, s.targetRotY, 0.12);

      if (cardRef.current) {
        const scale = s.isHovering ? 1.04 : 1;
        cardRef.current.style.transform = `rotateX(${s.currentRotX}deg) rotateY(${s.currentRotY}deg) scale3d(${scale}, ${scale}, 1)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  }, []);

  const stopAnimation = useCallback(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || !shineRef.current || !glareRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    stateRef.current.targetRotY = dx * 8;
    stateRef.current.targetRotX = -dy * 6;

    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;

    shineRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)`;
    shineRef.current.style.opacity = "1";

    glareRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 60%)`;
    glareRef.current.style.opacity = "1";

    cardRef.current.style.borderColor = `rgba(255,255,255,${0.1 + Math.abs(dx) * 0.2 + Math.abs(dy) * 0.15})`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    stateRef.current.isHovering = true;
    startAnimation();
  }, [startAnimation]);

  const handleMouseLeave = useCallback(() => {
    const s = stateRef.current;
    s.isHovering = false;
    s.targetRotX = 0;
    s.targetRotY = 0;

    if (shineRef.current) shineRef.current.style.opacity = "0";
    if (glareRef.current) glareRef.current.style.opacity = "0";
    if (cardRef.current) cardRef.current.style.borderColor = "rgba(255,255,255,0.12)";
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        perspective: "1000px",
        backgroundColor: "transparent", 
      }}
    >
      {/* Card - EVENT LISTENERS MOVED HERE */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "320px",
          height: "420px",
          borderRadius: "20px",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "box-shadow 0.2s ease",
          cursor: "pointer",
          background: "linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)",
          border: "1px solid rgba(255,255,255,0.12)",
          overflow: "hidden",
          willChange: "transform",
        }}
      >
        {/* Background circles */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden", borderRadius: "20px" }}>
          <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "#7c3aed", opacity: 0.08, top: -80, right: -60 }} />
          <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", background: "#3b82f6", opacity: 0.08, bottom: 40, left: -50 }} />
          <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", background: "#06b6d4", opacity: 0.06, bottom: 120, right: 20 }} />
        </div>

        {/* Shine layer */}
        <div
          ref={shineRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
            pointerEvents: "none",
            zIndex: 2,
            opacity: 0,
            transition: "opacity 0.1s",
          }}
        />

        {/* Glare layer */}
        <div
          ref={glareRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
            pointerEvents: "none",
            zIndex: 3,
            opacity: 0,
            transition: "opacity 0.1s",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 4,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "auto" }}>
            {/* Logo */}
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Chip */}
            <div style={{
              width: 44, height: 34, borderRadius: 6,
              background: "linear-gradient(135deg, #d4a843, #f0c96a, #b8932e)",
              position: "relative", overflow: "hidden"
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  position: "absolute", height: 1,
                  background: "rgba(0,0,0,0.2)",
                  left: 4, right: 4,
                  top: `${6 + i * 10}px`
                }} />
              ))}
              <div style={{ position: "absolute", width: 1, top: 4, bottom: 4, left: "50%", background: "rgba(0,0,0,0.2)" }} />
            </div>
          </div>

          {/* Card number */}
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 16,
            letterSpacing: 3,
            color: "rgba(255,255,255,0.75)",
            marginBottom: "1.2rem"
          }}>
            •••• •••• •••• 4291
          </div>

          {/* Bottom row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 4 }}>Card holder</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontWeight: 500, letterSpacing: 1 }}>Alex Morgan</div>
              <div style={{ marginTop: 10 }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 4 }}>Expires</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontWeight: 500, letterSpacing: 1 }}>12 / 27</div>
              </div>
            </div>

            {/* Network circles */}
            <div style={{ display: "flex" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#eb5757", opacity: 0.85, marginRight: -12 }} />
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#f5a623", opacity: 0.75 }} />
            </div>
          </div>
        </div>
      </div>

      <p style={{ marginTop: "1.5rem", fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "sans-serif" }}>
        Hover over the card
      </p>
    </div>
  );
}