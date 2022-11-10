import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autenticacion from "./pages/Autenticacion/Autenticacion";
import DataBase from "./pages/Database/DataBase";
import Storage from "./pages/Storage/Storage";
import Hosting from "./pages/Hosting/Hosting";
import Functions from "./pages/Functions/Functions";
import MachineLearning from "./pages/MachineLearning/MachineLearning";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Autenticacion />} />
        <Route path="database" element={<DataBase />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="functions" element={<Functions />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
