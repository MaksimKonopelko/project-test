import styled from 'styled-components'

export default styled.menu`
  display: flex;
  flex-direction: row-reverse;
  height: 15%;
  color: ${props => props.theme.colors.primaryDark};
  text-align: right;
  padding: 10px;

  li {
    display : inline; 
    margin-right: 30px;
    cursor: pointer;

    font-weight: 700;
    color: #333;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 586px) {
    justify-content: center;
    text-align: center;
    min-height: min-content;

    li{
      display: block;
    }  
  }
`