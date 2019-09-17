import styled from 'styled-components'

export default styled.logo`
  height: 128px;
  background-color: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.backgroundDark};
  font-size: ${props => props.theme.fontSizes.weryBig};
  padding-left: ${props => props.theme.unit.quadriple};
  padding-right: ${props => props.theme.unit.quadriple};
  padding-top: ${props => props.theme.unit.double};
  padding-bottom: ${props => props.theme.unit.double};
`