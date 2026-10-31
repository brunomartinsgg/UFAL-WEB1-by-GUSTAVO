import './App.css'
import Card from './Card'

function App() {
  return (
    <div className="container">
      <h1>Lista de Produtos</h1>

      <Card
        nome="Notebook Gamer"
        descricao="Processador Intel Core i7, 16GB RAM, SSD 512GB e placa de vídeo dedicada."
        preco="R$ 4.599,00"
      />

      <Card
        nome="Mouse Sem Fio"
        descricao="Mouse ergonômico óptico com conexão Bluetooth e bateria recarregável."
        preco="R$ 129,90"
      />

      <Card
        nome="Teclado Mecânico"
        descricao="Teclado compacto ABNT2 com iluminação LED e switches silenciosos."
        preco="R$ 249,00"
      />
    </div>
  )
}

export default App

