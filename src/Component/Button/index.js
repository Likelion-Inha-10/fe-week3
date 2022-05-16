import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 37px;
  width: 155px;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin-top: 5mm;
  margin-bottom: 20px;
`;

const Button = (props) => {
  console.log(props);
  return (
    <StyledButton
      position={props.position}
      backgroundColor={props.backgroundColor}
      color={props.color}
      border={props.border}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
