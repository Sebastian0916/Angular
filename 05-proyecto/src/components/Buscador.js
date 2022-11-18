import React, { useState } from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";

export default function Buscador({ listadoState, setListadoState }) {
  const [busqueda, setBusqueda] = useState("");
  const buscarPelicula = (e) => {
    setBusqueda(e.target.value);


    let peliculaEncontrada = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || busqueda.length <= 0) {
      peliculaEncontrada = JSON.parse(localStorage.getItem("pelicula"));
      console.log(peliculaEncontrada)
    }
    
    setListadoState(peliculaEncontrada);
  };
  return (
    <>
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <Input
            name="buscar"
            autoComplete="off"
            value={busqueda}
            onChange={buscarPelicula}
            type="text"
            id="search_field"
            sx={{
              width: 250,
              background: "#f6f7f9",
              height: 50,
              borderRadius: 1,
            }}
          />
          <Button
            id="search"
            color="primary"
            variant="contained"
            size="large"
            sx={{ marginTop: 1 }}
          >
            Buscar
          </Button>
        </form>
      </div>
    </>
  );
}
