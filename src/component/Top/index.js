import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextBox } from "../Styled";
import { AiOutlineCamera } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const TopWrapper = styled.div`
  height: ${(props) => props.height || "42px"};
  background-color: #363a3f;
  padding-left: 13%;
  padding-right: 13%;
  padding-top: 7px;
  overflow: hidden;
  transition: 0.3s;
`;

const TopText = styled.div`
  width: ${(props) => props.width || "100%"};
  float: left;
  margin-right: ${(props) => props.marginRight || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

const IconWrapper = styled.button`
  position: relative;
  bottom: 5px;
  height: 38px;
  width: 55px;
  border: 1px #4c4c4c solid;
  border-radius: 3px;
  text-align: center;
  background: ${(props) => props.backgroundColor || "rgba(0,0,0,0)"};
  color: rgba(255, 255, 255, 0.5);
  padding-top: 3px;
  cursor: pointer;
  &:focus {
    outline: 1px solid #ffffff;
  }
`;

const Top = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  const topBar = (topHeight) => {
    return (
      <>
        <TopWrapper height={topHeight}>
          <TopText width="60%" marginRight="90px">
            <TextBox
              color="white"
              fontWeight="600"
              fontSize="23px"
              padding="10px 0 0 5px"
              lineHeight="1.5"
            >
              About
            </TextBox>
            <TextBox
              color="#6c757d"
              fontSize="1rem"
              lineHeight="1.5"
              padding="5px 0 0 5px"
            >
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </TextBox>
          </TopText>
          <TopText width="30%">
            <TextBox
              color="white"
              fontWeight="600"
              fontSize="23px"
              padding="10px 0 0 0"
              lineHeight="1.5"
            >
              Contact
            </TextBox>
            <Link to="/">
              <TextBox
                color="white"
                fontWeight="400"
                fontSize="1rem"
                lineHeight="1.5"
                padding="5px 0 0 0"
                display="inline-block"
                cursor="pointer"
                hoverTextDecoration="underline"
              >
                Follow on Twitter
              </TextBox>
            </Link>
            <br />
            <Link to="/">
              <TextBox
                color="white"
                fontWeight="400"
                fontSize="1rem"
                lineHeight="1.5"
                display="inline-block"
                cursor="pointer"
                hoverTextDecoration="underline"
              >
                Like on Facebook
              </TextBox>
            </Link>
            <br />
            <Link to="/">
              <TextBox
                color="white"
                fontWeight="400"
                fontSize="1rem"
                lineHeight="1.5"
                display="inline-block"
                cursor="pointer"
                hoverTextDecoration="underline"
              >
                Email me
              </TextBox>
            </Link>
          </TopText>
        </TopWrapper>
        <TopWrapper>
          <Link to="/">
            <TextBox
              color="white"
              fontWeight="light"
              fontSize="24px"
              float="left"
              cursor="pointer"
            >
              <AiOutlineCamera />
            </TextBox>
            <TextBox
              color="white"
              fontWeight="bold"
              fontSize="20px"
              float="left"
              cursor="pointer"
            >
              &nbsp;Album
            </TextBox>
          </Link>
          <TextBox
            color="rgb(141, 141, 141)"
            fontWeight="bold"
            fontSize="30px"
            float="right"
            cursor="pointer"
          >
            <IconWrapper onClick={() => setIsClicked(!isClicked)}>
              <FiMenu size={"30px"} />
            </IconWrapper>
          </TextBox>
        </TopWrapper>
      </>
    );
  };
  return isClicked ? topBar("11rem") : topBar("0");
};
export default Top;
