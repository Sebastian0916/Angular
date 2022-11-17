import React, { useEffect } from "react";
import Button from "@mui/material/Button";

export default function Listado() {
  const conseguirPelicula = () => {
    let pelis = JSON.parse(localStorage.getItem("pelis"));
    debugger
    console.log(pelis);
  };

  useEffect(() => {
    conseguirPelicula();
    console.log("Aca esta su peliculaaaa!!!");
  }, []);
  return (
    <>
      <article className="peli-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">victorroblesweb.es</p>
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ marginRight: 1 }}
        >
          Editar
        </Button>
        <Button color="primary" variant="contained" size="large">
          Borrar
        </Button>
      </article>
    </>
  );
}
