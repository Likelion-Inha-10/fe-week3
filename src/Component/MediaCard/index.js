import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Image from "../Image";
import TextBox from "../Text";
import Margin from "../Margin";
import TextBox2 from "../Text2";

const CardWrapper = styled.div`
  width: 348px;
  height: 384px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  border-radius: 3px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const StyledImage = styled.div`
  width: 348px;
  height: 225px;
  background-image: url(${(props) => (props.image ? props.image : "")});
`;

const MediaCard = (props) => {
  console.log(props);

  return (
    <CardWrapper>
      <StyledImage image={props.image} />
      <TextBox2 fontSize={props.fontSize2}>{props.head}</TextBox2>
    </CardWrapper>
  );
};

export default MediaCard;
