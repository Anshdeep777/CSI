"use client";
import { useEffect, useRef } from "react";

export default function DemoPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* ── Section ONE ── */
        gsap.from(".s1-heading", {
          y: 80, opacity: 0, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: ".s1-heading", start: "top 85%" },
        });
        gsap.from(".s1-para", {
          y: 50, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: ".s1-para", start: "top 85%" },
        });

        /* ── Section TWO ── */
        gsap.from(".s2-img", {
          x: -120, opacity: 0, duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: ".s2-img", start: "top 80%" },
        });
        gsap.from(".s2-text", {
          x: 80, opacity: 0, duration: 1.1, delay: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".s2-text", start: "top 80%" },
        });

        /* ── Section THREE ── */
        gsap.from(".s3-text", {
          x: -80, opacity: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: ".s3-text", start: "top 80%" },
        });
        gsap.from(".s3-img", {
          x: 120, opacity: 0, duration: 1.3, delay: 0.15, ease: "expo.out",
          scrollTrigger: { trigger: ".s3-img", start: "top 80%" },
        });

        /* ── Section FOUR ── */
        gsap.from(".s4-img", {
          scale: 1.15, opacity: 0, duration: 1.4, ease: "power4.out",
          scrollTrigger: { trigger: ".s4-img", start: "top 85%" },
        });
        gsap.from(".s4-heading", {
          y: 60, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".s4-heading", start: "top 85%" },
        });
        gsap.from(".s4-para", {
          y: 40, opacity: 0, stagger: 0.18, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: ".s4-para", start: "top 85%" },
        });

        /* ── Section FIVE & SIX ── */
        [".s5-heading", ".s6-heading"].forEach((sel) => {
          gsap.from(sel, {
            clipPath: "inset(0 100% 0 0)", opacity: 1, duration: 1.2, ease: "expo.inOut",
            scrollTrigger: { trigger: sel, start: "top 85%" },
          });
        });
        [".s5-para", ".s6-para"].forEach((sel) => {
          gsap.from(sel, {
            y: 30, opacity: 0, duration: 0.9, delay: 0.4, ease: "power2.out",
            scrollTrigger: { trigger: sel, start: "top 85%" },
          });
        });

        /* ── Footer ── */
        gsap.from(".demo-footer", {
          opacity: 0, y: 30, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: ".demo-footer", start: "top 90%" },
        });
      }, containerRef);
    };

    init();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Syne:wght@400;700&display=swap');

        /* SCOPED CSS wrapper to prevent bleeding & ensure transparency */
        .demo-page-container {
          background: transparent; /* No background so canvas shows through */
          color: #f0ede6;
          font-family: 'Cormorant Garamond', Georgia, serif;
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        .demo-page-container .inner-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .demo-page-container section { 
          padding: 10rem 0; 
          position: relative; 
        }

        .demo-page-container h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 6vw, 6rem);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f0ede6;
          margin: 0;
        }

        .demo-page-container p {
          font-size: clamp(1.05rem, 1.5vw, 1.2rem);
          line-height: 1.85;
          color: #a09d96;
          font-weight: 300;
          max-width: 55ch;
          margin: 0;
        }

        /* ── SECTION ONE ── */
        .demo-page-container .one .inner-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .demo-page-container .one::before {
          content: '01'; position: absolute; top: 3rem; left: 2rem;
          font-family: 'Syne', sans-serif; font-size: 0.75rem; letter-spacing: 0.3em; color: rgba(255, 255, 255, 0.2);
        }

        /* ── SECTION TWO ── */
        .demo-page-container .two .inner-container {
          display: grid;
          grid-template-columns: 1.1fr 0.4fr 1.1fr;
          gap: 3rem;
          align-items: center;
        }
        .demo-page-container .two::before {
          content: '02'; position: absolute; top: 3rem; left: 2rem;
          font-family: 'Syne', sans-serif; font-size: 0.75rem; letter-spacing: 0.3em; color: rgba(255, 255, 255, 0.2);
        }

        /* ── SECTION THREE ── */
        .demo-page-container .three .inner-container {
          display: grid;
          grid-template-columns: 0.4fr 1.1fr 1.1fr;
          gap: 3rem;
          align-items: center;
        }
        .demo-page-container .three::before {
          content: '03'; position: absolute; top: 3rem; left: 2rem;
          font-family: 'Syne', sans-serif; font-size: 0.75rem; letter-spacing: 0.3em; color: rgba(255, 255, 255, 0.2);
        }

        /* ── SECTION FOUR ── */
        .demo-page-container .four { overflow: hidden; }
        .demo-page-container .four .inner-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          gap: 3rem 4rem;
          align-items: start;
        }
        .demo-page-container .four .s4-img { grid-column: 1; grid-row: 1 / 3; align-self: center; }
        .demo-page-container .four::before {
          content: '04'; position: absolute; top: 3rem; left: 2rem;
          font-family: 'Syne', sans-serif; font-size: 0.75rem; letter-spacing: 0.3em; color: rgba(255, 255, 255, 0.2);
        }

        /* ── SECTION FIVE & SIX ── */
        .demo-page-container .five, .demo-page-container .six { 
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .demo-page-container .five .inner-container, .demo-page-container .six .inner-container {
          display: flex; flex-direction: row; gap: 6rem; align-items: flex-start;
        }
        .demo-page-container .five .inner-container h1, .demo-page-container .six .inner-container h1 {
          flex: 0 0 40%; font-size: clamp(3rem, 5vw, 5rem);
        }
        .demo-page-container .five::before { content: '05'; position: absolute; top: 3rem; left: 2rem; font-family: 'Syne', sans-serif; font-size: 0.75rem; letter-spacing: 0.3em; color: rgba(255, 255, 255, 0.2); }
        .demo-page-container .six::before { content: '06'; position: absolute; top: 3rem; left: 2rem; font-family: 'Syne', sans-serif; font-size: 0.75rem; letter-spacing: 0.3em; color: rgba(255, 255, 255, 0.2); }

        /* ── IMAGE STYLES ── */
        .demo-page-container .img-wrap {
          overflow: hidden; border-radius: 2px; position: relative;
        }
        .demo-page-container .img-wrap::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%); pointer-events: none;
        }
        .demo-page-container .img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: grayscale(20%) contrast(1.05);
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease;
        }
        .demo-page-container .img-wrap:hover img {
          transform: scale(1.04); filter: grayscale(0%) contrast(1.08);
        }
        .demo-page-container .img-tall { height: 520px; }
        .demo-page-container .img-wide { height: 400px; }
        .demo-page-container .img-square { height: 460px; }

        /* ── DIVIDER LINE ── */
        .demo-page-container .line-accent {
          width: 3rem; height: 1px; background: rgba(255, 255, 255, 0.2); margin-bottom: 2rem;
        }

        /* ── FOOTER ── */
        .demo-page-container .demo-footer {
          padding: 4rem 2rem; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;
          font-family: 'Syne', sans-serif; font-size: 0.75rem; letter-spacing: 0.3em; color: rgba(255, 255, 255, 0.3); text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .demo-page-container .one .inner-container,
          .demo-page-container .two .inner-container,
          .demo-page-container .three .inner-container,
          .demo-page-container .four .inner-container { grid-template-columns: 1fr; gap: 2rem; }
          .demo-page-container .five .inner-container, .demo-page-container .six .inner-container { flex-direction: column; gap: 2rem; }
          .demo-page-container .img-tall, .demo-page-container .img-wide, .demo-page-container .img-square { height: 280px; }
          .demo-page-container .four .s4-img { grid-row: 1; }
        }
      `}</style>

      {/* The isolated CSS Scope wrapper */}
      <div ref={containerRef} className="demo-page-container">

        {/* ─── SECTION 1 ─── */}
        <section className="one">
          <div className="inner-container">
            <div className="col">
              <div className="line-accent" />
              <h1 className="s1-heading">Welcome<br />to the Systems Architecture Core</h1>
            </div>
            <div className="col">
              <p className="s1-para">
                The threshold between stillness and motion is never simply crossed —
                it is negotiated. Every entry point carries the weight of what preceded
                it: a pause, a breath, the moment before the gesture becomes form.
                We begin not at the beginning, but somewhere already in the middle of things.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 ─── */}
        <section className="two">
          <div className="inner-container">
            <div className="col s2-img">
              <div className="img-wrap img-tall">
                <img src="/image2.jpg" alt="Gesture study" />
              </div>
            </div>
            <div className="col" />
            <div className="col s2-text">
              <div className="line-accent" />
              <h1>Ges&shy;ture</h1>
              <p style={{ marginTop: "2rem" }}>
                A gesture is not a movement — it is an intention made visible.
                In the brief arc of a hand, a shoulder, a tilted chin, entire
                histories compress and release. The body speaks a language older
                than words, tracing meaning through the air it disturbs.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3 ─── */}
        <section className="three">
          <div className="inner-container">
            <div className="col s3-text" style={{ gridColumn: "1 / 3" }}>
              <div className="line-accent" />
              <h1>Ges&shy;ture</h1>
              <p style={{ marginTop: "2rem" }}>
                When repeated, a gesture becomes ritual. When broken, it becomes
                rupture. The choreography of daily life is composed of ten
                thousand unconscious arcs — each one a small commitment to being
                here, present, embodied in this particular moment.
              </p>
            </div>
            <div className="col s3-img">
              <div className="img-wrap img-square">
                <img src="/image2.jpg" alt="Gesture study" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4 ─── */}
        <section className="four">
          <div className="inner-container">
            <div className="s4-img">
              <div className="img-wrap img-tall">
                <img src="/image2.jpg" alt="Form study" />
              </div>
            </div>
            <div style={{ paddingTop: "2rem" }}>
              <div className="line-accent" />
              <h1 className="s4-heading">Ges&shy;ture</h1>
            </div>
            <div>
              <p className="s4-para" style={{ marginBottom: "1.5rem" }}>
                Form follows intention, and intention follows attention. The discipline
                of making — of rehearsing the same passage until muscle memory absorbs
                what the mind can no longer hold — transforms effort into ease, labor
                into grace. What once required concentration becomes simply how the
                body moves through the world.
              </p>
              <p className="s4-para">
                We inherit gestures we never chose: the way we hold a cup, the angle
                of a gaze, the reflex of crossing arms against cold or doubt. Some
                arrive through lineage — a grandmother's wrist, a father's stance.
                Others accumulate through repetition, sediment laid down by years of
                choosing the same response to the same stimulus, until choice disappears
                and only the gesture remains.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5 ─── */}
        <section className="five">
          <div className="inner-container">
            <h1 className="s5-heading">Re&shy;lease</h1>
            <p className="s5-para" style={{ paddingTop: "0.5rem" }}>
              To release is to trust the emptiness that follows. The open hand
              is not absence — it is readiness. Whatever was held has altered the
              palm; the holding leaves its shape even after the object has gone.
              Release is never a return to how things were. It is arrival at
              something not yet named.
            </p>
          </div>
        </section>

        {/* ─── SECTION 6 ─── */}
        <section className="six">
          <div className="inner-container">
            <h1 className="s6-heading">Re&shy;lease</h1>
            <p className="s6-para" style={{ paddingTop: "0.5rem" }}>
              There is a discipline to letting go that mirrors the discipline
              of holding on. Both require attention. Both require the willingness
              to be present through difficulty. The difference lies only in the
              direction of the force — inward, gathering; or outward, dispersing
              into what the air will carry wherever it must go.
            </p>
          </div>
        </section>

        <footer className="demo-footer">
          <span style={{ letterSpacing: "0.4em" }}>End of Document</span>
        </footer>

      </div>
    </>
  );
}