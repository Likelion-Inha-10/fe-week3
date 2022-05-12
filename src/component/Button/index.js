import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  height: ${(props) => props.height};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  border: ${(props) => (props.border ? props.border : "none")};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  padding: ${(props) => (props.padding ? props.padding : "5px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  float: ${(props) => (props.float ? props.float : "none")};
`;

const Button = (props) => {
  return (
    <StyledButton
      height={props.height}
      backgroundColor={props.backgroundColor}
      color={props.color}
      borderRadius={props.borderRadius}
      border={props.border}
      padding={props.padding}
      marginLeft={props.marginLeft}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      float={props.float}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
