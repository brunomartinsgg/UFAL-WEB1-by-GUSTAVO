import { useState } from 'react'
import './Formulario.css'

function Formulario() {
  const [nome, setNome] = useState('')
  const [saudacao, setSaudacao] = useState('')

  function saudar() {
    if (nome.trim() !== '') {
      setSaudacao(`Olá, ${nome}!`)
    }
  }

  return (
    <div className="formulario-card">
      <label className="formulario-label" htmlFor="campo-nome">
        Digite seu nome:
      </label>

      <input
        id="campo-nome"
        type="text"
        placeholder="Seu nome aqui"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button className="btn-saudar" onClick={saudar}>
        Saudar
      </button>

      {saudacao && <p className="mensagem-saudacao">{saudacao}</p>}
    </div>
  )
}

export default Formulario

