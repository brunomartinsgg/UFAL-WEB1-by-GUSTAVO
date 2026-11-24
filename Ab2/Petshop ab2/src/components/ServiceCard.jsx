import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa'

function ServiceCard(props) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  return (
    <article className="card">
      <img src={props.imagem} alt={props.titulo} />
      <span className="badge-categoria">{props.categoria}</span>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
      <p className="preco">{props.preco}</p>

      <button
        type="button"
        className="botao-secundario"
        onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
      >
        {mostrarDetalhes ? (
          <>
            <FaChevronUp /> Ocultar detalhes
          </>
        ) : (
          <>
            <FaChevronDown /> Ver detalhes
          </>
        )}
      </button>

      {mostrarDetalhes && (
        <div className="detalhes-servico">
          <p>{props.detalhes}</p>
        </div>
      )}

      <Link to="/agendamento" className="botao botao-card">
        <FaCalendarCheck /> Agendar serviço
      </Link>
    </article>
  )
}

export default ServiceCard
