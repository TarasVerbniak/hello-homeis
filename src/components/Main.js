import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGuideList, getGuide } from '../redux/actions'
import GuideList from './GuideList'
import Guide from './Guide';

class Main extends Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.getGuideList()
    }, 1000)
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
    getGuide: (url) => dispatch(getGuide(url))
  };
}

export default connect(mapState, mapDispatch)(Main);
