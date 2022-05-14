import React from "react";
import styled from "styled-components";

const HamburgerBox = styled.div`
  transition: 0.5s;
  height: ${(props) => (props.currentState === "auto" ? "auto" : "0")};
  z-index: -10;
  overflow: hidden;
  width: 100%;
  margin: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #343a40;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const HamburgerWrap = styled.div`
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const AboutWrap = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  max-width: 58.333333%;
  text-align: left;
  margin: 0;
`;

const Title = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
`;

const AboutText = styled.p`
  color: #6c757d;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ContactWrap = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-left: 8.333333%;
  width: 100%;
  max-width: 33.333333%;
  display: flex;
  flex-direction: column;
`;

const HyperLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  &:hover {
    text-decoration: underline;
  }
`;

const HamburgerContent = (props) => {
  console.log(props);
  return (
    <HamburgerBox currentState={props.currentState}>
      <HamburgerWrap>
        <AboutWrap>
          <Title>About</Title>
          <AboutText>
            Add some information about the album below, the author, or any other
            background context. Make it a few sentences long so folks can pick
            up some informative tidbits. Then, link them off to some social
            networking sites or contact information.
          </AboutText>
        </AboutWrap>
        <ContactWrap>
          <Title>Contact</Title>
          <HyperLink href="#">Follow on Twitter</HyperLink>
          <HyperLink href="#">Like on Facebook</HyperLink>
          <HyperLink href="#">Email me</HyperLink>
        </ContactWrap>
      </HamburgerWrap>
    </HamburgerBox>
  );
};

export default HamburgerContent;
