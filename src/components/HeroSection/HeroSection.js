import { React } from "react";
import './HeroSectionStyles.css';

import '../../styles/globalstyles.css';
//import vrchatModal from '../../assets/pictures/tehbeasto.png';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ponyo from './Modals3d/Ponyo.jsx'


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
            <Canvas>
                <ambientLight />
                    <Ponyo />
                <OrbitControls enableZoom={false} />
            </Canvas>

          </div> 
      
        </div>
        )

}
 export default HeroSection 
 //  <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />