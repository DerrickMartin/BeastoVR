import { React } from "react";
import './NavbarStyles.css';

import '../../styles/globalstyles.css';

function Navbar() {

        return (
        <header className='app-header'>
            <div className='Logo'>
                <h1>
                    <a
                        className="App-Logo-Text"
                        href="https://www.tehbeasto.cloud"
                        target="_blank"
                        rel="noopener noreferrer">テベ-スと
                    </a>
                </h1>
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