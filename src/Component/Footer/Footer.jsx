import React from "react";
import { FaFacebook, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";

//styled components
const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    height: 100px;
    padding: 10px 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
    margin-top: 30px;
    flex-direction: column;
    padding: 10px 0;
  }
`;

const IconContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 550px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const SubIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconText = styled.p`
  padding: 5px;
  font-size: 12px;

  @media screen and (max-width: 550px) {
    padding: 0 3px;
    font-size: 10px;
  }
`;

//footer component
function Footer() {
  return (
    <FooterContainer>
      <IconContainer className="connect">
        <SubIconContainer className="phone">
          <FaPhoneAlt style={{ fontSize: "20px" }} />
          <IconText>
            Toll free <strong>1800 200 1234</strong>
          </IconText>
        </SubIconContainer>
        <SubIconContainer className="facebook">
          <FaFacebook style={{ fontSize: "20px" }} />
          <IconText>www.facebook.com/cripumps</IconText>
        </SubIconContainer>
        <SubIconContainer className="web">
          <FaGlobe style={{ fontSize: "20px" }} />
          <IconText>www.crigroups.com</IconText>
        </SubIconContainer>
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
