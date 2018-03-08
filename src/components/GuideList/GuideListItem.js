import React, { Component } from "react";

class GuideListItem extends Component {
  render() {
    const { item, index } = this.props;

    return (
      <div className={`list-item ${index !== 0 ? "border-top" : ""}`}>
        <div className="guide-item-wrapper">
          <div className="guide-info">
            <h3>
              <a href="#">{item.payload.title}</a>
            </h3>
            <p>
              {item.tags.map((t, i) => (
                <span key={i} className="tags">{`${
                  i !== 0 ? " • " : ""
                }${t}`}</span>
              ))}
            </p>
          </div>
          <div className="guide-list-img">
            <img src={item.actor.media.thumbnail} alt={item.actor.name} />
          </div>
        </div>
        <p className="author">{item.actor.name}</p>
      </div>
    );
  }
}

export default GuideListItem;
