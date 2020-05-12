const testEnv = process.env.NODE_ENV
module.exports = {
  env: {
    which: testEnv,
    API: {
      url: `https://pokeapi.co/api/v2/`,
      path: `pokemon/?limit=&offset=`,
    },
  },
}
