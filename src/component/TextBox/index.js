import React from "react";
import styled from "styled-components";

const StyledText = styled.div`

  font-size: ${(props) => (props.fontSize ? props.fontSize : "50px")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "80")};
`;

const TextBox = (props) => {
  return <StyledText color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight}>{props.children}</StyledText>;
};

export default TextBox;
