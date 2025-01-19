// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Desafio from './Desafio';
import Desafio2 from './Desafio2';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafio" element={<Desafio />} />
        <Route path="/desafio2" element={<Desafio2 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
