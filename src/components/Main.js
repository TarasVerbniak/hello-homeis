import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGuideList, getGuide, initialize } from '../redux/actions';
import GuideList from './GuideList';
import Guide from './Guide';

class Main extends Component {

  componentDidMount(){
    this.props.initialize();
  }

  render() {
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
    dispatch,
    getGuideList: () => dispatch(getGuideList()),
    getGuide: (url) => dispatch(getGuide(url)),
    initialize: () => dispatch(initialize())
  };
}

export default connect(mapState, mapDispatch)(Main);
