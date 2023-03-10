import { React, useState, useRef } from "react";
import './NavbarStyles.css';
import '../../styles/globalstyles.css';
import NavLogo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import DarkMode from '../DarkMode/DarkMode';


export default function Navbar() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav" );
    };
    const [isOpen, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen(!isOpen)
    }
  return (
        <>
        <nav className='App-header'>
          <Link to="/" className='Link-style'>
            <img src={NavLogo} className="App-logo" alt="logo" />
          </Link>  
          <ul id="nav" ref={navRef}>
        <li className='Link-style-parent'>
          <Link to="/avatar" className='Link-style'>
            <p className='nav-routes'>
              Avatar
            </p>
          </Link>
        </li>

        <li className='Link-style-parent'>
          <Link to="/clothing" className='Link-style'>
            <p className='nav-routes'>
              Clothing
            </p>
          </Link>
        </li>

        <li className='Link-style-parent'>
          <Link to="/worlds" className='Link-style'>
            <p className='nav-routes'>
              Worlds
            </p>
          </Link>
        </li>
        <DarkMode />

        <button
        className="nav-btn nav-close-btn"
				onClick={showNavbar}>
				<FaTimes style={{ width: 30, height: 30}} />
        </button>

        </ul>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars style={{ width: 30, height: 30, margin: 10}} />
			</button>
       </nav>
      </>
    )
}   