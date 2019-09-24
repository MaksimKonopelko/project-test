import styled from 'styled-components'

export default styled.span`
    display: ${props => props.theme.display.block};
    margin-bottom: ${props => props.theme.size[5]};
    
    div{
        display: ${props => props.theme.display.flex};
        flex-direction: ${props => props.theme.flex_direction.column};
        background:  ${props => props.theme.colors.white};;
        margin: 0px 10px;
        padding: ${props => props.theme.size[5]};

        div{
            display: ${props => props.theme.display.flex};
            flex-direction: ${props => props.theme.flex_direction.row};
        
            img{
                width: ${props => props.theme.size[100]};
                height: ${props => props.theme.size[100]};
                object-fit: cover;
                //max-width: 225px;
            }
        }
    }
`