import React, { useState, useEffect } from 'react';
import './App.css'; // Importa o arquivo de estilos

function App() {
  const [userData, setUserData] = useState({ username: '', flag: '' });
  const [attempts, setAttempts] = useState(0); // Estado para contagem de tentativas
  const [successMessage, setSuccessMessage] = useState(''); // Mensagem de sucesso
  const [isResolved, setIsResolved] = useState(false); // Estado para verificar se o desafio foi resolvido

  // Define a flag diretamente no código
  const CORRECT_FLAG = 'CYBERRATS{Minha_Primeira_Flag}';

  useEffect(() => {
    // Verifica se o desafio já foi resolvido
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts((prevAttempts) => prevAttempts + 1); // Incrementa a contagem de tentativas

    // Verifica se a flag está correta
    if (userData.flag === CORRECT_FLAG) {
      setSuccessMessage(`Parabéns, ${userData.username}! Você acertou a flag!`);
      setIsResolved(true); // Define que o desafio foi resolvido
      localStorage.setItem('isResolved', 'true'); // Salva no localStorage
    } else {
      setSuccessMessage('Flag incorreta! Tente novamente.');
    }

    setUserData({ username: '', flag: '' }); // Limpa os campos do formulário
  };

  return (
    <div className="container"> {/* Aplica a classe de estilo */}
      <h2>Desafio 1 - OSINT</h2>

      {isResolved ? ( // Verifica se o desafio foi resolvido
        <p>{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit} className="form"> {/* Aplica a classe de estilo */}
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

      <p>Tentativas: {attempts}</p> {/* Exibe a contagem de tentativas */}
    </div>
  );
}

export default App;
