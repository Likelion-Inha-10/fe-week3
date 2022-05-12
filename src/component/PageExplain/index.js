import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
import Button from "../Button";

const PageWrapper = styled.div`
  height: 260px;
  border: none;
  padding: 100px 100px 50px 100px;
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
      <Button
        height="37px"
        backgroundColor="#3075ff"
        color="white"
        padding="5px 20px 5px 20px"
        fontSize="1rem"
        float="center"
      >
        Main call to action
      </Button>
      <Button
        height="37px"
        backgroundColor="#6F757C"
        color="white"
        padding="5px 20px 5px 20px"
        marginLeft="10px"
        fontSize="1rem"
        float="center"
      >
        Secondary action
      </Button>
    </PageWrapper>
  );
};
export default PageExplain;
