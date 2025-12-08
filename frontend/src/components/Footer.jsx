import { useContext } from "react";
import TemaContext from "./TemaContext";

export default function Footer() {
  const { tema } = useContext(TemaContext);

  const style = {
    backgroundColor: tema === "escuro" ? "#111" : "#eaeaea",
    color: tema === "escuro" ? "#fff" : "#000",
    padding: "15px",
    textAlign: "center",
    borderTop: tema === "escuro" ? "1px solid #333" : "1px solid #bbb",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "22px",
  };

  return (
    <footer style={style}>
      <div style={iconStyle}>
        <a href="https://github.com/SeuUser" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>GitHub</a>
        <a href="https://linkedin.com/in/SeuUser" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>LinkedIn</a>
      </div>
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} Kobayashi Dev</p>
    </footer>
  );
      }
