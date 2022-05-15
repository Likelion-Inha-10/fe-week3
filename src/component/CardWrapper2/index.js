import React from "react";
import styled from "styled-components";

const WrapperCard2 = styled.div`
  positon: relative;
  height: 390px;
  width: 100%;
  padding-top: 24px;
  padding-left: 310px;
  background-color: ${(props) =>
    props.backgroundColor || "#F8F9FA"};
`;

const Card2 = styled.div`
  positon: relative;
  height: 385px;
  margin-right: 30px;
  width: 345px;
  float: left;
  border-radius: 0.25rem;
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  background-color: ${(props) =>
    props.backgroundColor || "white"};
`;

const ImageCard2 = styled.div`
  height: 225px;
  width: 345px;
  border-radius: 0.25rem;
  background-image: url(${(props) => props.picture || "none"});
`;

const TextCard2 = styled.div`
  height: 90px;
  width: 300px;
  border-radius: 0.25rem;
  line-height: 1.5;
  color: ${(props) => props.color || "#212529"};
  font-size: 16px;
  margin: 20px;
`;
const TimeCard2 = styled.div`
  height: 19.2px;
  width: 39.84px;
  color: #6C757D;
  font-size: 12.2px;
  margin-left: 270px;
  margin-top: 20px;
`;

const CardWrapper2 = (props) => {
  return (
    <WrapperCard2 backgroundColor={props.backgroundColor}>
      <Card2 backgroundColor={props.backgroundColor}>
        <ImageCard2 picture={props.picture}/>
        <TextCard2 color={props.color}>{props.children}
        <TimeCard2>9mins</TimeCard2>
        </TextCard2>
      </Card2>
      <Card2 backgroundColor={props.backgroundColor}>
        <ImageCard2 picture="img/튜브.png"/>
        <TextCard2 color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard2>9mins</TimeCard2>
        </TextCard2>
      </Card2>
      <Card2 backgroundColor={props.backgroundColor}>
        <ImageCard2 picture="img/네오.jpeg"/>
        <TextCard2 color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard2>9mins</TimeCard2>
        </TextCard2>
      </Card2>
    </WrapperCard2>
  );
};

export default CardWrapper2;