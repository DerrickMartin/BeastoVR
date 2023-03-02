import FooterSection from '../components/Footer/FooterSection';
import './AvatarsStyles.css'
const Avatars = () => {
    return (
    <div className='avatar-gallery'>
      <h1>Jump in and check out some cool avatars!</h1>
      <iframe title="Avatar Gallery" name="xmx-loa-sks" src="https://framevr.io/xmx-loa-sks" 
        height="100%" 
        width="100%"
        allow="camera;
        microphone;
        display-capture;
        xr-spatial-tracking" />
      <FooterSection />
    </div>
    )
};
  
export default Avatars;