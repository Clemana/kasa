import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import des composants de page
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logements/Logements';
import ErrorPage from './pages/Error/Error';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Définition des routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="*" element={<ErrorPage />} /> {/* Route pour la page d'erreur */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


