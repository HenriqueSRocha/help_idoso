import React from 'react';
import { useNavigate } from 'react-router-dom';

const Configuracoes = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/cursos');
    };

    return (
        <div>
            <h1>Aqui vamos colocar as configurações para maior acessibilidade ao aplicativo</h1>
            <button type="button" onClick={handleSubmit}>Vamos começar</button>
        </div>
    );
}

export default Configuracoes;
