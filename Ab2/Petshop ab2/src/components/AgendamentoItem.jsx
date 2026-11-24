import { FaDog, FaCat, FaCalendarAlt, FaClock, FaUser, FaPhone, FaTrash } from 'react-icons/fa'

function AgendamentoItem(props) {
  return (
    <div className="agendamento-card">
      <div className="agendamento-info">
        <div className="agendamento-topo">
          <span className="pet-nome">
            {props.especie === 'Gato' ? <FaCat /> : <FaDog />} {props.pet} ({props.especie})
          </span>
          <span className="servico-tag">{props.servico}</span>
        </div>

        <p className="agendamento-detalhe">
          <FaUser /> <strong>Tutor:</strong> {props.tutor} | <FaPhone /> {props.telefone}
        </p>

        <p className="agendamento-detalhe">
          <FaCalendarAlt /> <strong>Data:</strong> {props.data} às <FaClock /> {props.horario}
        </p>
      </div>

      <button
        type="button"
        className="botao-excluir"
        onClick={() => props.onExcluir(props.id)}
      >
        <FaTrash /> Cancelar
      </button>
    </div>
  )
}

export default AgendamentoItem
