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
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <section style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.titulo}>Contato</h1>
          <p style={styles.subtitulo}>
            Vamos conversar sobre projetos, ideias ou oportunidades.
          </p>

          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <FaUser style={styles.icon} />
              <input
                type="text"
                placeholder="Seu nome"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <FaEnvelope style={styles.icon} />
              <input
                type="email"
                placeholder="Seu email"
                style={styles.input}
              />
            </div>

            <textarea
              placeholder="Digite sua mensagem..."
              style={styles.textarea}
            />

            <button style={styles.btn}>Enviar mensagem</button>
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
                  ...styles.link,
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
  container: {
    minHeight: "100vh",
    padding: "70px 20px",
    background:
      "linear-gradient(180deg, #0b0f14, #111, #0b0f14)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: "520px",
    padding: "40px",
    borderRadius: "22px",
    background: "rgba(20,20,20,0.75)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
    animation: "fadeUp 0.6s ease forwards",
  },

  titulo: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#00ffc8",
  },

  subtitulo: {
    textAlign: "center",
    marginBottom: "32px",
    fontSize: "15px",
    color: "#b5b5b5",
  },

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

  icon: {
    fontSize: "18px",
    color: "#00ffc8",
  },

  input: {
    flex: 1,
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: "15px",
    background: "#141414",
    color: "#fff",
    outline: "none",
  },

  textarea: {
    minHeight: "130px",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    resize: "none",
    fontSize: "15px",
    background: "#141414",
    color: "#fff",
    outline: "none",
  },

  btn: {
    marginTop: "10px",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "16px",
    background: "#00ffc8",
    color: "#000",
    transition: "0.3s",
  },

  links: {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
  },

  link: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "14px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "700",
    background: "rgba(25,25,25,0.8)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "0.35s",
  },

  linkHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 0 25px rgba(0,255,200,0.45)",
    borderColor: "rgba(0,255,200,0.6)",
  },
};
