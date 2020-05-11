import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import { capitalize } from '../utils/format'
import Type from './Type'

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
  if (error) return <p>Falhou ao tentar acessar a API.</p>
  if (!detailsReq) return <p>Carregando detalhes do pokemon...</p>

  const { id, name, sprites, types, abilities, forms } = detailsReq.data
  return (
    <li>
      <p>
        <img src={sprites.front_default} />
      </p>
      <p>{id}</p>
      <p>{capitalize(name)}</p>
      <p>
        {types.map((t) => (
          <Type key={t.type.name} name={t.type.name} />
        ))}
      </p>
      <p>
        {abilities.map((a) => (
          <span key={a.ability.name}>
            {capitalize(a.ability.name)} {a.is_hidden ? `(hidden)` : ``}
          </span>
        ))}
      </p>
      <p>
        {forms.map((form) => (
          <span key={form.name}>{capitalize(form.name)}</span>
        ))}
      </p>
    </li>
  )
}

export default Details
