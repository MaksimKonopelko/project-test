import styled from 'styled-components'

export default styled.menu`
  height: 15%;
  color: ${props => props.theme.colors.primaryDark};
  text-align: right;
  display: block;
  padding: 10px;

  li {
    display : inline; 
    margin-right: 10px;
    cursor: pointer;
  }
`