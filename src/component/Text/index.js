import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "nomal")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "10px")};
  float: ${(props) => (props.float ? props.float : "none")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
`;

const TextBox = (props) => {
  return (
    <StyledText
      color={props.color}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      float={props.float}
      padding={props.padding}
      cursor={props.cursor}
    >
      {props.children}
    </StyledText>
  );
};

export default TextBox;
