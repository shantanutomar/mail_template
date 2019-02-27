import React, { Component } from "react";
import "./App.css";
import Container1 from "./Containers/Container1/Container1";
// import Container2 from "./Containers/Container2/Container2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container1 />
        {/* <Container2 /> */}
      </div>
    );
  }
}

export default App;
