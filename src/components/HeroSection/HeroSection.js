import { React } from "react";
import './HeroSectionStyles.css';
import '../../styles/globalstyles.css';
//Three JS and GLTF Model
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ponyo from '../Modals3D/Ponyo'

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
              <pointLight position={[0, 12, 12]} intensity={1.2} />
              <Ponyo />
              <OrbitControls enableZoom={false}  autoRotate={true} rotateSpeed={0.5}/>
            </Canvas>
          </div> 
        </div>
    )
}
 export default HeroSection 
