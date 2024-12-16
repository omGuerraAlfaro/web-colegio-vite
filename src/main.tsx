import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './theme/navbar/Navbar.tsx';
import FooterColegio from './theme/footerColegio/footerColegio.tsx';
import InscripcionMatricula from './components/InscripcionMatricula/InscripcionMatricula.tsx';

const Home = lazy(() => import('./components/Home/Home.tsx'));
/* const Pae = lazy(() => import('./components/Pae/Pae.tsx'));*/
const Reglamento = lazy(() => import('./components/Reglamento/Reglamento.tsx'));
const Utiles = lazy(() => import('./components/Utiles/Utiles.tsx'));
const Talleres = lazy(() => import('./components/Talleres/Talleres.tsx'));
const Contacto = lazy(() => import('./components/Contacto/Contacto.tsx'));
const Admision = lazy(() => import('./components/Admision/Admision.tsx'));
const EscuelaVerano = lazy(() => import('./components/Verano/Verano.tsx'));
const MisionVision = lazy(() => import('./components/MisionVision/MisionVision.tsx'));
const RespuestaWebPay = lazy(() => import('./components/RespuestaWebPay/RespuestaWebPay.tsx'));
const Simce = lazy(() => import('./components/Simce/Simce.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mision-vision" element={<MisionVision />} />
        {/* <Route path="/pae" element={<Pae />} /> */}
        <Route path="/reglamento" element={<Reglamento />} />
        <Route path="/utiles" element={<Utiles />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/admision" element={<Admision />} />
        <Route path="/matricula" element={<InscripcionMatricula />} />
        <Route path="/verano" element={<EscuelaVerano />} />
        <Route path="/webpay-respuesta" element={<RespuestaWebPay />} />
        <Route path="/info-simce" element={<Simce />} />
      </Routes>
      <FooterColegio />
    </Router>
  </React.StrictMode>,
)
