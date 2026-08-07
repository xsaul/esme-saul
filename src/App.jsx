import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Seccion from './components/Seccion.jsx'
import Final from './components/Final.jsx'
import { secciones } from './data/content.js'
import './App.css'

function App() {
  // paso: -1 = pantalla de bienvenida, 0..n-1 = secciones, n = pantalla final
  const [paso, setPaso] = useState(-1)

  const siguiente = () => {
  setPaso((p) => p + 1)
  window.scrollTo(0, 0)
}

  const reinicio = () => setPaso(-1)

  if (paso === -1) {
    return <Landing onComenzar={siguiente} />
  }

  if (paso < secciones.length) {
    const { foto, texto } = secciones[paso]
    return (
      <Seccion
        // el "key" hace que React vuelva a montar el componente en cada paso,
        // así el fade-in se dispara de nuevo cada vez
        key={paso}
        foto={foto}
        texto={texto}
        onSiguiente={siguiente}
      />
    )
  }

  return <Final onReinicio={reinicio} />
}

export default App
