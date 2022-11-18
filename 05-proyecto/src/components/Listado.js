import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Editar from "./Editar";
export default function Listado({ listadoState, setListadoState }) {
  const [editar, setEditar] = useState(0);
  useEffect(() => {
    conseguirPeliculas();
  }, []);
  const conseguirPeliculas = () => {
    let pelicula = JSON.parse(localStorage.getItem("pelicula"));
    setListadoState(pelicula);
    return pelicula;
  };
  const borrarPeli = (id) => {
    let pelis_almacenada = conseguirPeliculas();
    let nuevoArray = pelis_almacenada.filter(
      (peli) => peli.id !== parseInt(id)
    );
    setListadoState(nuevoArray);
    localStorage.setItem("pelicula", JSON.stringify(nuevoArray));
  };

  const editarPeli = () => {};
  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <Button
                color="primary" variant="contained"size="large"
                sx={{ marginRight: 1 }}onClick={() => {
                  setEditar(peli.id)
                }}
              >
                Editar
              </Button>
              <Button
                color="primary"variant="contained"size="large"
                onClick={() => borrarPeli(peli.id)}
              >
                Borrar
              </Button>
              {editar === peli.id && (
              <Editar peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}/>
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
}
