import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";

const CardWrapper = styled.div`
  height: 354px;
  width: 350px;
  margin-right: ${(props) => (props.margin_right ? props.margin_right : "0px")};
  margin-left: ${(props) => (props.margin_left ? props.margin_left : "0px")};
  border: 1px black solid;
  margin-top: 48px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledImg = styled.img`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "150px")};
  border-radius: 2px;
`;

const Text = styled.div`
  padding: 20px;
`;

const MediaCard = (props) => {
  console.log(props);
  return (
    <CardWrapper
      margin_right={props.margin_right2}
      margin_left={props.margin_left2}
    >
      <StyledImg src={props.img} width={props.width} height={props.height} />
      <Text>
        <TextBox
          color={props.tcolor}
          fontWeight={props.fontWeight}
          fontSize={props.fontSize}
          text_align={props.text_align}
        >
          {props.content}
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </TextBox>

        <TextBox
          color={props.tcolor2}
          fontWeight={props.fontWeight2}
          fontSize={props.fontSize2}
          margin_right={props.margin_right2}
          text_align={props.text_align2}
        >
          {props.content}9 mins
        </TextBox>
      </Text>
    </CardWrapper>
  );
};

export default MediaCard;
