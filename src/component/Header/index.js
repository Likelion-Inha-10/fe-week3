import React from "react";
import styled from "styled-components";

const HeadButton = styled.div`
  positon: relative;
  height: 56px;
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor || "#343A40"};
  color: ${(props) => (props.color || "white")};
`;

const Content = styled.div`
  position: absolute;
  height: 56px;
  font-weight: 400;
  width: 89.27px;
  margin-left: 335px;
  text-align: center;
  display: flex;
  font-weight: bold;
  align-items: center;
  font-size: 20px;
  background-color: ${(props) =>
    props.backgroundColor || "#343A40"};
  color: ${(props) => props.color || "white"};
`;

const LogoSection = styled.div`
  position: absolute;
  height: 50px;
  width: 100px;
  margin-top: 3px; 
  margin-left: 260px;
  background-image: url(${(props) => (props.picture || "none")});
  background-size: cover;
`;

const Header = (props) => {
  return (
    <HeadButton backgroundColor={props.backgroundColor} color={props.color}>
      <LogoSection picture={props.picture}></LogoSection>
      <Content backgroundColor={props.backgroundColor} color={props.color}>{props.children}</Content> 
    </HeadButton>
    
  );
};

export default Header;
