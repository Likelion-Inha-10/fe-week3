import React from "react";
import styled from "styled-components";

const WrapperCard3 = styled.div`
  positon: relative;
  height: 390px;
  width: 100%;
  padding-top: 24px;
  padding-left: 310px;
  padding-bottom: 48px;
  background-color: ${(props) =>
    props.backgroundColor || "#F8F9FA"};
`;

const Card3 = styled.div`
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

const ImageCard3 = styled.div`
  height: 225px;
  width: 345px;
  border-radius: 0.25rem;
  background-image: url(${(props) => props.picture || "none"});
`;

const TextCard3 = styled.div`
  height: 90px;
  width: 300px;
  border-radius: 0.25rem;
  line-height: 1.5;
  color: ${(props) => props.color || "#212529"};
  font-size: 16px;
  margin: 20px;
`;

const TimeCard3 = styled.div`
  height: 19.2px;
  width: 39.84px;
  color: #6C757D;
  font-size: 12.2px;
  margin-left: 270px;
  margin-top: 20px;
`;

const CardWrapper3 = (props) => {
  return (
    <WrapperCard3 backgroundColor={props.backgroundColor}>
      <Card3 backgroundColor={props.backgroundColor}>
        <ImageCard3 picture={props.picture}/>
        <TextCard3 color={props.color}>{props.children}
        <TimeCard3>9mins</TimeCard3>
        </TextCard3>
      </Card3>
      <Card3 backgroundColor={props.backgroundColor}>
        <ImageCard3 picture="img/무지.png"/>
        <TextCard3 color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard3>9mins</TimeCard3>
        </TextCard3>
      </Card3>
      <Card3 backgroundColor={props.backgroundColor}>
        <ImageCard3 picture="img/제이지.jpeg"/>
        <TextCard3 color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard3>9mins</TimeCard3>
        </TextCard3>
      </Card3>
    </WrapperCard3>
  );
};

export default CardWrapper3;