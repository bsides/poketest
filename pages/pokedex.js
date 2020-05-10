import useSWR from 'swr'
import { get as fetcher } from 'axios'

let API = `https://pokeapi.co/api/v2/pokemon/`
const params = ``

const pokeindex = () => {
  const { data, error } = useSWR(API, fetcher)

  if (error) return <p>Falhou ao tentar acessar a API.</p>
  if (!data) return <p>Carregando...</p>

  const { results: pokemons } = data.data
  if (!pokemons.length) return <p>Sem dados!</p>

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li>
            <a href={pokemon.url}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(data.data, null, 2)}</pre>
    </div>
  )
}

export default pokeindex
