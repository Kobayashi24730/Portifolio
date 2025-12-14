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

  const HabilidadesLista = [
    {
      titulo: "HTML",
      text: "Estruturação semântica e acessível para a web.",
      icon: <FaHtml5 size={42} color="#e34c26" />,
    },
    {
      titulo: "CSS",
      text: "Design moderno, responsivo e animado.",
      icon: <FaCss3Alt size={42} color="#264de4" />,
    },
    {
      titulo: "JavaScript / TypeScript",
      text: "Aplicações dinâmicas, escaláveis e performáticas.",
      icon: <SiTypescript size={42} color="#3178c6" />,
    },
    {
      titulo: "React / Node / AJAX",
      text: "SPAs, APIs e aplicações completas.",
      icon: <FaReact size={42} color="#61dbfb" />,
    },
    {
      titulo: "Flutter",
      text: "Apps modernos para Android e iOS.",
      icon: <SiFlutter size={42} color="#5fc8f8" />,
    },
    {
      titulo: "Python",
      text: "APIs, automação e análise de dados.",
      icon: <FaPython size={42} color="#ffd343" />,
    },
    {
      titulo: "API REST",
      text: "Comunicação segura entre sistemas.",
      icon: <FaCode size={42} color="#aab4ff" />,
    },
    {
      titulo: ".NET MAUI / Xamarin",
      text: "Apps multiplataforma com C#.",
      icon: <SiDotnet size={42} color="#512bd4" />,
    },
    {
      titulo: "C / C++",
      text: "Desempenho, lógica e baixo nível.",
      icon: <SiCplusplus size={42} color="#00599c" />,
    },
    {
      titulo: "Java",
      text: "POO e aplicações robustas.",
      icon: <FaJava size={42} color="#e06c00" />,
    },
    {
      titulo: "XML",
      text: "Estruturação e integração de dados.",
      icon: <SiXml size={42} color="#f1c40f" />,
    },
    {
      titulo: "IA & Automação",
      text: "Soluções inteligentes aplicadas a sistemas reais.",
      icon: <MdOutlineSmartToy size={42} color="#aab4ff" />,
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(18px) scale(0.96);
              filter: blur(4px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
        `}
      </style>

      <section style={styles.container(tema)}>
        <div style={styles.header}>
          <h1 style={styles.title}>Habilidades</h1>
          <p style={styles.subtitle}>
            Tecnologias que utilizo para criar soluções modernas e eficientes.
          </p>
        </div>

        <div style={styles.grid}>
          {HabilidadesLista.map((item) => (
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
        ? "radial-gradient(circle at top, #0a0f21 0%, #04040a 70%)"
        : "linear-gradient(135deg, #e7e7e7, #ffffff)",
    color: tema === "escuro" ? "#fff" : "#000",
    transition: "0.3s ease",
  }),

  header: {
    maxWidth: "900px",
    margin: "0 auto 55px",
    textAlign: "center",
  },

  title: {
    fontSize: "2.6rem",
    fontWeight: "800",
    color: "#c7d8ff",
    textShadow: "0 0 12px rgba(120,150,255,0.45)",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#aab4ff",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  card: (tema) => ({
    padding: "28px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(120,150,255,0.25)",
    boxShadow: "0 0 20px rgba(120,150,255,0.18)",
    textAlign: "center",
    transition: "0.35s cubic-bezier(.4,0,.2,1)",
    animation: "fadeUp 0.6s ease forwards",
  }),

  cardHover: (tema) => ({
    transform: "translateY(-10px) scale(1.05)",
    boxShadow: "0 0 35px rgba(90,120,255,0.45)",
    borderColor: "rgba(150,180,255,0.45)",
    background: "rgba(255,255,255,0.12)",
  }),

  icon: {
    marginBottom: "14px",
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  cardText: {
    fontSize: "14.5px",
    lineHeight: "1.5",
    color: "#d5ddff",
  },
};
