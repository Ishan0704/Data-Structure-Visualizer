import React, { useEffect } from 'react';

import "./Home.css";
import LinkedListData from "./LinkedListData";
import ArrayData from "./ArrayData";
import StackData from "./StackData";
import QueueData from "./QueueData";

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <div className="home_container">
        <div className="frame1_home">
          <h1>Welcome to DSA Visualizer</h1>
          <p>
            Our goal is to deliver clear understanding and visualization of the
            Data Structures and Algorithms knowledge.
          </p>
        </div>

        <div className="frame4_home" id="array-scroll">
          <ArrayData />
        </div>

        <div className="frame4_home" id="linkedlist-scroll">
          <LinkedListData />
        </div>

        <div className="frame4_home" id="stack-scroll">
          <StackData />
        </div>

        <div className="frame4_home" id="queue-scroll">
          <QueueData />
        </div>
      </div>

      <footer className="home-footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} DSA Visualizer. All rights
            reserved.
          </p>
          <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
