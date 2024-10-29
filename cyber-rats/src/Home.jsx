// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Desafios do CyberRats</h2>
      <p>Clique no botão abaixo para acessar os desafios:</p>
      <Link to="/desafio">
        <button className="button-custom"> Desafio 1</button>
      </Link>
    </div>
  );
}

export default Home;
