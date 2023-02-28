import '../styles/globalstyles.css';
import 'HomeStyles.css';

//Import componenets
import HeroSection from '../components/HeroSection/HeroSection';
import FooterSection from '../components/Footer/FooterSection';
//replace with VRChat 3d modal
import vrchatTitle from '../assets/vrchat_title.jpg';
import narutoTitle from '../assets/naruto_title.jpg';
import fortniteTitle from '../assets/fortnite_title.jpg';

import vrchat from '../assets/vrchat_photo.png';
import fortnite from '../assets/fortnite_photo.png';

const Home = () => {
    return (
        <div className="App">
        <body className="App-Body">
          <HeroSection />
          <div className="stream-section">
            <h2 className="twitch-youtube">
              Streaming in VR
            </h2>
            <div className="stream-photos">
              <div className="photo">
              <img src={vrchat} className="photo-image" alt="Vrchat" />
              <img src={fortnite} className="photo-image" alt="Fortnite" />
              <img src={vrchat} className="photo-image-web" alt="Vrchat" />
              </div>
            <p>Hey! Welcome everyone I'm Teh, nice of you to stop by. I am a streamer, youtuber and VR Enthusiast! A lot of content I like to play is in VR and stream.</p>
            <p>I would love for you to stop by and if you have an Oculus Headset, maybe you can join too!</p>
            <p>Here is a small list of titles I spend time on.</p> 
             <h3 className="stream-titles"> VrChat </h3>
              <img src={vrchatTitle} className="title-image" alt="Vrchat Title" />
             <h3 className="stream-titles"> Naruto Ultimate Ninja Storm 4 </h3>
              <img src={narutoTitle} className="title-image" alt="Naruto Title" />
             <h3 className="stream-titles"> Fortnite </h3>
              <img src={fortniteTitle} className="title-image" alt="Fortnite Title" />
          </div>
        </div>
        <FooterSection />
      </body>
     </div>
    )
  };
  
  export default Home;