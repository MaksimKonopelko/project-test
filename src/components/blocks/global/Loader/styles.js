import styled from 'styled-components'

export default styled.div`
  display: inline-block;
  width: ${props => props.theme.unit.eight};
  height: ${props => props.theme.unit.eight};
  position: absolute;
  left: 50%;
  top: 50%;

  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.colors.primary};
    border-color:
      ${props => props.theme.colors.primary} transparent
      ${props => props.theme.colors.primary} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
