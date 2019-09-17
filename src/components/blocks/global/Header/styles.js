import styled from 'styled-components'

export default styled.header`
  height: 256px;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.primaryDark};
  font-size: ${props => props.theme.fontSizes.weryBig};
`