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
    <div className="mi_formulario__container">
      <div className="mi_formulario__header">
        <h1 className="mi_formulario__title">Mi formulario</h1>
      </div>

      <div className="mi_formulario__body">
        <div className="mi_formulario__form">
          <label className="mi_formulario__label">Nombre: </label>
          <div className="mi_formulario__input-icon">
            <i className="fa fa-user mi_formulario__icon" aria-hidden="true" />
            <input
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={cambiarNombre}
              className="mi_formulario__input"
            ></input>
          </div>
          <button onClick={guardarClick} className="mi_formulario__button">
            Guardar
          </button>
        </div>
      </div>

      <div className="mi_formulario__footer">
        <div className="mi_formulario__group">
          <span className="mi_formulario__label">
            Este es mi primer formulario con CSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
