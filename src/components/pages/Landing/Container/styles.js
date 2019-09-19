import styled from 'styled-components'

export default styled.div`
    display: grid;
    flex-grow: 4;
    padding : 0%
    background: gray;

    div{
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-template-rows: repeat(2, 100px);
        align-items: center;
        justify-items: center;      
    }
`