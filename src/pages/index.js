import { useState } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { makeStyles } from '@material-ui/core/styles'
import List from '../components/List'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const index = () => {
  const [url, setUrl] = useState(process.env.API.url + process.env.API.path)
  const [perPage, setPerPage] = useState(20)
  const [nextUrl, setNextUrl] = useState('')
  const [previousUrl, setPreviousUrl] = useState('')
  const classes = useStyles()

  function handleResults(evt) {
    const { value } = evt.target
    setPerPage(value)
    const urlObj = new URL(url)
    urlObj.searchParams.set('limit', value)
    setUrl(urlObj.href)
  }

  return (
    <div>
      <select onChange={handleResults}>
        <option value="20">20 results per page</option>
        <option value="35">35 results per page</option>
        <option value="70">70 results per page</option>
      </select>
      <Button
        className={classes.button}
        variant="contained"
        startIcon={<NavigateBeforeIcon />}
        onClick={() => setUrl(previousUrl)}
        disabled={!previousUrl}
      >
        Previous {previousUrl ? perPage : ''}
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        endIcon={<NavigateNextIcon />}
        onClick={() => setUrl(nextUrl)}
        disabled={!nextUrl}
      >
        Next {nextUrl ? perPage : ''}
      </Button>
      <List url={url} nextUrl={setNextUrl} previousUrl={setPreviousUrl} />
    </div>
  )
}

export default index
