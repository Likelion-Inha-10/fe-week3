import React from "react";
import styled from "styled-components";

const StyledTime = styled.div`
  color : #6c757d;
  font-size : 13px;
  border : 1px solid white;
  text-align : center;
  align-items : center;
  margin-left : auto;
  display: flex;
  flex-direction : column;
  justify-content : center;
`;

const TimeBox =(props) =>{
  return(
  <StyledTime>{props.children}</StyledTime>
  );
};

export default TimeBox;
