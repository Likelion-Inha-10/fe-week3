import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";
import { FiCamera } from "react-icons/fi";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100")};
  background-color: #343a40;
  height: ${(props) => (props.height ? props.height : "100")};
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 75%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const Header = (props) => {
  return (
    <StyledHeader width={props.width} height={props.height}>
      <Icon>
        <FiCamera color="white" size="24" />
      </Icon>
      <Wrapper>
        <TextBox fontSize={props.fontSize} color="white">
          Album
        </TextBox>
      </Wrapper>
    </StyledHeader>
  );
};
export default Header;
