import React from "react";
import styled from "styled-components";

//images
import img1 from "../../asserts/1.png";
import img2 from "../../asserts/2.png";

//styled components
const MainDiv = styled.div`
  padding: 0;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 769px) {
    height: 50%;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Div1 = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  margin-right: 60px;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding-right: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin-right: 0;
    margin-top: 12px;
    justify-content: center;

    @media screen and (max-width: 1500px) and (min-width: 769px) {
      width: 50%;
      margin-right: 50px;
    }
  }
`;

const Div2 = styled.div`
  width: 90%;
  height: 30%;
  display: grid;
  justify-content: start;
  align-items: center;
  margin-right: 40px;

  @media screen and (max-width: 550px) {
    width: 90%;
    margin-right: 0;
    margin-left: 2px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-right: 0;
    justify-content: center;
  }

  @media screen and (max-width: 1500px) and (min-width: 769px) {
    width: 100%;
    
    padding-right: 0;
  }
`;

const Image1 = styled.img`
  width: 500px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 400px;
  }

  @media screen and (max-width: 550px) {
    width: 50%;
  }
  @media screen and (max-width: 1500px) and (min-width: 769px) {
    width: 90%;
    
  }
`;

const Image2 = styled.img`
  width: 700px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 500px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }

  @media screen and (max-width: 1500px) and (min-width: 769px) {
    width: 80%;
    margin-left: 2px;
    
  }
`;

const TextDiv = styled.div`
  font-size: 12px;

  @media screen and (max-width: 550px) {
    font-size: 9px;
  }
`;

//home component
function Home() {
  return (
    <MainDiv className="mainDiv">
      <Div1 className="image1Div">
        <Image1 src={img1} alt="" />
      </Div1>
      <Div2 className="image2Div">
        <TextDiv>
          <p style={{ fontWeight: "600" }}>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul>
            <li>
              <p>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </p>
            </li>
            <li>
              <p>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </p>
            </li>
          </ul>
        </TextDiv>
        <Image2 src={img2} alt="" />
        <TextDiv>
          <p>
            Government of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </TextDiv>
      </Div2>
    </MainDiv>
  );
}

export default Home;
