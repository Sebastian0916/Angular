import React from "react";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { TablePaginationActionsUnstyled } from "@mui/base";
export default function Editar({ peli, conseguirPeliculas, setEditar, setListadoState }) {
  const tituloPelicula = "Editar pelicula";
  const guardarEdicion = (e, id) => {
    e.preventDefault();
    let target = e.target;
    const peliculaAlmacenada = conseguirPeliculas();
    console.log(peliculaAlmacenada);

    const i = peliculaAlmacenada.findIndex((peli) => peli.id === id);

    let peli = {
      id,
      titulo: target.titulo.value,
      descripcion:target.descripcion.value
    };
    peliculaAlmacenada[i] = peli

    localStorage.setItem('pelicula', JSON.stringify(peliculaAlmacenada))

    setListadoState(peliculaAlmacenada)
    setEditar(0)
  };
  return (
    <div className="edit_form">
      <h3 className="title">{tituloPelicula}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <Input
          type="text"
          name="titulo"
          className="tituloEditado"
          defaultValue={peli.titulo}
          sx={{
            width: 300,
            background: "#f6f7f9",
            height: 50,
            borderRadius: 1,
          }}
        />
        <TextareaAutosize
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcionEditar"
        ></TextareaAutosize>
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
}
