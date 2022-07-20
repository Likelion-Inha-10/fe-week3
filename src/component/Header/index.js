import React from "react";
import styled from "styled-components";
import { HiOutlineCamera } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  color: #212559;
  display: flex;
  align-items: center;
  background-color: #343a40;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto 0px auto;
  background-color: transparent;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  background-color: transparent;
`;

const LogoImage = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 8px 0 0;
  cursor: pointer;
`;

const LogoText = styled.h1`
  color: white;
  font-size: 20px;
  margin: 0;
  cursor: pointer;
`;

const HeaderButtonWrapper = styled.button`
  width: 56px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  cursor: pointer;
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoWrapper>
          <LogoImage>
            <HiOutlineCamera size="24" color="white" />
          </LogoImage>
          <LogoText>Album</LogoText>
        </LogoWrapper>
        <HeaderButtonWrapper>
          <HiOutlineMenu size="30" color="rgba(255,255,255,.5)" />
        </HeaderButtonWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
