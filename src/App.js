import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("Chalo Code!!");

  const cambiarNombre = (e) => {
    const value = e.target.value;
    console.log(value);
    setNombre(value);
  };

  const guardarClick = () => {
    console.log("Esta es mi estdo local: ", nombre);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />       
      </header>
      <h1>Mi formulario</h1>
      <label>Nombre: </label>
      <input
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={cambiarNombre}
      ></input>
      <button onClick={guardarClick}>Guardar</button>
    </div>
  );
}

export default App;
