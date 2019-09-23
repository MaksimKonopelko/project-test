import styled from 'styled-components'

export default styled.div`
    display: grid;
    flex-grow: 1;
    padding : 0px
    background: #eee;
    
    div{
        //display: grid;
        align-items: start;
            grid-template-rows: 10px 10px ;

        div{
            display: grid;
            padding: 5%;
            background: white;
            //height: 5%;
            margin-bottom: 10%;
        }
    }
`