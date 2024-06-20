import React from 'react';
import { Link } from 'react-router-dom';

const Curso = () => {
  return (
    <div>
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
