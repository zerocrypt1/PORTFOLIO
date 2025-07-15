// ./src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import './index.css';

import Navbar from "./components/navbar";
import Portfolio from "./components/Portfolio";
import Quantumbio from "./components/Quantumbio";
import Neurochainex from "./components/Neurochainex";
import Crypthenix from "./components/crypthenix";
import Neuralink from "./components/Neuralink";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/quantumbio" element={<Quantumbio />} />
          <Route path="/neurochainex" element={<Neurochainex />} />
          <Route path="/crypthenix" element={<Crypthenix />} />
          <Route path="/neuralink" element={<Neuralink />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
