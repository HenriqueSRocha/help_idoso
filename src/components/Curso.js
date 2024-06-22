import React, { useState } from 'react';
import { useFont } from './context/ZoomContext';
import './Curso.css';

const Curso = () => {
  const [videoReproduzido, setVideoReproduzido] = useState(false);
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const { fontSize } = useFont();

  const handleNext = (num) => {
    console.log(`Próximo vídeo ${num}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Pergunta:', pergunta);
    console.log('Resposta:', resposta);
    setPergunta('');
    setResposta('');
  };

  return (
    <div className="painel-container" style={{ fontSize: `${fontSize}px` }}>
      <div className="video-section">
        <h2>Reprodução de Vídeo</h2>
        {videoReproduzido ? (
          <video controls className="video-player">
            <source src="caminho/do/seu/video.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        ) : (
          <p>Clique no botão abaixo para iniciar o vídeo.</p>
        )}
        <button onClick={() => setVideoReproduzido(true)}>Iniciar Vídeo</button>
      </div>
      <div className="content-container">
        <div className="lessons-list">
          <h2>Lista de Aulas</h2>
          <button onClick={() => handleNext(1)}>Aula 1</button>
          <button onClick={() => handleNext(2)}>Aula 2</button>
          <button onClick={() => handleNext(3)}>Aula 3</button>
        </div>
        <div className="comments-section">
          <h2>Comentários</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="pergunta">Pergunta:</label>
              <input
                type="text"
                id="pergunta"
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="resposta">Resposta:</label>
              <input
                type="text"
                id="resposta"
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Curso;
