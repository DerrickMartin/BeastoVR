import FooterSection from '../../components/Footer/FooterSection';
import Navbar from '../../components/Navbar/Navbar'
import 'aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
 


const NinjaArena = () => {
  
    return (
    <>
    <Navbar />
    <div>
     <Scene>
      <a-assets>
        <img id="chuunin_floor"
        src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/chunin_floor.png?v=1680032695456" 
        crossorigin="anonymous" 
        alt="chuunin Floor" />
      </a-assets>
         <Entity primitive="a-plane" rotation="-90 0 0" height="1000" width="1000" src="#chuunin_floor"/>
            <Entity primitive="a-light" type="ambient" color="#abbfbb" />
            <Entity primitive="a-light" type="point" intensity="1.5" position="2 4 4"/>
            <Entity text={{value: 'Welcome Ninja!', align: "center", color: "#FFC650", width:"2.5", height:"2.5"}} position={{x: 0, y:13.5, z: -4}}/>

            <Entity id="plank"
            geometry={{primitive: 'box', width: 22, height:0.3, depth: 1}}
            position={{x: -14, y: 10.8, z: -3.5}}
            material={{color:"#804000"}}/>
            <Entity id="cylinderStart"
              geometry={{primitive: 'cylinder', radius:5, height: 20}}
              position={{x:1, y: 0.75, z: -3}}
              material={{color: "#FFC65D"}}/>
              <Entity id="cylinderStart"
              geometry={{primitive: 'cylinder', radius:5, height: 20}}
              position={{x:-30, y: 0.75, z: -3}}
              material={{color: "#FFC65D"}}/>
          <Entity primitive="a-camera" position={{x:0, y: 11.6, z: -3}} />
     </Scene>
    </div>
    <FooterSection />
    </>
    )
  };

  export default NinjaArena;
