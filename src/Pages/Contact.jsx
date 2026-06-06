import React from "react";

export default function Contact() {
  return (
    <div style={{ background: "#111111", color: "#ffffff", fontFamily: "serif", minHeight: "100vh", padding: "100px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            
            <div className="text-center mb-5">
              <p style={{ fontSize: "11px", letterSpacing: "4px", color: "#8a7355" }}>PRIVATE COMMISSIONS</p>
              <h2 style={{ fontWeight: "300", letterSpacing: "2px" }}>BOOK AN APPOINTMENT</h2>
            </div>

            <form style={{ background: "#151515", padding: "40px", border: "1px solid #222" }}>
              <div className="row g-4">
                
                <div className="col-md-6">
                  <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a7355", marginBottom: "8px", display: "block" }}>FULL NAME</label>
                  <input type="text" className="w-100" style={{ background: "#111", border: "1px solid #333", color: "#fff", padding: "12px" }} />
                </div>

                <div className="col-md-6">
                  <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a7355", marginBottom: "8px", display: "block" }}>EMAIL ADDRESS</label>
                  <input type="email" className="w-100" style={{ background: "#111", border: "1px solid #333", color: "#fff", padding: "12px" }} />
                </div>

                <div className="col-12">
                  <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a7355", marginBottom: "8px", display: "block" }}>INTERESTED COLLECTION</label>
                  <select className="w-100" style={{ background: "#111", border: "1px solid #333", color: "#fff", padding: "12px" }}>
                    <option>Omega Tension Rings</option>
                    <option>Bespoke Diamonds</option>
                    <option>Other Luxury Goods</option>
                  </select>
                </div>

                <div className="col-12">
                  <label style={{ fontSize: "11px", letterSpacing: "2px", color: "#8a7355", marginBottom: "8px", display: "block" }}>MESSAGE / SPECIFICATIONS</label>
                  <textarea rows="4" className="w-100" style={{ background: "#111", border: "1px solid #333", color: "#fff", padding: "12px" }}></textarea>
                </div>

                <div className="col-12 text-center mt-4">
                  <button type="submit" style={{
                    border: "1px solid #8a7355", background: "transparent", color: "#8a7355",
                    padding: "12px 45px", fontSize: "12px", letterSpacing: "3px", fontWeight: "600"
                  }}>
                    SUBMIT INQUIRY
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}