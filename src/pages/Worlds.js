import Navbar from '../components/Navbar/Navbar';
import FooterSection from '../components/Footer/FooterSection'
import "./WorldsStyles.css";
import { Link } from "react-router-dom";

import NinjaArena from '../assets/worlds/ninja_arena.png';
import BattleArenaOfGods from '../assets/worlds/TournamentOfPower.png';

const Worlds = () => {
    return (
      <>
      <Navbar />
      <div className='WorldHero'>
        <p>Glad you stopped by! Here are some of my favorite sceneries I created so we can explore in VR!!</p>
        
        <p>Choose any of the following worlds below, each world comes packed with different skills and scenery. More worlds will be created in the future, with teh voted suggestions coming from my patreons. </p>

        <ul className='WorldsList'> 
        <Link to="/worlds/ninja-arena" className='Link-style'>
          <li className='Worlds'> 
            <div className='World_Card'>
              World #1
              <h3>Ninja Arena</h3>
              <span />
              <img src={NinjaArena}  alt="Ninja Stadium" style={{marginLeft: 5}}/>
              <p> Use your favorite elements to do some crazy moves! </p>
            </div>
          </li>
        </Link>
          <li className='Worlds'>
            <div className='World_Card'>
              World #2
              <h3>Hyperspace Chamber</h3>
              <span />
              <img src={BattleArenaOfGods} alt="Hyper Space" style={{marginLeft: 5}} />
            </div>
          </li>

          <li className='Worlds'>
            <div className='World_Card'>
              World #3
              <h3>Battle Arena of Gods</h3>
              <span />
              <img src={BattleArenaOfGods} alt="Batte Arena of Gods" style={{marginLeft: 10}}/>
            </div>
          </li>
        </ul>

        </div>
        <FooterSection />
      </>
    );
}
export default Worlds;
