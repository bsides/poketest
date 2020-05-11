import useSWR, { mutate } from 'swr'
import fetcher from '../utils/fetcher'
import Details from './Details'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const List = ({ url, nextUrl, previousUrl }) => {
  const { data: pokemonsReq, error } = useSWR(url, fetcher)

  if (error) return <p>Falhou ao tentar acessar a API.</p>
  if (!pokemonsReq) return <p>Carregando lista de pokemons...</p>

  const { results: pokemons, next, previous } = pokemonsReq.data
  if (!pokemons) return <p>Sem dados!</p>

  nextUrl(next)
  previousUrl(previous)

  return (
    <div>
      <ul>
        <li>
          <p></p>
          <p>#</p>
          <p>Pokémon</p>
          <p>Type</p>
          <p>Ability</p>
          <p>Form</p>
        </li>
        {pokemons.map((pokemon) => (
          <Details url={pokemon.url} name={pokemon.name} key={pokemon.url} />
        ))}
      </ul>
    </div>
  )
}

export default List
