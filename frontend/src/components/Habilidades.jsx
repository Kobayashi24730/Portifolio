import { useContext } from "react";
import TemaContext from "./TemaContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFlutter,
  SiDotnet,
  SiCplusplus,
  SiC,
  SiXamarin,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export default function Habilidades() {
  const { tema } = useContext(TemaContext);

  const habilidades = [
    { nome: "HTML5", icon: <FaHtml5 /> },
    { nome: "CSS3", icon: <FaCss3Alt /> },
    { nome: "JavaScript", icon: <FaJs /> },
    { nome: "TypeScript", icon: <SiTypescript /> },
    { nome: "React / React Native", icon: <FaReact /> },
    { nome: "Node.js", icon: <FaNodeJs /> },
    { nome: "Python", icon: <FaPython /> },
    { nome: "Java", icon: <FaJava /> },
    { nome: ".NET MAUI", icon: <SiDotnet /> },
    { nome: "Xamarin", icon: <SiXamarin /> },
    { nome: "Flutter", icon: <SiFlutter /> },
    { nome: "C", icon: <SiC /> },
    { nome: "C++", icon: <SiCplusplus /> },
    { nome: "API RESTful", icon: <SiMongodb /> },
    { nome: "SQL / MySQL", icon: <SiMysql /> },
  ];

  return (
    <section style={styles.section(tema)}>
      <h2 style={styles.title(tema)}>Habilidades</h2>

      <p style={styles.description(tema)}>
        Atuo no desenvolvimento de aplicações modernas, utilizando tecnologias
        web, mobile e backend. Tenho experiência com APIs REST, integração de
        sistemas, aplicações multiplataforma e boas práticas de código.
      </p>

      <div style={styles.grid}>
        {habilidades.map((hab) => (
          <div key={hab.nome} style={styles.card(tema)}>
            <span style={styles.icon(tema)}>{hab.icon}</span>
            <span style={styles.name(tema)}>{hab.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: (tema) => ({
    padding: "60px 20px",
    textAlign: "center",

    background:
      tema === "escuro"
        ? "linear-gradient(180deg, rgba(10,15,30,0.95), rgba(5,8,20,0.9))"
        : "linear-gradient(180deg, #ffffff, #f2f2f2)",

    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  title: (tema) => ({
    fontSize: "32px",
    marginBottom: "14px",
    letterSpacing: "1px",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  description: (tema) => ({
    maxWidth: "700px",
    margin: "0 auto 40px",
    fontSize: "15px",
    lineHeight: "1.6",
    color: tema === "escuro" ? "#a9b9e6" : "#000",
  }),

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: (tema) => ({
    padding: "18px",
    borderRadius: "14px",

    background:
      tema === "escuro"
        ? "rgba(15,25,50,0.6)"
        : "rgba(255,255,255,0.9)",

    border:
      tema === "escuro"
        ? "1px solid rgba(120,150,255,0.25)"
        : "1px solid rgba(0,0,0,0.1)",

    boxShadow:
      tema === "escuro"
        ? "0 0 20px rgba(120,150,255,0.15)"
        : "0 6px 18px rgba(0,0,0,0.12)",

    transition: "0.3s ease",
  }),

  icon: (tema) => ({
    fontSize: "34px",
    display: "block",
    marginBottom: "8px",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  name: (tema) => ({
    fontSize: "14px",
    letterSpacing: "0.8px",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),
};
