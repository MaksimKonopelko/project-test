import styled from 'styled-components'

export default styled.div`
    h2{
        text-align: ${props => props.theme.side.center};
    }

    label{
        padding: ${props => props.theme.size[5]};
        display: ${props => props.theme.display.block};
        border-bottom: 1px solid #e5e8ed;
        margin 0;
        cursor: pointer;
    }
`