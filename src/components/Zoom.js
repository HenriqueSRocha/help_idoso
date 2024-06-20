import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFont } from './context/ZoomContext';
import './Zoom.css';

const Zoom = () => {
    const { tamanhofonte, aumentafonte, diminuifonte } = useFont();
    const navigate = useNavigate();

    return (
        <div className="zoom-container">
            <h1>Zoom</h1>
            <p style={{ fontSize: `${tamanhofonte}px` }}>Parece bom?</p>
            <div className="tam-buttons">
                <button onClick={diminuifonte} className="tam-button">-</button>
                <button onClick={aumentafonte} className="tam-button">+</button>
            </div>
            <button onClick={() => navigate('/configuracoes')} className="tam-button">Está bom!</button>
        </div>
    );
};

export default Zoom;
