import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

  body {
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.font};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-family: ${props => props.theme.fontFamily}
  }

  main {
    padding-left: ${props => props.theme.unit.double};
    padding-right: ${props => props.theme.unit.double};
    padding-top: ${props => props.theme.unit.quadriple};
    padding-bottom: ${props => props.theme.unit.quadriple};
  }
`
