import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  border-color: ${(props) => (props.borderColor ? props.borderColor : "black")};
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton backgroundColor={props.backgroundColor} color={props.color} borderColor={props.borderColor}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
