import React from "react";
import { Contant, Nav, NavbarUl, NavLi, NavLogo, NavTitle, Title } from "./NavbarStyled";
import logo from "../../assert/BugfixPNG.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo src={logo} />

        <NavbarUl>
          <NavLi to="/about">About Us</NavLi>
          <NavLi to="/games">Games</NavLi>
          <NavLi to="/news">News</NavLi>
          <NavLi to="/career">Career</NavLi>
          <NavLi to="/contact">Contact</NavLi>
        </NavbarUl>
      </Nav>

      <NavTitle>
        <Title>Next</Title>
        <Contant>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, doloremque.</Contant>
      </NavTitle>
    </>
  );
};

export default Navbar;
