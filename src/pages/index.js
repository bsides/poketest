import List from '../components/List'

const index = () => {
  return <List url={process.env.API.url} path={process.env.API.path} />
}

export default index
