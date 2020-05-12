import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import { capitalize } from '../utils/format'
import Type from './Type'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

/*
  Details to show in the index:

  1 - Number # in national pokedex - id: int
  2 - Name - name: string
  3 - Sprite - sprites: {backdefault: null | string, back_female: null | string, back_shiny: null | string, back_shiny_female: null | string, front_default: null | string, front_female: null | string, front_shiny: null | string, front_shiny_female: null | string}
  4 - Type - types: [{slot: int, type: {name: string, url: string}}]
  5 - Abilities - abilities: [{ability:{name: string, url: string}, is_hidden: boolean, slot: int}]
  6 - Forms - forms: [{name: string, url: string}]
*/
const Details = ({ url }) => {
  const { data: detailsReq, error } = useSWR(url, fetcher)

  if (error)
    return (
      <TableRow>
        <TableCell>
          <p>Falhou ao tentar acessar a API.</p>
        </TableCell>
      </TableRow>
    )
  if (!detailsReq)
    return (
      <TableRow>
        <TableCell>
          <p>Carregando detalhes do pokemon...</p>
        </TableCell>
      </TableRow>
    )

  const { id, name, sprites, types, abilities, forms } = detailsReq.data
  return (
    <TableRow key={id} hover={true}>
      <TableCell component="th" scope="row">
        <img src={sprites.front_default} />
      </TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{capitalize(name)}</TableCell>
      <TableCell>
        {types.map((t) => (
          <Type key={t.type.name} name={t.type.name} />
        ))}
      </TableCell>
      <TableCell>
        {abilities.map((a) => (
          <Typography key={a.ability.name}>
            {capitalize(a.ability.name)} {a.is_hidden ? `(hidden)` : ``}
          </Typography>
        ))}
      </TableCell>
      <TableCell>
        {forms.map((form) => (
          <Typography key={form.name}>{capitalize(form.name)}</Typography>
        ))}
      </TableCell>
    </TableRow>
  )
}

export default Details
