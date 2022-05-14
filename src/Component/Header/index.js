import React from "react";
import styled from "styled-components";
import Image from "../Image";
import TextBox from "../Text";

const HeaderWrapper = styled.div`
  font-size: 30px;
  width: 100%;
  height: 56px;
  background-color: #343a40;
  display: flex;
  align-items: center;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 190px;
`;

const TempMargin = styled.div`
  width: 10px;
`;

const Header = (props) => {
  console.log(props);
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <Image width="25px" height="20px" Image="/img/A1.jpg" />
        <TempMargin />
        <TextBox
          color="white"
          fontWeight="bolder"
          fontSize="1.25rem"
          backgroundColor="#343a40"
        >
          Album
        </TextBox>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;
