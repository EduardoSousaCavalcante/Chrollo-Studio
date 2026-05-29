import React from 'react'; // Sem o useState aqui
import './Hero.css';

function Hero() {
  
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-blob blob1"></div>
      <div className="hero-blob blob2"></div>
      <div className="hero-blob blob3"></div>

      <div className="hero-eyebrow">Criatividade, design & código — São Paulo, Brasil</div>
      
      <h1 className="hero-title">
        Design, código
        <br /> 
        <em>com</em>
        <br /> 
        <span className="line-accent">Presença digital</span>
      </h1>
      
      <div className="hero-bottom">
        <p className="hero-desc">
          Da identidade visual ao código: criamos marcas completas, sites que convertem e conteúdo que conecta de verdade.
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn-primary">Começar projeto →</a>
          <a href="#servicos" className="btn-outline">Ver serviços</a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span className="scroll-text">scroll</span>
      </div>
    </section>
  );
}

export default Hero;