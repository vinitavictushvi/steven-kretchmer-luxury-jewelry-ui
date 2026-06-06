import React from "react";

export default function Gallery() {
  const galleryItems = [
    { title: "Omega Round Tension-Set", price: "$4,500", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600" },
    { title: "The Spiral Magna Platinum", price: "$6,200", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600" },
    { title: "Stella Pave Diamond Ring", price: "$3,800", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600" },
    { title: "Metropolis Tension Band", price: "$5,100", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600" },
  ];

  return (
    <div style={{ background: "#111111", color: "#ffffff", fontFamily: "serif", minHeight: "100vh" }}>
      
      {/* FILTER BAR SECTION */}
      <section style={{ background: "#0a0a0a", padding: "30px 0", borderBottom: "1px solid #222" }}>
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
          <h4 style={{ fontWeight: "300", letterSpacing: "2px", margin: 0 }}>GALLERY ARCHIVES</h4>
          
          <div className="d-flex gap-2">
            {["All Metal Types", "Diamond Carat", "Collection Type", "Sort By"].map((filter, idx) => (
              <select key={idx} style={{ background: "#151515", color: "#aaa", border: "1px solid #333", padding: "6px 12px", fontSize: "12px" }}>
                <option>{filter}</option>
              </select>
            ))}
          </div>
        </div>
      </section>

      {/* GRID DISPLAY */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row g-5">
            
            {galleryItems.concat(galleryItems).map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div style={{ background: "#151515", border: "1px solid #222", padding: "20px", textAlign: "center" }}>
                  <div style={{ height: "220px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
                    <img src={item.img} alt={item.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </div>
                  <h6 style={{ fontWeight: "300", letterSpacing: "1px", color: "#fff", fontSize: "14px" }}>{item.title}</h6>
                  <p style={{ color: "#8a7355", fontSize: "13px", marginTop: "5px" }}>{item.price}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}