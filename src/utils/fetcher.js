import axios from 'axios'

async function fetcher(url) {
  //console.log('Fetching ' + url)
  return await axios.get(url)
}

export default fetcher
