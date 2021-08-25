import React, { Component } from "react";
import {Container, Logo} from "./NavbarStyle";
import logo from "./img/logo";

export default class Navbar extends Component {
  render () {
    return {
      <Container>
        <Logo src={logo} alt="logo" />
      </Container>
    }
  }
}
