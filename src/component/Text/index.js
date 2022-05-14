import React from "react";
import styled from "styled-components";

const StyledTextBox = styled.div`
  font-size: ${(props) => props.fSize};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  font-weight: ${(props) => props.fWeight};
  line-height: ${(props) => props.lineHeight};
  width: ${(props) => props.divWidth};
  margin: auto;
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "auto"};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => (props.divPadding ? props.divPadding : "0px")};
`;

const TextBox = (props) => {
  return (
    <StyledTextBox
      fcolor={props.color}
      fSize={props.fontSize}
      fWeight={props.fontWeight}
      lineHeight={props.lineHeight}
      divWidth={props.divWidth}
      marginBottom={props.marginBottom}
      textAlign={props.textAlign}
      divPadding={props.divPadding}
    >
      {props.children}
    </StyledTextBox>
  );
};

export default TextBox;
