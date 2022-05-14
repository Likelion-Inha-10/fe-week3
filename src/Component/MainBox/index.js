import React from "react";
import styled from "styled-components";

const MainTextBox = styled.div`
  background-color: white;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const MainTitle = styled.h1`
  color: black;
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  max-width: 40rem;
`;

const MainText = styled.p`
  color: gray;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 1rem;
  max-width: 40rem;
  padding-left: 15px;
  padding-right: 15px;
`;

const ButtonWrap = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  max-width: 40rem;
  line-height: 1.5;
  margin-bottom: 0;
`;

const Button = styled.a`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  padding: 0.375rem 0.75rem;
  background-color: ${(props) => (props.color ? props.color : "black")};
  color: white;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid ${(props) => (props.color ? props.color : "black")};
  border-radius: 0.25rem;
  text-decoration: none;
  transition: 0.15s;
  &:link {
    text-decoration: none;
  }
  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : "black"};
    border-color: ${(props) => (props.hoverColor ? props.hoverColor : "black")};
    transition: 0.15s;
  }
`;

const MainBox = (props) => {
  return (
    <MainTextBox>
      <MainTitle>Album example</MainTitle>
      <MainText>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so folks don’t
        simply skip over it entirely.
      </MainText>
      <ButtonWrap>
        <Button href="#" color="#3579F6" hoverColor="#2C67D2">
          Main call to action
        </Button>
        <Button href="#" color="#6E757C" hoverColor="#5B6267">
          Secondary action
        </Button>
      </ButtonWrap>
    </MainTextBox>
  );
};

export default MainBox;
