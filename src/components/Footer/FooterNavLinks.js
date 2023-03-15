import { React, useRef} from 'react';
import { Link } from "react-router-dom";
import FooterLogo from '../../assets/Logo.png';
import './FooterNavLinkStyles.css';

export default function FooterNavLinks() {
    const navRef = useRef();
    return (
    <>
          <Link to="/" className='Link-style'>
            <img src={FooterLogo} className="LogoIcon" alt="TehBeasto Logo" />
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
            </ul>
    </>
    );
}