import React, { useState } from "react";
import Input from "@mui/material/Input";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { GuardarLocalStorage } from "../helpers/GuardarLocalStorage";

export default function Crear({setListadoState}) {
  const tituloComponente = "Añadir Pelicula";

  const [peliculaState, setPeliculaState] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = peliculaState;

  const conseguirDatos = (e) => {
    e.preventDefault();
    let datos = e.target;

    let titulo = datos.titulo.value;
    let descripcion = datos.descripcion.value;

    let pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    setPeliculaState(pelicula);
    console.log(peliculaState); 

    setListadoState( elementos =>{
      return [...elementos,pelicula]
    })

    GuardarLocalStorage('pelicula',pelicula);


  };

  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        {titulo && descripcion
          ? "haz creado pelicula: " + titulo + descripcion
          : ""}

        <form onSubmit={conseguirDatos}>
          <Input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Titulo"
            sx={{
              width: 300,
              background: "#f6f7f9",
              height: 50,
              borderRadius: 1,
            }}
          />
          <TextareaAutosize
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
          ></TextareaAutosize>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
}
