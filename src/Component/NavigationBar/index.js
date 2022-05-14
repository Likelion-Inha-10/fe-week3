import React, { useState } from "react";
import styled from "styled-components";
import { IoCameraOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import HamburgerContent from "../HamburgerContent";

var hamburgerHeight = "0";

const NavigationBox = styled.header`
  z-index: 10;
  width: 100%;
  height: 56px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #343a40;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const NavigationWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

const PageTitle = styled.a`
  color: white;
  font-size: 1.25rem;
  vertical-align: middle;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:link {
    text-decoration: none;
  }
`;

const HamburgerButton = styled.button`
  padding: 0.25rem 0.75rem;
  margin-left: auto;
  margin-right: 0;
  border-radius: 0.25rem;
  font-size: 1.8rem;
  color: #a5a8a9;
  border: 1px solid #44474c;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: inset 0 0 0 1px black;
    border: 1px solid white;
  }
`;

const NavigationBar = () => {
  const [buttonState, setState] = useState("0");

  const Swap = () => {
    console.log("Nav : " + hamburgerHeight);
    hamburgerHeight = hamburgerHeight === "0" ? "auto" : "0";
    setState(hamburgerHeight);
  };
  return (
    <div>
      <HamburgerContent currentState={buttonState}></HamburgerContent>
      <NavigationBox>
        <NavigationWrap>
          <PageTitle href="#">
            <IoCameraOutline
              style={{
                marginRight: "0.5rem",
              }}
              size="1.4rem"
            />
            <strong>Album</strong>
          </PageTitle>
          <HamburgerButton onClick={Swap}>
            <AiOutlineMenu />
          </HamburgerButton>
        </NavigationWrap>
      </NavigationBox>
    </div>
  );
};

export default NavigationBar;
