import { useContext, useState } from "react";
import TemaContext from "./TemaContext";
import { FaEnvelope, FaWhatsapp, FaUser } from "react-icons/fa";

export default function Contato() {
  const { tema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.96);
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
        <div style={styles.card(tema)}>
          <h1 style={styles.titulo(tema)}>Contato</h1>

          <p style={styles.subtitulo(tema)}>
            Vamos conversar sobre projetos, ideias ou oportunidades.
          </p>

          <form style={styles.form} action={"malito:guisato.acdc@gmail.com"} method={"POST"}>
            <div style={styles.inputGroup}>
              <FaUser style={styles.icon(tema)} />
              <input
                type="text"
                placeholder="Seu nome"
                style={styles.input(tema)}
              />
            </div>

            <div style={styles.inputGroup}>
              <FaEnvelope style={styles.icon(tema)} />
              <input
                type="email"
                placeholder="Seu email"
                style={styles.input(tema)}
              />
            </div>

            <textarea
              placeholder="Digite sua mensagem..."
              style={styles.textarea(tema)}
            />

            <button style={styles.btn}>
              Enviar mensagem
            </button>
          </form>

          <div style={styles.links}>
            {[
              {
                nome: "Email",
                icon: <FaEnvelope />,
                link: "mailto:guisato.acdc@gmail.com",
              },
              {
                nome: "WhatsApp",
                icon: <FaWhatsapp />,
                link: "https://wa.me/55992695835",
              },
            ].map((item) => (
              <a
                key={item.nome}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...styles.link(tema),
                  ...(hovered === item.nome ? styles.linkHover : {}),
                }}
                onMouseEnter={() => setHovered(item.nome)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.icon}
                {item.nome}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  container: (tema) => ({
    minHeight: "100vh",
    padding: "70px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      tema === "escuro"
        ? "radial-gradient(circle at top, #0a0f21 0%, #04040a 70%)"
        : "linear-gradient(135deg, #e7e7e7, #ffffff)",
    transition: "0.3s ease",
  }),

  card: (tema) => ({
    width: "100%",
    maxWidth: "520px",
    padding: "40px",
    borderRadius: "18px",
    background:
      tema === "escuro"
        ? "rgba(255,255,255,0.06)"
        : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(120,150,255,0.25)",
    boxShadow: "0 0 25px rgba(120,150,255,0.25)",
    animation: "fadeUp 0.7s ease forwards",
    color: tema === "escuro" ? "#fff" : "#000",
  }),

  titulo: (tema) => ({
    textAlign: "center",
    fontSize: "2.3rem",
    marginBottom: "10px",
    color: tema === "escuro" ? "#ffffff" : "#000000",
    textShadow:
      tema === "escuro"
        ? "0 0 10px rgba(120,150,255,0.35)"
        : "none",
  }),

  subtitulo: (tema) => ({
    textAlign: "center",
    marginBottom: "32px",
    fontSize: "15px",
    color: tema === "escuro" ? "#c7d8ff" : "#444",
  }),

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  icon: (tema) => ({
    fontSize: "18px",
    color: tema === "escuro" ? "#aab4ff" : "#333",
  }),

  input: (tema) => ({
    flex: 1,
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(110,140,255,0.25)",
    background:
      tema === "escuro"
        ? "rgba(10,15,33,0.8)"
        : "#ffffff",
    color: tema === "escuro" ? "#fff" : "#000",
    outline: "none",
    fontSize: "15px",
  }),

  textarea: (tema) => ({
    minHeight: "130px",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(110,140,255,0.25)",
    background:
      tema === "escuro"
        ? "rgba(10,15,33,0.8)"
        : "#ffffff",
    color: tema === "escuro" ? "#fff" : "#000",
    outline: "none",
    resize: "none",
    fontSize: "15px",
  }),

  btn: {
    marginTop: "12px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1.05rem",
    background: "linear-gradient(135deg, #2563eb, #4589ff)",
    color: "#fff",
    transition: "0.25s ease",
    boxShadow: "0 0 14px rgba(37, 99, 235, 0.6)",
  },

  links: {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
  },

  link: (tema) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "14px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "600",
    background: "rgba(255,255,255,0.05)",
    color: tema === "escuro" ? "#c7d8ff" : "#000",
    border: "1px solid rgba(110,140,255,0.2)",
    transition: "0.25s ease",
    boxShadow: "0 0 8px rgba(120,150,255,0.2)",
  }),

  linkHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 0 25px rgba(90,120,255,0.35)",
    background: "rgba(255,255,255,0.15)",
  },
};
