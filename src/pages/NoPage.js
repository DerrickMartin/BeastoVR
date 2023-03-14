import Navbar from '../components/Navbar/Navbar';
import errorpage from '../assets/404.jpg';
import FooterSection from '../components/Footer/FooterSection';

const NoPage = () => {
   
    return (
      <>
        <Navbar />
        <img src={errorpage} style={{width: '100%', height: '100%'}} alt="Page not available" />
        <FooterSection />
      </>
     );
  };
export default NoPage;