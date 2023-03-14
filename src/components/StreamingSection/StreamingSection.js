import { React } from "react";
import './StreamingSectionStyles.css';
import '../../styles/globalstyles.css';
//Assets
import vrchatTitle from '../../assets/vrchat_title.jpg';
import narutoTitle from '../../assets/naruto_title.jpg';
import fortniteTitle from '../../assets/fortnite_title.jpg';
import vrchat from '../../assets/vrchat.png';

function StreamingSection() {
        return (
          <div className="stream-section">
            <h2 className="twitch-youtube">
              Streaming in VR
            </h2>
            <div className="stream-photos">
              <div className="photo">
                <img src={vrchat} className="photo-image" alt="Vrchat" />
                <img src={vrchat} className="photo-image" alt="Fortnite" />
                <img src={vrchat} className="photo-image-web" alt="Vrchat" />
              </div>
              <p>Hey! Welcome everyone I'm Teh, nice of you to stop by. I am a streamer, youtuber and VR Enthusiast! A lot of content I like to play is in VR and stream.</p>
              <p>I would love for you to stop by and if you have an Oculus Headset, maybe you can join too!</p>
              <p>Here is a small list of titles I spend time on.</p> 
              <h3> VrChat </h3>
              <img src={vrchatTitle} className="title-image" alt="Vrchat Title" />
              <h3> Naruto Ultimate Ninja Storm 4 </h3>
              <img src={narutoTitle} className="title-image" alt="Naruto Title" />
              <h3> Fortnite </h3>
              <img src={fortniteTitle} className="title-image" alt="Fortnite Title" />
            </div>
          </div>
        )
}
export default StreamingSection