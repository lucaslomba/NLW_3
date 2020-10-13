import React from 'react'

//Trocar d pagina sem recarregar
import { Link } from 'react-router-dom'

// importando icons do react
import { FiArrowRight } from 'react-icons/fi'

// importantdo css
import '../styles/pages/landing.css'

// importando imagem
import logoImg from '../images/logo.svg'

function Landing() {
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

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
      </div>
    </div>
    );
}

export default Landing;