import React, { useState } from "react";

export default function Estados() {
  const [nombre, setNombre] = useState("Sebastian Vera");

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
    console.log(e.target);
  };

  return (
    <div>
      <h3>Component</h3>
      <strong>{nombre}</strong>
      &nbsp;
      <button onClick={(e) => cambiarNombre(e, "David Peña")}> Cambiar </button>
      <input
        type="text"
        placeholder="Cambia el nombre"
        onKeyUp={(e) => cambiarNombre(e, e.target.value)}
      ></input>
    </div>
  );
}
