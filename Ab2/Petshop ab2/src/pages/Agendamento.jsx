import { useState, useEffect } from 'react'
import { FaCalendarPlus, FaCheckCircle, FaDatabase } from 'react-icons/fa'
import AgendamentoItem from '../components/AgendamentoItem'
import {
  listarAgendamentos,
  salvarAgendamento,
  excluirAgendamento,
} from '../services/firebase'

function Agendamento() {
  const [tutor, setTutor] = useState('')
  const [telefone, setTelefone] = useState('')
  const [pet, setPet] = useState('')
  const [especie, setEspecie] = useState('Cachorro')
  const [servico, setServico] = useState('Banho e tosa')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')

  const [agendamentos, setAgendamentos] = useState([])
  const [mensagemSucesso, setMensagemSucesso] = useState('')
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

    if (!tutor.trim() || !telefone.trim() || !pet.trim() || !data || !horario) {
      setErro('Por favor, preencha todos os campos do agendamento.')
      setMensagemSucesso('')
      return
    }

    const novo = {
      tutor,
      telefone,
      pet,
      especie,
      servico,
      data,
      horario,
    }

    const salvo = await salvarAgendamento(novo)
    setAgendamentos([salvo, ...agendamentos])

    setTutor('')
    setTelefone('')
    setPet('')
    setEspecie('Cachorro')
    setServico('Banho e tosa')
    setData('')
    setHorario('')
    setErro('')
    setMensagemSucesso(`Horário agendado com sucesso para o pet ${salvo.pet}!`)
  }

  async function handleExcluir(id) {
    await excluirAgendamento(id)
    setAgendamentos(agendamentos.filter((item) => item.id !== id))
    setMensagemSucesso('Agendamento cancelado com sucesso.')
  }

  return (
    <section className="secao">
      <h2>Agendamento Online</h2>
      <p className="texto">
        Cadastre o atendimento do seu pet no banco de dados do PetShop do Totó.
      </p>

      <div className="painel-agendamento">
        <form className="formulario-card" onSubmit={handleAgendar}>
          <h3>
            <FaCalendarPlus /> Novo Agendamento
          </h3>

          {erro && <p className="alerta-erro">{erro}</p>}
          {mensagemSucesso && (
            <p className="alerta-sucesso">
              <FaCheckCircle /> {mensagemSucesso}
            </p>
          )}

          <div className="campo-form">
            <label>Nome do Tutor</label>
            <input
              type="text"
              placeholder="Ex.: Ana Beatriz"
              value={tutor}
              onChange={(e) => setTutor(e.target.value)}
            />
          </div>

          <div className="campo-form">
            <label>Telefone / WhatsApp</label>
            <input
              type="text"
              placeholder="Ex.: (82) 99999-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className="linha-form">
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
              <label>Espécie</label>
              <select value={especie} onChange={(e) => setEspecie(e.target.value)}>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
              </select>
            </div>
          </div>

          <div className="campo-form">
            <label>Serviço Desejado</label>
            <select value={servico} onChange={(e) => setServico(e.target.value)}>
              <option value="Banho e tosa">Banho e tosa (R$ 50)</option>
              <option value="Consulta veterinária">Consulta veterinária (R$ 80)</option>
              <option value="Hospedagem">Hospedagem (R$ 40/dia)</option>
            </select>
          </div>

          <div className="linha-form">
            <div className="campo-form">
              <label>Data</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>

            <div className="campo-form">
              <label>Horário</label>
              <input
                type="time"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="botao botao-submit">
            Salvar Agendamento
          </button>
        </form>

        <div className="lista-banco-card">
          <h3>
            <FaDatabase /> Agendamentos Salvos ({agendamentos.length})
          </h3>

          {agendamentos.length === 0 ? (
            <p className="mensagem-vazia">Nenhum agendamento registrado no momento.</p>
          ) : (
            <div className="lista-agendamentos">
              {agendamentos.map((item) => (
                <AgendamentoItem
                  key={item.id}
                  id={item.id}
                  tutor={item.tutor}
                  telefone={item.telefone}
                  pet={item.pet}
                  especie={item.especie}
                  servico={item.servico}
                  data={item.data}
                  horario={item.horario}
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
