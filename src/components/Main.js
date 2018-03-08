import React, { Component } from "react";
import { connect } from "react-redux";
import { getGuideList, getGuide, initialize } from "../redux/actions";
import GuideList from "./GuideList";
import Guide from "./Guide";
import Spinner from "./Spinner";

class Main extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    const { guide, guideList, showSpinner } = this.props;

    return (
      <div className="main">
        {showSpinner && <Spinner text="Getting guides. Almost there..." />}
        {!showSpinner && <Guide guide={guide} />}
        {!showSpinner && <GuideList guideList={guideList} />}
      </div>
    );
  }
}

// Redux stuff
function mapState(state) {
  return {
    guide: state.guide,
    guideList: state.guideList,
    showSpinner: state.showSpinner
  };
}
function mapDispatch(dispatch) {
  return {
    dispatch,
    getGuideList: () => dispatch(getGuideList()),
    getGuide: url => dispatch(getGuide(url)),
    initialize: () => dispatch(initialize())
  };
}

export default connect(mapState, mapDispatch)(Main);
