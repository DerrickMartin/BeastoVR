
import FooterSection from '../../components/Footer/FooterSection';
import Navbar from '../../components/Navbar/Navbar'

import 'aframe';
import 'aframe-particle-system-component';
import React from 'react';
import ReactDOM from 'react-dom';
 



const NinjaArena = () => {
  
    return (
    <>
    <Navbar />
    <div>
      <iframe>
    <a-scene environment info-message="htmlSrc: #messageText">
      <a-assets>
		<img id="chuunin_floor" src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/chunin_floor.png?v=1680032695456" crossorigin="anonymous" alt='ninja floor' />
		<img id="sky" src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/58mk3yrwugv81.png.webp?v=1680030707619" crossorigin="anonymous" alt='' />
		<img id="chuunin_walls" src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/gray-concrete-ceramix-vinyl-tile-crx-508v-64_400.jpg.webp?v=1680031812870" crossorigin="anonymous" alt="ninja walls" />
		<img id="hexagons" src="images/hexagons.png" crossorigin="anonymous" alt='hexagon'/>
        <a-asset-item id="messageText" src="message.html"></a-asset-item>
      </a-assets>
	    <a-plane
		    width="50" height="60"
		    position=" 0.00 0.40 0.00" 
		    rotation="-90 0 0" 
		    color="#888888" 
        material="src: #chuunin_floor; repeat:4 4; transparent: false; opacity: 1"
		    shadow="cast: true; receive: true">
	    </a-plane>
      <a-plane
        id="ceiling"
		    width="50" height="60"
		    position=" 0.00 15.40 0.00" 
		    rotation="90 0 0" 
		    color="#888888" 
        material="src: #chuunin_floor; repeat:5 5; transparent: true; opacity: 1"
		    shadow="cast: false; receive: true">
	    </a-plane>
      <a-plane
        id="bottomLeftPlatform"
		    width="4" height="60"
		    position=" -23.00 6.40 0.00" 
		    rotation="90 0 0" 
		    color="#888888" 
        material="src: #chuunin_floor; repeat:5 5; transparent: false; opacity: 1"
		    shadow="cast: false; receive: true">
	    </a-plane>
      <a-plane
        id="leftWall"
		    width="60" height="30"
		    position=" -25.00 0.40 0.00" 
		    rotation="0 90 0" 
		    color="#888888" 
        material="src: #chuunin_walls; repeat:2 2; transparent: false; opacity: 1"
		    shadow="cast: false; receive: true">
	    </a-plane>
      <a-plane
        id="bottomRightPlatform"
		    width="4" height="60"
		    position=" 23.00 6.40 0.00" 
		    rotation="90 0 0" 
		    color="#888888" 
        material="src: #chuunin_floor; repeat:5 5; transparent: false; opacity: 1"
		    shadow="cast: false; receive: true">
	    </a-plane>
      <a-plane
        id="rightWall"
		    width="60" height="30"
		    position=" 25.00 0.40 0.00" 
		    rotation="0 -90 0" 
		    color="#888888" 
        material="src: #chuunin_walls; repeat:2 2; transparent: false; opacity: 1"
		    shadow="cast: false; receive: true">
	    </a-plane>
      <a-plane
        id="frontWall"
		    width="50" height="30"
		    position=" 0.00 0.50 -30.00" 
		    rotation="0 0 0" 
		    color="#888888" 
        material="src: #chuunin_walls; repeat:1 1; transparent: fals; opacity: 1"
		    shadow="cast: false; receive: true">
	    </a-plane>
      <a-plane
        id="backWall"
		    width="50" height="30"
		    position=" 0.00 0.40 30.00" 
		    rotation="-180 0 0" 
		    color="#888888" 
        material="src: #chuunin_walls; repeat:1 ; transparent: false; opacity: 1"
		    shadow="cast: false; receive: true">
	    </a-plane>
      <a-entity
        id="boxGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: box; height: 0.6; width: 0.6; depth: 0.6"
        material="color: #ff4b5c"
        size-change
        scale="0.5 0.5 0.5"
      ></a-entity>
       <a-entity
        id="torusGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: torus; radius: 0.4; radius-tubular: 0.06"
        material="color: #d2e603"
        size-change
        visible="false"
        scale="0.5 0.5 0.5"
      ></a-entity>
       <a-entity
        id="sphereGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: sphere; radius: 0.6;"
        material="color: #fcdab7"
        size-change
        visible="false"
        scale="0.5 0.5 0.5"
      ></a-entity>
      <a-entity id="menu" menu position="0 1.5 -0.5" rotation="-45 0 0" event-manager>
        <a-entity slider position="0 0.10 0"></a-entity>
        <a-entity id="sphereButton" button="label: sphere" position="-0.15 0 0"></a-entity>
        <a-entity id="boxButton" button="label: box" position="0 0 0"></a-entity>
        <a-entity id="torusButton"button="label: torus" position="0.15 0 0"></a-entity>
        <a-entity id="darkModeButton" button="label: Dark Mode; width: 0.20; toggable: true" position="0 -0.10 0"></a-entity>
      </a-entity>
      <a-entity hand-tracking-controls="hand: left"></a-entity>
      <a-entity hand-tracking-controls="hand: right"></a-entity>
       <a-light type="directional" light="castShadow:true;" position="0 1 1" intensity=".6" shdadow-camera-automatic="#objects"></a-light>
    </a-scene>
    </iframe>
    </div>
    <FooterSection />
    </>
    )
  };

  export default NinjaArena;

  ReactDOM.render(<NinjaArena/>, document.querySelector('#sceneContainer'));