import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";

const TopWrapper = styled.div`
  margin: none;
  height: 40px;
  background-color: #363a3f;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 15px;
`;

const IconWrapper = styled.div`
  height: 35px;
  width: 50px;
  border: 1px #4c4c4c solid;
  border-radius: 3px;
  text-align: center;
  margin-top: -7px;
`;

const Top = (props) => {
  return (
    <TopWrapper>
      <TextBox
        color="white"
        fontWeight="bold"
        fontSize="22px"
        float="left"
        cursor="pointer"
      >
        <HiOutlineCamera />
      </TextBox>
      <TextBox
        color="white"
        fontWeight="bold"
        fontSize="19px"
        float="left"
        cursor="pointer"
      >
        {props.children}
      </TextBox>
      <TextBox
        color="rgb(141, 141, 141)"
        fontWeight="bold"
        fontSize="30px"
        float="right"
        cursor="pointer"
      >
        <IconWrapper>
          <HiOutlineMenu />
        </IconWrapper>
      </TextBox>
    </TopWrapper>
  );
};
export default Top;
