import React, { Component } from "react";
import { Container, Logo, NavItem } from "./NavbarStyle";
import logo from "./img/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Logo src={logo} alt="logo" />
        <NavItem></NavItem>
      </Container>
    );
  }
}
