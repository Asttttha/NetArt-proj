import React from "react";
import styled from "styled-components";

//styled components
const PreFooterDiv = styled.div`
  margin: 0 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const TextDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const H5Tag = styled.h5`
  @media screen and (max-width: 550px) {
    font-size: 9px;
  }
  @media screen and (max-width: 768px) {
    font-size: 9px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 10px;
  font-weight: 600;

  @media screen and (max-width: 550px) {
    justify-content: flex-start;
    padding-left: 5px;
    font-size: 7px;
  }

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 5px;
    font-size: 7px;
  }
`;

const Category = styled.div`
  padding: 3px;
  background-color: none;
  border-right: ${(props) => (props.isLast ? "none" : "2px solid red")};
`;

//categories list
const categories = [
  "CHEMICALS & PROCESS",
  "POWER",
  "WATER & WASTE WATER",
  "OILS & GAS",
  "PHARMA",
  "SUGARS & DISTILLERIES",
  "PAPER & PULP",
  "MARINE & DEFENCE",
  "METAL & MINING",
  "FOOD & BEVERAGE",
  "PETROCHEMICAL & REFINERIES",
  "SOLAR",
  "BUILDING HVAC",
  "FIRE FIGHTING",
  "AGRICULTURE & RESIDENTIAL",
];

//preFooter component
function PreFooter() {
  return (
    <PreFooterDiv>
      <TextDiv>
        <H5Tag>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</H5Tag>
      </TextDiv>

      <Container>
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <Category isLast={index === categories.length - 1}>
              {category}
            </Category>
          </React.Fragment>
        ))}
      </Container>
    </PreFooterDiv>
  );
}

export default PreFooter;
