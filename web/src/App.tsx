import React from 'react';

// importando icons do react
import { FiArrowRight } from 'react-icons/fi'

// importantdo css
import './styles/global.css'
import './styles/pages/landing.css'

// importando imagem
import logoImg from './images/logo.svg'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leva a felicidade para o mundo</h1>
          <p>visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Atibaia</strong>
          <span>São Paulo</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </a>
      </div>
    </div>
  );
}

export default App;
