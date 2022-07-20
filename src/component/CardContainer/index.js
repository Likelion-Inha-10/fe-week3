import React from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  max-width: 1300px;
  height: 1250px;
  border: 0px;
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CardContainer = (props) => {
  return <StyledCardContainer>{props.children}</StyledCardContainer>;
};

export default CardContainer;
