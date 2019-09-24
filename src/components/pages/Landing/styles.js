import styled from 'styled-components'

export default styled.main`
  background: ${props => props.theme.colors.dark};
  display: ${props => props.theme.display.grid};
  grid-template-columns: repeat(auto-fit,minmax(280px,auto));
  padding: 3%;
`