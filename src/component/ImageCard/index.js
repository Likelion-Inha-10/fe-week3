import React from "react";
import styled from "styled-components";
import { TextBox, Button } from "../Styled";

const ImageContentCard = styled.div`
  width: 350px;
  height: 380px;
  border-radius: 3px;
  box-shadow: 0 0 5px 1px rgba(126, 126, 126, 0.3);
  background-color: white;
  margin: 0 15px 25px 15px;
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: 350px;
  height: 230px;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  margin: 0;
`;

const CardContent = styled.div`
  width: 320px;
  height: 60px;
  padding: 20px;
`;

const ImageCard = (props) => {
  return (
    <ImageContentCard>
      <CardImage backgroundImage={props.image}></CardImage>
      <CardContent>
        <TextBox color="black" fontWeight="300px" fontSize={props.fontSize}>
          {props.children}
        </TextBox>
      </CardContent>
      <Button
        height="30px"
        color="gray"
        borderRadius="3px 0 0 3px"
        border="1px gray solid"
        fontSize="14px"
        fontWeight="lighter"
        padding="5px 8px 5px 8px"
        marginLeft="20px"
        float="left"
        hoverBackgroundColor="#6F757C"
        hoverColor="white"
        focusOutline="3.5px solid rgba(110, 110, 110, .5)"
      >
        View
      </Button>
      <Button
        height="30px"
        color="gray"
        borderRadius="0 3px 3px 0"
        border="1px gray solid"
        fontSize="14px"
        fontWeight="lighter"
        padding="5px 8px 5px 8px"
        float="left"
        backgroundColor="rgba(0, 0, 0, 0)"
        hoverBackgroundColor="#6F757C"
        hoverColor="white"
        focusOutline="3.5px solid rgba(110, 110, 110, .5)"
      >
        Edit
      </Button>
      <TextBox
        color="gray"
        fontSize="13px"
        float="right"
        padding="5px 20px 0 0"
      >
        {props.time}
      </TextBox>
    </ImageContentCard>
  );
};

export default ImageCard;
