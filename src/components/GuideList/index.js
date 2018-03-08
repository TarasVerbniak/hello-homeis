import React, { Component } from "react";
import GuideListItem from "./GuideListItem";

class GuideList extends Component {
  render() {
    const { guideList } = this.props;

    return (
      <div id="list">
        <div className="guide-list-wrapper">
          <h1 id="list-name">Popular Guides</h1>
        </div>
        <div className="guide-list-wrapper">
          {guideList &&
            guideList.map((g, i) => (
              <GuideListItem key={g.id} item={g} index={i} />
            ))}
        </div>
      </div>
    );
  }
}

export default GuideList;
