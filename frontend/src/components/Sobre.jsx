import { useContext, useEffect, useRef } from "react";
import TemaContext from "./TemaContext";

export default function Sobre() {
  const { tema } = useContext(TemaContext);
  const cardsRef = useRef([]);

  const estagio = [
    {
      titulo: "Automação de sistema de monitoramento em tempo real",
      descricao:
        "Utilizei C/C++, Node.js e Java para criar um sistema que detecta anomalias e movimentos suspeitos, enviando alertas automáticos ao administrador.",
      imagem: "/estagio/monitoramento.png",
      github: "https://github.com/seuuser",
      demo: "#",
    },
    {
      titulo: "Sistema de mapeamento de terreno",
      descricao:
        "Projeto desenvolvido em C, C++ e C#, com testes em campo. Premiado em primeiro lugar em competição técnica.",
      imagem: "/estagio/mapeamento.png",
      github: "https://github.com/seuuser",
      demo: "#",
    },
    {
      titulo: "Monitoramento e processamento de dados agrícolas",
      descricao:
        "Sistema com C/C++, Python, React, JavaScript, Flutter, jQuery e AJAX, exibindo dados em dashboards administrativos.",
      imagem: "/estagio/agricola.png",
      github: "https://github.com/seuuser",
      demo: "#",
    },
    {
      titulo: "Aplicativo de alertas agrícolas",
      descricao:
        "Aplicação mobile e desktop usando XML/Java e .NET MAUI/Xamarin com área administrativa segura.",
      imagem: "/estagio/alertas.png",
      github: "https://github.com/seuuser",
      demo: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <div style={styles.container(tema)}>

      <div style={styles.sobreBox}>
        <h2 style={styles.title}>Sobre Mim</h2>
        <p style={styles.text}>
          Desenvolvedor com experiência prática em estágio técnico, atuando em
          sistemas reais, automações, monitoramento, aplicações web, mobile e
          processamento de dados.
        </p>
      </div>

      <h2 style={styles.sectionTitle}>Experiência de Estágio</h2>

      <div style={styles.lista}>
        {estagio.map((item, i) => (
          <div
            key={item.titulo}
            ref={(el) => (cardsRef.current[i] = el)}
            style={styles.card}
          >
            <img src={item.imagem} alt={item.titulo} style={styles.image} />

            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>

            <div style={styles.buttons}>
              <a href={item.demo} target="_blank" style={styles.btnPrimary}>
                Ver Projeto
              </a>
              <a href={item.github} target="_blank" style={styles.btnOutline}>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
    }

const styles = {
  container: (tema) => ({
    minHeight: "100vh",
    padding: "50px 20px",
    background:
      tema === "escuro"
        ? "radial-gradient(circle at top, #0a0f21 0%, #04040a 70%)"
        : "linear-gradient(135deg, #e7e7e7, #ffffff)",
    color: tema === "escuro" ? "#fff" : "#000",
    transition: "0.3s ease",
  }),

  sobreBox: {
    maxWidth: "900px",
    margin: "0 auto 50px",
    padding: "28px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(110,140,255,0.25)",
    boxShadow: "0 0 25px rgba(120,150,255,0.25)",
    textAlign: "center",
  },

  title: {
    fontSize: "2.2rem",
    marginBottom: "12px",
    textShadow: "0 0 12px rgba(120,150,255,0.4)",
  },

  text: {
    fontSize: "1.05rem",
    lineHeight: "1.6",
    color: "#c7d8ff",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "35px",
    textShadow: "0 0 10px rgba(120,150,255,0.35)",
  },

  lista: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  card: {
    padding: "22px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(110,140,255,0.25)",
    boxShadow: "0 0 20px rgba(120,150,255,0.2)",
    opacity: 0,
    transform: "translateY(25px)",
    transition: "0.6s ease",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    marginTop: "14px",
    flexWrap: "wrap",
  },

  btnPrimary: {
    padding: "10px 18px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #2563eb, #4589ff)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 0 15px rgba(37,99,235,0.6)",
  },

  btnOutline: {
    padding: "10px 18px",
    borderRadius: "10px",
    border: "2px solid #6e8cff",
    color: "#c7d8ff",
    textDecoration: "none",
    fontWeight: "600",
  },
};
