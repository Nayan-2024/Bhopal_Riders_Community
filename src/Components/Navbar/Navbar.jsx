import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/index.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <section className="navbar_comp">
        <nav className="navbar">
          <NavLink to="/" className="logo">
            <i className="logo">
              <img src="./images/BRC_logo.png"></img>
              {/* <p>Bhopal Riding Community</p> */}
            </i>
          </NavLink>

          <div className="menu-icon" onClick={changeClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
            <li className="nav-items">
              <NavLink
                to="/"
                className="nav-NavLinks"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-items">
              <NavLink
                to="/About"
                className="nav-NavLinks"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>

            <li className="nav-items">
              <NavLink
                to="/Events"
                className="nav-NavLinks"
                onClick={closeMobileMenu}
              >
                Events
              </NavLink>
            </li>
          </ul>
          <div className="join_btn">
            <button className="join">
              {" "}
              <a href="'#"></a> Join Us
            </button>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
