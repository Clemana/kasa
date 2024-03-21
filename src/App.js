import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Import des composants de page
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logements/Logements';
import ErrorPage from './pages/Error/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Routes>
        {/* Définition des routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} /> {/* Route pour la page d'erreur */}
      </Routes>
    </Router>
  );
}

export default App;

