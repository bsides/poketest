import styled from 'styled-components'
import { capitalize } from '../utils/format'
import theme from '../utils/theme'
import Chip from '@material-ui/core/Chip'

const { typeColors } = theme.palette

const TypeStyled = styled.span`
  background-color: ${(props) =>
    props.type ? typeColors[props.type] : typeColors['unknown']};
  color: #fff;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.2rem 0.7rem;
  margin-left: 0.4rem;
`

const Type = ({ name }) => {
  return <TypeStyled type={name}>{capitalize(name)}</TypeStyled>
}

export default Type
