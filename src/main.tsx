import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './theme/navbar/Navbar.tsx';
import FooterColegio from './theme/footerColegio/footerColegio.tsx';
import Pae from './components/Pae/Pae.tsx';
import Reglamento from './components/Reglamento/Reglamento.tsx';
import Utiles from './components/Utiles/Utiles.tsx';
import Talleres from './components/Talleres/Talleres.tsx';
import Contacto from './components/Contacto/Contacto.tsx';
import Admision from './components/Admision/Admision.tsx';
import EscuelaVerano from './components/Verano/Verano.tsx';
import MisionVision from './components/MisionVision/MisionVision.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar />      
      <div className="waveWrapper">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mision-vision" element={<MisionVision />} />
        <Route path="/pae" element={<Pae />} />
        <Route path="/reglamento" element={<Reglamento />} />
        <Route path="/utiles" element={<Utiles />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Admision" element={<Admision />} />
        <Route path="/Verano" element={<EscuelaVerano />} />
      </Routes>
      <FooterColegio />
    </Router>
  </React.StrictMode>,
)
