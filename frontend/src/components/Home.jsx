import {useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {temaContext} from "./App.jsx";

export default function Home() {

  const globalAnimations = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    0% { 
      opacity: 0; 
      transform: translateY(20px);
    }
    100% { 
      opacity: 1; 
      transform: translateY(0);
    }
  }
  `;

  
  const [hovered, setHovered] = useState(null);

  useEffect(() => {

    const styleSheet = document.createElement("style");
    styleSheet.innerText = globalAnimations;
    document.head.appendChild(styleSheet);

    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const items = [
    { nome: "Contato", link: "/Contato" },
    { nome: "Sobre", link: "/Sobre" },
  ];

  return (
    <div style={styles.div}>
      <h1 style={styles.titulo}>
        Olá! Sou um desenvolvedor mobile/web focado em backends rápidos,
        dinâmicos e bem estruturados.
      </h1>

      <div style={styles.options}>
        {items.map((item) => (
          <Link
            key={item.nome}
            to={item.link}
            style={{
              ...styles.botao,
              ...(hovered === item.nome ? styles.hovered : {}),
            }}
            onMouseEnter={() => setHovered(item.nome)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(item.nome)}
            onTouchEnd={() => setHovered(null)}
          >
            {item.nome}
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  div: {
    minHeight: "100vh",
    background: "linear-gradient(145deg, #0b0b0b, #111, #1a1a1a)",
    padding: "40px",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",

    animation: "fadeIn 1.3s ease forwards",
  },

  titulo: {
    maxWidth: "900px",
    textAlign: "center",
    fontSize: "2.2rem",
    lineHeight: "1.4",
    fontWeight: "600",
    color: "#e6e6e6",
    textShadow: "0 0 10px #ffffff30, 0 0 20px #ffffff20",
    opacity: 0,
    animation: "slideUp 1s ease forwards 0.2s",
  },

  options: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  botao: {
    padding: "14px 28px",
    fontSize: "1.1rem",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#fff",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    transition: "all .25s ease",
    boxShadow: "0 0 8px rgba(255,255,255,0.05)",
  },

  hovered: {
    transform: "translateY(-4px) scale(1.03)",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 0 15px rgba(255,255,255,0.2)",
  },
};
