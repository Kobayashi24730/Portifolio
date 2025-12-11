import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "./TemaContext";
import MeuCurriculo from "../assets/imgs/MeuCurriculo.svg";

export default function Home() {
  const { tema } = useContext(TemaContext);
  const [curriculoAberto, setCurriculoAberto] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState("codigo");

  const BaixaCurriculo = () => {
    window.open("/curriculo.pdf", "_blank");
  };

  useEffect(() => {
    const styleSheet = document.createElement("style");
    const preload = new Image();
    preload.src = "/assets/imgs/MeuCurriculo.svg";
    
    styleSheet.innerText = `
      @keyframes fadeZoom {
        0% { opacity: 0; transform: translateY(14px) scale(0.94); filter: blur(4px); }
        60% { opacity: .9; transform: translateY(0px) scale(1.02); filter: blur(1px); }
        100% { opacity: 1; transform: scale(1); filter: blur(0); }
      }
    `;
    document.head.appendChild(styleSheet);
  }, []);
  
  
  const items = [
    { nome: "Contato", link: "/contato" },
    { nome: "Sobre", link: "/sobre" },
  ];

  return (
    <div style={styles.div(tema)}>
      <h1 style={styles.titulo}>Olá! Sou um desenvolvedor mobile/web com foco em backends rápidos e modernos.</h1>

      <div style={styles.options}>
        {items.map((item) => (
          <Link
            key={item.nome}
            to={item.link}
            style={{
              ...styles.botao,
              ...(hovered === item.nome ? styles.hovered : {})
            }}
            onMouseEnter={() => setHovered(item.nome)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.nome}
          </Link>
        ))}

        <button 
          style={{
            ...styles.btnCurriculo,
            ...(hovered === "curriculo" ? styles.hoveredCurriculo : {})
          }}
          onMouseEnter={() => setHovered("curriculo")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setCurriculoAberto(!curriculoAberto)}
        >
          📁 Currículo
        </button>
      </div>

      {curriculoAberto && (
        <div style={styles.curriculoBox}>
          
          {/* Barra idêntica à da foto */}
          <div style={styles.githubBar(tema)}>
            <button
              onClick={() => setAbaAtiva("codigo")}
              style={{
                ...styles.aba(tema),
                ...(abaAtiva === "codigo" ? styles.abaAtiva(tema) : {})
              }}
            >
              Código
            </button>

            <button
              onClick={() => setAbaAtiva("culpa")}
              style={{
                ...styles.aba(tema),
                ...(abaAtiva === "culpa" ? styles.abaAtiva : {})
              }}
            >
              Culpa
            </button>

            <button
              style={styles.btnDownload}
              onClick={BaixaCurriculo}
            >
              ⬇️ Baixar
            </button>
          </div>

          <img
            src={MeuCurriculo}
            alt="Currículo"
            style={styles.curriculoIMG}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  div: (tema) => ({
    minHeight: "100vh",
    padding: "40px",
    color: tema === "escuro" ? "#fff" : "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",

    background:
      tema === "escuro"
        ? "radial-gradient(circle at top, #0a0f21 0%, #04040a 70%)"
        : "linear-gradient(135deg, #e7e7e7, #ffffff)",

    transition: "0.3s ease",
  }),

  titulo: {
    maxWidth: "900px",
    textAlign: "center",
    fontSize: "2.4rem",
    lineHeight: "1.4",
    textShadow: "0 0 10px rgba(120,150,255,0.35)",
    animation: "fadeIn 0.9s ease",
  },

  options: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  botao: {
    padding: "14px 32px",
    borderRadius: "12px",
    textDecoration: "none",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(6px)",
    color: "#c7d8ff",
    border: "1px solid rgba(110,140,255,0.2)",
    transition: "0.25s ease",
    boxShadow: "0 0 8px rgba(120,150,255,0.2)",
  },

  hovered: {
    transform: "translateY(-4px)",
    background: "rgba(255,255,255,0.18)",
    boxShadow: "0 0 25px rgba(90,120,255,0.35)",
  },

  btnCurriculo: {
    padding: "14px 34px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #2563eb, #4589ff)",
    color: "#fff",
    border: "none",
    fontSize: "1.05rem",
    fontWeight: "600",
    transition: "0.25s ease",
    boxShadow: "0 0 12px rgba(37, 99, 235, 0.5)",
  },

  hoveredCurriculo: {
    transform: "scale(1.07)",
    boxShadow: "0 0 28px rgba(37, 99, 235, 0.8)",
  },

  curriculoBox: {
    width: "90%",
    maxWidth: "950px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(120,150,255,0.25)",

    boxShadow: "0 0 25px rgba(120,150,255,0.25)",
    overflow: "hidden",
    animation: "fadeZoom 0.7s ease-out forwards",
  },

  githubBar: (tema) => ({
    background: tema === "escuro" ? "rgba(15,15,20,0.7)" : "#e5e5e5",
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderBottom:
      tema === "escuro"
        ? "1px solid rgba(120,150,255,0.2)"
        : "1px solid #ccc",
    backdropFilter: "blur(10px)",
  }),

  
  aba: (tema) => ({
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "0.95rem",
    background: "transparent",
    color: tema === "escuro" ? "#aab4ff" : "#333",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "0.2s ease",
  }),

  abaAtiva: (tema) => ({
    background: tema === "escuro" ? "rgba(120,150,255,0.16)" : "#d4d4d4",
    color: tema === "escuro" ? "#fff" : "#000",
    border:
      tema === "escuro"
        ? "1px solid rgba(150,180,255,0.35)"
        : "1px solid #999",
    boxShadow:
      tema === "escuro"
        ? "0 0 12px rgba(120,150,255,0.4)"
        : "0 0 10px rgba(180,180,180,0.4)",
  }),

  
  btnDownload: {
    marginLeft: "auto",
    padding: "8px 18px",
    background: "linear-gradient(135deg, #fff, #ddd)",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "0.2s ease",
    border: "none",
  },

  curriculoIMG: {
    width: "100%",
    display: "block",
    animation: "fadeZoom 0.8s ease-out forwards",
  },
};
