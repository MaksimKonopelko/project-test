import styled from 'styled-components'

export default styled.footer`
  height: 100px;
  background-color: ${props => props.theme.colors.backgroundDark};
  color: ${props => props.theme.colors.font};
  padding-left: ${props => props.theme.unit.double};
  padding-right: ${props => props.theme.unit.double};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};
`