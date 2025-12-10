import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TemaContext from "../components/TemaContext";

export default function App() {
  const [tema, setTema] = useState("escuro");

  return (
    <BrowserRouter>
      <TemaContext.Provider value={{ tema, setTema }}>
        <Navbar />
        <Routes>
          <Route path="/Lar" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />}
        </Routes>
        <Footer />
      </TemaContext.Provider>
    </BrowserRouter>
  );
}
