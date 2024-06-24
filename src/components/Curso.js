import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFont } from './context/ZoomContext';
import './Curso.css';
import db from '../db.json';

const Curso = () => {
  const { id } = useParams();
  const [videoId, setVideoId] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const { fontSize } = useFont();
  const [indiceAulaAtual, setIndiceAulaAtual] = useState(0);
  const [duvidas, setDuvidas] = useState([]);

  let aulas = [];
  let tipoCurso = '';

  if (id === '1') {
    aulas = db.aplicativos;
    tipoCurso = 'aplicativos';
  } else if (id === '2') {
    aulas = db.instagram;
    tipoCurso = 'instagram';
  } else if (id === '3') {
    aulas = db.whatsapp;
    tipoCurso = 'whatsapp';
  }

  useEffect(() => {
    if (aulas.length > 0) {
      setVideoId(aulas[0].link);
    }
  }, [aulas]);

  const handleNext = (index) => {
    const aula = aulas[index];
    console.log(`Próxima aula: ${aula.nome}`);
    setIndiceAulaAtual(index);
    setVideoId(aula.link);
  };

  const handleProximoVideo = () => {
    const nextIndex = indiceAulaAtual + 1;
    if (nextIndex < aulas.length) {
      setIndiceAulaAtual(nextIndex);
      setVideoId(aulas[nextIndex].link);
    } else {
      setIndiceAulaAtual(aulas.length);
      setVideoId('');
    }
  };

  const handleAddDuvida = (event) => {
    event.preventDefault();
    const novaDuvida = {
      id: duvidas.length + 1,
      pergunta,
      respostas: [],
    };
    setDuvidas([...duvidas, novaDuvida]);
    setPergunta('');
  };

  const handleAddResposta = (duvidaId) => {
    const updatedDuvidas = duvidas.map((duvida) => {
      if (duvida.id === duvidaId) {
        return {
          ...duvida,
          respostas: [...duvida.respostas, resposta],
        };
      }
      return duvida;
    });
    setDuvidas(updatedDuvidas);
    setResposta('');
  };

  return (
    <div className="painel-container" style={{ fontSize: `${fontSize}px` }}>
      <div className="curso-container">
        <div className="video-section">
          {videoId && (
            <div className="video-wrapper">
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {videoId && (
            <div className="video-description">
              <h2>{aulas[indiceAulaAtual]?.descrição}</h2>
            </div>
          )}
          {indiceAulaAtual < aulas.length && (
            <button className="btn-proxima-video" onClick={handleProximoVideo}>
              Próximo Vídeo
            </button>
          )}
          {indiceAulaAtual === aulas.length && (
            <p>Curso finalizado com sucesso!</p>
          )}
        </div>
        <div className="content-container">
          <Link to="/cursos" className="btn-back">
            Voltar aos Cursos
          </Link>
          <div className="lessons-list">
            <h2>Lista de Aulas</h2>
            {aulas.map((aula, index) => (
              <button key={aula.id} onClick={() => handleNext(index)}>
                {aula.nome}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="comments-section">
        <h2>Comentários</h2>
        <form onSubmit={handleAddDuvida}>
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
          <button className="add-question" type="submit">
            Adicionar Pergunta
          </button>
        </form>
        <div className="duvidas-list">
          {duvidas.map((duvida) => (
            <div key={duvida.id} className="duvida-item">
              <p>
                <strong>Pergunta:</strong> {duvida.pergunta}
              </p>
              <div className="respostas-list">
                {duvida.respostas.map((resp, index) => (
                  <div key={index} className="resposta-item">
                    <p>
                      <strong>Resposta {index + 1}:</strong> {resp}
                    </p>
                  </div>
                ))}
              </div>
              <div className="container-answer">
                <input
                  type="text"
                  placeholder="Sua resposta"
                  value={resposta}
                  onChange={(e) => setResposta(e.target.value)}
                />
                <button
                  className="add-answer"
                  onClick={() => handleAddResposta(duvida.id)}
                >
                  Adicionar Resposta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curso;