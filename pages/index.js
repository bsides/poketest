import List from '../components/List'

const API = {
  url: `https://pokeapi.co/api/v2/`,
  path: `pokemon/`,
}

const index = () => {
  return <List url={API.url} path={API.path} />
}

export default index
