import { React} from "react";
import './FooterStyles.css';

import '../../styles/globalstyles.css';
import tiktoc from '../../assets/pictures/3dtiktoc.png';
import youtube from '../../assets/pictures/3dyoutube.png';
import twitch from '../../assets/pictures/3dtwitch.png';
import FooterNavLinkStyles from './FooterNavLink'

function FooterSection() {
        return (
        <div className='App-Footer'>
          <div className="col1" >
            <FooterNavLinkStyles />
          </div>
            <div className="copywrite">
              <p>Copyright © 2023 TehBeasto Inc. All rights reserved.</p>        
            </div>
            <div className="social-links"> 
            <a href="https://www.twitch.tv/teh_beasto">
                <img src={twitch} className="social-media" alt="TehBeasto's Twitch" />
            </a> 
            <a href="https://www.youtube.com/channel/UCfqS9w3TJ20T4fBFFhpumjQ">
                <img src={tiktoc} className="social-media" alt="TehBeasto's TikToc" /> 
            </a>
            <a href="https://www.youtube.com/channel/UCfqS9w3TJ20T4fBFFhpumjQ">     
                <img src={youtube} className="social-media" alt="TehBeasto's Youtube" /> 
            </a>
              </div> 
        </div>
        )
}
export default FooterSection