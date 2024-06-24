import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cursos.css';
import { useFont } from './context/ZoomContext';
import curso1 from '../assets/curso1.jpeg';
import curso2 from '../assets/curso2.jpeg';
import curso3 from '../assets/curso3.jpeg';

const Cursos = () => {
    const navigate = useNavigate();
    const { fontSize } = useFont();

    const cursos = [
        { img: curso1, title: 'Instalando aplicativos'},
        { img: curso2, title: 'Descobrindo o Instagram'},
        { img: curso3, title: 'Descobrindo o Whatsapp'}
    ];

    const handleSubmit = (event, index) => {
        event.preventDefault();
        navigate(`/curso/${index + 1}`);
    };

    return (
        <div className="config-container" style={{ fontSize: `${fontSize}px` }}>
            <h1>Central de ensino help idoso</h1>
            <div className="card-container">
                {cursos.map((curso, index) => (
                    <div className="card" key={index}>
                        <img src={curso.img} alt={curso.title} className="card-image" />
                        <h2>{curso.title}</h2>
                        <button type="button" onClick={(event) => handleSubmit(event, index)}>Começar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cursos;
