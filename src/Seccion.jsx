function Seccion({ fotos = [], texto, onSiguiente, esUltima }) {
  return (
    <div className="pantalla fade-in">
      {fotos.length > 0 && (
        <div className={`seccion__fotos seccion__fotos--${fotos.length}`}>
          {fotos.map((foto, i) => (
            <img key={i} src={foto} alt="" className="seccion__foto" />
          ))}
        </div>
      )}
      {texto && <p className="seccion__texto">{texto}</p>}
      <button className="boton" onClick={onSiguiente}>
        {esUltima ? 'Ver más' : 'Siguiente'}
      </button>
    </div>
  )
}

export default Seccion
