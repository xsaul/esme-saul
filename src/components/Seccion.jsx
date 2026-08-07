function Seccion({ foto, texto, onSiguiente }) {
  return (
    <div className="pantalla fade-in">
      {foto.length > 0 && (
        <div className={`seccion__fotos seccion__fotos--${foto.length}`}>
          {foto.map((foto, i) => (
            <div key={i} className="seccion__foto-caja">
              <img src={foto} alt="" className="seccion__foto-fondo" aria-hidden="true" />
              <img src={foto} alt="" className="seccion__foto" />
            </div>
          ))}
        </div>
      )}
      {texto && <p className="seccion__texto salto">{texto}</p>}
      <button className="boton" onClick={onSiguiente}>
        Siguiente
      </button>
    </div>
  )
}

export default Seccion
