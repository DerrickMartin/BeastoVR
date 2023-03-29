import Navbar from '../components/Navbar/Navbar';
import FooterSection from '../components/Footer/FooterSection';

import './TournamentStyles.css';

const Tournament = () => {
    return (
      <>
      <Navbar />
      <div id="SceneContainer">
        <h3>🏆 Fight for Glory, Honor, and Respect! 🏆</h3>

        <div style={{padding: 5}}>
          <p>I am eager to preset to you the location to join where tons of battles for glory, fame, and dominace will be broadcasted! </p>

          <p>Here you will be able to join the game world and enhance your immersion when the tournaments commece.</p>

          <p>With the release of successors to 2 of the most well known animes releasing sequels to games that have long thought to be in retirement! </p>

          <p>We will be hosting tournaments here, where the victors will be honored for their talent and skills. </p>

          <p>After the two games release in 2023, I hope to see you here with us for our monthly tournaments.</p>
        </div>
      </div>
      <FooterSection />
      </>
    );
}
export default Tournament;
