import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-Logo-Text"> てベ-スと</p>
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
