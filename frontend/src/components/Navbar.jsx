import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import TemaContext from "./TemaContext";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { tema, setTema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);
  const [menuAberto, setMenuAberto] = useState(false);

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
      <h2 style={styles.title(tema)}>Kobayashi</h2>

      <ul style={styles.ul}>
        {items.map((item) => (
          <li key={item.nome}>
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

      <div style={styles.actions}>
        <button
          onClick={() => setTema(tema === "escuro" ? "claro" : "escuro")}
          style={styles.btnTema(tema)}
        >
          {tema === "escuro" ? "Light" : "Dark"}
        </button>

        <button
          style={styles.hamburger(tema)}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuAberto && (
        <div style={styles.menuMobile(tema)}>
          {items.map((item) => (
            <Link
              key={item.nome}
              to={item.link}
              style={styles.itemMobile(tema)}
              onClick={() => setMenuAberto(false)}
            >
              {item.nome}
            </Link>
          ))}
        </div>
      )}
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
    padding: "14px 24px",

    background:
      tema === "escuro"
        ? "linear-gradient(180deg, rgba(10,15,30,0.95), rgba(5,8,20,0.9))"
        : "linear-gradient(180deg, #ffffff, #f2f2f2)",

    backdropFilter: "blur(14px)",

    borderBottom:
      tema === "escuro"
        ? "1px solid rgba(0,180,255,0.15)"
        : "1px solid rgba(0,0,0,0.12)",

    boxShadow:
      tema === "escuro"
        ? "0 10px 30px rgba(0,0,0,0.45)"
        : "0 8px 25px rgba(0,0,0,0.15)",
  }),

  title: (tema) => ({
    margin: 0,
    fontWeight: 700,
    letterSpacing: "1px",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  ul: {
    listStyle: "none",
    display: "flex",
    gap: "28px",
  },

  item: (tema) => ({
    position: "relative",
    textDecoration: "none",
    fontSize: "15px",
    letterSpacing: "1px",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
    paddingBottom: "6px",
    transition: "0.3s ease",
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

  actions: {
    display: "flex",
    gap: "14px",
    alignItems: "center",
  },

  btnTema: (tema) => ({
    background:
      tema === "escuro"
        ? "linear-gradient(135deg, #1a2a4f, #0f172a)"
        : "#e0e0e0",
    color: tema === "escuro" ? "#fff" : "#000",
    border: "none",
    padding: "8px 16px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "14px",
  }),

  hamburger: (tema) => ({
    display: "none",
    background: "transparent",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  menuMobile: (tema) => ({
    position: "absolute",
    top: "64px",
    right: "20px",
    background:
      tema === "escuro"
        ? "rgba(10,15,30,0.95)"
        : "#ffffff",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
  }),

  itemMobile: (tema) => ({
    textDecoration: "none",
    fontWeight: "600",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  "@media (max-width: 768px)": {
    ul: {
      display: "none",
    },
    hamburger: {
      display: "block",
    },
  },
};
