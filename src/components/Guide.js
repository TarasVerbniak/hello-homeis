import React, { Component } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

class Guide extends Component {
  render() {
    const guide = this.props.guide;

    if (!guide) return null;

    const time = new Date(guide.post.eventTime);

    return (
      <div id="guide">
        <div className="guide-author">
          <div>
            <img
              src={guide.post.actor.media.thumbnail}
              alt={guide.post.actor.name}
            />
          </div>
          <div className="guide-author-data">
            <p className="guide-actor-name">{guide.post.actor.name}</p>
            <p className="guide-time">{timeAgo.format(Date.now() - time)}</p>
          </div>
        </div>

        <div className="guide-img">
          <img
            src={guide.post.payload.media.url}
            alt={guide.post.payload.media.thumbnail}
          />
        </div>

        <h3>{guide.post.payload.title}</h3>

        <div dangerouslySetInnerHTML={{ __html: guide.post.payload.text }} />
      </div>
    );
  }
}

export default Guide;
