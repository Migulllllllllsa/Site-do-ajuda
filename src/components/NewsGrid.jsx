import React from "react";
import "./NewsGrid.css";

const noticias = [
  { id: 1, titulo: "Notícia 1" },
  { id: 2, titulo: "Notícia 2" },
  { id: 3, titulo: "Notícia 3" },
  { id: 4, titulo: "Notícia 4" },
  { id: 5, titulo: "Notícia 5" },
  { id: 6, titulo: "Notícia 6" },
];

function NewsGrid() {
  return (
    <section className="news-grid">
      {noticias.map((n, index) => (
        <div
          key={n.id}
          className={`news-card ${index === 0 ? "principal" : ""}`}
        >
          <div className="thumbnail"></div>
          <p>{n.titulo}</p>
        </div>
      ))}
    </section>
  );
}

export default NewsGrid;
