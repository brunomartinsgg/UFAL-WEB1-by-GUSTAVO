import { useState, useEffect } from 'react'
import { FaCalendarPlus, FaDatabase } from 'react-icons/fa'
import AgendamentoItem from '../components/AgendamentoItem'
import {
  listarAgendamentos,
  salvarAgendamento,
  excluirAgendamento,
} from '../services/firebase'

function Agendamento() {
  const [tutor, setTutor] = useState('')
  const [pet, setPet] = useState('')
  const [servico, setServico] = useState('Banho e tosa')

  const [agendamentos, setAgendamentos] = useState([])
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  useEffect(() => {
    carregarDados()
  }, [])

  async function carregarDados() {
    const lista = await listarAgendamentos()
    setAgendamentos(lista)
  }

  async function handleAgendar(e) {
    e.preventDefault()

    if (!tutor.trim() || !pet.trim()) {
      setErro('Preencha o nome do tutor e do pet.')
      setMensagem('')
      return
    }

    const salvo = await salvarAgendamento({ tutor, pet, servico })
    setAgendamentos([salvo, ...agendamentos])

    setTutor('')
    setPet('')
    setServico('Banho e tosa')
    setErro('')
    setMensagem(`Agendamento salvo para ${salvo.pet}!`)
  }

  async function handleExcluir(id) {
    await excluirAgendamento(id)
    setAgendamentos(agendamentos.filter((item) => item.id !== id))
    setMensagem('Agendamento cancelado.')
  }

  return (
    <section className="secao">
      <h2>Agendamento Online</h2>
      <p className="texto">
        Cadastre o atendimento do seu pet no banco de dados.
      </p>

      <div className="painel-agendamento">
        <form className="formulario-card" onSubmit={handleAgendar}>
          <h3>
            <FaCalendarPlus /> Novo Agendamento
          </h3>

          {erro && <p className="alerta-erro">{erro}</p>}
          {mensagem && <p className="alerta-sucesso">{mensagem}</p>}

          <div className="campo-form">
            <label>Nome do Tutor</label>
            <input
              type="text"
              placeholder="Ex.: Maria"
              value={tutor}
              onChange={(e) => setTutor(e.target.value)}
            />
          </div>

          <div className="campo-form">
            <label>Nome do Pet</label>
            <input
              type="text"
              placeholder="Ex.: Totó"
              value={pet}
              onChange={(e) => setPet(e.target.value)}
            />
          </div>

          <div className="campo-form">
            <label>Serviço</label>
            <select value={servico} onChange={(e) => setServico(e.target.value)}>
              <option value="Banho e tosa">Banho e tosa (R$ 50)</option>
              <option value="Consulta veterinária">Consulta veterinária (R$ 80)</option>
              <option value="Hospedagem">Hospedagem (R$ 40/dia)</option>
            </select>
          </div>

          <button type="submit" className="botao botao-submit">
            Salvar Agendamento
          </button>
        </form>

        <div className="lista-banco-card">
          <h3>
            <FaDatabase /> Agendamentos ({agendamentos.length})
          </h3>

          {agendamentos.length === 0 ? (
            <p className="mensagem-vazia">Nenhum agendamento registrado.</p>
          ) : (
            <div className="lista-agendamentos">
              {agendamentos.map((item) => (
                <AgendamentoItem
                  key={item.id}
                  id={item.id}
                  tutor={item.tutor}
                  pet={item.pet}
                  servico={item.servico}
                  onExcluir={handleExcluir}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Agendamento
