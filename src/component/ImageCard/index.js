import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
import Button from "../Button";

const ImageContentCard = styled.div`
  width: 350px;
  height: 380px;
  border-radius: 3px;
  box-shadow: 0 0 5px 1px rgba(126, 126, 126, 0.3);
  background-color: white;
  margin: 0 15px 0 15px;
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
