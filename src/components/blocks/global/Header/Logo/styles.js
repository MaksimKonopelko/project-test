import styled from 'styled-components'

export default styled.div`
  
     display: ${props => props.theme.display.flex};
     position: ${props => props.theme.position.relative};

  img {
    display: ${props => props.theme.display.flex};
    position: ${props => props.theme.position.relative};
    margin: 0 auto;
    width: ${props => props.theme.size[100]};
    height: ${props => props.theme.size[100]};
    color: ${props => props.theme.colors.darkgray};
    background-repeat: no-repeat; 
    background-size: cover; 
    max-width: ${props => props.theme.size[100]};
    min-height: ${props => props.theme.size[40]};

    object-fit: cover;
    object-position: top right;
  }

  h2 {
    position: ${props => props.theme.position.absolute};
    z-index: 9999;

    top: 3em;
    left: 7em;
    font-size: 5vw;
   
    color: ${props => props.theme.colors.dark1};    
    font-family: segoe print;  
    padding-left: ${props => props.theme.size[1]};
    padding-right: ${props => props.theme.size[1]};
    border-radius: 5px;
    transform: translate(-50%, -50%);
    background: rgba(204, 255, 255, 0.2);
  }
`