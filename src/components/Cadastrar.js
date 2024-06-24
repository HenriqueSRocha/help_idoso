import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastrar.css';
import { useFont } from './context/ZoomContext';

const Login = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { fontSize } = useFont();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      nome,
      dataNascimento,
      email,
      senha,
    };
    console.log('Form Data:', formData);
    navigate('/zoom');
  };

  return (
    <div className='login-container' style={{ fontSize: `${fontSize}px` }}>
      <h1>Cadastra-se</h1>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className='form'>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <div className='form'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form'>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='login-button'>Criar conta</button>
      </form>
    </div>
  );
};

export default Login;
