//import iframe from 'react-iframe'

import './ClothingStyles.css'
const Clothing = () => {
    return (
    <div className='avatar-gallery'>
    <h1>Jump in and check out some cool avatars! </h1>

    <iframe title="Avatar Gallery" name="xmx-loa-sks" src="https://framevr.io/xmx-loa-sks" 
    height="100%" width="100%"
     allow="camera;microphone;display-capture;xr-spatial-tracking" 
     scrolling="no" frameBorder="0" />
     
     </div>
    )
  };
  
  export default Clothing;