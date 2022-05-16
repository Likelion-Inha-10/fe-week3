import React from "react";
import styled from "styled-components";

const CenterWrapper = styled.div`
  display: flex;
  height: ${(props) => (props.height ? props.height : "0px")};
  justify-content: center;
  align-items: center;
  justify-content: ${(props) =>
    props.justify_content ? props.justify_content : "between"};
  flex-direction: ${(props) =>
    props.flex_direction ? props.flex_direction : "row"};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin-top: ${(props) => (props.margin_top ? props.margin_top : "0px")};
  margin-bottom: ${(props) =>
    props.margin_bottom ? props.margin_bottom : "0px"};
  padding-top: ${(props) => (props.padding_top ? props.padding_top : "0px")};
  padding-bottom: ${(props) =>
    props.padding_bottom ? props.padding_bottom : "0px"};
`;
export default CenterWrapper;
