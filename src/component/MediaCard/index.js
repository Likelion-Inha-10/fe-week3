import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";
import Button from "../Button";


const PhotoWrapper = styled.div`
  background-image: url(${(props) => (props.src ? props.src : "none")});
  background-size: cover;
  border-radius: 3px;
  height: 225px;
  //
`;
const CardBody = styled.div`
  padding: 20px;
`

const CardText = styled.div`
  line-height: 1.3;
  margin-bottom: 16px;
`
const Main = styled.div`
  background-color: white;
  width: 348px;
  height: 384px;
  border-radius: 3px;
  flex-direction: column;

  //
`;

const BtnGroup = styled.div`

`
const MediaCard = (props) => {
  return (
    <>
    <Main>
      <PhotoWrapper src={props.src}>
      </PhotoWrapper>
      <CardBody>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <BtnGroup>
          <Button backgroundColor ="blue"></Button>
          <Button backgroundColor ="red"></Button>
        </BtnGroup>
        <TextBox>hi</TextBox>
      </CardBody>
      
    </Main>
    </>
  );
};

export default MediaCard;

