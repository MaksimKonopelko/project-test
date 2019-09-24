import styled from 'styled-components'

export default styled.div`
    display: grid;
    flex-grow: 4;
    padding : 0%
    background: #eee;
    margin: 0px 10px;

    div{
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
        //grid-template-rows: repeat(auto-fit, 100px);
        align-items: center;
        justify-items: center;      
        
        //padding: 5%; 
        //padding: 0% 5% 5% 5%;
    }
`