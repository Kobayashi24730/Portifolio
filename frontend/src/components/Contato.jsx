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
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section style={styles.container(tema)}>
        <div style={styles.card(tema)}>
          <h1 style={styles.titulo}>Contato</h1>
          <p style={styles.subtitulo}>
            Vamos conversar sobre projetos, ideias ou oportunidades.
          </p>

          <form style={styles.form}>
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

            <button style={styles.btn(tema)}>Enviar mensagem</button>
          </form>

          <div style={styles.links}>
            {[
              {
                nome: "Email",
                icon: <FaEnvelope />,
                link: "mailto:seuemail@gmail.com",
              },
              {
                nome: "WhatsApp",
                icon: <FaWhatsapp />,
                link: "https://wa.me/55XXXXXXXXX",
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
    background:
      tema === "escuro"
        ? "linear-gradient(180deg, #0b0b0b, #111, #0b0b0b)"
        : "linear-gradient(180deg, #f5f5f5, #fff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.4s",
  }),

  card: (tema) => ({
    width: "100%",
    maxWidth: "520px",
    padding: "36px",
    borderRadius: "20px",
    background:
      tema === "escuro"
        ? "rgba(20,20,20,0.75)"
        : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    boxShadow:
      tema === "escuro"
        ? "0 10px 30px rgba(0,0,0,0.7)"
        : "0 10px 30px rgba(0,0,0,0.15)",
    animation: "fadeUp 0.6s ease forwards",
  }),

  titulo: {
    textAlign: "center",
    fontSize: "34px",
    marginBottom: "8px",
  },

  subtitulo: {
    textAlign: "center",
    marginBottom: "30px",
    opacity: 0.8,
    fontSize: "15px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  icon: (tema) => ({
    fontSize: "18px",
    color: tema === "escuro" ? "#aaa" : "#666",
  }),

  input: (tema) => ({
    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    fontSize: "15px",
    background: tema === "escuro" ? "#161616" : "#eee",
    color: tema === "escuro" ? "#fff" : "#222",
    outline: "none",
  }),

  textarea: (tema) => ({
    minHeight: "130px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    resize: "none",
    fontSize: "15px",
    background: tema === "escuro" ? "#161616" : "#eee",
    color: tema === "escuro" ? "#fff" : "#222",
    outline: "none",
  }),

  btn: (tema) => ({
    marginTop: "10px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "16px",
    background: tema === "escuro" ? "#00ffc3" : "#222",
    color: tema === "escuro" ? "#000" : "#fff",
    transition: "0.3s",
  }),

  links: {
    marginTop: "28px",
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  },

  link: (tema) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "12px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "600",
    background: tema === "escuro" ? "#222" : "#ddd",
    color: tema === "escuro" ? "#fff" : "#222",
    transition: "0.3s",
  }),

  linkHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 0 20px rgba(0,255,200,0.35)",
  },
};
