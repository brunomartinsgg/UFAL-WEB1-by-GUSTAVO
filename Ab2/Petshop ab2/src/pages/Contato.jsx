import { useState } from 'react'
import { FaWhatsapp, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

function Contato() {
  const [nome, setNome] = useState('')
  const [duvida, setDuvida] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleEnviarMensagem(e) {
    e.preventDefault()
    if (!nome.trim() || !duvida.trim()) return
    setEnviado(true)
    setNome('')
    setDuvida('')
  }

  return (
    <section id="contato" className="secao">
      <h2>Contato</h2>
      <p className="texto">
        Fale com a gente pelo WhatsApp ou envie sua dúvida diretamente pelo formulário abaixo.
      </p>

      <a
        className="botao"
        href="https://wa.me/5582999107995"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp /> Chamar no WhatsApp
      </a>

      <form className="formulario-card contato-form" onSubmit={handleEnviarMensagem}>
        <h3>Envie uma mensagem rápida</h3>

        {enviado && (
          <p className="alerta-sucesso">
            <FaCheckCircle /> Mensagem recebida! Retornaremos em breve.
          </p>
        )}

        <div className="campo-form">
          <label>Seu nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value)
              setEnviado(false)
            }}
          />
        </div>

        <div className="campo-form">
          <label>Sua dúvida</label>
          <input
            type="text"
            placeholder="Digite sua dúvida sobre nossos serviços"
            value={duvida}
            onChange={(e) => {
              setDuvida(e.target.value)
              setEnviado(false)
            }}
          />
        </div>

        <button type="submit" className="botao botao-submit">
          <FaPaperPlane /> Enviar Mensagem
        </button>
      </form>
    </section>
  )
}

export default Contato
