import React, { Component } from "react";
import { Wrapper, Button } from ".style";
import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
      </Wrapper>
    );
  }
}
