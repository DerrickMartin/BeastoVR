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
          <p>Im excited to preset to you the location to join where tons of battles for glory and power will be broadcasted! </p>

          <p>Here you will be able to join the game world and enhance your immersion when the tournaments commece.</p>

          <p>With 2 of the most well known animes releasing sequels to games that have long thought to be in retirement!</p>

          <p>We will be hosting tournaments here where the Victors can be Honored for their talent and skills along with recognition.</p>

          <p>The Two games will be having Monthly Tournaments I hope to see you here with us after their release dates in 2023.</p>
        </div>
      </div>
      <FooterSection />
      </>
    );
}
export default Tournament;
