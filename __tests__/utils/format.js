import { capitalize } from '../../src/utils/format'

describe('format.js', () => {
  it('should capitalize the letters in the string "pikachu"', () => {
    const pokemon = 'pikachu'

    const result = capitalize(pokemon)

    expect(result).toBe('Pikachu')
  })
  it('should strip the dashes from the ability "inner-focus" and capitalize', () => {
    const ability = 'inner-focus'

    const result = capitalize(ability)

    expect(result).toBe('Inner Focus')
  })
})
