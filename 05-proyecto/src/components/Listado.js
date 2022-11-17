import React from "react";
import Button from '@mui/material/Button';


export default function Listado() {
  return (
    <>
      <article className="peli-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">victorroblesweb.es</p>

        <Button color="primary" variant="contained" size="large" sx={{marginRight:1}}>
          Editar
        </Button>
        <Button color="primary" variant="contained" size="large">
          Borrar
        </Button>
      </article>

      <article className="peli-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">victorroblesweb.es</p>
        <Button color="primary" variant="contained" size="large" sx={{marginRight:1}}>
          Editar
        </Button>

        <Button color="primary" variant="contained" size="large">
          Borrar
        </Button>
      </article>

      <article className="peli-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">victorroblesweb.es</p>

        <Button color="primary" variant="contained" size="large" sx={{marginRight:1}}>
          Editar
        </Button>

        <Button color="primary" variant="contained" size="large">
          Borrar
        </Button>
      </article>

      <article className="peli-item">
        <h3 className="title">Desarrollo web</h3>
        <p className="description">victorroblesweb.es</p>

        <Button color="primary" variant="contained" size="large" sx={{marginRight:1}}>
          Editar
        </Button>

        <Button color="primary" variant="contained" size="large">
          Borrar
        </Button>
      </article>
    </>
  );
}
