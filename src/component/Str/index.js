import React from "react";
import styled from "styled-components";

const StyledStr = styled.p`
    margin: 5px;
    color: ${(props) => (props.color ? props.color : "black")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "50px")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "80")};
`;
const Str = (props) => {
    return (
        <StyledStr
            color={props.color}
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
        >
            {props.children}
        </StyledStr>
    );
};

export default Str;
