import React from "react";
import styled from "styled-components";

const Color = styled.div`
  background-color: ${(props) =>
    props.background_color ? props.background_color : "white"};
`;
export default Color;
