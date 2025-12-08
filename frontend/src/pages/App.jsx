import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar.jsx";
import TemaContext from "../components/TemaContext";
import Footer from "../components/Footer.jsx";

export default function App() {
  const [tema, setTema] = useState("escuro");

  return (
    <BrowserRouter>
      <TemaContext.Provider value={{ tema, setTema }}>
        <Navbar />

        <Routes>
          <Route path="/lar" element={<Home />} />
        </Routes>

        <Footer />
      </TemaContext.Provider>
    </BrowserRouter>
  );
}
