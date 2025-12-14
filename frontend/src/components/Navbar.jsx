import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "./TemaContext";

export default function Navbar() {
  const { tema, setTema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background =
      tema === "escuro" ? "#0a0a0a" : "#f5f5f5";
  }, [tema]);

  const items = [
    { nome: "Lar", link: "/Lar" },
    { nome: "Sobre", link: "/Sobre" },
    { nome: "Habilidades", link: "/Habilidades" },
    { nome: "Contato", link: "/Contato" },
  ];

  return (
    <nav style={styles.nav(tema)}>
      <div style={styles.divTitle}>
        <h2 style={styles.title}>Kobayashi</h2>
      </div>

      <ul style={styles.ul}>
        {items.map((item) => (
          <li key={item.nome} style={styles.li}>
            <Link
              to={item.link}
              style={{
                ...styles.item(tema),
                ...(hovered === item.nome ? styles.itemHovered(tema) : {}),
              }}
              onMouseEnter={() => setHovered(item.nome)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.nome}
              <span
                style={{
                  ...styles.underline,
                  opacity: hovered === item.nome ? 1 : 0,
                  transform:
                    hovered === item.nome ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setTema(tema === "escuro" ? "claro" : "escuro")}
        style={styles.btn(tema)}
      >
        {tema === "escuro" ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

const styles = {
  nav: (tema) => ({
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 40px",

    background:
      tema === "escuro"
        ? "linear-gradient(180deg, rgba(10,15,30,0.9), rgba(5,8,20,0.85))"
        : "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(245,245,245,0.8))",

    backdropFilter: "blur(14px)",

    borderBottom:
      tema === "escuro"
        ? "1px solid rgba(0,180,255,0.12)"
        : "1px solid rgba(0,0,0,0.08)",

    boxShadow:
      tema === "escuro"
        ? "0 10px 30px rgba(0,0,0,0.45)"
        : "0 8px 25px rgba(0,0,0,0.1)",
  }),

  divTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  img: {
    width: "42px",
    height: "42px",
    filter: "drop-shadow(0 0 6px rgba(0,180,255,0.4))",
  },

  title: {
    margin: 0,
    fontWeight: 600,
    letterSpacing: "1px",
    color: "#333",
  },

  ul: {
    listStyle: "none",
    display: "flex",
    gap: "32px",
  },

  li: {},

  item: (tema) => ({
    position: "relative",
    textDecoration: "none",
    fontSize: "15px",
    letterSpacing: "1px",
    color: tema === "escuro" ? "#b8c7e0" : "#333",
    transition: "0.3s ease",
    paddingBottom: "6px",
  }),

  itemHovered: (tema) => ({
    color: tema === "escuro" ? "#ffffff" : "#000",
    textShadow:
      tema === "escuro"
        ? "0 0 8px rgba(0,180,255,0.6)"
        : "none",
  }),

  underline: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, #00c6ff, #0072ff)",
    transformOrigin: "left",
    transition: "0.3s ease",
  },

  btn: (tema) => ({
    background:
      tema === "escuro"
        ? "linear-gradient(135deg, #1a2a4f, #0f172a)"
        : "#ddd",
    color: tema === "escuro" ? "#e6f1ff" : "#000",
    border:
      tema === "escuro"
        ? "1px solid rgba(0,180,255,0.3)"
        : "1px solid rgba(0,0,0,0.2)",
    padding: "8px 18px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    letterSpacing: "1px",
    transition: "0.3s",
    boxShadow:
      tema === "escuro"
        ? "0 0 15px rgba(0,180,255,0.35)"
        : "none",
  }),
};
