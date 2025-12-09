import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "./TemaContext";

export default function Home() {
  const { tema } = useContext(TemaContext);
  const [curriculoAberto, setCurriculoAberto] = useState(false);
  const [hovered, setHovered] = useState(null);

  const globalAnimations = `
    @keyframes fadeInLeft {
      0% { opacity: 0; transform: translateX(-40px); }
      100% { opacity: 1; transform: translateX(0); }
    }
  
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  
    @keyframes slideUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
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
      <h1 style={styles.titulo}>
        Olá! Sou um desenvolvedor mobile/web com foco em backends rápidos e modernos.
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
          >
            {item.nome}
          </Link>
        ))}
      </div>

      <div style={styles.curriculoBox}>
        <h2 style={styles.curriculoTitulo}>📁 Meu Currículo</h2>
        <p style={styles.curriculoTexto}>
          Aqui você encontra minhas habilidades, experiências e certificações.
        </p>

        <button
          style={styles.btnCurriculo}
          onClick={() => setCurriculoAberto(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(null)}
        >
          ⬇️ Baixar Currículo PDF
        </button>
      </div>
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
    lineHeight: "1.4",
    fontWeight: "600",
    textShadow: "0 0 10px #ffffff20",
    opacity: 0,
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
    color: "#fff",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    transition: "all .25s ease",
  },

  hovered: {
    transform: "translateY(-4px) scale(1.03)",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 0 15px rgba(255,255,255,0.2)",
  },

  /* --- CURRÍCULO SECTION --- */
  curriculoBox: {
    width: "80%",
    maxWidth: "700px",
    padding: "25px",
    borderRadius: "14px",
    backdropFilter: "blur(12px)",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    textAlign: "center",
    animation: "fadeInLeft 1.6s ease forwards",
  },

  curriculoTitulo: {
    marginBottom: "12px",
    fontSize: "1.6rem",
  },

  curriculoTexto: {
    opacity: "0.8",
    marginBottom: "20px",
  },

  btnCurriculo: {
    padding: "12px 25px",
    fontSize: "1.1rem",
    borderRadius: "10px",
    border: "none",
    background: "#fff",
    color: "#000",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};
