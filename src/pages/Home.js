import '../styles/globalstyles.css';
import './HomeStyles.css';

//Import componenets
import HeroSection from '../components/HeroSection/HeroSection';
import StreamingSection from '../components/StreamingSection/StreamingSection';

const Home = () => {
    return (
    <div className="App">
        <HeroSection />
        <StreamingSection />
     </div>
    )
};
export default Home;