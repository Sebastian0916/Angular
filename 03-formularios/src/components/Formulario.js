import React, { useState } from "react";

export default function Formulario() {
  const [usuario, setUsuario] = useState({});
  const enviarDatos = (e) => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.biografia.value,
      enviar:datos.enviar.value,
    };
    console.log(usuario);
    setUsuario(usuario);
  };

  const cambiarDato = (e) => {
    let valorInput = e.target.name;

    setUsuario((estado) => ({
      ...estado,
      [valorInput]: e.target.value,
    }));
  };
  return (
    <div>
      <h2>Formulario</h2>

      {usuario.enviar && (
        <div>
          {usuario.nombre} {usuario.apellido} es {usuario.genero} y su biografia
          es <p>{usuario.biografia}</p>
        </div>
      )}

      <form onSubmit={enviarDatos}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={cambiarDato}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={cambiarDato}
        />
        <select name="genero" onChange={cambiarDato}>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <textarea
          placeholder="Biografía"
          name="biografia"
          onChange={cambiarDato}
        ></textarea>
        <input type="submit" value="enviar" name="enviar" />
      </form>
    </div>
  );
}
