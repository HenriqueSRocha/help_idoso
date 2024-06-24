import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Configuracoes.css';
import { useFont } from './context/ZoomContext';
import curso1 from '../assets/curso1.jpeg'
import curso2 from '../assets/curso2.jpeg'
import curso3 from '../assets/curso3.jpeg'

const Configuracoes = () => {
    const navigate = useNavigate();
    const { fontSize } = useFont();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/cursos');
    };

    return (
        <div className="config-container" style={{ fontSize: `${fontSize}px` }}>
            <h1>Central de ensino help idoso</h1>
            <div className="card-container">
                <div className="card">
                    <img src={curso1} alt="Curso 1" className="card-image" />
                    <h2>Curso 1</h2>
                    <p>Descrição do Curso 1</p>
                </div>
                <div className="card">
                    <img src={curso2} alt="Curso 2" className="card-image" />
                    <h2>Curso 2</h2>
                    <p>Descrição do Curso 2</p>
                </div>
                <div className="card">
                    <img src={curso3} alt="Curso 3" className="card-image" />
                    <h2>Curso 3</h2>
                    <p>Descrição do Curso 3</p>
                </div>
            </div>
            <div className="button-container">
                <button type="button" onClick={handleSubmit}>Conheça mais</button>
                <button type="button" onClick={handleSubmit}>Conheça mais</button>
                <button type="button" onClick={handleSubmit}>Conheça mais</button>
            </div>
        </div>
    );
}

export default Configuracoes;
