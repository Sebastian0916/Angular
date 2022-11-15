import React, { useState } from "react";
import PropTypes from 'prop-types';

const EjercicioComponent = ({ año }) => {
  const [añoNuevo, setAñoNuevo] = useState(año);

  const SumarAño = (e) => {
    setAñoNuevo(añoNuevo + 1);
  };

  const RestarAño = (e) => {
    setAñoNuevo(añoNuevo - 1);
  };

  const cambiarYear = e =>{
    let dato = parseInt(e.target.value)

    if(Number.isInteger(dato)){

      setAñoNuevo(dato)
    }else{
      setAñoNuevo(año)
    }

  }
  return (
    <div className="container">
      <h2>Ejercicio Eventos</h2>
      <p className="label">{añoNuevo}</p>
      <div>
        <button onClick={SumarAño}>Suma Un Año</button>
        <button onClick={RestarAño}>Resta Un Año</button>
      </div>
      <p>
        Cambiar Año
        <input type="text" placeholder="Cambiar Año" onChange={cambiarYear} />
      </p>
    </div>
  );
};

EjercicioComponent.prototype = {
  año:PropTypes.number.isRequired 
}


export default EjercicioComponent;
