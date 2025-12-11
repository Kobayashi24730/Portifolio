import { useContext } from "react";
import TemaContext from "./TemaContext";
import { FaEnvelope, FaWhatsapp, FaUser } from "react-icons/fa";

export default function Contato() {
  const { tema } = useContext(TemaContext);

  return (
    <div style={styles.container(tema)}>
      <div style={styles.card(tema)}>
        <h2 style={styles.titulo}>Entre em Contato</h2>
        <p style={styles.subtitulo}>
          Estou disponível para projetos, parcerias e oportunidades.
        </p>

        <div style={styles.form}>
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
          ></textarea>

          <button style={styles.btn(tema)}>Enviar</button>

          <div style={styles.contatosDiretos}>
            <a
              href="mailto:seuemail@gmail.com"
              style={styles.link(tema)}
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="https://wa.me/55XXXXXXXXX"
              style={styles.link(tema)}
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: (tema) => ({
    padding: "40px 20px",
    minHeight: "100vh",
    background:
      tema === "escuro"
        ? "linear-gradient(180deg, #0a0a0a, #111)"
        : "linear-gradient(180deg, #f4f4f4, #fff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeIn 0.6s ease",
  }),

  card: (tema) => ({
    width: "100%",
    maxWidth: "500px",
    padding: "30px",
    borderRadius: "15px",
    background: tema === "escuro"
      ? "rgba(20, 20, 20, 0.7)"
      : "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(8px)",
    boxShadow:
      tema === "escuro"
        ? "0 0 25px rgba(255,255,255,0.06)"
        : "0 0 25px rgba(0,0,0,0.1)",
    transition: "0.3s",
  }),

  titulo: {
    fontSize: "25px",
    textAlign: "center",
    marginBottom: "10px",
  },

  subtitulo: {
    textAlign: "center",
    marginBottom: "25px",
    opacity: 0.8,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
  },

  icon: (tema) => ({
    fontSize: "20px",
    color: tema === "escuro" ? "#bbb" : "#666",
  }),

  input: (tema) => ({
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontSize: "15px",
    background: tema === "escuro" ? "#1a1a1a" : "#eee",
    color: tema === "escuro" ? "white" : "#333",
    outline: "none",
  }),

  textarea: (tema) => ({
    width: "100%",
    padding: "12px",
    minHeight: "120px",
    borderRadius: "10px",
    border: "none",
    background: tema === "escuro" ? "#1a1a1a" : "#eee",
    color: tema === "escuro" ? "white" : "#333",
    fontSize: "15px",
    resize: "none",
    outline: "none",
  }),

  btn: (tema) => ({
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "16px",
    background: tema === "escuro" ? "#00ffc3" : "#333",
    color: tema === "escuro" ? "#000" : "#fff",
    transition: "0.3s",
  }),

  contatosDiretos: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
  },

  link: (tema) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: "10px",
    background: tema === "escuro" ? "#222" : "#ddd",
    color: tema === "escuro" ? "#fff" : "#333",
    transition: "0.3s",
  }),
};
