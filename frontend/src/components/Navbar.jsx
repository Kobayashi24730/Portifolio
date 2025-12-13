import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/LogoEX.png";
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
        <img src={Logo} style={styles.img} alt="logo" />
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
        ? "rgba(10,10,10,0.7)"
        : "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    borderBottom:
      tema === "escuro"
        ? "1px solid rgba(255,255,255,0.05)"
        : "1px solid rgba(0,0,0,0.05)",
  }),

  divTitle: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  img: {
    width: "42px",
    height: "42px",
  },

  title: {
    margin: 0,
    fontWeight: 600,
    letterSpacing: "1px",
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
    color: tema === "escuro" ? "#aaa" : "#333",
    transition: "0.3s ease",
    paddingBottom: "4px",
  }),

  itemHovered: (tema) => ({
    color: tema === "escuro" ? "#fff" : "#000",
  }),

  underline: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, #00ffc3, #00b3ff)",
    transformOrigin: "left",
    transition: "0.3s ease",
  },

  btn: (tema) => ({
    background: "transparent",
    color: tema === "escuro" ? "#fff" : "#000",
    border:
      tema === "escuro"
        ? "1px solid rgba(255,255,255,0.2)"
        : "1px solid rgba(0,0,0,0.2)",
    padding: "8px 16px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    letterSpacing: "1px",
    transition: "0.3s",
  }),
};
