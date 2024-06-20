import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      nome,
      dataNascimento,
      sexo,
      email
    };
    console.log('Form Data:', formData);
    // Aqui você pode enviar formData para um servidor ou realizar outra ação
    // Depois de enviar os dados, redirecione para outra rota
    navigate('/configuracoes');
  };

  return (
    <div className='login-container'>
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
          <label>Sexo:</label>
          <select value={sexo} onChange={(e) => setSexo(e.target.value)} required>
            <option value="" disabled>Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
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
        <button type="submit" className='login-button'>Enviar</button>
      </form>
    </div>
  );
};

export default Login;