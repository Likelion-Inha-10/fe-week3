import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.5;
  font-size: ${(props) => (props.font_size ? props.font_size : "16px")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "bold")};
  margin-left: ${(props) => (props.margin_left ? props.margin_left : "0cm")};
  margin-top: ${(props) => (props.margin_top ? props.margin_top : "0cm")};
  margin-bottom: ${(props) =>
    props.margin_bottom ? props.margin_bottom : "0px"};
  text-align: ${(props) => (props.text_align ? props.text_align : "right")};
`;

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      margin_top={props.margin_top}
      margin_bottom={props.margin_bottom}
      margin_left={props.margin_left}
      font_weight={props.fontWeight}
      font_size={props.fontSize}
      text_align={props.text_align}
    >
      {" "}
      {props.children}
    </StyledText>
  );
};

export default TextBox;
