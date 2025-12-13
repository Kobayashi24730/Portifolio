import { useState, useContext } from "react";
import TemaContext from "./TemaContext";

import {
  FaHtml5,
  FaCss3Alt,
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

  const habilidades = [
    {
      titulo: "HTML",
      text: "Estruturação semântica e acessível para a web.",
      icon: <FaHtml5 size={42} color="#e34c26" />,
    },
    {
      titulo: "CSS",
      text: "Layouts modernos, responsivos e animações.",
      icon: <FaCss3Alt size={42} color="#2965f1" />,
    },
    {
      titulo: "JavaScript / TypeScript",
      text: "Aplicações dinâmicas, escaláveis e performáticas.",
      icon: <SiTypescript size={42} color="#3178c6" />,
    },
    {
      titulo: "React / Node.js",
      text: "Front-end moderno e back-end em JavaScript.",
      icon: <FaReact size={42} color="#61dafb" />,
    },
    {
      titulo: "Flutter",
      text: "Apps multiplataforma fluidos e rápidos.",
      icon: <SiFlutter size={42} color="#5cc8f8" />,
    },
    {
      titulo: "Python",
      text: "APIs, automações e análise de dados.",
      icon: <FaPython size={42} color="#ffd343" />,
    },
    {
      titulo: "API REST",
      text: "Comunicação eficiente entre sistemas.",
      icon: <FaCode size={42} color="#4fc3f7" />,
    },
    {
      titulo: ".NET MAUI / Xamarin",
      text: "Aplicações mobile com C#.",
      icon: <SiDotnet size={42} color="#512bd4" />,
    },
    {
      titulo: "C / C++",
      text: "Desenvolvimento de sistemas eficientes.",
      icon: <SiCplusplus size={42} color="#00599c" />,
    },
    {
      titulo: "Java",
      text: "POO, APIs e aplicações robustas.",
      icon: <FaJava size={42} color="#e76f00" />,
    },
    {
      titulo: "XML",
      text: "Estruturação e integração de dados.",
      icon: <SiXml size={42} color="#f1c40f" />,
    },
    {
      titulo: "IA & Automação",
      text: "Uso de IA para produtividade e soluções inteligentes.",
      icon: <MdOutlineSmartToy size={42} color="#9b59b6" />,
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section style={styles.container(tema)}>
        <header style={styles.header}>
          <h1 style={styles.title}>Habilidades</h1>
          <p style={styles.subtitle}>
            Tecnologias que utilizo para criar soluções modernas e eficientes.
          </p>
        </header>

        <div style={styles.grid}>
          {habilidades.map((item, index) => (
            <div
              key={item.titulo}
              style={{
                ...styles.card(tema),
                ...(hovered === item.titulo ? styles.cardHover : {}),
                animationDelay: `${index * 0.05}s`,
              }}
              onMouseEnter={() => setHovered(item.titulo)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={styles.icon}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.titulo}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  container: (tema) => ({
    minHeight: "100vh",
    padding: "70px 20px",
    background:
      tema === "escuro"
        ? "linear-gradient(180deg, #0b0b0b, #111, #0b0b0b)"
        : "linear-gradient(180deg, #f5f5f5, #fff)",
    color: tema === "escuro" ? "#f1f1f1" : "#222",
    transition: "0.4s",
  }),

  header: {
    maxWidth: "800px",
    margin: "0 auto 50px",
    textAlign: "center",
  },

  title: {
    fontSize: "38px",
    marginBottom: "10px",
    letterSpacing: "1px",
  },

  subtitle: {
    fontSize: "16px",
    opacity: 0.8,
  },

  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "26px",
  },

  card: (tema) => ({
    padding: "26px",
    borderRadius: "18px",
    background:
      tema === "escuro"
        ? "rgba(20,20,20,0.7)"
        : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.06)",
    textAlign: "center",
    boxShadow:
      tema === "escuro"
        ? "0 8px 25px rgba(0,0,0,0.6)"
        : "0 8px 25px rgba(0,0,0,0.15)",
    transition: "0.35s ease",
    animation: "fadeUp 0.6s forwards",
    opacity: 0,
  }),

  cardHover: {
    transform: "translateY(-10px) scale(1.04)",
    boxShadow: "0 0 30px rgba(0, 255, 200, 0.25)",
    borderColor: "rgba(0,255,200,0.35)",
  },

  icon: {
    marginBottom: "14px",
  },

  cardTitle: {
    fontSize: "20px",
    marginBottom: "6px",
  },

  cardText: {
    fontSize: "15px",
    opacity: 0.85,
    lineHeight: 1.4,
  },
};
