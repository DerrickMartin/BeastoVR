import 'aframe';
import React, { Component } from 'react';

import "WorldStyles.css";

class Worlds extends Component {
  render () {
    return (
      <div className='world1'>
      <a-scene  sphere-collider="objects: a-box;" super-hands id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc">
        <a-box 
      grabbable
      position="-1 0.5 -3" 
      rotation="0 45 0" 
      color="#4CC3D9" />
    <a-sphere 
      grabbable
      position="0 1.25 -5" 
      radius="1.25" 
      color="#EF2D5E" />
    <a-cylinder 
      grabbable
      position="1 0.75 -3" 
      radius="0.5" 
      height="1.5" 
      color="#FFC65D" />
    <a-plane 
      position="0 0 -4" 
      rotation="-90 0 0" 
      width="10" 
      height="10" 
      color="#7BC8A4" />
    <a-dodecahedron 
      grabbable
      color="#FF926B" 
      radius="5" 
      position="0 -1 -30"></a-dodecahedron>
    <a-sky src={require('../assets/skybox/cloudyNight.jpg')} /></a-scene>
      </div>
    );
  }
}

export default Worlds;