import React from 'react'
import renderer from 'react-test-renderer'
import Details from '../../src/components/Details'

describe('Details.js', () => {
  it('renders the component as expected', () => {
    const tree = renderer
      .create(<Details url={`https://pokeapi.co/api/v2/pokemon/1`} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
