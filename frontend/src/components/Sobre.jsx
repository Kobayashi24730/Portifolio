import { useContext, useEffect, useRef } from "react";
import TemaContext from "./TemaContext";

export default function Sobre() {
  const { tema } = useContext(TemaContext);
  const cardsRef = useRef([]);

  const estagio = [
    {
      titulo: "Automação de Sistema de Monitoramento em Tempo Real",
      descricao:
        "Desenvolvimento de um sistema em C/C++, Node.js e Java para detecção de anomalias e movimentos suspeitos, com envio automático de alertas ao administrador.",
      imagem: "../assets/imgs/estagio1",
      github: "https://github.com/Kobayashi24730",
      demo: "#",
    },
    {
      titulo: "Sistema de Mapeamento de Terreno",
      descricao:
        "Projeto desenvolvido em C, C++ e C#, incluindo testes em campo. O sistema foi premiado com o primeiro lugar em uma competição técnica.",
      imagem: "../assets/imgs/estagio2",
      github: "https://github.com/Kobayashi24730",
      demo: "#",
    },
    {
      titulo: "Monitoramento e Processamento de Dados Agrícolas",
      descricao:
        "Sistema completo utilizando C/C++, Python, React, JavaScript, Flutter, jQuery e AJAX, com exibição de dados em dashboards administrativos interativos.",
      imagem: "../assets/imgs/estagio3",
      github: "https://github.com/Kobayashi24730",
      demo: "#",
    },
    {
      titulo: "Aplicativo de Alertas Agrícolas",
      descricao:
        "Aplicação mobile e desktop desenvolvida com XML/Java e .NET MAUI/Xamarin, contando com uma área administrativa segura para gerenciamento de dados.",
      imagem: "../assets/imgs/estagio4",
      github: "https://github.com/Kobayashi24730",
      demo: "#",
    },
    {
      titulo: "Desenvolvimento de Site de Livros",
      descricao:
        "Aplicação web desenvolvida com HTML, CSS, JavaScript, jQuery e PHP, apresentando uma interface moderna e responsiva. Permite que usuários publiquem livros e conta com funcionalidades administrativas.",
      imagem: "../assets/imgs/estagio5",
      github: "https://github.com/Kobayashi24730",
      demo: "#",
    },
    {
      titulo: "Aplicação Web com Inteligência Artificial",
      descricao:
        "Desenvolvimento de uma aplicação web moderna e responsiva utilizando React, JavaScript, TypeScript e Python. O sistema responde perguntas dos usuários com base em livros pré-definidos e pesquisas na web.",
      imagem: "../assets/imgs/estagio6",
      github: "https://github.com/Kobayashi24730",
      demo: "#",
    },
    {
      titulo: "Criação de E-commerce para Venda de Produtos",
      descricao:
        "Aplicação web responsiva desenvolvida com React, JavaScript, TypeScript, Python e PHP, incluindo checkout via Pix e WhatsApp, além de um painel administrativo para gerenciamento de produtos.",
      imagem: "../assets/imgs/estagio7",
      github: "https://github.com/Kobayashi24730",
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
        <h2 style={styles.title(tema)}>Sobre Mim</h2>
        <p style={styles.text(tema)}>
          Desenvolvedor com experiência prática em estágio técnico, atuando em
          sistemas reais, automações, monitoramento, aplicações web, mobile e
          processamento de dados.
        </p>
      </div>

      <h2 style={styles.sectionTitle(tema)}>Experiência de Estágio</h2>

      <div style={styles.lista}>
        {estagio.map((item, i) => (
          <div
            key={item.titulo}
            ref={(el) => (cardsRef.current[i] = el)}
            style={styles.card}
          >
            <img src={item.imagem} alt={item.titulo} style={styles.image} />

            <h3 style={styles.cardTitle(tema)}>{item.titulo}</h3>
            <p style={styles.cardText(tema)}>{item.descricao}</p>

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
    color: tema === "escuro" ? "#c7d8ff" : "#000",
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

  title: (tema) => ({
    fontSize: "2.2rem",
    marginBottom: "12px",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  text: (tema) => ({
    fontSize: "1.05rem",
    lineHeight: "1.6",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

  sectionTitle: (tema) => ({
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "35px",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
  }),

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

  cardTitle: (tema) => ({
    color: tema === "escuro" ? "#c7d8ff" : "#000",
    marginBottom: "6px",
  }),

  cardText: (tema) => ({
    color: tema === "escuro" ? "#c7d8ff" : "#000",
    fontSize: "14px",
    lineHeight: "1.5",
  }),

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
    color: "#6e8cff",
    textDecoration: "none",
    fontWeight: "600",
  },
};
