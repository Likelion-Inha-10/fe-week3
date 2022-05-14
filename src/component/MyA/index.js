import React from "react";
import styled from "styled-components";

const StyledA = styled.a`
    color: ${(props) => (props.color ? props.color : "blue")};
    text-decoration: ${(props) =>
        props.textDecoration ? props.textDecoration : "underline"};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
`;
const MyA = (props) => {
    return (
        <StyledA
            color={props.color}
            textDecoration={props.textDecoration}
            marginLeft={props.marginLeft}
        >
            {props.children}
        </StyledA>
    );
};

export default MyA;
