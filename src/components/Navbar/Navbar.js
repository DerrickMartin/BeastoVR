import { React, useState } from "react";
import './NavbarStyles.css';
// import hamburger menu
import Hamburger from 'hamburger-react'

//modals
import MenuModal from '../Modal/menuModal'

import '../../styles/globalstyles.css';
import NavLogo from '../../assets/Logo.png';

import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen(!isOpen)
        }
        return (
        <header className='app-header'>
            <div className='Logo'>
                <Link to="/">
                    <img src={NavLogo} className="LogoIcon" alt="TehBeasto Logo" />
                </Link>
            </div>
            <div className='header-links'>
                <button onClick={toggleModal}
                className="mobile-menu">
                <Hamburger toggled={isOpen} toggle={setOpen} />

                {isOpen && MenuModal
                }

                </button>
                <ul className="web-nav-links">
                    <Link to="/worlds"
                    className="route-link">Worlds</Link>
                    <Link to="/clothing">Clothing</Link>
                    <Link to="/clothing">Avatars</Link>
                </ul>
            </div>
        </header>
        )

}
 