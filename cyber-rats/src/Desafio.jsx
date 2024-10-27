// src/Desafio.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function Desafio() {
  const [userData, setUserData] = useState({ username: '', flag: '' });
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
      const response = await fetch('/api/checkFlag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flag: userData.flag }),
      });
      const data = await response.json();

      if (data.success) {
        setSuccessMessage(`Parabéns, ${userData.username}! Você acertou a flag!`);
        setIsResolved(true);
        localStorage.setItem('isResolved', 'true');
      } else {
        setSuccessMessage('Flag incorreta! Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao verificar a flag:', error);
      setSuccessMessage('Erro ao verificar a flag. Tente novamente mais tarde.');
    }

    setUserData({ username: '', flag: '' });
  };

  return (
    <div className="container">
      <h2>Desafio 1 - OSINT</h2>

      {isResolved ? (
        <p>{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Usuário:
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </label>
          <br />
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
    </div>
  );
}

export default Desafio;
