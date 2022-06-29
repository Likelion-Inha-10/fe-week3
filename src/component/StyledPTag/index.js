import React from "react";
import styled from "styled-components";

const StyledPTag = styled.p`
    margin: 5px;
    color: ${(props) => props.color || "black"};
    font-size: ${(props) => props.fontSize || "50px"};
    font-weight: ${(props) => props.fontWeight || "80"};
`;

export default StyledPTag;
