import React, { useState } from "react";
import { Link } from "react-router-dom";
import dsa_image from "../images/dsa.png";
import "./Navbar.css";
function Navbar() {
  const [mobileview, setMobileview] = useState(false);
  const [dropdown, setDropdown] = useState({});

  const openMenu = () => {
    setMobileview(true);
  };
  const closeNav = () => {
    setMobileview(false);
    setDropdown({});
  };

  const toggleDropdown = (item) => {
    setDropdown((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const scrollToContainer = (dsa_name) => {
    window.location.href = `/#${dsa_name}`;
    closeNav();
  };
  return (
    <>
      <nav>
        <div className="container_nav">
          <div className="frame_nav">
            <img src={dsa_image} id="image1" alt="Data Visualizer Logo" />
            <h2 style={{ marginTop: "0.2rem" }}>DSA Visualizer</h2>
          </div>
          <div className="frame2_nav">
            <ul>
              <Link className="linkTag" to="/" onClick={closeNav}>
                Home
              </Link>
            </ul>

            <ul>
              <div className="dropdown">
                <button
                  className="linkTag"
                  onClick={() => toggleDropdown("array")}
                >
                  Array
                </button>
                {dropdown.array && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("array-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/array-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>

            <ul>
              <div className="dropdown">
                <button
                  className="linkTag"
                  onClick={() => toggleDropdown("linkedlist")}
                >
                  Linked List
                </button>
                {dropdown.linkedlist && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("linkedlist-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/linkedlist-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>

            <ul>
              <div className="dropdown">
                <button
                  className="linkTag"
                  onClick={() => toggleDropdown("stack")}
                >
                  Stack
                </button>
                {dropdown.stack && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("stack-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/stack-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>

            <ul>
              <div className="dropdown">
                <button
                  className="linkTag"
                  onClick={() => toggleDropdown("queue")}
                >
                  Queue
                </button>
                {dropdown.queue && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("queue-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/queue-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mobile_container">
        <div className="mobile-container-logo">
          <img src={dsa_image} id="image1" alt="Data Visualizer Logo" />
          <h2>Data Visualizer</h2>
        </div>

        <div className="mobile-container-buttons">
          <button className="menu-button" onClick={openMenu}>
            <i className="fas fa-bars menu-icon"></i>
          </button>
        </div>

        {mobileview && (
          <div className="navbar_mobile">
            <ul>
              <Link className="linkTag2" to="/" onClick={closeNav}>
                Home
              </Link>
            </ul>
            <ul>
              <div className="dropdown">
                <button
                  className="linkTag2"
                  onClick={() => toggleDropdown("array")}
                >
                  Array
                </button>
                {dropdown.array && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("array-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/array-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>
            <ul>
              <div className="dropdown">
                <button
                  className="linkTag2"
                  onClick={() => toggleDropdown("linkedlist")}
                >
                  Linked List
                </button>
                {dropdown.linkedlist && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("linkedlist-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/linkedlist-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>
            <ul>
              <div className="dropdown">
                <button
                  className="linkTag2"
                  onClick={() => toggleDropdown("stack")}
                >
                  Stack
                </button>
                {dropdown.stack && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("stack-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/stack-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>
            <ul>
              <div className="dropdown">
                <button
                  className="linkTag2"
                  onClick={() => toggleDropdown("queue")}
                >
                  Queue
                </button>
                {dropdown.queue && (
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => scrollToContainer("queue-scroll")}
                    >
                      Theory
                    </button>
                    <Link
                      className="dropdown-item"
                      to="/queue-visualizer"
                      onClick={closeNav}
                    >
                      Visualizer
                    </Link>
                  </div>
                )}
              </div>
            </ul>{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
