
import 'aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

import './NinjaArenaStyles.css';
 


const NinjaArena = () => {
  
    return (

    <div className='Ninja_Arena'>
     <Scene>
      <a-assets>
        <img id="chuunin_floor"
        src="https://cdn.glitch.global/c76a4fd7-d4e0-495b-a83b-9db94de330a2/chunin_floor.png?v=1680032695456" 
        crossorigin="anonymous" 
        alt="chuunin Floor" />
      </a-assets>
        <Entity id="floor" primitive="a-plane" rotation="-90 0 0" height="120" width="120" src="#chuunin_floor"/>
        <Entity id="ceiling" primitive="a-plane" rotation="90 0 0" height="120" width="120" src="#chuunin_floor" position="0, 35, 0"/>
        <Entity primitive="a-plane" rotation="0 0 0" height=".8" width="1.3" color="#000" position="0, 2.6 -2.3"/>
        <Entity primitive="a-light" type="ambient" color="#abbfbb" />
        <Entity primitive="a-light" type="point" intensity="1.5" position="2 4 4"/>
        <Entity text={{value: 'Welcome to Ninja Arena!', align: "center", color: "#FFC650", width:"2.5", height:"2.5"}} position={{x: 0, y:2.7, z: -2.29}}/>
        <Entity text={{value: 'Jutsus coming soon!', align: "center", color: "#FFC650", width:"2.5", height:"2.5"}} position={{x: 0, y:2.5, z: -2.29}}/>
        <Entity id="leftWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x: -60, y: 13, z: 0}}
          rotation={{x:0, y:90, z:0}}
          material={{color:"#804000"}}/>
        <Entity id="rightWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x:60, y:13, z:0}}
          rotation={{x:0, y:90, z:0}}
          material={{color:"#804000"}}/>
        <Entity id="backWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x:0, y: 13, z:60}}
          rotation={{x:0, y:0, z:0}}
          material={{color:"#804000"}}/>
        <Entity id="FrontWall"
          geometry={{primitive: 'box', width: 120, height:45, depth: 1}}
          position={{x:0, y: 13, z:-60}}
          rotation={{x:0, y:0, z:0}}
          material={{color:"#804000"}}/>
        <Entity id="leftPlatform"
          geometry={{primitive: 'box', width: 110, height:.5, depth: 6.5}}
          position={{x: -59, y: 10.8, z: -10.5}}
          rotation={{x:0, y: 90, z:0}}
          material={{color:"#4d0000"}}/>
        <Entity id="leftPlatformRail"
          geometry={{primitive: 'box', width: 110, height:3, depth: .7}}
          position={{x: -56, y: 13, z: -10.5}}
          rotation={{x:0, y:90, z:0}}
          material={{color:"#190000"}}/>
        <Entity id="rightPlatform"
          geometry={{primitive: 'box', width: 110, height:.5, depth: 6.5}}
          position={{x: 59, y: 10.8, z: -10.5}}
          rotation={{x:0, y: 90, z:0}}
          material={{color:"#4d0000"}}/>
        <Entity id="rightPlatformRail"
          geometry={{primitive: 'box', width: 110, height:3, depth: .7}}
          position={{x: 56, y: 13, z: -10.5}}
          rotation={{x:0, y:90, z:0}}
          material={{color:"#190000"}}/>
        <Entity id="cylinderright"
          geometry={{primitive: 'cylinder', radius:2, height: 16}}
          position={{x:59, y: 2.75, z: 13}}
          material={{color: "#FFC65D"}}/>
        <Entity id="cylinderleft"
          geometry={{primitive: 'cylinder', radius:2, height: 16}}
          position={{x:-59, y: 2.75, z: 13}}
          material={{color: "#FFC65D"}}/>
        <Entity primitive="a-camera" position={{x:0, y: 3, z: -1}} />
        <a-entity oculus-touch-controls="hand: left"></a-entity>
        <a-entity oculus-touch-controls="hand: right"></a-entity>
     </Scene>
     </div>
  
    )
  };

  export default NinjaArena;
