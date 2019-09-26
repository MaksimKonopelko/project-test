import React from 'react'
import { withRouter } from "react-router";
import CardStyle from './styles'

import styled from 'styled-components'

const CardBottom = styled.div`
    flex-direction: row;
    margin: 0;
    padding: 0;
`

class Card extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    renderRedirect = () => {
        this.props.history.push(`/card_detail/${this.props.card._id.$oid}`);
    }

    render() {
        return (
            <CardStyle>
                <div onClick={this.renderRedirect}>
                    <div>
                        <img alt="photo_not_uploaded" src={this.props.card.images[0]}></img>
                    </div>
                    <CardBottom>
                        <span>{this.props.card.title}</span>
                        <div>{this.props.card.price}$</div>
                    </CardBottom>
                </div>
            </CardStyle>
        )
    }
}

export default withRouter(Card);