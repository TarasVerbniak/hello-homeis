import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuideList from './GuideList'
import Guide from './Guide';

class Main extends Component {
  render() {
    console.log('state', this.props.state)
    console.log('dispatch', this.props.dispatch)
    return (
      <div className='main'>
        <Guide />
        <GuideList />
      </div>
    );
  }
}


// Redux stuff
function mapState(state){
  return {
    state
  };
}
function mapDispatch(dispatch){
  return {
    dispatch
  };
}

export default connect(mapState, mapDispatch)(Main);
