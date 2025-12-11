import { useState, useContext } from "react";
import TemaContext from "./TemaContext";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaCode,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFlutter,
  SiDotnet,
  SiCplusplus,
  SiXml,
} from "react-icons/si";

import { MdOutlineSmartToy } from "react-icons/md";

export default function Habilidades() {
  const { tema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
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
      icon: <SiDotnet size={45} color="#512bd4" />,
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
          Aqui está um resumo das principais tecnologias e ferramentas com as quais trabalho.
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
    background: tema === "escuro"
      ? "linear-gradient(180deg, #0a0a0a, #111, #0a0a0a)"
      : "linear-gradient(180deg, #f4f4f4, #fff, #f4f4f4)",
    color: tema === "escuro" ? "white" : "#222",
    minHeight: "100vh",
    transition: "0.4s ease",
  }),

  sobreMim: (tema) => ({
    padding: "25px",
    borderRadius: "14px",
    background: tema === "escuro"
      ? "rgba(20, 20, 20, 0.7)"
      : "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(8px)",
    boxShadow: tema === "escuro"
      ? "0 0 25px rgba(255,255,255,0.06)"
      : "0 0 25px rgba(0,0,0,0.1)",
    transition: "0.4s",
  }),

  btns: {
    marginTop: "22px",
    display: "flex",
    gap: "12px",
  },

  btn: (tema) => ({
    padding: "12px 22px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
    background: tema === "escuro" ? "#292929" : "#ddd",
    color: tema === "escuro" ? "white" : "#333",
    boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
  }),

  lista: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    marginTop: "45px",
  },

  card: (tema) => ({
    padding: "25px",
    borderRadius: "16px",
    background: tema === "escuro"
      ? "rgba(18, 18, 18, 0.6)"
      : "rgba(255,255,255,0.8)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255,255,255,0.07)",
    boxShadow:
      tema === "escuro"
        ? "0 8px 20px rgba(255,255,255,0.06)"
        : "0 8px 20px rgba(0,0,0,0.12)",
    transition: "0.35s cubic-bezier(0.4, 0, 0.2, 1)",
    textAlign: "center",
    transform: "scale(1)",
    opacity: 0,
    animation: "fadeIn 0.6s forwards",
  }),

  cardHover: (tema) => ({
    transform: "scale(1.05) translateY(-8px)",
    boxShadow:
      tema === "escuro"
        ? "0 0 35px rgba(0, 255, 200, 0.25)"
        : "0 0 25px rgba(0,0,0,0.25)",
    borderColor:
      tema === "escuro"
        ? "rgba(0,255,190,0.4)"
        : "rgba(0,0,0,0.15)",
  }),

  iconBox: {
    marginBottom: "12px",
    transition: "0.3s",
  },

  titulo: {
    marginBottom: "8px",
    fontSize: "21px",
    fontWeight: "700",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.4",
  },

  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};
