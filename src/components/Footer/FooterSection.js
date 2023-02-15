import { React } from "react";
import './FooterStyles.css';

import '../../styles/globalstyles.css';
import FooterLogo from '../../assets/Logo.png';
import twitch from '../../assets/pictures/Twitchpng.png';
import tiktoc from '../../assets/pictures/3dtiktoc.png';
import youtube from '../../assets/pictures/3dyoutube.png';
import twitch3d from '../../assets/pictures/3dtwitch.png';

function FooterSection() {

        return (
        <footer className='App-Footer'>
          <div className="col1" >
           <img src={FooterLogo} className="LogoIcon" alt="TehBeasto Logo" />
            <div className="bottom-links">
                <a className="footerNav" href="www.tehbeasto.cloud">Home</a> 
                <a className="footerNav" href="www.tehbeasto.cloud">Contact Us </a>
                <a className="footerNav" href="www.tehbeasto.cloud">Worlds</a>
                <a className="footerNav" href="www.tehbeasto.cloud">Clothes</a>                
            </div>
          </div>
            <div className="copywriteSocialLinks">
              <p>Copyright © 2023 TehBeasto Inc. All rights reserved.</p>        
            </div>
            <div className="social-links">
                <img src={twitch} className="social-media" alt="TehBeasto's Twitch" />  
                <img src={twitch3d} className="social-media" alt="TehBeasto's Twitch" /> 
                <img src={tiktoc} className="social-media" alt="TehBeasto's Twitch" />  
                <img src={youtube} className="social-media" alt="TehBeasto's Twitch" /> 
              </div> 
        </footer>
        )
}
export default FooterSection