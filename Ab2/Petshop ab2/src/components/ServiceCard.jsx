import { Link } from 'react-router-dom'
import { FaCalendarCheck } from 'react-icons/fa'

function ServiceCard(props) {
  return (
    <article className="card">
      <img src={props.imagem} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
      <p className="preco">{props.preco}</p>

      <Link to="/agendamento" className="botao botao-card">
        <FaCalendarCheck /> Agendar
      </Link>
    </article>
  )
}

export default ServiceCard
