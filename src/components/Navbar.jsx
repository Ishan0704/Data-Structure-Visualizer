import React from "react";
import { Link } from "react-router-dom";
import dsa_image from "../images/dsa.png";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="container_nav">
        <div className="frame_nav">
          <img src={dsa_image} id="image1" alt="Data Visualizer Logo" />
          <h2>Data Visualizer</h2>
        </div>
        <div className="frame2_nav">
          <ul><Link className="linkTag" to="/">Home</Link></ul>
          <ul><Link className="linkTag" to="/stack">Stack</Link></ul>
          <ul><Link className="linkTag" to="/queue">Queue</Link></ul>
          <ul><Link className="linkTag" to="/linkedlist">Linked List</Link></ul>
          <ul><Link className="linkTag" to="/">HashMap</Link></ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
