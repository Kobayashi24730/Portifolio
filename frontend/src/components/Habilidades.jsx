import { useState, useContext } from "react";
import TemaContext from "./TemaContext";

export default function Sobre() {
  const { tema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);

  const Habilidades = [
  {
    titulo: "HTML",
    text: "Estruturo páginas da web de forma organizada, semântica e otimizada."
  },
  {
    titulo: "CSS",
    text: "Crio interfaces responsivas e modernas usando boas práticas de layout e design."
  },
  {
    titulo: "JavaScript / TypeScript",
    text: "Desenvolvo funcionalidades dinâmicas e escaláveis no front-end e back-end."
  },
  {
    titulo: "Frameworks JS (AJAX, jQuery, React Native, Node.js)",
    text: "Experiência com consumo de APIs, manipulação de DOM e desenvolvimento móvel e servidor."
  },
  {
    titulo: "Flutter",
    text: "Desenvolvo aplicativos multiplataforma com UI fluida e ótima performance."
  },
  {
    titulo: "Python",
    text: "Crio automações, APIs REST, scripts e projetos de análise e integração."
  },
  {
    titulo: "API Restful",
    text: "Desenho e consumo APIs organizadas, seguras e bem estruturadas."
  },
  {
    titulo: ".NET MAUI / Xamarin",
    text: "Desenvolvimento de apps nativos multiplataforma com C# de forma unificada."
  },
  {
    titulo: "C / C++",
    text: "Domínio de lógica, ponteiros e desenvolvimento de sistemas de alto desempenho."
  },
  {
    titulo: "Java",
    text: "Aplicações robustas, APIs e lógica orientada a objetos."
  },
  {
    titulo: "XML",
    text: "Estruturação de dados, configurações e integração entre sistemas."
  },
  {
    titulo: "Habilidades com I.A.",
    text: "Uso IA para automações, análise de dados, criação de sistemas inteligentes e melhora de produtividade."
  },
];
  return (
    <div style={styles.container(tema)}>
      <div style={styles.sobreMim(tema)}>
        <h2>Olá! Aqui jas um pouco sobre minhas Habilidades</h2>
        <p>
          
        </p>

        <div style={styles.btns}>
          <button style={styles.btn(tema)}>Contato</button>
          <button style={styles.btn(tema)}>Habilidades</button>
        </div>
      </div>
      <div style={styles.lista}>
        {Habilidades.map((item) => (
          <div
            key={item.titulo}
            style={{
              ...styles.card(tema),
              ...(hovered === item.titulo ? styles.cardHover(tema) : {})
            }}
            onMouseEnter={() => setHovered(item.titulo)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(item.titulo)}
            onTouchEnd={() => setHovered(null)}
          >
            <h2 style={styles.titulo}>{item.titulo}</h2>
            <p style={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
