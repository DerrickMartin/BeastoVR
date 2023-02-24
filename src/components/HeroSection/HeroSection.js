import { React } from "react";
import './HeroSectionStyles.css';

import '../../styles/globalstyles.css';
import vrchatModal from '../../assets/pictures/tehbeasto.png';



function HeroSection() {

        return (
       <div className="hero-section">
          <div className="left-hero">
            <p className='hero-text-1'>
            Welcome,
            </p>
            <p className='hero-text-2'>
            はじめまして
            </p>
            
          </div>
          <div className="right-hero">
            <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />
          </div> 
      
        </div>
        )

}
 export default HeroSection