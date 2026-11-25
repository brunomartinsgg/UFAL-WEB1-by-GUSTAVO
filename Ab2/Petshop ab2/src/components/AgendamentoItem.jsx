import { FaPaw, FaTrash } from 'react-icons/fa'

function AgendamentoItem(props) {
  return (
    <div className="agendamento-card">
      <div>
        <p className="pet-nome">
          <FaPaw /> {props.pet} — <span>{props.servico}</span>
        </p>
        <p className="agendamento-detalhe">Tutor: {props.tutor}</p>
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
