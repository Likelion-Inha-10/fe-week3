import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => (props.font_size ? props.font_size : "16px")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "normal")};
  background-color: ${(props) =>
    props.background_color ? props.background_color : "white"};
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const TextBox2 = (props) => {
  return (
    <StyledText
      color={props.color}
      font_weight={props.fontWeight}
      font_size={props.fontSize}
      background_color={props.backgroundColor}
    >
      {" "}
      {props.children}
    </StyledText>
  );
};

export default TextBox2;
