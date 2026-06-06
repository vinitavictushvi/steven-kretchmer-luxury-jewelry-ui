import React, { useState } from "react";

export default function Journal() {
  // Slider State Management
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "ROYAL LUMINA BAND",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200", // Aap apni product image replace kar sakte hain
      desc: "As if magically suspended in a band of platinum or gold... Steven Kretchmer's Signature Omega Round Tension-Set ring exposes more light to the stone than traditionally set diamonds. Powerfully secure, your stone's brilliance and beauty is enhanced.",
    },
    {
      id: 2,
      title: "THE VENETIAN RING",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200",
      desc: "All tension settings can hold a diamond, ruby or sapphire of any color and can be accented by pave, flush or channel-set side stones. Discover the perfect fusion of architectural structure and pure luxury.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev + 1));
  };

  // Mock Products Grid Data
  const products = [
    { id: 1, name: "Lumina Ring", price: "$ 2,200", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600" },
    { id: 2, name: "Royal Diamond Band", price: "$ 2,200", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600" },
    { id: 3, name: "Lumina Ring", price: "$ 2,200", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600" },
    { id: 4, name: "Royal Diamond Band", price: "$ 2,200", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600" },
    { id: 5, name: "Lumina Ring", price: "$ 2,200", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600" },
    { id: 6, name: "Royal Diamond Band", price: "$ 2,200", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600" },
    { id: 7, name: "Lumina Ring", price: "$ 2,200", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600" },
    { id: 8, name: "Royal Diamond Band", price: "$ 2,200", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600" },
  ];

  return (
    <div style={{ background: "#111111", color: "#ffffff", fontFamily: "serif", minHeight: "100vh" }}>
      
   

      {/* HERO HERO SLIDER SECTION */}
      <section style={{ padding: "80px 0", borderBottom: "1px solid #222" }}>
        <div className="container">
          <div className="row align-items-center g-5position-relative">
            
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              style={{
                position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", color: "#666", fontSize: "2rem", zIndex: 10, cursor: "pointer"
              }}
            >
              &#10094;
            </button>

            {/* Slide Image */}
            <div className="col-lg-6 text-center position-relative">
              <div style={{ padding: "20px", background: "linear-gradient(145deg, #151515, #0a0a0a)", borderRadius: "8px" }}>
                <img
                  src={slides[currentSlide].image}
                  alt="Premium Jewelry"
                  style={{
                    maxWidth: "85%",
                    height: "380px",
                    objectFit: "contain",
                    filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.7))",
                    transition: "all 0.5s ease"
                  }}
                />
              </div>
            </div>

            {/* Slide Details */}
            <div className="col-lg-5 offset-lg-1">
              <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#8a7355", textTransform: "uppercase" }}>
                Exclusive Masterpiece
              </p>
              <h1 style={{ fontWeight: "300", fontSize: "2.5rem", letterSpacing: "2px", color: "#fff", marginBottom: "20px" }}>
                {slides[currentSlide].title}
              </h1>
              <p style={{ color: "#999", lineHeight: "1.8", fontSize: "14px", textAlign: "justify" }}>
                {slides[currentSlide].desc}
              </p>
              <button
                style={{
                  marginTop: "30px",
                  border: "1px solid #8a7355",
                  background: "transparent",
                  color: "#8a7355",
                  padding: "12px 35px",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => { e.target.style.background = "#8a7355"; e.target.style.color = "#000"; }}
                onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#8a7355"; }}
              >
                VIEW DETAILS
              </button>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              style={{
                position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", color: "#666", fontSize: "2rem", zIndex: 10, cursor: "pointer"
              }}
            >
              &#10095;
            </button>

          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{ background: "#0f0f0f", padding: "15px 0", borderBottom: "1px solid #222" }}>
        <div className="container d-flex justify-content-center gap-3 flex-wrap">
          <select className="form-select-sm" style={{ background: "#1a1a1a", color: "#ccc", border: "1px solid #333", padding: "5px 15px" }}>
            <option>All Product Lines</option>
          </select>
          <select className="form-select-sm" style={{ background: "#1a1a1a", color: "#ccc", border: "1px solid #333", padding: "5px 15px" }}>
            <option>All Collections</option>
          </select>
          <select className="form-select-sm" style={{ background: "#1a1a1a", color: "#ccc", border: "1px solid #333", padding: "5px 15px" }}>
            <option>Shape</option>
          </select>
          <select className="form-select-sm" style={{ background: "#1a1a1a", color: "#ccc", border: "1px solid #333", padding: "5px 15px" }}>
            <option>Newest</option>
          </select>
        </div>
      </section>

      {/* PRODUCTS GRID SECTION */}
      <section style={{ padding: "60px 0 100px" }}>
        <div className="container">
          <div className="row g-4 justify-content-center">

            {products.map((product, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div style={{
                  background: "#151515",
                  border: "1px solid #222",
                  padding: "25px 15px",
                  textAlign: "center",
                  transition: "transform 0.3s ease"
                }}
                className="product-card"
                >
                  <div style={{ overflow: "hidden", marginBottom: "15px" }}>
                    <img
                      src={product.img}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "contain",
                        filter: "brightness(0.9)"
                      }}
                    />
                  </div>
                  <h5 style={{ fontSize: "14px", fontWeight: "300", letterSpacing: "1px", color: "#aaa", marginBottom: "5px" }}>
                    {product.name}
                  </h5>
                  <p style={{ color: "#8a7355", fontSize: "13px", margin: 0, fontWeight: "bold" }}>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MINI FOOTER CATEGORIES */}
      <footer style={{ background: "#0a0a0a", padding: "40px 0", borderTop: "1px solid #222" }}>
        <div className="container text-center">
          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <h6 style={{ fontSize: "12px", letterSpacing: "2px", color: "#8a7355" }}>VENETIAN</h6>
              <p style={{ fontSize: "11px", color: "#666" }}>Classic bands, starting at $100</p>
            </div>
            <div className="col-md-3">
              <h6 style={{ fontSize: "12px", letterSpacing: "2px", color: "#8a7355" }}>PARISIAN</h6>
              <p style={{ fontSize: "11px", color: "#666" }}>Elegant collections, starting at $200</p>
            </div>
            <div className="col-md-3">
              <h6 style={{ fontSize: "12px", letterSpacing: "2px", color: "#8a7355" }}>INSIGNIA</h6>
              <p style={{ fontSize: "11px", color: "#666" }}>Luxury statements, starting at $500</p>
            </div>
          </div>
          <p style={{ fontSize: "10px", color: "#444", marginTop: "40px", letterSpacing: "1px" }}>
            © 2026 FABETTE. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}