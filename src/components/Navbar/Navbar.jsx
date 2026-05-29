import React, { useState } from 'react';
import './Navbar.css';

import logoImg from '../../assets/chrollo.png'; 

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav>
      {/* LOGO COM A IMAGEM ANTES DO TEXTO */}
      <a href="#" className="nav-logo">
        {/* 2. TAG DA IMAGEM: Inserida logo antes do texto do logo */}
        <img src={logoImg} alt="Chrollo Studio Logo" className="logo-icon" />
        Chrollo<span>.</span>Studio
      </a>
      
      <ul className={`nav-links ${menuAberto ? 'active' : ''}`}>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Services</a></li>
        <li><a href="#processo">Processo</a></li>
        <li><a href="#analise">Analytics</a></li>
        <li><a href="#identidade">Identidade</a></li>
        <li><a href="#depoimentos">Clientes</a></li>
        <li><a href="#contato" className="nav-cta">Falar com a gente →</a></li>
      </ul>
      
      <button 
        className={`menu-toggle ${menuAberto ? 'open' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}

export default Navbar;