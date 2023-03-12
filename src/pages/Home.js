import '../styles/globalstyles.css';
import './HomeStyles.css';

//Import componenets
import HeroSection from '../components/HeroSection/HeroSection';
import StreamingSection from '../components/StreamingSection/StreamingSection';
import Navbar from '../components/Navbar/Navbar';
import FooterSection from '../components/Footer/FooterSection';

const Home = () => {
    return (
        <>
        <Navbar />
        <HeroSection />
        <StreamingSection />
        <FooterSection />
     </>
    )
};
export default Home;