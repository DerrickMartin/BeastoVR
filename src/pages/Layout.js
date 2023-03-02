import { React, } from "react";

import Navbar from '../components/Navbar/Navbar';
import FooterSection from "../components/Footer/FooterSection";
import { Outlet, } from "react-router-dom";

import './LayoutStyles.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  )
};
export default Layout;