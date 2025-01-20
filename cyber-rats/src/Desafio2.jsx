// src/Desafio2.jsx
import React, { useState, useEffect } from 'react';
import './Desafio2.css';

function Desafio2() {
  const [userData, setUserData] = useState({ flag: '' });
  const [attempts, setAttempts] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    const resolved = localStorage.getItem('isResolved');
    if (resolved === 'true') {
      setIsResolved(true);
      setSuccessMessage('Você já resolveu o desafio anteriormente!');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttempts((prevAttempts) => prevAttempts + 1);

    try {
      // Ajustando a URL da API para 'checkFlag1'
      const response = await fetch('/api/checkFlag1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flag: userData.flag }),
      });
      const data = await response.json();

      if (data.success) {
        setSuccessMessage(`Parabéns! Você acertou a flag!`);
        setIsResolved(true);
        localStorage.setItem('isResolved', 'true');
      } else {
        setSuccessMessage('Flag incorreta! Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao verificar a flag:', error);
      setSuccessMessage('Erro ao verificar a flag. Tente novamente mais tarde.');
    }

    setUserData({ flag: '' });
  };

  return (
    <div className="container">
      <h2 className="title">Desafio 2: Resgate da Informação Encriptada</h2>
      <p className="intro">Bem-vindo ao Desafio 2!</p>
      <div className="description">
        <p><strong>Contexto:</strong></p>
        <p>
          Um hacker invadiu o sistema de uma empresa e encriptou suas informações, dificultando o resgate delas. 
          Seu objetivo é desvendar o código deixado e restaurar as informações importantes.
        </p>

        <p><strong>Objetivos:</strong></p>
        <ul>
          <li>Encontrar o nick do hacker</li>
          <li>Encontrar o código de encriptação</li>
          <li>Decodificar o código e restaurar a informação encriptada.</li>
          <li>Retornar a flag ao final do desafio.</li>
        </ul>

        <p><strong>Boa sorte!</strong></p>
      </div>

      {isResolved ? (
        <p>{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Flag:
            <input
              type="text"
              name="flag"
              value={userData.flag}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}

      <p>Tentativas: {attempts}</p>

      <div data-hidden-text="@H4cker-from-sky-99"></div> {/* Texto escondido no atributo */}
    </div>
  );
}

export default Desafio2;
