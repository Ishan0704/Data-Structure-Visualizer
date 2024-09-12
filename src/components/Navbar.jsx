import React from "react";
import dsa_image from "../images/dsa.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="frame1">
          <img src={dsa_image} id="image1" alt="Data Visualizer Logo" />
          <h2>Data Visualizer</h2>
        </div>
        <div className="frame2">
          <ul>Home</ul>
          <ul>Stack</ul>
          <ul>Queue</ul>
          <ul>Linked List</ul>
          <ul>HashMap</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
