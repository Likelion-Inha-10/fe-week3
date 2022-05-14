import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  position: relative;
  object-fit: cover;
  width: ${(props) => (props.width ? props.width : "16px")} ;
  height: ${(props) => (props.height ? props.height : "16px")} ;
`;

const Image = (props) => {
  return (
    <StyledImage src={props.Image} width={props.width} height={props.height}>
      {props.children}
    </StyledImage>
  );
};

export default Image;
