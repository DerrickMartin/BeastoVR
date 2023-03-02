import { React, } from "react";

import Navbar from '../components/Navbar/Navbar';
import { Outlet, } from "react-router-dom";

import './LayoutStyles.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};
export default Layout;