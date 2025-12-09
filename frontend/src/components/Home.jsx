import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "./TemaContext";

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
                ...styles.aba,
                ...(abaAtiva === "codigo" ? styles.abaAtiva : {})
              }}
            >
              Código
            </button>

            <button
              onClick={() => setAbaAtiva("culpa")}
              style={{
                ...styles.aba,
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
            src="/assets/imgs/MeuCurriculo.svg"
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
    background: tema === "escuro"
      ? "linear-gradient(145deg, #0b0b0b, #111, #1a1a1a)"
      : "linear-gradient(145deg, #f3f3f3, #e6e6e6)",
    padding: "40px",
    color: tema === "escuro" ? "#ffffff" : "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  }),

  titulo: { maxWidth: "900px", textAlign: "center", fontSize: "2.2rem" },

  options: { display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" },

  botao: {
    padding: "14px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    transition: "0.3s ease",
  },

  hovered: { transform: "translateY(-4px)", background: "rgba(255,255,255,0.25)" },

  btnCurriculo: {
    padding: "14px 30px",
    borderRadius: "10px",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    fontSize: "1rem",
    transition: "0.3s",
  },

  hoveredCurriculo: { transform: "scale(1.05)", background: "#3294ff" },

  curriculoBox: {
    width: "90%",
    maxWidth: "900px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    overflow: "hidden",
    animation: "fadeZoom 0.7s ease-out forwards",
  },

  githubBar: (tema) => ({
    background: tema === "escuro" ? "#1f1f1f" : "#e6e6e6",
    borderBottom: tema === "escuro" ? "1px solid #444" : "1px solid #cfcfcf",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }),
  
  aba: {
    padding: "8px 14px",
    borderRadius: "6px",
    fontSize: "0.95rem",
    color: "#aaa",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },

  abaAtiva: {
    background: "#2d2d2d",
    color: "#fff",
    border: "1px solid #4a4a4a",
  },

  btnDownload: {
    marginLeft: "auto",
    padding: "8px 16px",
    borderRadius: "6px",
    background: "#fff",
    color: "#000",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  },

  curriculoIMG: {
    width: "100%",
    maxHeight: "800px",
    display: "block",
    objectFit: "contain",
    background: "#ffffff10",
    animation: "fadeZoom 0.8s ease-out forwards",
  },
};
