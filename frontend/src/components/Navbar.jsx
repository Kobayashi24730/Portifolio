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
    document.body.style.background = tema === "escuro" ? "#111" : "#fff";
  }, [tema]);

  const items = [
    { nome: "Lar", link: "/Lar" },
    { nome: "Contato", link: "/Contato" },
    { nome: "Sobre", link: "/Sobre" },
    { nome: "Habilidades", link: "/Habilidades" },
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
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setTema(tema === "escuro" ? "claro" : "escuro")}
        style={styles.btn(tema)}
      >
        Trocar tema
      </button>
    </nav>
  );
}

const styles = {
  nav: (tema) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: tema === "escuro" ? "#111" : "#eaeaea",
    color: tema === "escuro" ? "#fff" : "#000",
  }),
  title: {
    margin: 0,
  },
  item: (tema) => ({
    textDecoration: "none",
    transition: "0.3s ease",
    color: tema === "escuro" ? "#ccc" : "#333",
  }),
  itemHovered: (tema) => ({
    color: tema === "escuro" ? "#fff" : "#000",
  }),
  btn: (tema) => ({
    background: tema === "escuro" ? "#333" : "#ddd",
    color: tema === "escuro" ? "#fff" : "#000",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  }),
  
  divTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  img: {
    width: "45px",
    height: "45px",
  },

  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },

  li: {},

};
