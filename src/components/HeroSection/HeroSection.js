import { React } from "react";
import './HeroSectionStyles.css';

import '../../styles/globalstyles.css';
import vrchatModal from '../../assets/pictures/tehbeasto.png';

import { Routes, Route, Outlet, Link } from "react-router-dom";


function HeroSection() {

        return (
       <div className="hero-section">
          <div className="left-hero">
            <p className='hero-text-1'>
            Welcome,
            </p>
            <p className='hero-text-2'>
            はじめまして
            </p>
            
          </div>
          <div className="right-hero">
            <img src={vrchatModal} className="App-logo" alt="TehBeasto Modal" />
          </div> 
          <div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Clothing />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
        </div>
        )

}
 export default HeroSection



function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clothing"></Link>
          </li>
          <li>
            <Link to="/worlds">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Clothing() {
  return (
    <div>
      <h2>Clothing</h2>
    </div>
  );
}

function Worlds() {
  return (
    <div>
      <h2>Worlds</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}