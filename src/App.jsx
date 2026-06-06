import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection"; 
import Gallery from "./Pages/Gallery"
import Press from "./Pages/Press"
import Contact from "./Pages/Contact"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="collection" element={<Collection />} />
          <Route path="press" element={<Press />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}