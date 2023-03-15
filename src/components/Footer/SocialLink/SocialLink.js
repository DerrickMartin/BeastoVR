import tiktoc from '../../../assets/pictures/3dtiktoc.png';
import youtube from '../../../assets/pictures/3dyoutube.png';
import twitch from '../../../assets/pictures/3dtwitch.png'
import './SocialLinkStyles.css';
export default function SocialLink() {

    return (
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
    )
}