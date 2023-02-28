import { React, } from "react";



// import hamburger menu
import { Outlet, } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
    <body className="layout">
      <Navbar />
      <Outlet />
    </body>  
    </>
  )
};

export default Layout;