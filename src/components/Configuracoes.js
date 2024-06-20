import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Configuracoes.css'
import { useFont } from './context/ZoomContext';


const Configuracoes = () => {
    const navigate = useNavigate();
    const { fontSize } = useFont();


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/cursos');
    };

    return (
        <div style={{ fontSize: `${fontSize}px` }}>
            <h1>Aqui vamos colocar as configurações para maior acessibilidade ao aplicativo</h1>
            <button type="button" onClick={handleSubmit}>Vamos começar</button>
        </div>
    );
}

export default Configuracoes;
