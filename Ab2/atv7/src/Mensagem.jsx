import { useState } from 'react'
import './Mensagem.css'

function Mensagem() {
  const [visivel, setVisivel] = useState(false)

  function alternarVisibilidade() {
    setVisivel(!visivel)
  }

  return (
    <div className="mensagem-card">
      <button className="btn-alternar" onClick={alternarVisibilidade}>
        {visivel ? 'Ocultar mensagem' : 'Mostrar mensagem'}
      </button>

      {visivel && (
        <p className="mensagem-texto">
          Esta é a mensagem exibida através da renderização condicional no React!
        </p>
      )}
    </div>
  )
}

export default Mensagem

