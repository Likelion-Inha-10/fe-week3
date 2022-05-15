import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
width: ${(props) => (props.width ? props.width : '48px')};
height : ${(props) => (props.height ? props.height : '31px')};
box-sizing: border-box;
border: 1px solid black;
border-radius : 2px;
padding : ${(props) => (props.padding ? props.padding : '0px')};
margin : ${(props) => (props.margin ? props.margin : '0px')};
text-align : center;
color : ${(props) => (props.color ? props.color : '#6c757d')};
font-size : ${(props) => (props.fontSize ? props.fontSize : '14px')};
background-color:${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};
text-align : ${(props) => (props.textAlign ? props.textAlign : 'center')};
align-items : center;

`;

const Button =(props) => {
  return (

    <StyledButton width={props.width} height={props.height} color={props.color} fontSize={props.fontSize} backgroundColor={props.backgroundColor} textAlign={props.textAlign} padding={props.padding} margin={props.margin}>{props.children} </StyledButton>

  );
};

export default Button;