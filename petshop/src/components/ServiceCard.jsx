// Componente reutilizável: recebe os dados por props
function ServiceCard(props) {
  return (
    <article className="card">
      <img src={props.imagem} alt={props.titulo} />
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
      <p className="preco">{props.preco}</p>
    </article>
  )
}

export default ServiceCard
