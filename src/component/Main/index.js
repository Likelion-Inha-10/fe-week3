import React from "react";
import styled from "styled-components";

const MainBox = styled.div`
  height: 216px;
  background-color: #ffffff;
  padding: 96px 32px 96px 32px;
`;

const SmallBox = styled.div`
  text-align: center;
  width: 610px;
  height: 216px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 40px;
  margin-bottom: 8px;
  color: #212529;
  line-height: 1.2;
`;

const Content = styled.div`
  color: #6c757d;
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const ButtonBox = styled.div`
  text-align: center;
`;

const FirstButton = styled.div`
  display: inline-block;
  text-align: center;
  height: 24px;
  color: #fff;
  border: 1px solid #007bff;
  background-color: #007bff;
  font-size: 16px;
  font-weight: 400;
  border-radius: 0.25rem;
  padding: 6px 12px 6px 12px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 2.2px;
  line-height: 1.5;
`;

const SecondButton = styled.div`
  display: inline-block;
  text-align: center;
  height: 24px;
  color: #fff;
  background-color: #6c757d;
  border: 1px solid #6c757d;
  font-size: 16px;
  font-weight: 400;
  border-radius: 0.25rem;
  padding: 6px 12px 6px 12px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 2.2px;
  line-height: 1.5;
`;

const Main = (props) => {
  return (
    <MainBox>
      <SmallBox>
        <Title>Album example</Title>
        <Content>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </Content>
        <ButtonBox>
          <FirstButton>Main call to action</FirstButton>
          <SecondButton>Secondary action</SecondButton>
        </ButtonBox>
      </SmallBox>
    </MainBox>
  );
};

export default Main;
