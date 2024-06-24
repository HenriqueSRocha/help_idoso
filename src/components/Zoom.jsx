import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFont } from './context/ZoomContext';
import './Zoom.css';

const Zoom = () => {
    const { tamanhofonte, aumentafonte, diminuifonte } = useFont();
    const navigate = useNavigate();

    return (
        <div className="zoom-container">
            <h1>Determine o tamanho da fonte</h1>
            <p style={{ fontSize: `${tamanhofonte}px` }}>Parece bom?</p>
            <div className="tam-buttons-container">
                <button onClick={diminuifonte} className="tam-button">-</button>
                <button onClick={aumentafonte} className="tam-button">+</button>
            </div>
            <div className="ok-button-container">
                <button onClick={() => navigate('/cursos')} className="ok-button">Está bom!</button>
            </div>
        </div>
    );
};

export default Zoom;
