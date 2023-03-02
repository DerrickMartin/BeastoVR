import '../styles/globalstyles.css';
import './HomeStyles.css';

//Import componenets
import HeroSection from '../components/HeroSection/HeroSection';
import StreamingSection from '../components/StreamingSection/StreamingSection';
import FooterSection from '../components/Footer/FooterSection';

const Home = () => {
    return (
    <div className="App">
      <div>
        <HeroSection />
        <StreamingSection />
      </div>
      <FooterSection />
     </div>
    )
};
export default Home;