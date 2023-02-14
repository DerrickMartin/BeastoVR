import { React } from "react";
import './NavbarStyles.css';

import '../../styles/globalstyles.css';
import NavLogo from '../../assets/Logo.png';

function Navbar() {

        return (
        <header className='app-header'>
            <div className='Logo'>
                <h1>
                    <a
                        className="App-Logo-Text"
                        href="https://www.tehbeasto.cloud"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={NavLogo} className="Logo" alt="TehBeasto Logo" />
                    </a>
                </h1>
            </div>
            <div className='header-links'>
                <p className="mobile-nav-links">menu</p>
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