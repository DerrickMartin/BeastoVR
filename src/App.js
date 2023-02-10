
import './App.css';

import './styles/globalstyles.css';
//Import componenets
import Navbar from './components/Navbar/Navbar'
//replace with VRChat 3d modal
import vrchatModal from './assets/pictures/tehbeasto.png'
import fortniteTitle from './assets/fortnite_title.jpeg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="App-Body">
        <div className="hero-section">
          <div className="left-hero">
            <p>
            Welcome,
            はじめまして
            </p>
          </div>
          <div className="right-hero">
            <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />
          </div> 
        </div>
        <div className="stream-section">
          <h2 className="twitch-youtube">
            Steaming in VR
          </h2>
          <div className="stream-photos">
            <div className="photo">
              <p> Insert Photo </p> 
              <p> Insert Photo </p>
            </div>
          <p>Hey! Welcome everyone I'm Teh, nice of you to stop by. I am a streamer, youtuber and VR Enthusiast! Alot of content I like to play in VR and stream.</p>
          <p>I would love for you to stop by, and if you have an Oculus Headset, maybe you can join too!</p>
          <p>Here is a small list of titles I spend time on.</p> 
           <h3 className="stream-titles"> VrChat </h3>
            <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />
           <h3 className="stream-titles"> Naruto Ultimate Ninja Storm 4 </h3>
            <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />
           <h3 className="stream-titles"> Fortnite </h3>
            <img src={fortniteTitle} className="App-logo" alt="Fortnite Title" />
        </div>
      </div>

      <footer className='App-Footer'>
        <p className="App-Logo-Text">テベ-スと</p>
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
