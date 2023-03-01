import { React, } from "react";

import { Outlet, } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

import './LayoutStyles.css'

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