import { React } from "react";
import './FooterStyles.css';

import '../../styles/globalstyles.css';
import TwitchSVG from '../svgs/TwitchSvg';

function FooterSection() {

        return (
        <footer className='App-Footer'>
          <p className="App-Logo-Text">テビ -スと</p>
          <p>Copyright © 2023 TehBeasto Inc. All rights reserved.</p>
            <div className="bottom-links">
                <a href="www.tehbeasto.cloud">Home</a> 
                <a href="www.tehbeasto.cloud">Contact Us </a>
                <a href="www.tehbeasto.cloud">Worlds</a>
                <a href="www.tehbeasto.cloud">Clothes</a>
                <a href="www.tehbeasto.cloud">Social Media Icons</a>
                <img src={twitch} className="social-media" alt="TehBeasto's Twitch" />
            </div>
        </footer>
        )
}
export default FooterSection