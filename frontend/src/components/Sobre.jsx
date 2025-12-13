import { useContext, useEffect, useRef } from "react";
import TemaContext from "./TemaContext";

export default function Sobre() {
  const { tema } = useContext(TemaContext);
  const cardsRef = useRef([]);

  const estagio = [
    {
      titulo: "Automação de sistema de monitoramento em tempo real",
      descricao:
        "Utilizei C/C++, Node.js e Java. O sistema monitora o local identificando anomalias (como pessoas não autorizadas) e movimentos suspeitos, enviando alertas automáticos ao administrador.",
      imagem: "/estagio/monitoramento.png",
      video: "",
      github: "https://github.com/seuuser",
      demo: "#",
    },
    {
      titulo: "Sistema de mapeamento de terreno",
      descricao:
        "Desenvolvido em C, C++ e C#, com testes em campo. Projeto inscrito e premiado em primeiro lugar em competição técnica.",
      imagem: "/estagio/mapeamento.png",
      video: "",
      github: "https://github.com/seuuser",
      demo: "#",
    },
    {
      titulo: "Monitoramento e processamento de dados agrícolas",
      descricao:
        "Sistema feito em C/C++, Python, React, JavaScript, Flutter, jQuery e AJAX, com banco de dados. Coleta, processa e exibe dados em planilhas e dashboards administrativos.",
      imagem: "/estagio/agricola.png",
      video: "",
      github: "https://github.com/seuuser",
      demo: "#",
    },
    {
      titulo: "Aplicativo de alertas agrícolas (mobile/desktop)",
      descricao:
        "Aplicação desenvolvida em XML/Java (Android) e .NET MAUI/Xamarin (desktop). Envia alertas automáticos, possui área administrativa segura e painel de testes.",
      imagem: "/estagio/alertas.png",
      video: "",
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

      <div style={styles.sobreBox(tema)}>
        <h2>Sobre Mim</h2>
        <p>
          Desenvolvedor com experiência prática em estágio técnico, atuando em
          sistemas reais, automações, monitoramento, aplicações mobile, web e
          processamento de dados.
        </p>
      </div>

      <h2 style={styles.sectionTitle}>Experiência de Estágio</h2>

      <div style={styles.lista}>
        {estagio.map((item, i) => (
          <div
            key={item.titulo}
            ref={(el) => (cardsRef.current[i] = el)}
            style={styles.card(tema)}
          >

            <div style={styles.mediaBox}>
              <img
                src={item.imagem}
                alt={item.titulo}
                style={styles.image}
              />
            </div>

            {item.video && (
              <video
                src={item.video}
                muted
                loop
                controls
                style={styles.video}
              />
            )}

            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>

            <div style={styles.buttons}>
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                style={styles.btn(tema)}
              >
                Ver Projeto
              </a>
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                style={styles.btnOutline(tema)}
              >
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
    padding: "40px 16px",
    minHeight: "100vh",
    background:
      tema === "escuro"
        ? "linear-gradient(180deg, #0a0a0a, #111)"
        : "linear-gradient(180deg, #f4f4f4, #fff)",
    color: tema === "escuro" ? "#fff" : "#222",
  }),

  sobreBox: (tema) => ({
    padding: "28px",
    borderRadius: "16px",
    background:
      tema === "escuro"
        ? "rgba(20,20,20,0.75)"
        : "rgba(255,255,255,0.75)",
    backdropFilter: "blur(8px)",
    marginBottom: "45px",
  }),

  sectionTitle: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "30px",
  },

  lista: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },

  card: (tema) => ({
    padding: "22px",
    borderRadius: "16px",
    background:
      tema === "escuro"
        ? "rgba(18,18,18,0.65)"
        : "rgba(255,255,255,0.9)",
    boxShadow:
      tema === "escuro"
        ? "0 8px 25px rgba(0,255,200,0.08)"
        : "0 8px 25px rgba(0,0,0,0.12)",
    opacity: 0,
    transform: "translateY(25px)",
    transition: "0.6s ease",
  }),

  mediaBox: {
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "12px",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  video: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    flexWrap: "wrap",
  },

  btn: (tema) => ({
    padding: "10px 18px",
    borderRadius: "10px",
    background: tema === "escuro" ? "#00ffc3" : "#333",
    color: tema === "escuro" ? "#000" : "#fff",
    textDecoration: "none",
    fontWeight: "600",
  }),

  btnOutline: (tema) => ({
    padding: "10px 18px",
    borderRadius: "10px",
    border: `2px solid ${tema === "escuro" ? "#00ffc3" : "#333"}`,
    color: "inherit",
    textDecoration: "none",
    fontWeight: "600",
  }),
};
