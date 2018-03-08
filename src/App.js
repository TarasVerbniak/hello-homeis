import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
