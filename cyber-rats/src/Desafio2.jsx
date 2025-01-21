import React, { useState, useEffect, useCallback } from 'react';
import './Desafio2.css';

const Desafio2 = () => {
  const [userData, setUserData] = useState({ flag: '' });
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    const resolved = localStorage.getItem('isResolved');
    if (resolved === 'true') {
      setIsResolved(true);
      setMessage('Você já resolveu o desafio anteriormente!');
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setAttempts((prevAttempts) => prevAttempts + 1);

    try {
      const response = await fetch('/api/checkFlag1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flag: userData.flag })
      });

      const result = await response.json();
      if (result.success) {
        setIsResolved(true);
        setMessage('Parabéns! Você resolveu o desafio.');
        localStorage.setItem('isResolved', 'true');
      } else {
        setMessage('Flag incorreta. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao verificar a flag:', error);
      setMessage('Ocorreu um erro. Tente novamente mais tarde.');
    }
  }, [userData.flag]);

  return (
    <div>
      <h1>Desafio de Decodificação</h1> {/* Add this line */}
      <p>
        Um hacker invadiu o sistema de uma empresa e encriptou suas informações, dificultando o resgate delas. 
        Seu objetivo é desvendar o código deixado e restaurar as informações importantes.
      </p>

      <p><strong>Única pista:</strong></p>
      <ul>
        <li>Wfvb+dlz2RuZO3szeXMJm8NDW+Pz4w==</li>
      </ul>

      <p><strong>Boa sorte!</strong></p>

      {isResolved ? (
        <p className="success-message">{message}</p>
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
          {message && <p className={message.includes('Parabéns') ? "success-message" : "error-message"}>{message}</p>}
        </form>
      )}
    </div>
  );
};

export default React.memo(Desafio2);