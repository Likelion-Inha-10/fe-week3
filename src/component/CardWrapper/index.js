import React from "react";
import styled from "styled-components";

const WrapperCard = styled.div`
  positon: relative;
  height: 390px;
  width: 100%;
  padding-top: 48px;
  padding-left: 310px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#F8F9FA"};
`;

const Card = styled.div`
  positon: relative;
  height: 385px;
  margin-right: 30px;
  width: 345px;
  float: left;
  border-radius: 0.25rem;
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

const ImageCard = styled.div`
  height: 225px;
  width: 345px;
  border-radius: 0.25rem;
  background-image: url(${(props) => (props.picture ? props.picture : "none")});
`;

const TextCard = styled.div`
  height: 90px;
  width: 300px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  border-radius: 0.25rem;
  line-height: 1.5;
  color: ${(props) => props.color ? props.color : "#212529"};
  font-size: 16px;
  margin: 20px;
`;

const TimeCard = styled.div`
  height: 19.2px;
  width: 39.84px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  color: #6C757D;
  font-size: 12.2px;
  margin-left: 270px;
  margin-top: 20px;
`;

const CardWrapper = (props) => {
  console.log(props);
  return (
    <WrapperCard backgroundColor={props.backgroundColor}>
      <Card backgroundColor={props.backgroundColor}>
        <ImageCard picture={props.picture}/>
        <TextCard color={props.color}>{props.children}
        <TimeCard>9mins</TimeCard>
        </TextCard>
      </Card>
      <Card backgroundColor={props.backgroundColor}>
        <ImageCard picture="img/어피치.png"/>
        <TextCard color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard>9mins</TimeCard>
        </TextCard>
      </Card>
      <Card backgroundColor={props.backgroundColor}>
        <ImageCard picture="img/프로도.png"/>
        <TextCard color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard>9mins</TimeCard>
        </TextCard>
      </Card>
    </WrapperCard>
  );
};

export default CardWrapper;