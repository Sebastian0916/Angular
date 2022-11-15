import "./App.css";
import EjercicioComponent from "./components/EjercicioComponent";
function App() {

  const fecha = new Date()
  const añoActual = fecha.getFullYear()
  return (
    <div className="App">

    <EjercicioComponent año={añoActual}/>
      
    </div>
  );
}

export default App;
