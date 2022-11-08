import React from "react";
import logo from "./img/logo.jpg"
import "./encabezado.css"

function Encabezado() {
  return (
    <div className="Encabezado">
      <div className="header__menu">
            <img src={logo} className="logo" alt='logo' width={100}/>
            <div className="header__nav">
                <nav>
                    <a href="/">Contacto</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Github </a>
                </nav>
            </div>
      </div>
    </div>
  );
}

export default Encabezado;
