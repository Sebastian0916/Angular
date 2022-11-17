import React from 'react'
import Input from '@mui/material/Input';

export default function Buscador() {
  return (
    <>
      <div className="search">
          <h3 className="title">Buscador</h3>
          <form>
            <Input type="text" id="search_field" sx={{width:250, background:'#f6f7f9',height:50,borderRadius:1}}/>
            <button id="search">Buscar</button>
          </form>
        </div>

       
    </>
  )
}
