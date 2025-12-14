import { useContext } from "react";
import TemaContext from "./TemaContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { tema } = useContext(TemaContext);

  return (
    <footer style={styles.footer(tema)}>
      <div style={styles.icons}>
        <a
          href="https://github.com/SeuUser"
          target="_blank"
          rel="noreferrer"
          style={styles.link(tema)}
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/SeuUser"
          target="_blank"
          rel="noreferrer"
          style={styles.link(tema)}
        >
          <FaLinkedin />
        </a>
      </div>

      <p style={styles.text}>
        © {new Date().getFullYear()} Kobayashi Dev • Todos os direitos reservados
      </p>
    </footer>
  );
}

const styles = {
  footer: (tema) => ({
    padding: "30px 20px",
    textAlign: "center",

    background:
      tema === "escuro"
        ? "linear-gradient(180deg, rgba(5,8,20,0.95), rgba(10,15,30,0.9))"
        : "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,245,245,0.9))",

    backdropFilter: "blur(14px)",

    borderTop:
      tema === "escuro"
        ? "1px solid rgba(0,180,255,0.15)"
        : "1px solid rgba(0,0,0,0.1)",

    boxShadow:
      tema === "escuro"
        ? "0 -10px 30px rgba(0,0,0,0.45)"
        : "0 -6px 20px rgba(0,0,0,0.12)",

    color: tema === "escuro" ? "#b8c7e0" : "#333",
  }),

  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "28px",
    fontSize: "26px",
    marginBottom: "12px",
  },

  link: (tema) => ({
    color: tema === "escuro" ? "#b8c7e0" : "#333",
    transition: "0.3s ease",
    textShadow:
      tema === "escuro"
        ? "0 0 8px rgba(0,180,255,0.35)"
        : "none",
  }),

  text: {
    margin: 0,
    fontSize: "14px",
    letterSpacing: "0.8px",
  },
};
