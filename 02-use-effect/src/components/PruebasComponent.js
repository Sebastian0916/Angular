import React, { useState, useEffect } from "react";
import Aviso from "./Aviso";
export default function PruebasComponent() {
  const [usuario, setUsuario] = useState("Sebastian");
  const [fecha, setFecha] = useState("01-01-2010");
  const [contador, setContador] = useState(0);

  const modUsuario = (e) => {
    setUsuario(e.target.value);
    console.log("ha habido un cambio en usuario");
  };

  const cambiarFecha = (e) => {
    setFecha(Date.now());
  };

  useEffect(() => {
    console.log("ha cargado componente");
  }, []);

  //Cambio de usuario
  useEffect(() => {
    setContador(contador + 1);
    console.log("ha cargado componente:" + contador);
  }, [usuario]);
  return (
    <div>
      <h1>El efecto - UseEfecct</h1>

      <form>
        <p className={contador == 10 ? "label label-green" : "label"}>
          {usuario}
        </p>
        <p>{fecha}</p>
        <input type="text" onChange={modUsuario} placeholder="Cambiar nombre" />
      </form>
      <button onClick={cambiarFecha}>Cambiar fecha</button>
      <br />
      {usuario == "Sebastian Vera" ? <Aviso /> : ""}
    </div>
  );
}
