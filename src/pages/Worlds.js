import Navbar from '../components/Navbar/Navbar';
import "./WorldsStyles.css";

import NinjaStadium from '../assets/worlds/RealisticHyperbolicTimeChamber.jpg';
import HyperSpace from '../assets/worlds/HyperbolicTimeChamber.webp';
import BattleArenaOfGods from '../assets/worlds/TournamentOfPower.webp';

const Worlds = () => {
    return (
      <>
      <Navbar />
      <div id="sceneContainer">
        <div className='WorldHero'>
        <p>Glad you stopped by! Here are some of my favorite sceneries I created so we can explore in VR!!</p>
        
        <p>Choose any of the following worlds below, more worlds will be created in the future, with the voted suggestions 
          coming from my patreons </p>

        <p> Patreon Button</p>

        <ul> 
          <li className='Worlds'> 
            <img src={NinjaStadium}  alt="Ninja Stadium" />
            World 1
          </li>
          <li className='Worlds'>
            <img src={HyperSpace} alt="Hyper Space" />
            World 2
          </li>
          <li className='Worlds'>
            <img src={BattleArenaOfGods} alt="Batte Arena of Gods" />
            World 3
          </li>
        </ul>

        </div>
      </div>
      </>
    );
}
export default Worlds;
