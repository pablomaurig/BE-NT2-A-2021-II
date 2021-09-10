import logo from './logo.svg';
import './App.css';

function App() {
  const nombre = 'Daniel'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          (nombre === 'Daniel') ?
          <p>
          Hola equipo de NT2, mi nombre es {nombre}
          </p>
          :
          <p>
          Hola equipo de NT2, no tengo nombre
          </p>
        }
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
