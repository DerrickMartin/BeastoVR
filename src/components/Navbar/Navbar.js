import { React } from "react";
import './NavbarStyles.css';


function Navbar() {

        return (
        <header className='app-header'>
            <div className='Logo'>
                <a
                  className="App-Logo-Text"
                  href="https://www.tehbeasto.cloud"
                  target="_blank"
                  rel="noopener noreferrer">てベ-スと
                </a>
            </div>
            <div className='header-links'>
                <ul className="web-nav-links">
                    <li>Avatars</li>
                    <li>Worlds</li>
                    <li>Clothes</li>
                </ul>
            </div>

        </header>
        )

}
 export default Navbar