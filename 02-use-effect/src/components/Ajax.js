import React, {useState} from 'react'


export default function Ajax() {
    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = () =>{
        setUsuarios([])
    }

  return (
    <div>
      <h2>Listado De usuarios Via Ajax</h2>
    </div>
  )
}
