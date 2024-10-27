// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home"; // Assuming Home.jsx is in the same directory
import Desafio from "./Desafio"; // Assuming Desafio.jsx is in the same directory

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafio" element={<Desafio />} />
      </Routes>
    </Router>
  );
}

export default App;
