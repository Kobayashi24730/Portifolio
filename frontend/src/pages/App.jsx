import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import TemaContext from "../components/TemaContext";
import Sobre from "../components/Sobre";
import Habilidades from "../components/Habilidades";
import Contato from "../components/Contato";

export default function App() {
  const [tema, setTema] = useState("escuro");

  return (
    <BrowserRouter>
      <TemaContext.Provider value={{ tema, setTema }}>
        <Navbar />
        <Routes>
          <Route path="/Lar" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Habilidades" element={<Habilidades />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </TemaContext.Provider>
    </BrowserRouter>
  );
}
