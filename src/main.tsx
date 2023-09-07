import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './theme/navbar/Navbar.tsx';
import Footer2 from './theme/footer/footer.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <Footer2 />
  </React.StrictMode>,
)
