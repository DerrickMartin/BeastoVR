import { React, } from "react";

import { Outlet, } from "react-router-dom";

import './LayoutStyles.css'

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
};
export default Layout;