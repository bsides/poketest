import fetcher from '../../src/utils/fetcher'
import axios from 'axios'

jest.mock('axios')

describe('fetcher.js', () => {
  it('should bring data from PokeAPI pokemon index', async () => {
    axios.get.mockResolvedValue({
      data: ['lots of pokemon data!!!'],
      status: 200,
    })

    const request = await fetcher(
      `https://pokeapi.co/api/v2/pokemon/?limit=&offset=`
    )

    expect(request.status).toBe(200)
  })
})
