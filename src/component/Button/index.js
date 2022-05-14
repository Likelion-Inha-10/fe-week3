import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: ${(props) => (props.paddingH ? props.paddingH : "6px")}
        ${(props) => (props.paddingV ? props.paddingV : "12px")};
    margin: ${(props) => (props.margin ? props.margin : "2px")};
    height: ${(props) => (props.height ? props.height : "35px")};
    width: ${(props) => (props.width ? props.width : "none")};
    border: 1px solid
        ${(props) => (props.borderColor ? props.borderColor : "black")};
    border-radius: ${(props) => (props.radiusV ? props.radiusV : "5px")}
        ${(props) => (props.radiusH ? props.radiusH : "5px")};
    font-size: 14px;
    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : "white"};
    color: ${(props) => (props.textColor ? props.textColor : "black")};
`;

const Button = (props) => {
    return (
        <StyledButton
            margin={props.margin}
            textAlign={props.textAlign}
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
            textColor={props.textColor}
            height={props.height}
            width={props.width}
            paddingH={props.paddingH}
            paddingV={props.paddingV}
            radiusH={props.radiusH}
            radiusV={props.radiusV}
        >
            {props.children}
        </StyledButton>
    );
};

export default Button;
