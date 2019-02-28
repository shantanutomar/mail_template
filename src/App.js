import React, { Component } from "react";
import "./App.css";
import Container1 from "./Containers/Container1/Container1";
// import Container2 from "./Containers/Container2/Container2";
// import Container3 from "./Containers/Container3/Container3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container1 />
        {/* <Container2 /> */}
        {/* <Container3 /> */}
      </div>
    );
  }
}

export default App;
