import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import HeaderAppBar from "./components/aplicacion/Header/HeaderAppBar";
import Actividades from "./components/aplicacion/Actividades/Actividades";
import CardComponent from "./components/aplicacion/Cards/CardComponent";
function App() {
  return (
    <>
      <HeaderAppBar />
      <Actividades />
      {
        [1,2,3].map(()=>{
          return <CardComponent/>
        })
      }
    </>
  );
}

export default App;
