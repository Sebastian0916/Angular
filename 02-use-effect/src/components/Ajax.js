import React, { useState, useEffect } from "react";

export default function Ajax() {
  const [usuarios, setUsuarios] = useState([]);
    const [carga, setCarga] = useState(true)
  const getUsuarios = () => {
    setUsuarios([
      {
        id: 1,
        email: "michael@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      }, 
    ]);
  };
  const getUsuariosAjax = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultadoFinal) => {
          setUsuarios(resultadoFinal.data);
          console.log(usuarios);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAW = () => {
    setTimeout ( async()=>{
        const peticion = await fetch("https://reqres.in/aspi/users?page=1");
    const { data } = await peticion.json();
    console.log(data);
    setUsuarios(data);
    setCarga(false)
    },1000)
    
  };



  useEffect(() => {
    getUsuariosAjaxAW();
  }, []);

  if(carga == true){
      return (
        <div className="cargando">
            cargando datos
        </div>
      )
  }else{
    return (
        <div>
          <h2>Listado De usuarios Via Ajax</h2>
          <ol className="usuarios">
            {usuarios.map((usuario) => {
              return (
                <li key={usuario.id}>
                    <img src={usuario.avatar} width="20"/>
                    &nbsp; 
                  {usuario.first_name} {usuario.last_name}{" "}
                </li>
              );
            })}
          </ol>
        </div>
      );
  }


  
}
