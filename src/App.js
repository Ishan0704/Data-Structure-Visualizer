import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Stack from "./components/Stack.jsx";
import Queue from "./components/Queue.jsx";
import LinkedList from "./components/LinkedList.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stack" element={<Stack/>}/>
          <Route path="/queue" element={<Queue/>}/>
          <Route path="/linkedlist" element={<LinkedList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
