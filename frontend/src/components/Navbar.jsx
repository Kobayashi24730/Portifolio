import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import TemaContext from "./App"; // Corrigido

export default function Navbar() {
        useEffect(() => {
                document.body.style.margin = "0";
                document.body.style.padding = "0";
        }, []);

        const [tema, setTema] = useContext(TemaContext); // Corrigido
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

                        <button onClick={() => setTema(tema === "escuro" ? "claro" : "escuro")} style={styles.btn}>
                                Trocar tema
                        </button>
                </nav>
        );
}
