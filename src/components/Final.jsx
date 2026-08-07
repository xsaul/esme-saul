function Final({onReinicio}) {
  return (
    <div className="pantalla fade-in">
      <h2 className="landing__titulo">Fin del mensaje (por ahora)</h2>
      <p className="seccion__texto">Dime, ¿te gustaría seguir construyendo esta relación junto a mí?.</p>
      <button className="boton" onClick={onReinicio}>
        Ver de nuevo
      </button>
    </div>
  )
}

export default Final
