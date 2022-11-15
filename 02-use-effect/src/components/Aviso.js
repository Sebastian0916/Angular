import React, {useEffect} from  'react'

export default function Aviso() {
    const Alerta = e =>{
        alert('Bienvenido')
    } 
    useEffect(()=>{
        alert('El componente Aviso esta montando' )

        return () =>{
            alert('Componente desmontado')
        }
    },[])
  return (
    <div>
        <hr/>
      <h1>Saludos Sebastian Vera</h1>
      <button onClick={Alerta}>Mostrar alerta</button>
    </div>
  )
}
