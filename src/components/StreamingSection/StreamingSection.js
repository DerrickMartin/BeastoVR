import { React } from "react";
import './StreamingSectionStyles.css';
//Assets
import vrchatTitle from '../../assets/vrchat_title.jpg';
import narutoTitle from '../../assets/naruto_title.jpg';
import fortniteTitle from '../../assets/fortnite_title.jpg';
import vrchat from '../../assets/vrchat.png';
import fortnite from '../../assets/fortnite_pic.png';
import twitchBubbles from '../../assets/twitch_bg.png';

function StreamingSection() {
        return (
          <div className="stream-section">
            <div className="twitch-youtube">
            <img src={twitchBubbles} className="twitchBubble" alt="Twitch Bubbles" />
              <h2 className="Headline">
                Streaming in VR
              </h2>
            </div>
            <div className="stream-photos">
              <div className="photo">
                <img src={vrchat} className="photo-image" alt="Vrchat" />
                <img src={fortnite} className="photo-image" alt="Fortnite" />
                <img src={vrchat} className="photo-image-web" alt="Vrchat" />
              </div>

              <div className="streamer-info">
              <p>Hey! Welcome everyone, I`m The. It`s nice of you to stop by.</p> 
              
              <p>I like to play a lot of content in VR and stream.</p>
              
              <p>I would love for you to stop by. If you have an Oculus Headset, Maybe you can join too.</p>
              
              <p>Here is a small list of titles I spend time on.</p> 
              <h3 className="titles"> VrChat </h3>
              <img src={vrchatTitle} className="title-image" alt="Vrchat Title" />
              <h3 className="titles"> Naruto Ultimate Ninja Storm 4 </h3>
              <img src={narutoTitle} className="title-image" alt="Naruto Title" />
              <h3 className="titles"> Fortnite </h3>
              <img src={fortniteTitle} className="title-image" alt="Fortnite Title" />
              </div>
              
            </div>
          </div>
        )
}
export default StreamingSection