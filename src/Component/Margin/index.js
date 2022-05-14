import React from "react";
import styled from "styled-components";

const Margin = styled.div`
  height: ${(props) => (props.height ? props.height : "0")}px;
  width: ${(props) => (props.width ? props.width : "0")}px;
`;

export default Margin;
