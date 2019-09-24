import styled from 'styled-components'

export default styled.div`
    display: grid;
    //flex-grow: 2;
    //padding : 0px
    background: ${props => props.theme.colors.dark};
    margin: 0px 10px;
    
    div{    
        //align-items: start;
        grid-template-rows: 10px 10px ;
    }
`