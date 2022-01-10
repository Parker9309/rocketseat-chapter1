function RepositoryItem(props) {
  return(
    <ul>
     <li className="lists">

          <strong>{props.repository?.name ?? 'Deafult'}</strong>

          <p>{ props.repository.description }</p>

          <a href={ props.repository.link}>
            Acessar repositório
            </a>

        </li> 
      </ul>
  )
}

export default RepositoryItem