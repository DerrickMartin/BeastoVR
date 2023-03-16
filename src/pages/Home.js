//Import componenets
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import StreamingSection from '../components/StreamingSection/StreamingSection';
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