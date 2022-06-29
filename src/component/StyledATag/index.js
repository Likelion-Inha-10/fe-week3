import React from "react";
import styled from "styled-components";

const StyledATag = styled.a`
    color: ${(props) => props.color || "blue"};
    text-decoration: ${(props) => props.textDecoration || "underline"};
    margin-left: ${(props) => props.marginLeft || "0px"};
`;

export default StyledATag;
