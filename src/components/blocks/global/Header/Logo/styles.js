import styled from 'styled-components'

export default styled.div`
  height: 85%;
  color: ${props => props.theme.colors.darkgray};
  background-image:url('ssr.jpg');
  display: inline-block;
  width: 100%;

  img {
    height: 100px;
    width: 100px;
  }
`