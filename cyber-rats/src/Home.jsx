// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Bem-vindo ao Desafio OSINT</h2>
      <p>Clique no botão abaixo para acessar o desafio:</p>
      <Link to="/desafio">
        <button>Acessar Desafio</button>
      </Link>
    </div>
  );
}

export default Home;
