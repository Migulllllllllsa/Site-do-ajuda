import React from "react";
import "./Header.css";
import logo from '../images/Image1.png';

function Header() {
   return ( 

   <header className="header">
     <div className="logo-area">
       <img className="Logo" src={logo} alt="Minha imagem" />
     </div> <nav className="nav">
       <a href="#">Últimas notícias</a>
       <a href="#">Concursos públicos</a>
       <a href="#">Empregos</a> 
       <a href="#">Regiões</a> </nav> </header> ); }
       
export default Header;
