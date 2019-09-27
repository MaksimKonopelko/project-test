import React from 'react'
import StandardLayout from '@/components/layouts/Standard'
import { connect } from 'react-redux';
import { sendToRefreshProduct } from '../../../../reducer';

class CardDetail extends React.Component {

  componentWillMount() {
    this.props.dispatch(sendToRefreshProduct());
  }

  render() {
    //console.log(this.props.match.params.id);

    return (
      <StandardLayout>
        <div>{this.props.match.params.id}</div>
      </StandardLayout>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(CardDetail)