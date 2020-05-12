import useSWR, { mutate } from 'swr'
import fetcher from '../utils/fetcher'
import Details from './Details'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const List = ({ url, nextUrl, previousUrl }) => {
  const { data: pokemonsReq, error } = useSWR(url, fetcher)
  const classes = useStyles()

  if (error) return <p>Falhou ao tentar acessar a API.</p>
  if (!pokemonsReq) return <p>Carregando lista de pokemons...</p>

  const { results: pokemons, next, previous } = pokemonsReq.data
  if (!pokemons) return <p>Sem dados!</p>

  // PS: this is a callback to update pagination and will
  // trigger a warning from debugger. It's ok to ignore the
  // warning as it's an intended action.
  nextUrl(next)
  previousUrl(previous)

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          aria-label="table of pokemons"
          className={classes.table}
        >
          <TableHead>
            <TableRow>
              <TableCell>Sprite</TableCell>
              <TableCell>#</TableCell>
              <TableCell>Pokémon</TableCell>
              <TableCell>Types</TableCell>
              <TableCell>Abilities</TableCell>
              <TableCell>Forms</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.map((pokemon) => (
              <Details url={pokemon.url} key={pokemon.url} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default List
