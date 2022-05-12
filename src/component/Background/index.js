import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  height: 1220px;
  border: none;
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

const Background = (props) => {
  return <StyledBackground>{props.children}</StyledBackground>;
};

export default Background;
