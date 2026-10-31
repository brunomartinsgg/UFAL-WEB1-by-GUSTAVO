import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="card-info">
        <h2 className="card-nome">{props.nome}</h2>
        <p className="card-descricao">{props.descricao}</p>
      </div>
      <div className="card-preco">
        <span>{props.preco}</span>
      </div>
    </div>
  )
}

export default Card

