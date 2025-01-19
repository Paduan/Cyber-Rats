import React, { useEffect } from 'react';
import './Desafio2.css'; 

function Desafio2() {
  useEffect(() => {
    const randomClass = `hacker-${Math.random().toString(36).substring(2, 10)}`;
    const randomId = `hidden-${Math.random().toString(36).substring(2, 10)}`;
    
    const hiddenDiv = document.createElement('div');
    hiddenDiv.textContent = '@paduanjj'; 

    hiddenDiv.className = randomClass;
    hiddenDiv.id = randomId;

    hiddenDiv.style.color = 'transparent'; 
    hiddenDiv.style.position = 'absolute'; 
    hiddenDiv.style.left = '-9999px'; 
    hiddenDiv.style.fontSize = '0.1px'; 

    document.body.appendChild(hiddenDiv);

    return () => {
      document.body.removeChild(hiddenDiv);
    };
  }, []);

  return (
    <div className="container">
      <h2>Desafio 2</h2>
      <p>Bem-vindo ao Desafio 2! Resolva os problemas e teste suas habilidades.</p>
    </div>
  );
}

export default Desafio2;
