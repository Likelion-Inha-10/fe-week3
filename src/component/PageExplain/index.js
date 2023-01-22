import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextBox, Button } from "../Styled";

const PageWrapper = styled.div`
  height: 260px;
  border: none;
  padding: 90px 100px 50px 100px;
  text-align: center;
  line-height: 1.5;
`;

const PageExplain = (props) => {
  return (
    <PageWrapper>
      <TextBox color="#474747" fontWeight="lighter" fontSize="40px">
        {props.title}
      </TextBox>

      <TextBox color="rgb(135, 135, 135)" fontWeight="lighter" fontSize="20px">
        {props.children}
      </TextBox>

      <br />
      <Link to="/">
        <Button
          height="37px"
          backgroundColor="#007bff"
          color="white"
          padding="5px 15px 5px 15px"
          fontSize="1rem"
          float="center"
          hoverBackgroundColor="#2766e4"
          hoverColor="white"
          focusOutline="3.5px solid rgba(55, 144, 222, .5)"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Main call to action
        </Button>
      </Link>
      <Link to="/">
        <Button
          height="37px"
          backgroundColor="#6c757d"
          color="white"
          padding="5px 15px 5px 15px"
          marginLeft="5px"
          fontSize="1rem"
          float="center"
          hoverBackgroundColor="#61666b"
          hoverColor="white"
          focusOutline="3.5px solid rgba(140, 140, 140, .5)"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Secondary action
        </Button>
      </Link>
    </PageWrapper>
  );
};
export default PageExplain;
