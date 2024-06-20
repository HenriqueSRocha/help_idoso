import React, { useState } from 'react';
import { useFont } from './context/ZoomContext';

const Curso = () => {
  const [videoReproduzido, setVideoReproduzido] = useState(false);
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const { fontSize } = useFont();


  const handleNext = () => {
    // Lógica para a ação do botão "Próximo"
    console.log('Próximo vídeo');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Pergunta:', pergunta);
    console.log('Resposta:', resposta);
    // Lógica para lidar com a pergunta e resposta
    // Limpar campos de pergunta e resposta se necessário
    setPergunta('');
    setResposta('');
  };

  return (
    <div>
      <div style={{ fontSize: `${fontSize}px` }}>
        {/* Div para reprodução de vídeo */}
        {videoReproduzido ? (
          <video controls>
            <source src="caminho/do/seu/video.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        ) : (
          <p>Clique no botão abaixo para iniciar o vídeo.</p>
        )}
      </div>
      <div>
        {/* Botão "Próximo" */}
        <button onClick={handleNext}>Próximo</button>
      </div>
      <div>
        {/* Área de perguntas e respostas */}
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
  );
};

export default Curso;
