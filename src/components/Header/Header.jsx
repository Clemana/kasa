import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/LOGO.svg'




function Header() {
  
return (
  <header className='header_container'>
    <Link to="/">
      <img className='logo' src={logo} alt="logo kasa"/>
    </Link>
    <nav className='navbar'>
      <div className="navli">
            <Link className="nav" to="/">Accueil</Link>
          </div>
      <div className="navli">
            <Link className="nav" to="/about">À propos</Link>
          </div>    
    </nav>
  </header>
)
}
export default Header