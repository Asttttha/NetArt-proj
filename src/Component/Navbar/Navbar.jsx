import React from "react";
import logo from "../../asserts/logo.png";
import styled from "styled-components";

//styled components
const NavDiv = styled.div`
  margin: 20px;
  padding: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 30px;
    justify-content: start;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;
const ImageDiv = styled.img`
  width: 300px;
  height: 100px;
 
  @media screen and (max-width: 400px) {
    width: 80%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 60px;
  }
`;

//navbar component
function Navbar() {
  return (
    <NavDiv className="navDiv">
      <ImageDiv className="image" src={logo} alt="logo" />
    </NavDiv>
  );
}

export default Navbar;
