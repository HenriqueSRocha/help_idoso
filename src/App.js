import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Configuracoes from './components/Configuracoes';
import Cursos from './components/Cursos';
import Curso from './components/Curso';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso" element={<Curso />} />
      </Routes>
    </Router>
  );
}

export default App;