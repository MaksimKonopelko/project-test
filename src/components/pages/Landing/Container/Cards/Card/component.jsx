import React from 'react'
import CardStyle from './styles'

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardStyle>
                {this.props.card.title}
            </CardStyle>
        )
    }
}

export default Card