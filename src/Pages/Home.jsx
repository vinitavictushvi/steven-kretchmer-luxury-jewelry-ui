import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* 1. SILENT HERO BANNER */}
      <section style={{ 
        height: "70vh", 
        backgroundImage: "url('https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.85) 100%)" }}></div>
        
        <div className="container position-relative text-center" style={{ zIndex: 2, maxWidth: "600px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "6px", color: "#8a7355", textTransform: "uppercase", marginBottom: "20px" }}>
            The Art of Tension Suspension
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "300", letterSpacing: "4px", lineHeight: "1.3", marginBottom: "30px", color: "#fff" }}>
            The Physics of Pure Beauty
          </h2>
          <Link to="/collection">
            <button style={{
              background: "transparent", 
              color: "#fff", 
              border: "1px solid #ffffff33",
              padding: "14px 40px", 
              fontSize: "11px", 
              letterSpacing: "4px", 
              fontWeight: "300", 
              transition: "0.4s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = "#8a7355"; e.target.style.color = "#8a7355"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "#ffffff33"; e.target.style.color = "#fff"; }}
            >
              DISCOVER ARCHIVE
            </button>
          </Link>
        </div>
      </section>

      {/* 2. EDITORIAL MANIFESTO */}
      <section style={{ padding: "120px 0", background: "#050505", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "5px", color: "#8a7355", display: "block", marginBottom: "25px" }}>
            METALLURGICAL MASTERY
          </span>
          <p style={{ color: "#aaa", fontSize: "15px", lineHeight: "2.2", fontFamily: "serif", fontStyle: "italic", fontWeight: "300" }}>
            "Discover jewelry that transcends traditional boundaries. Our patented precious alloys create a gravitational suspension, allowing hand-selected gemstones to float seamlessly without prongs—maximizing fire, brilliance, and architectural pureness."
          </p>
        </div>
      </section>

      {/* 3. CLEAN LINEAR TRILOGY MATRIX */}
      <section style={{ background: "#050505", padding: "0 0 140px 0" }}>
        <div className="container">
          <div style={{ width: "100%", height: "1px", background: "#151515", marginBottom: "60px" }}></div>
          <div className="row g-5 justify-content-center">
            
            <div className="col-lg-4 text-center">
              <h4 style={{ fontSize: "13px", letterSpacing: "4px", color: "#fff", fontWeight: "300" }}>VENETIAN LINE</h4>
              <p style={{ fontSize: "12px", color: "#666", lineHeight: "1.8", margin: "15px auto", maxWidth: "280px" }}>
                Classic custom bands engineered for flawless matching symmetry.
              </p>
              <Link to="/collection" style={{ color: "#8a7355", fontSize: "11px", letterSpacing: "2px", textDecoration: "none" }}>
                EXPLORE &rarr;
              </Link>
            </div>

            <div className="col-lg-4 text-center">
              <h4 style={{ fontSize: "13px", letterSpacing: "4px", color: "#fff", fontWeight: "300" }}>PARISIAN SERIES</h4>
              <p style={{ fontSize: "12px", color: "#666", lineHeight: "1.8", margin: "15px auto", maxWidth: "280px" }}>
                Intricate architectural micro-pave contours designed for high statements.
              </p>
              <Link to="/collection" style={{ color: "#8a7355", fontSize: "11px", letterSpacing: "2px", textDecoration: "none" }}>
                EXPLORE &rarr;
              </Link>
            </div>

            <div className="col-lg-4 text-center">
              <h4 style={{ fontSize: "13px", letterSpacing: "4px", color: "#fff", fontWeight: "300" }}>INSIGNIA EDITION</h4>
              <p style={{ fontSize: "12px", color: "#666", lineHeight: "1.8", margin: "15px auto", maxWidth: "280px" }}>
                The flagship tension rings representing total anti-gravity mechanics.
              </p>
              <Link to="/collection" style={{ color: "#8a7355", fontSize: "11px", letterSpacing: "2px", textDecoration: "none" }}>
                EXPLORE &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}