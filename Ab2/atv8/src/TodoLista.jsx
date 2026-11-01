import './TodoLista.css'
import TodoItem from './TodoItem'

function TodoLista(props) {
  return (
    <ul className="todo-lista">
      {props.tarefas.map((tarefa) => (
        <TodoItem key={tarefa.id} texto={tarefa.texto} />
      ))}
    </ul>
  )
}

export default TodoLista

