import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span className="todo-texto">{props.texto}</span>
    </li>
  )
}

export default TodoItem

