import styled from 'styled-components'

export default styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.primaryDark};
  font-size: ${props => props.theme.fontSizes.weryBig};
`