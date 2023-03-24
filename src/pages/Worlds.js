import Navbar from '../components/Navbar/Navbar';
import "./WorldsStyles.css";

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
          <li>World 1</li>
          <li>World 2</li>
          <li>World 3</li>
        </ul>



        </div>
      </div>
      </>
    );
}
export default Worlds;
