import styled from 'styled-components'

export default styled.menu`
  height: 128px;
  color: ${props => props.theme.colors.backgroundDark};

  li {
    display : inline; 
    margin-right: 10px;
    cursor: pointer;
  }
`