import './App.css'
import TodoLista from './TodoLista'

function App() {
  const tarefas = [
    { id: 1, texto: 'Estudar componentes e Props no React' },
    { id: 2, texto: 'Praticar gerenciamento de estado com useState' },
    { id: 3, texto: 'Implementar renderização condicional e listas' },
    { id: 4, texto: 'Estilizar a aplicação com CSS' },
    { id: 5, texto: 'Revisar os exercícios da disciplina de Programação Web I' },
  ]

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TodoLista tarefas={tarefas} />
    </div>
  )
}

export default App

