import Navbar from '../components/Navbar/Navbar';
import FooterSection from '../components/Footer/FooterSection'
import "./WorldsStyles.css";

import BattleArenaOfGods from '../assets/worlds/TournamentOfPower.png';

const Worlds = () => {
    return (
      <>
      <Navbar />
      <div className='WorldHero'>
        <p>Glad you stopped by! Here are some of my favorite sceneries I created so we can explore in VR!!</p>
        
        <p>Choose any of the following worlds below, each world comes packed with diffrent skills and scenery, more worlds will be created in the future, with the voted suggestions 
          coming from my patreons </p>

        <ul className='WorldsList'> 
          <li className='Worlds'> 
            <div className='World_Card'>
              World #1
              <h3>Ninja Arena</h3>
              <span />
              <img src={BattleArenaOfGods}  alt="Ninja Stadium" />
              <p> Use your favorite elements to do some crazy moves! </p>
            </div>
          </li>

          <li className='Worlds'>
            <div className='World_Card'>
              World #2
              <h3>Hyperspace Chamber</h3>
              <span />
              <img src={BattleArenaOfGods} alt="Hyper Space" />
            </div>
          </li>

          <li className='Worlds'>
            <div className='World_Card'>
              World #3
              <h3>Battle Arena of Gods</h3>
              <span />
              <img src={BattleArenaOfGods} alt="Batte Arena of Gods" />
            </div>
          </li>
        </ul>

        </div>
        <FooterSection />
      </>
    );
}
export default Worlds;
