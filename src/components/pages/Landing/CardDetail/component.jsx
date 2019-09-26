import React from 'react'
import StandardLayout from '@/components/layouts/Standard'
import { connect } from 'react-redux';

class CardDetail extends React.Component {

  render() {
    console.log(this.props.history.location.pathname);
    //console.log(this.props.history.location);
    console.log(this.state)


    return (
      <StandardLayout>
        <div>carddddd</div>
        {
          //cache.add(request).then(function() {
          // request has been added to the cache
        }
      </StandardLayout>
    )
  }
}

function mapStateToProps(state) {
  const { todos } = state
  return { todoList: todos }
}

export default connect(mapStateToProps)(CardDetail)