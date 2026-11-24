import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import ServiceCard from '../components/ServiceCard'

const listaServicos = [
  {
    id: 1,
    imagem:
      'https://cdn-hipkdab.nitrocdn.com/zPcDBoPvgkUnKxknnzxjjOkKDtWMnsuz/assets/images/optimized/rev-e2d251d/www.hospitalvetitaquera.com.br/wp-content/uploads/2020/07/estetica.png',
    titulo: 'Banho e tosa',
    categoria: 'Estética',
    descricao: 'Banho, tosa e cuidados de higiene para o seu pet.',
    preco: 'A partir de R$ 50',
    detalhes:
      'Inclui banho com produtos hipoalergênicos, corte de unhas, limpeza de ouvidos e secagem.',
  },
  {
    id: 2,
    imagem:
      'https://media.istockphoto.com/id/1144737661/pt/foto/cat-doctor-with-medical-supplies.jpg?s=170667a&w=0&k=20&c=aoQ-Htfqd8o7GRXKqtALXI70Iaym3skvRDSU0LD5s4Y=',
    titulo: 'Consulta veterinária',
    categoria: 'Saúde',
    descricao: 'Atendimento com veterinário para cães e gatos.',
    preco: 'A partir de R$ 80',
    detalhes:
      'Avaliação clínica completa, atualização de carteira de vacinação e orientação nutricional.',
  },
  {
    id: 3,
    imagem:
      'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_cachorro-com-bandeja-de-comida3.jpg',
    titulo: 'Hospedagem',
    categoria: 'Bem-estar',
    descricao: 'Seu pet bem cuidado enquanto você viaja.',
    preco: 'R$ 40 por dia',
    detalhes:
      'Ambiente monitorado, recreação diária, alimentação nos horários programados e envio de fotos.',
  },
]

function Servicos() {
  const [busca, setBusca] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas')

  const servicosFiltrados = listaServicos.filter((servico) => {
    const correspondeBusca =
      servico.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      servico.descricao.toLowerCase().includes(busca.toLowerCase())
    const correspondeCategoria =
      categoriaSelecionada === 'Todas' || servico.categoria === categoriaSelecionada
    return correspondeBusca && correspondeCategoria
  })

  return (
    <section id="servicos" className="secao">
      <h2>Nossos serviços</h2>
      <p className="texto">
        Confira os serviços oferecidos pelo PetShop do Totó, veja os preços e agende online.
      </p>

      <div className="filtros-container">
        <div className="campo-busca">
          <FaSearch className="icone-busca" />
          <input
            type="text"
            placeholder="Buscar serviço..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="botoes-filtro">
          {['Todas', 'Estética', 'Saúde', 'Bem-estar'].map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={
                categoriaSelecionada === categoria ? 'filtro-btn ativo' : 'filtro-btn'
              }
              onClick={() => setCategoriaSelecionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {servicosFiltrados.length === 0 ? (
        <p className="mensagem-vazia">Nenhum serviço encontrado para a sua busca.</p>
      ) : (
        <div className="cards">
          {servicosFiltrados.map((servico) => (
            <ServiceCard
              key={servico.id}
              imagem={servico.imagem}
              titulo={servico.titulo}
              categoria={servico.categoria}
              descricao={servico.descricao}
              preco={servico.preco}
              detalhes={servico.detalhes}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Servicos
