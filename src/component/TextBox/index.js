import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
    font-size: ${(props) => (props.fontSize ? props.fontSize : "50px")};
    color: ${(props) => (props.color ? props.color : "black")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "80")};
    text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : "1")};
    padding: 0px;
`;

const TextBox = (props) => {
    return (
        <StyledText
            lineHeight={props.lineHeight}
            textAlign={props.textAlign}
            color={props.color}
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
        >
            {props.children}
        </StyledText>
    );
};

export default TextBox;
