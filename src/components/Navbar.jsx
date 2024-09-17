import React, { useState } from "react";
import { Link } from "react-router-dom";
import dsa_image from "../images/dsa.png";
import "./Navbar.css";
function Navbar() {
  const [mobileview, setMobileview] = useState(false);

  const openMenu = () => {
    setMobileview(true);
  };
  const closeNav = () => {
    setMobileview(false);
  };
  return (
    <>
      <nav>
        <div className="container_nav">
          <div className="frame_nav">
            <img src={dsa_image} id="image1" alt="Data Visualizer Logo" />
            <h2>Data Structure Visualizer</h2>
          </div>
          <div className="frame2_nav">
            <ul>
              <Link className="linkTag" to="/">
                Home
              </Link>
            </ul>
            <ul>
              <Link className="linkTag" to="/array">
                Array
              </Link>
            </ul>
            <ul>
              <Link className="linkTag" to="/linkedlist">
                Linked List
              </Link>
            </ul>
            <ul>
              <Link className="linkTag" to="/stack">
                Stack
              </Link>
            </ul>
            <ul>
              <Link className="linkTag" to="/queue">
                Queue
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mobile_container">
        <button className="menu-button" onClick={openMenu}>
          <i className="fas fa-bars menu-icon"></i>
        </button>
        {mobileview && (
          <div className="navbar_mobile">
            <ul>
              <Link className="linkTag2" to="/" onClick={closeNav}>
                Home
              </Link>
            </ul>
            <ul>
              <Link className="linkTag2" to="/stack" onClick={closeNav}>
                Stack
              </Link>
            </ul>
            <ul>
              <Link className="linkTag2" to="/queue" onClick={closeNav}>
                Queue
              </Link>
            </ul>
            <ul>
              <Link className="linkTag2" to="/linkedlist" onClick={closeNav}>
                {" "}
                Linked List
              </Link>
            </ul>
            <ul>
              <Link className="linkTag2" to="/array" onClick={closeNav}>
                Array
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
