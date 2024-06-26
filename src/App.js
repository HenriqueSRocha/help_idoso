import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Cadastrar from './components/Cadastrar';
import Cursos from './components/Cursos';
import Curso from './components/Curso';
import Zoom from './components/Zoom';
import { ZoomProvider } from './components/context/ZoomContext';

function App() {
    return (
        <ZoomProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrar" element={<Cadastrar />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/curso/:id" element={<Curso />} />
                    <Route path="/zoom" element={<Zoom />} />
                </Routes>
            </Router>
        </ZoomProvider>
    );
}

export default App;
