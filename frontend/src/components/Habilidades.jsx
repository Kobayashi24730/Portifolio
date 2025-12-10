import { useState, useContext } from "react";
import TemaContext from "./TemaContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaCode,
  FaCuttlefish,
  FaJava,
} from "react-icons/fa";
import { SiTypescript, SiFlutter, SiXamarin, SiDotnet, SiCplusplus, SiXml } from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";

export default function Habilidades() {
  const { tema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);

  const Habilidades = [
    {
      titulo: "HTML",
      text: "Estruturo páginas da web de forma organizada e semântica.",
      icon: <FaHtml5 size={45} color="#e34c26" />,
    },
    {
      titulo: "CSS",
      text: "Crio interfaces modernas, responsivas e elegantes.",
      icon: <FaCss3Alt size={45} color="#264de4" />,
    },
    {
      titulo: "JavaScript / TypeScript",
      text: "Desenvolvo funcionalidades dinâmicas, escaláveis e rápidas.",
      icon: <SiTypescript size={45} color="#3178c6" />,
    },
    {
      titulo: "AJAX, jQuery, React Native, Node.js",
      text: "Experiência com APIs, apps mobile e back-end JavaScript.",
      icon: <FaReact size={45} color="#61dbfb" />,
    },
    {
      titulo: "Flutter",
      text: "Desenvolvo apps fluidos e otimizados para Android e iOS.",
      icon: <SiFlutter size={45} color="#5fc8f8" />,
    },
    {
      titulo: "Python",
      text: "APIs, automações, análise de dados e integração de sistemas.",
      icon: <FaPython size={45} color="#ffd343" />,
    },
    {
      titulo: "API REST",
      text: "Crio APIs seguras, bem estruturadas e de alta performance.",
      icon: <FaCode size={45} color="#48a1ff" />,
    },
    {
      titulo: ".NET MAUI / Xamarin",
      text: "Apps multiplataforma nativos usando C#.",
      icon: <SiXamarin size={45} color="#3498db" />,
    },
    {
      titulo: "C / C++",
      text: "Lógica, ponteiros e desenvolvimento de sistemas eficientes.",
      icon: <SiCplusplus size={45} color="#00599c" />,
    },
    {
      titulo: "Java",
      text: "Programação orientada a objetos, APIs e aplicações robustas.",
      icon: <FaJava size={45} color="#e06c00" />,
    },
    {
      titulo: "XML",
      text: "Estruturação de dados e integração entre sistemas.",
      icon: <SiXml size={45} color="#f1c40f" />,
    },
    {
      titulo: "Habilidades com IA",
      text: "Uso IA para automação, produtividade e soluções inteligentes.",
      icon: <MdOutlineSmartToy size={45} color="#8e44ad" />,
    },
  ];

  return (
    <div style={styles.container(tema)}>
      <div style={styles.sobreMim(tema)}>
        <h2>Minhas Habilidades</h2>
        <p>
          Aqui está um resumo das principais tecnologias e ferramentas com as quais trabalho no meu
          dia a dia como desenvolvedor.
        </p>

        <div style={styles.btns}>
          <button style={styles.btn(tema)}>Contato</button>
          <button style={styles.btn(tema)}>Lar</button>
        </div>
      </div>

      <div style={styles.lista}>
        {Habilidades.map((item) => (
          <div
            key={item.titulo}
            style={{
              ...styles.card(tema),
              ...(hovered === item.titulo ? styles.cardHover(tema) : {}),
            }}
            onMouseEnter={() => setHovered(item.titulo)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(item.titulo)}
            onTouchEnd={() => setHovered(null)}
          >
            <div style={styles.iconBox}>{item.icon}</div>
            <h2 style={styles.titulo}>{item.titulo}</h2>
            <p style={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: (tema) => ({
    padding: "40px 20px",
    background: tema === "escuro" ? "#0d0d0d" : "#f7f7f7",
    color: tema === "escuro" ? "white" : "#222",
    minHeight: "100vh",
    transition: "0.3s ease",
  }),

  sobreMim: (tema) => ({
    padding: "20px",
    borderRadius: "12px",
    background: tema === "escuro" ? "#1a1a1a" : "white",
    boxShadow: "0 0 20px rgba(0,0,0,0.15)",
    transition: "0.3s",
  }),

  btns: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
  },

  btn: (tema) => ({
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
    background: tema === "escuro" ? "#333" : "#ddd",
    color: tema === "escuro" ? "white" : "#333",
  }),

  lista: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  },

  card: (tema) => ({
    padding: "20px",
    borderRadius: "15px",
    background: tema === "escuro" ? "#141414" : "white",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    transition: "0.3s ease",
    textAlign: "center",
    transform: "translateY(0)",
  }),

  cardHover: (tema) => ({
    transform: "translateY(-8px) scale(1.03)",
    boxShadow:
      tema === "escuro"
        ? "0 0 25px rgba(255,255,255,0.15)"
        : "0 0 25px rgba(0,0,0,0.25)",
  }),

  iconBox: {
    marginBottom: "10px",
  },

  titulo: {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "700",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.4",
  },
};
