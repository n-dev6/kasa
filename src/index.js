import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/404';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/About" element={<About />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
