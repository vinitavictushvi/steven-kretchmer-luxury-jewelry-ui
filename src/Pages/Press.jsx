import React from "react";

export default function Press() {
  const pressArticles = [1, 2, 3, 4];
  
  return (
    <div style={{ background: "#111111", color: "#ffffff", fontFamily: "serif", minHeight: "100vh", padding: "80px 0" }}>
      <div className="container">
        
        <div className="text-center mb-5">
          <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#8a7355" }}>EDITORIAL COVERAGE</p>
          <h2 style={{ fontWeight: "300", letterSpacing: "2px" }}>IN THE PRESS</h2>
          <hr style={{ width: "60px", backgroundColor: "#8a7355", margin: "20px auto", height: "2px", opacity: 1 }} />
        </div>

        <div className="row g-5 mt-4">
          {pressArticles.map((article) => (
            <div className="col-md-6" key={article}>
              <div style={{ display: "flex", gap: "25px", alignItems: "center", borderBottom: "1px solid #222", paddingBottom: "30px" }} className="flex-column flex-sm-row">
                <img 
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400" 
                  alt="Vogue feature" 
                  style={{ width: "160px", height: "200px", objectFit: "cover", border: "1px solid #333" }}
                />
                <div>
                  <span style={{ fontSize: "11px", color: "#8a7355", letterSpacing: "2px" }}>VOGUE MAGAZINE</span>
                  <h4 style={{ fontWeight: "300", fontSize: "18px", marginTop: "10px", color: "#fff" }}>The Physics of Tension-Setting: Art Meets Metal Architecture</h4>
                  <p style={{ fontSize: "13px", color: "#777", lineHeight: "1.7", marginTop: "10px" }}>
                    "Steven Kretchmer's designs transcend standard fine jewelry, creating breathtaking gravity-defying optics..."
                  </p>
                  <a href="#" style={{ color: "#fff", fontSize: "11px", letterSpacing: "1px", textDecoration: "underline" }}>READ ARTICLE</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}