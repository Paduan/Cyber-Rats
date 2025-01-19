// src/Login.jsx
import React, { useState } from "react";
import { validCredentials } from "./api/auth"; // Importa as credenciais

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaA, setCaptchaA] = useState(Math.floor(Math.random() * 10)); // Número 1
  const [captchaB, setCaptchaB] = useState(Math.floor(Math.random() * 10)); // Número 2
  const [captchaInput, setCaptchaInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida o Captcha
    if (parseInt(captchaInput) !== captchaA + captchaB) {
      setErrorMessage("Captcha incorreto. Tente novamente.");
      return;
    }

    // Valida as credenciais
    if (username === validCredentials.username && password === validCredentials.password) {
      alert("Login bem-sucedido! Bem-vindo!");
    } else {
      setErrorMessage("Usuário ou senha incorretos.");
    }

    // Reseta o captcha para dificultar tentativas
    setCaptchaA(Math.floor(Math.random() * 10));
    setCaptchaB(Math.floor(Math.random() * 10));
    setCaptchaInput("");
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
          <label>Captcha: Qual é a soma de {captchaA} + {captchaB}?</label>
          <input
            type="number"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
