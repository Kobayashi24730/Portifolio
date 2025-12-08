import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/LogoEX.png";
import TemaContext from "./TemaContext";

export default function Navbar() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  const { tema, setTema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);

  const items = [
    { nome: "Lar", link: "/Lar" },
    { nome: "Contato", link: "/Contato" },
    { nome: "Sobre", link: "/Sobre" },
    { nome: "Habilidades", link: "/Habilidades" },
  ];

  return (
    <nav style={styles.nav}>
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
                ...styles.item,
                ...(hovered === item.nome ? styles.itemHovered : {}),
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
        onClick={() => setTema(temar === "escuro" ? "claro" : "escuro")}
        style={styles.btn}
      >
        Trocar tema
      </button>
    </nav>
  );
}


const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#111",
  },
  divTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  img: {
    width: "45px",
    height: "45px",
  },
  title: {
    color: "#fff",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  li: {},
  item: {
    textDecoration: "none",
    color: "#ccc",
    transition: "0.3s ease",
  },
  itemHovered: {
    color: "#fff",
  },
  btn: {
    background: "#333",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
