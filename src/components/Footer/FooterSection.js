import { React } from "react";
import './FooterStyles.css';

import '../../styles/globalstyles.css';
import FooterLogo from '../../assets/Logo.png';
import twitch from '../../assets/pictures/Twitchpng.png';

function FooterSection() {

        return (
        <footer className='App-Footer'>
           <img src={FooterLogo} className="LogoIcon" alt="TehBeasto Logo" />
            <div className="bottom-links">
                <a href="www.tehbeasto.cloud">Home</a> 
                <a href="www.tehbeasto.cloud">Contact Us </a>
                <a href="www.tehbeasto.cloud">Worlds</a>
                <a href="www.tehbeasto.cloud">Clothes</a>
                <a href="www.tehbeasto.cloud">Social Media Icons</a>
                
            </div>
            <div className="copywriteSocialLinks">
            <p>Copyright © 2023 TehBeasto Inc. All rights reserved.</p>
              <div className="social-links">
                <img src={twitch} className="social-media" alt="TehBeasto's Twitch" />   
                <img src={twitch} className="social-media" alt="TehBeasto's Twitch" />  
                <img src={twitch} className="social-media" alt="TehBeasto's Twitch" /> 
              </div>          
            </div>
        </footer>
        )
}
export default FooterSection