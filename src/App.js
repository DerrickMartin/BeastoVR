
import './App.css';

import './styles/globalstyles.css';
//Import componenets
import Navbar from './components/Navbar/Navbar'
Import TwitchSVG from './components/svgs/TwitchSvg'
//replace with VRChat 3d modal
import vrchatModal from './assets/pictures/tehbeasto.png';
import twitch from './assets/pictures/Twitchpng.png';
import vrchatTitle from './assets/vrchat_title.jpg';
import narutoTitle from './assets/naruto_title.jpg';
import fortniteTitle from './assets/fortnite_title.jpg';

import vrchat from './assets/vrchat_photo.png';
import fortnite from './assets/fortnite_photo.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="App-Body">
        <div className="hero-section">
          <div className="left-hero">
            <p className='hero-text-1'>
            Welcome,
            </p><p className='hero-text-2'>
            はじめまして
            </p>
          </div>
          <div className="right-hero">
            <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />
          </div> 
        </div>
        <div className="stream-section">
          <h2 className="twitch-youtube">
            Streaming in VR
          </h2>
          <div className="stream-photos">
            <div className="photo">
            <img src={vrchat} className="photo-image" alt="Vrchat Photo" />
            <img src={fortnite} className="photo-image" alt="Fortnite Photo" />
            </div>
          <p>Hey! Welcome everyone I'm Teh, nice of you to stop by. I am a streamer, youtuber and VR Enthusiast! Alot of content I like to play in VR and stream.</p>
          <p>I would love for you to stop by, and if you have an Oculus Headset, maybe you can join too!</p>
          <p>Here is a small list of titles I spend time on.</p> 
           <h3 className="stream-titles"> VrChat </h3>
            <img src={vrchatTitle} className="title-image" alt="Vrchat Title" />
           <h3 className="stream-titles"> Naruto Ultimate Ninja Storm 4 </h3>
            <img src={narutoTitle} className="title-image" alt="Naruto Title" />
           <h3 className="stream-titles"> Fortnite </h3>
            <img src={fortniteTitle} className="title-image" alt="Fortnite Title" />
        </div>
      </div>

      <footer className='App-Footer'>
        <p className="App-Logo-Text">テビ -スと</p>
        <p>Copyright © 2023 TehBeasto Inc. All rights reserved.</p>
        <div bottom-links>
          <a href="www.tehbeasto.cloud">Home</a> 
          <a href="www.tehbeasto.cloud">Contact Us </a>
          <a href="www.tehbeasto.cloud">Worlds</a>
          <a href="www.tehbeasto.cloud">Clothes</a>
          <a href="www.tehbeasto.cloud">Social Media Icons</a>
          <img src={twitch} className="social-media" alt="TehBeasto's Twitch" />
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
