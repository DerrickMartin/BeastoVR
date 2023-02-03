import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome, 
          はじめまして
        </p>
        <a
          className="App-link"
          href="https://www.tehbeasto.cloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teh Beasto
        </a>
      </header>
    </div>
  );
}

export default App;
