import axios from 'axios'

async function fetcher(url) {
  return await axios.get(url)
}

export default fetcher
