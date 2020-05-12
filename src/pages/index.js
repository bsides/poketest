import { useState } from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { makeStyles } from '@material-ui/core/styles'
import List from '../components/List'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.common.black,
  },
  offset: theme.mixins.toolbar,
  atBarColor: {
    color: theme.palette.common.white,
  },
  appBarColor: {
    background: '#ffc',
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
    <>
      <AppBar position="fixed" className={classes.appBarColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pokétest
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="per-page-label">Pokémons</InputLabel>
            <Select
              labelId="per-page-label"
              id="per-page-select"
              value={perPage}
              onChange={handleResults}
            >
              <MenuItem value={20}>20 per page</MenuItem>
              <MenuItem value={35}>35 per page</MenuItem>
              <MenuItem value={70}>70 per page</MenuItem>
            </Select>
          </FormControl>
          <ButtonGroup variant="contained">
            <Button
              startIcon={<NavigateBeforeIcon />}
              onClick={() => setUrl(previousUrl)}
              disabled={!previousUrl}
            >
              Previous {previousUrl ? perPage : ''}
            </Button>
            <Button
              endIcon={<NavigateNextIcon />}
              onClick={() => setUrl(nextUrl)}
              disabled={!nextUrl}
            >
              Next {nextUrl ? perPage : ''}
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <Paper>
        <List url={url} nextUrl={setNextUrl} previousUrl={setPreviousUrl} />
      </Paper>
    </>
  )
}

export default index
