import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import userImage from '../assets/login.svg';

const Login = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/zoom');
    };

    return (
        <div className="login-container">
            <div className='container'>
                <div className="left-panel">
                    <img src={userImage} alt="User" className="user-image" />
                </div>
                <div className="right-panel">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Nome de usuário:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button onClick={handleButtonClick}>Entrar</button>
                    </form>
                    <div className="links">
                        <Link to="/esqueci-senha">Esqueci minha senha</Link>
                        <span> | </span>
                        <Link to="/cadastrar">Primeiro acesso</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
