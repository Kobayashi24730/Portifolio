import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar.jsx";
//import Footer from "../components/Footer.jsx"'
import TemaContext from "../components/TemaContext";

export default function App() {
  const [temar, setTemar] = useState("escuro");

  return (
    <BrowserRouter>
      <TemaContext.Provider value={{ temar, setTemar }}>
 
        <Navbar />

        <Routes>
          <Route path="/lar" element={<Home />} />
          <Route path="/rodape" element={<Footer />} />
        </Routes>

        <Footer />
      </TemaContext.Provider>
    </BrowserRouter>
  );
}
