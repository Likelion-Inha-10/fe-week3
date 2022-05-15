import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1 rem')};
  color: ${(props) => (props.color ? props.color : 'black')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  line-height: 1.5;
`;

const TextBox = (props) => {
  return (
  <StyledText fontSize={props.fontSize} color={props.color} fontWeight={props.fontWeight} textAlign={props.textAlign} >{props.children}</StyledText>
  );
};

export default TextBox;