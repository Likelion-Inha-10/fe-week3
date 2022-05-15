import React from "react";
import styled from "styled-components";

const ContentCard = styled.div`
  positon: relative;
  height: 408px;
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor || "white"};
`;

const HeadContent = styled.div`
  positon: absolute;
  height: 48px;
  width: 640px;
  display: flex;
  padding-top: 96px;
  padding-left: 735px;
  text-align: center;
  items-align: center;
  font-size: 1.06cm;
  font-weight: 300;
  background-color: ${(props) =>
    props.backgroundColor || "white"};
  color: ${(props) => (props.color ||"#212529")};
`;

const BodyContent = styled.div`
  positon: absolute;
  height: 90px;
  width: 610px;
  display: flex;
  padding-top: 8px;
  padding-left: 560px;
  text-align: center;
  items-align: center;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 300;
  color: #6C757D;
  background-color: ${(props) =>
    props.backgroundColor || "white"};
`;

const ButtonsTool = styled.div`
  positon: relative;
  height: 50px;
  width: 610px;
  display: flex;
  padding-top: 25px;
  padding-left: 705px;
  text-align: center;
  items-align: center;
  background-color: ${(props) =>
    props.backgroundColor || "white"};
`;

const Button1 = styled.div`
  positon: absolute; 
  height: 27px;
  width: 145px;
  display: flex;
  font-size: 16px;
  padding-top: 10px;
  text-align: center;
  padding-left: 12px;
  display: flex;
  items-align: center;
  margin-right: 5px;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.backgroundColor || "#007BFF"};
  color: ${(props) => (props.color || "white")};
`;

const Button2 = styled.div`
  positon: absolute;
  height: 27px;
  width: 140px;
  display: flex;
  font-size: 16px;
  items-align: center;
  padding-top: 10px;
  padding-left: 14px;
  text-align: center;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.backgroundColor || "#6C757D"};
  color: ${(props) => props.color || "white"};
`;

const Content = (props) => {
  return (
    <ContentCard backgroundColor={props.backgroundColor}>
      <HeadContent backgroundColor={props.backgroundColor} color={props.color}>Album example</HeadContent> 
      <BodyContent backgroundColor={props.backgroundColor}>{props.children}</BodyContent>
      <ButtonsTool >
        <Button1>Main call to action</Button1>
        <Button2>Secondary action</Button2>
      </ButtonsTool>
    </ContentCard>
  );
};

export default Content;