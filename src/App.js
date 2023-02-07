
import './App.css';

//Import componenets
import Navbar from './components/Navbar/Navbar'
//replace with VRChat 3d modal

import vrchatModal from './assets/pictures/TehBeastoLayingDown.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="App-Body">
        <div className="hero-section">
          <div className="left-hero" >
            <p>
            Welcome,
            はじめまして
            </p>
          </div>
          <div className="right-hero">
            <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />
          </div> 
        </div>
        <div className='inline-links'>
          <ul>
            <li> hey </li>
            <li> hey </li>
            <li> hey </li>
          </ul>
        </div>

      <footer className='App-Footer'>
        <p className="App-Logo-Text">てベ-スと</p>
        <p>Copyright © 2023 TehBeasto Inc. All rights reserved.</p>
        <div bottom-links>
          <a href="www.tehbeasto.cloud">Home</a> 
          <a href="www.tehbeasto.cloud">Contact Us </a>
          <a href="www.tehbeasto.cloud">Worlds</a>
          <a href="www.tehbeasto.cloud">Clothes</a>
          <a href="www.tehbeasto.cloud">Social Media Icons</a>
        </div>
      </footer>

    </body>
   </div>
  );
}

export default App;



/*      
import logo from './logo.svg';

Default image
<img src={logo} className="App-logo" alt="logo" />

Css styling (default)
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

*/