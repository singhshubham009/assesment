import React, { Component } from "react";
import ErrorHandler from "./HOC/ErrorHandler/ErrorHandler";
import MainContainer from "./container/MainContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorHandler errorHandler={this.props.reportError}>
          <MainContainer />
        </ErrorHandler>
      </div>
    );
  }
}

export default App;
