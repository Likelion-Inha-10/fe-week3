import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  color: ${(props) => (props.fColor ? props.fColor : "black")};
  font-size: ${(props) => props.fSize};
  height: ${(props) => props.btnHeight};
  border: 1px solid transparent;
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.btnPadding};
  margin: ${(props) => props.btnMargin};
`;

const Button = (props) => {
  return (
    <StyledButton
      fColor={props.fColor}
      fSize={props.fSize}
      btnHeight={props.btnHeight}
      borderColor={props.borderColor}
      borderRadius={props.borderRadius}
      bgColor={props.bgColor}
      btnPadding={props.btnPadding}
      btnMargin={props.btnMargin}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
