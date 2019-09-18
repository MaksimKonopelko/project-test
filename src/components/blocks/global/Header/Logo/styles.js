import styled from 'styled-components'

export default styled.div`
  //height: 300px;
  // height: 77%;
  // color: ${props => props.theme.colors.darkgray};
  // max-width: 100%;
  // margin: 0 auto;
  // background-position: 85% 1%;
  // background-repeat: no-repeat;
  // background-size: cover;
  // width: 100%;
     display: flex;
     position: relative;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    color: darkgray; 
    margin: 0 auto;
    //background-position: 85% 1%;
    background-repeat: no-repeat; 
    background-size: cover; 
    display: flex;
    max-width: 100%;
    min-height: 40%;

    object-fit: cover;
    object-position: top right;
  }

  h2 {
    position: absolute;
    z-index: 9999;

    top: 3em;
    left: 7em;
    font-size: 5vw;
   
    color: dark;    
    font-family: segoe print;  
    padding-left: 1%;
    padding-right: 1%;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    background: rgba(204, 255, 255, 0.2);
  }
`