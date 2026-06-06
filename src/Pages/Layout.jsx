import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  // useLocation se humein current page ka path (`/`, `/collection`, etc.) mil jata hai
  const location = useLocation();

  // Helper function jo check karega ki kaun sa link active hai
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: isActive ? "#8a7355" : "#888",
      borderBottom: isActive ? "1px solid #8a7355" : "1px solid transparent",
      textDecoration: "none",
      cursor: "pointer",
      paddingBottom: "4px",
      transition: "all 0.3s ease"
    };
  };

  return (
    <div style={{ background: "#050505", color: "#ffffff", fontFamily: "serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* GLOBAL HEADER / NAVIGATION */}
      <header style={{ borderBottom: "1px solid #151515", padding: "30px 0 20px 0", textAlign: "center", letterSpacing: "2px" }}>
        <div className="container">
          <p style={{ fontSize: "10px", color: "#666", margin: 0, textTransform: "uppercase" }}>
            Kinetic Luxury Metallurgy • Info@fabette.com
          </p>
          <h1 style={{ letterSpacing: "12px", fontWeight: "300", margin: "25px 0 30px 0", fontSize: "32px", color: "#fff" }}>
            FABETTE
          </h1>
          <div className="d-flex justify-content-center gap-5" style={{ fontSize: "11px", letterSpacing: "3px" }}>
            {/* Dynamic style allocation based on active URL route */}
          <Link to="/" style={getLinkStyle("/")}>HOME</Link>
<Link to="/gallery" style={getLinkStyle("/gallery")}>GALLERY</Link>
<Link to="/collection" style={getLinkStyle("/collection")}>COLLECTIONS</Link>
<Link to="/press" style={getLinkStyle("/press")}>PRESS</Link>
<Link to="/contact" style={getLinkStyle("/contact")}>CONTACT</Link>
          </div>
        </div>
      </header>

      {/* DYNAMIC CONTENT AREA (Sare pages yahan render honge) */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* GLOBAL ESSENTIAL LUXURY FOOTER */}
      <footer style={{ background: "#050505", padding: "40px 0", borderTop: "1px solid #111" }}>
        <div className="container text-center">
          <p style={{ fontSize: "10px", color: "#444", letterSpacing: "2px", margin: 0, textTransform: "uppercase" }}>
            © 2026 FABETTE. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}