// import { NOMBRE_NOVIA } from '../data/content.js'

function Landing({ onComenzar }) {
  return (
    <div className="pantalla pantalla--landing fade-in">
      <p className="landing__eyebrow">para ti</p>
      <h1 className="landing__titulo">
        Hola, <span className="landing__nombre">Esmeralda</span>
      </h1>
      <button className="boton" onClick={onComenzar}>
        Comenzar
      </button>
    </div>
  )
}

export default Landing
