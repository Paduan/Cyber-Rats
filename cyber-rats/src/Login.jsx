// src/Login.jsx
import React from 'react';

function Login() {
  return (
    <div className="container">
      <h2>Página de Login</h2>
      <p>Parabéns por encontrar esta página secreta!</p>
      <form>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
