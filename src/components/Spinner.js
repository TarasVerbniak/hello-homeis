import React, { Component } from "react";
import { Circle } from "better-react-spinkit";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <h3>{this.props.text}</h3>
        <Circle
          size={this.props.size || 100}
          color={this.props.color || "#40c9a2"}
        />
      </div>
    );
  }
}

export default Spinner;
