import React from "react";
import "./Header.css";
import logo from "../images/Image1.png";
import { Link } from "react-router-dom";

function header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img className="Logo" src={logo} alt="Minha imagem" />
      </div>
      <nav className="nav">
        <Link to="/">Início</Link>
        <Link to="/concursos-publicos">Concursos públicos</Link>
        <Link to="/empregos">Empregos</Link>
        <Link to="/regioes">Regiões</Link>
      </nav>
    </header>
  );
}

export default header;
