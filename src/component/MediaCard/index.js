import React from "react";
import styled from "styled-components";
import Button from "../Button/index.js";
import TimeBox from "../TimeBox/index.js";


const CardWrapper = styled.div`
  width : 328px;
  height : 386px;
  border : 1px black solid;
  margin-right :15px;
  margin-left : 15px;
  margin-bottom : 24px;
  display : flex;
  flex-direction: column;
`;

const BackgroundColor = styled.div`
  width : 100%;
  height : 225px;
  margin : 0px;
  background-color : rgb(85, 89, 92);
  color : white;
  font-weight: bold;
  font-size : 15px;
  font-align : center;
  display:flex;
  justify-content: center;
  align-items : center;
`;

const CardBody = styled.div`
  width : 100%;
  height : 159px;
  padding: 1.25rem;
  box-sizing: border-box;
`;

const TextWrapper = styled.div`
  width : 100%;
  height : 72px;
  margin-bottom : 16px;
`;

const ButtonWrapper = styled.div`
  width : 100%;
  height : 32px;
  display : flex;
  flex-direction : row;
`;




const MediaCard = (props) => {
  return (
    <CardWrapper>
      <BackgroundColor>Thumbnail</BackgroundColor>
      <CardBody>
        <TextWrapper>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </TextWrapper>
        <ButtonWrapper>
          <Button padding='4px 8px'>View</Button>
          <Button padding='4px 8px'>Edit</Button>
          <TimeBox>9 mins</TimeBox>
        </ButtonWrapper>
      </CardBody>
    </CardWrapper>
  );
};

export default MediaCard;