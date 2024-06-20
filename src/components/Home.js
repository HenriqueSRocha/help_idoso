import React from 'react';
import { useNavigate } from 'react-router-dom';
import idososImg from '../assets/idosos.jpg'
import './Home.css';
import { useFont } from './context/ZoomContext';

const Home = () => {
    const navigate = useNavigate();
    const { fontSize } = useFont();


    const handleButtonClick = () => {
        navigate('/login');
    };

    return (
        <div className="home-container" style={{ fontSize: `${fontSize}px` }}>
            <h1>HELP IDOSOS</h1>
            <div className='home-box'>
                <img src={idososImg} alt="Imagem representativa" className="home-image" />
                <div className='home-start'>
                    <h4>A melhor plataforma de cursos tecnológicos para idosos</h4>
                    <button onClick={handleButtonClick} className="home-button">
                        Vamos começar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
