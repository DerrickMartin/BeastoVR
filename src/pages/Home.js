import '../styles/globalstyles.css';
import './HomeStyles.css';

//Import componenets
import HeroSection from '../components/HeroSection/HeroSection';
import StreamingSection from '../components/StreamingSection/StreamingSection';
import FooterSection from '../components/Footer/FooterSection';

const Home = () => {
    return (
    <div className="App">
      <body className="App-Body">
        <HeroSection />
        <StreamingSection />
        <FooterSection />
      </body>
     </div>
    )
};
export default Home;