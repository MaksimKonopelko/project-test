import React from 'react'
import StandardLayout from '@/components/layouts/Standard'
import { connect } from 'react-redux';
import { sendToRefreshProduct } from '../../../../reducer';

class CardDetail extends React.Component {

  constructor(props) {
    super(props);
    this.card = null;
  }

  componentDidMount() {
    this.props.dispatch(sendToRefreshProduct());
  }

  componentDidUpdate(){
    this.card = this.props.data.find((elem) => elem._id.$oid == this.props.match.params.id);
  }


  componentWillReceiveProps(){
    this.card = this.props.data.find((elem) => elem._id.$oid == this.props.match.params.id);
    return true
  }

  render() {

    console.log('this card_RENDER', this.card)
    return (
      <StandardLayout>
        {
          this.card &&  (
          
            <div>{this.card._id.$oid}</div>
            
          )
        }
      </StandardLayout>
    )
  }
}

const mapStateToProps = state => {
  return state.root;
}

export default connect(mapStateToProps)(CardDetail)