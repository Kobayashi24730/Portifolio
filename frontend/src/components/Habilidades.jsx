import { useState, useContext } from "react";
import TemaContext from "./TemaContext";

export default function Sobre() {
  const { tema } = useContext(TemaContext);
  const [hovered, setHovered] = useState(null);

  const estagio = [
    {
      titulo: "Criação de automação de sistema de monitoramento em tempo real",
      text: "Utilizei linguagens como C/C++, Node.js e Java. O sistema monitora o local identificando anomalias (como alguém não autorizado) e movimentos suspeitos, enviando alertas automaticamente para o administrador."
    },
    {
      titulo: "Desenvolvimento de sistema de mapeamento de terreno",
      text: "Utilizei C, C++ e C# na criação e testes do sistema em campo. O projeto foi inscrito e premiado em primeiro lugar em competição."
    },
    {
      titulo: "Sistema para monitoramento/processamento de dados agrícolas",
      text: "Feito em C/C++, Python, React, JavaScript e frameworks como Flutter, jQuery e AJAX, com banco de dados. A estação coleta dados que são processados e exibidos em planilhas e dashboards administrativos."
    },
    {
      titulo: "Aplicativo mobile/desktop para alertas agrícolas",
      text: "Desenvolvido em XML/Java (Android) e .NET MAUI/Xamarin (desktop). Envia alertas quando parâmetros são ultrapassados, possui área administrativa segura e painel de testes."
    }
  ];

  return (
    <div style={styles.container(tema)}>
      <div style={styles.sobreMim(tema)}>
        <h2>Olá! Sou Kobayashi</h2>
        <p>
          Sou desenvolvedor web/mobile e também crio aplicações desktop.
          Sou criativo, curioso e apaixonado por tecnologia.  
          Minha jornada começou há 5 anos quando decidi criar meu primeiro servidor de jogos.  
          Desde então me apaixonei pelo mundo da programação e sigo evoluindo diariamente.
        </p>

        <div style={styles.btns}>
          <button style={styles.btn(tema)}>Contato</button>
          <button style={styles.btn(tema)}>Habilidades</button>
        </div>
      </div>
      <div style={styles.lista}>
        {estagio.map((item) => (
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
