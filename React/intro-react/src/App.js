import logo from './logo.svg';
import Saludo from "./components/saludo";
import './App.css';
import { useState } from 'react';



function App() {

  const [texto, setTexto] = useState("Mi Estado")


  // const persona = {
  //   nombre: 'Fernando',
  //   edad: 25
  // }

  const [persona, setPersona] = useState({
      nombre: 'Fernando',
      edad: 25
    })
    console.log(persona)

  
  const cambioNombre = () => {
    const nuevoNombre = prompt('Cual es tu nombre?')
    if (nuevoNombre)
      // setPersona({...persona, nombre: nuevoNombre})
      setPersona((val) => {
        console.log("dentro del callback veo el valor anterior del estado", val)
        // 
        return {
          ...persona,
          nombre: nuevoNombre
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{texto}</p>

        <Saludo persona={persona} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludo algo={true} />
         
        <br/>
        <br/>
        <button onClick={cambioNombre}>Cambiar nombre</button>        
      </header>
    </div>
  );
}

export default App;
