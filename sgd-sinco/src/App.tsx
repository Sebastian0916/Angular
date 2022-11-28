import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Aplicacion from './components/aplicacion/Aplicacion';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { tema } from './Configuracion/Configuracion';
function App() {
  return (
    <ThemeProvider theme={tema}>

    <CssBaseline />

    <Aplicacion/>

    </ThemeProvider>
    
  );
}

export default App;
