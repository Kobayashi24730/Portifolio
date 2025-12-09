import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "./TemaContext";

export default function Home() {
  const { tema } = useContext(TemaContext);
  const [curriculoAberto, setCurriculoAberto] = useState(false);
  const [hovered, setHovered] = useState(null);

  const BaixaCurriculo = () => {
    window.open("/curriculo.pdf", "_blank");
  };

  const globalAnimations = `
    @keyframes fadeInLeft {
      0% { opacity: 0; transform: translateX(-40px); }
      100% { opacity: 1; transform: translateX(0); }
    }
  `;
  
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = globalAnimations;
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
          onTouchStart={() => setHovered("curriculo")}
          onTouchEnd={() => setHovered(null)}
          onClick={() => setCurriculoAberto(true)}
        >
          📁 Currículo
        </button>
      </div>

      {curriculoAberto && (
        <div style={styles.curriculoBox}>
          <div style={styles.topBar}>
            <h2 style={styles.curriculoTitulo}>Meu Currículo</h2>
            <p>Experiências, habilidades e certificações.</p>

            <button
              style={{
                ...styles.btnDownload,
                ...(hovered === "download" ? styles.hoveredDownload : {})
              }}
              onMouseEnter={() => setHovered("download")}
              onMouseLeave={() => setHovered(null)}
              onClick={BaixaCurriculo}
            >
              ⬇️ Baixar
            </button>
          </div>
          <img
            href="../assets/imgs/MeuCurriculo.png"
            alt=""
            style={styles.BoxCurriculo}
          >
          </img>
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
    animation: "fadeInLeft 1s ease forwards",
  }),

  titulo: {
    maxWidth: "900px",
    textAlign: "center",
    fontSize: "2.2rem",
    animation: "fadeInLeft 1.2s ease forwards",
  },

  options: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    animation: "fadeInLeft 1.4s ease forwards",
  },

  botao: {
    padding: "14px 28px",
    fontSize: "1.1rem",
    borderRadius: "10px",
    textDecoration: "none",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    transition: "0.3s ease",
  },
  
  hovered: {
    transform: "translateY(-4px)",
    background: "rgba(255,255,255,0.25)",
  },

  /* Botão Currículo */
  btnCurriculo: {
    padding: "14px 30px",
    borderRadius: "10px",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },

  hoveredCurriculo: {
    transform: "scale(1.05)",
    background: "#3294ff",
  },

  /* Caixa estilo GitHub */
  curriculoBox: {
    width: "90%",
    maxWidth: "800px",
    background: "rgba(255,255,255,0.09)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    animation: "fadeInLeft 1s ease forwards",
  },

  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 22px",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
  },

  btnDownload: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    background: "#fff",
    color: "#000",
    fontWeight: "600",
  },

  hoveredDownload: {
    background: "#e3e3e3",
    transform: "translateY(-2px)",
  },
};
