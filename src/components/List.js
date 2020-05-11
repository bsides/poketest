import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import Details from './Details'

const List = ({ url, path }) => {
  const { data: pokemonsReq, error } = useSWR(url + path, fetcher)

  if (error) return <p>Falhou ao tentar acessar a API.</p>
  if (!pokemonsReq) return <p>Carregando lista de pokemons...</p>

  const { results: pokemons } = pokemonsReq.data
  if (!pokemons) return <p>Sem dados!</p>

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.url}>
            <Details url={pokemon.url} name={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
