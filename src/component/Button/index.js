import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: ${(props) => props.paddingH || "6px"}
        ${(props) => props.paddingV || "12px"};
    margin: ${(props) => props.margin || "2px"};
    height: ${(props) => props.height || "35px"};
    width: ${(props) => props.width || "none"};
    border: 1px solid ${(props) => props.borderColor || "black"};
    border-radius: ${(props) => props.radiusV || "5px"}
        ${(props) => props.radiusH || "5px"};
    font-size: 14px;
    background-color: ${(props) => props.backgroundColor || "white"};
    color: ${(props) => props.textColor || "black"};
`;

export default Button;
