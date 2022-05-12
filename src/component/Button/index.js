import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  height: 35px;
  width: 50px;
  
  font-size: 14px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton backgroundColor={props.backgroundColor} color={props.color}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
