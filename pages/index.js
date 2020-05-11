import useSWR from 'swr'
import axios from 'axios'
import { useState } from 'react'

function fetcher(url) {
  console.log('Fetching ' + url)
  return axios.get(url)
}

const API = {
  url: `https://pokeapi.co/api/v2/`,
  pokemons: `pokemon/`,
}

const Pokeindex = () => {
  const { data: pokemonsReq, error } = useSWR(API.url + API.pokemons, fetcher)

  if (error) return <p>Falhou ao tentar acessar a API.</p>
  if (!pokemonsReq) return <p>Carregando lista de pokemons...</p>

  const { results: pokemons } = pokemonsReq.data
  if (!pokemons) return <p>Sem dados!</p>

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <PokemonDetail url={pokemon.url} name={pokemon.name} />
        ))}
      </ul>
    </div>
  )
}

/*
  Details to show in the index:

  1 - Number # in national pokedex - id: int
  2 - Name - name: string
  3 - Sprite - sprites: {backdefault: null | string, back_female: null | string, back_shiny: null | string, back_shiny_female: null | string, front_default: null | string, front_female: null | string, front_shiny: null | string, front_shiny_female: null | string}
  4 - Type - types: [{slot: int, type: {name: string, url: string}}]
  5 - Abilities - abilities: [{ability:{name: string, url: string}, is_hidden: boolean, slot: int}]
  6 - Forms - forms: [{name: string, url: string}]
*/

const PokemonDetail = ({ url: pokemonUrl }) => {
  const { data: details, error } = useSWR(pokemonUrl, fetcher)
  if (error) return <p>Falhou ao tentar acessar a API.</p>
  if (!details) return <p>Carregando detalhes do pokemon...</p>

  const { id, name, sprites, types, abilities, forms } = details.data

  return (
    <>
      <li>
        <p>#{id}</p>
        <p>Name: {capitalize(name)}</p>
        <p>
          <img src={sprites.front_default} />
        </p>
        <p>
          Types:{' '}
          {types.map((t) => (
            <div>{capitalize(t.type.name)} </div>
          ))}
        </p>
        <p>
          Abilities:{' '}
          {abilities.map((a) => (
            <div>
              {capitalize(a.ability.name)} {a.is_hidden ? `(hidden)` : ``}
            </div>
          ))}
        </p>
        <p>
          Forms:{' '}
          {forms.map((form) => (
            <div>{capitalize(form.name)}</div>
          ))}
        </p>
      </li>
    </>
  )
}

function capitalize(str) {
  if (str.includes('-')) str = str.replace('-', ' ').toLowerCase()
  const words = str.split(' ')

  if (words.length < 2) return str.charAt(0).toUpperCase() + str.slice(1)

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

export default Pokeindex
