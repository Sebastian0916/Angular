import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { SincoTheme } from "./Configuracion/Index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
