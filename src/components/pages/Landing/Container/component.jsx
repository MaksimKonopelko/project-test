import React from 'react'
import { connect } from 'react-redux';
import ContainerStyle from './styles'
import Card from './Cards/Card';
import { sendToRefreshProduct } from '../../../../reducer';

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(sendToRefreshProduct());
        this.state = { cards: [] };
    }

    componentDidMount = () => {
        console.log('1', this.props.data);
        // this.setState(() => ({
        //     cards: this.props.root
        // }));
    }

    render() {
        console.log('2', this.props.data);
        return (
            <ContainerStyle>
                <div>
                    {
                        this.props.data && this.state.cards.map((card) => (<Card key={card.title} card={card}></Card>))
                    }
                </div>
            </ContainerStyle>
        )
    }
}

const mapStateToProps = state => {
    return state.root;
}

export default connect(mapStateToProps)(Container)