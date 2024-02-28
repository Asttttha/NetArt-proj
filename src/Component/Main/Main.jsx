import React from "react";
import element from "../../asserts/3.png";
import styled from "styled-components";

//styled components
const MainContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  border-bottom: 0.2rem solid red;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    text-align: center;
    border-bottom: 1px solid red;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    text-align: center;
    border-bottom: 1px solid red;
  }
`;

const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 9px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LowerParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 9px;
  }
`;

const Image = styled.img`
  width: 800px;
  height: 100%;

  @media screen and (max-width: 550px) {
    width: 100%;
    max-width: 500px;
    height: auto;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

//main component
function Main() {
  return (
    <MainContainer>
      <Paragraph>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </Paragraph>
      <ImageContainer>
        <Image src={element} alt="Star Rated Pumpsets" />
      </ImageContainer>
      <LowerParagraph>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </LowerParagraph>
    </MainContainer>
  );
}

export default Main;
