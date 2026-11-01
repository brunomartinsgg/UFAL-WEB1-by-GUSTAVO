import { useState } from 'react'
import './Contador.css'

function Contador() {
  const [contador, setContador] = useState(0)
  const [valorInicial, setValorInicial] = useState('')

  function incrementar() {
    setContador(contador + 1)
  }

  function definirValorInicial() {
    const numero = Number(valorInicial)
    if (valorInicial !== '' && !isNaN(numero)) {
      setContador(numero)
    }
  }

  return (
    <div className="contador-card">
      <p className="contador-label">Valor atual:</p>
      <div className="contador-valor">{contador}</div>

      <button className="btn btn-incrementar" onClick={incrementar}>
        Incrementar
      </button>

      <div className="contador-input-group">
        <input
          type="number"
          placeholder="Informe um valor inicial"
          value={valorInicial}
          onChange={(e) => setValorInicial(e.target.value)}
        />
        <button className="btn btn-definir" onClick={definirValorInicial}>
          Definir Valor Inicial
        </button>
      </div>
    </div>
  )
}

export default Contador

