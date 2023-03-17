import { React, useState, useRef } from "react";
import './NavbarStyles.css';
import NavLogo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import DarkMode from '../DarkMode/DarkMode';
import { FaBars, FaTimes } from "react-icons/fa";

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
            <img src={NavLogo} className="Logo" alt="logo" />
          </Link>  
          <ul id="nav" ref={navRef}>
            <li className='Link-style-parent'>
              <Link to="/avatars" className='Link-style'>
                <p className='nav-routes'>
                  Avatars
                </p>
              </Link>
            </li>

            <li className='Link-style-parent'>
              <Link to="/tournament" className='Link-style'>
                <p className='nav-routes'>
                  Tournament
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