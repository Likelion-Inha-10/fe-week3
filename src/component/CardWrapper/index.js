import React from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  height: 1330px;
  border: 0px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = (props) => {
  return <StyledCardWrapper>{props.children}</StyledCardWrapper>;
};

export default CardWrapper;
