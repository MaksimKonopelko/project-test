import styled from 'styled-components'

export default styled.span`
    display: block;
    margin-bottom: 5%;
    
    div{
        display: flex;
        flex-direction: column;
        background: white;
        margin: 0px 10px;
        padding: 5%

        div{
            display: flex;
            flex-direction: row;
            
            
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                //max-width: 225px;
            }
        }
    }
`