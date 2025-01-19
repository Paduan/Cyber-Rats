// src/Login.jsx
import React, { useState } from 'react';
import { correctLogin } from './api/auth'; // Importa o login correto

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaA, setCaptchaA] = useState(Math.floor(Math.random() * 10));
  const [captchaB, setCaptchaB] = useState(Math.floor(Math.random() * 10));
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica o CAPTCHA
    const captchaResult = parseInt(captchaInput, 10);
    if (captchaResult !== captchaA + captchaB) {
      setError('CAPTCHA incorreto. Tente novamente.');
      return;
    }

    // Verifica o login e senha
    if (username === correctLogin.username && password === correctLogin.password) {
      alert('Login bem-sucedido! Bem-vindo à página secreta.');
    } else {
      setError('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="container">
      <h2>Página de Login</h2>
      <p>Parabéns por encontrar esta página secreta!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="captcha">
            Quanto é {captchaA} + {captchaB}?
          </label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
