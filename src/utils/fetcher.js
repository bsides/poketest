import axios from 'axios'

function fetcher(url) {
  //console.log('Fetching ' + url)
  return axios.get(url)
}

export default fetcher
