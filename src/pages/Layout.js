import { React, } from "react";
import './NavbarStyles.css';
// import hamburger menu
import { Outlet, } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

export default Layout;