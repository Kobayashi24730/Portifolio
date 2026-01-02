import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "./TemaContext";

import { Document, Page, pdfjs } from "react-pdf";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Home() {
  const { tema } = useContext(TemaContext);

  const [curriculoAberto, setCurriculoAberto] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState("codigo");
  const [numPages, setNumPages] = useState(null);

  const BaixaCurriculo = () => {
    window.open("../assets/img/curriculo.pdf", "_blank");
  };

  useEffect(() => {
    const styleSheet = document.createElement("style");
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

        <button
          style={{
            ...styles.btnCurriculo,
            ...(hovered === "curriculo" ? styles.hoveredCurriculo : {}),
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
          {/* Barra superior */}
          <div style={styles.githubBar(tema)}>
            <button
              onClick={() => setAbaAtiva("codigo")}
              style={{
                ...styles.aba(tema),
                ...(abaAtiva === "codigo" ? styles.abaAtiva(tema) : {}),
              }}
            >
              Código
            </button>

            <button
              onClick={() => setAbaAtiva("culpa")}
              style={{
                ...styles.aba(tema),
                ...(abaAtiva === "culpa" ? styles.abaAtiva(tema) : {}),
              }}
            >
              Culpa
            </button>

            <button style={styles.btnDownload} onClick={BaixaCurriculo}>
              ⬇️ Baixar
            </button>
          </div>

          {/* PDF */}
          <div style={styles.pdfContainer}>
            <Document
              file="/curriculo.pdf"
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading="Carregando currículo..."
            >
              {Array.from(new Array(numPages), (_, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={800}
                />
              ))}
            </Document>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================== STYLES ================== */

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
    color: "#c7d8ff",
    border: "1px solid rgba(110,140,255,0.2)",
    transition: "0.25s ease",
  },

  hovered: {
    transform: "translateY(-4px)",
    background: "rgba(255,255,255,0.18)",
  },

  btnCurriculo: {
    padding: "14px 34px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #2563eb, #4589ff)",
    color: "#fff",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
  },

  hoveredCurriculo: {
    transform: "scale(1.05)",
  },

  curriculoBox: {
    width: "95%",
    maxWidth: "950px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(120,150,255,0.25)",
    overflow: "hidden",
    animation: "fadeZoom 0.6s ease-out forwards",
  },

  githubBar: (tema) => ({
    background: tema === "escuro" ? "rgba(15,15,20,0.7)" : "#e5e5e5",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderBottom:
      tema === "escuro"
        ? "1px solid rgba(120,150,255,0.2)"
        : "1px solid #ccc",
  }),

  aba: () => ({
    padding: "8px 16px",
    borderRadius: "8px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  }),

  abaAtiva: () => ({
    background: "rgba(120,150,255,0.2)",
    fontWeight: "600",
  }),

  btnDownload: {
    marginLeft: "auto",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    fontWeight: "600",
  },

  pdfContainer: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    overflowY: "auto",
    maxHeight: "80vh",
  },
};
