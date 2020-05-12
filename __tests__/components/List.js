import React from 'react'
import renderer from 'react-test-renderer'
import List from '../../src/components/Details'

describe('List.js', () => {
  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <List
          url={`https://pokeapi.co/api/v2/pokemon/?limit=&offset=`}
          nextUrl={() => ''}
          previousUrl={() => ''}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
