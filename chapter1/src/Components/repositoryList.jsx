import RepositoryItem from "./repositoryItem"

const repository = {
  name: 'unform',
  description: 'From in react',
  link: 'https://github.com/unform/unform'
}

function RepositoryList() {
  return (
    <section className="repositoryList">
      <h1>Lista de Repositórios</h1>

      <ul>
       <RepositoryItem repository={ repository }/>
       <RepositoryItem />
       <RepositoryItem />
       <RepositoryItem />
      </ul>

    </section>
  )
}

export default RepositoryList