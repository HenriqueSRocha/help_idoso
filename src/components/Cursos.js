import React from 'react';
import { Link } from 'react-router-dom';
import { useFont } from './context/ZoomContext';

const Curso = () => {
  const { fontSize } = useFont();

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <div>
        <h2>Curso 1</h2>
        <p>Descrição do curso 1.</p>
        <Link to="/curso">
          <button>Iniciar Curso</button>
        </Link>
      </div>
    </div>
  );
};

export default Curso;
