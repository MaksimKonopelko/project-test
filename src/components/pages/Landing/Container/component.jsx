import React from 'react'
import { connect } from 'react-redux';
import ContainerStyle from './styles'
import Card from './Cards/Card';
import { sendToRefreshProduct } from '../../../../reducer';

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(sendToRefreshProduct());
    }

    render() {
        return (
            <ContainerStyle>
                <div>
                    {
                        this.props.data && (this.props.data.map((card) => (<Card key={card.title} card={card}></Card>)))
                    }
                </div>
            </ContainerStyle>
        )
    }
}

const mapStateToProps = state => {
    return state.root
}

export default connect(mapStateToProps)(Container)