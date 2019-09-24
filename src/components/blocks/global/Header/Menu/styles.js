import styled from 'styled-components'

export default styled.menu`
  display: ${props => props.theme.display.flex};
  flex-direction: ${props => props.theme.flex_direction.row_reverse};
  // height: ${props => props.theme.size[15]};
  color: ${props => props.theme.colors.primaryDark};
  text-align: ${props => props.theme.side.right};
  padding: 1em 0;
  
  li {
    display : ${props => props.theme.display.inline};
    margin-right: ${props => props.theme.sizePx[30]};
    cursor: pointer;

    font-weight: 700;
    color: #333;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.sizePx[1]};
  }

  @media (max-width: 586px) {
    justify-content: ${props => props.theme.side.center};
    text-align: ${props => props.theme.side.center};
    min-height: min-content;

    li{
      display: ${props => props.theme.display.block};
    }  
  }
`