import errorpage from '../assets/404.jpg';
import FooterSection from '../components/Footer/FooterSection';
import './NoPageStyles.css';

const NoPage = () => {
   
    return (
      <>
        <Navbar />
        <img src={errorpage} className="photo-image" alt="Page not available" />
        <FooterSection />
      </>
     );
  };
export default NoPage;