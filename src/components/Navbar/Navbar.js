import { React, useState } from "react";
import './NavbarStyles.css';
// import hamburger menu
import Hamburger from 'hamburger-react'

import '../../styles/globalstyles.css';
import NavLogo from '../../assets/Logo.png';

function Navbar() {
    const [isOpen, setOpen] = useState(false)
        return (
        <header className='app-header'>
            <div className='Logo'>
                    <a
                        href="https://www.tehbeasto.cloud"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={NavLogo} className="LogoIcon" alt="TehBeasto Logo" />
                    </a>
            </div>
            <div className='header-links'>
                <div className="mobile-menu">
                <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <ul className="web-nav-links">
                <a
                    className="web-links"
                    href="https://www.tehbeasto.cloud"
                    target="_blank"
                    rel="noopener noreferrer">
                    
                        <li>Avatars</li>
                </a>
                <a
                    className="web-links"
                    href="https://www.tehbeasto.cloud"
                    target="_blank"
                    rel="noopener noreferrer">
                        <li>Worlds</li>
                </a>
                <a
                    className="web-links"
                    href="https://www.tehbeasto.cloud"
                    target="_blank"
                    rel="noopener noreferrer">
                    <li>Clothes</li>
                </a>
                </ul>
            </div>

        </header>
        )

}
 export default Navbar
 