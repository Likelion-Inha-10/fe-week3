import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
import Button from "../Button";

const LargeMainBox = styled.div`
  width : 100%
  height : 408px;
  padding : 96px 32px;
  background-color : white;
  display : flex;
  flex-direction : row;
  justify-content : center;
`;

const MainBox = styled.div`
  width : 610px;
  height : 216px;
  padding : 0px 15px;
  background-color : white;
`;

const Heading = styled.div`
  width : 100%;
  height : 48px;
  margin-bottom : 8px;
`;

const BodyText =styled.div`
  width  : 100%;
  height : 90px;
  margin : 0px 0px 16px 0px;
`;

const BodyButtonWrapper = styled.div`
  width :100%;
  height: 54px;
  display : flex;
  justify-content : center;
`;


const MainBody = (props) => {
  return(
    <LargeMainBox>
      <MainBox>
        <Heading>
          <TextBox fontSize='40px' textAlign='center'>Album Example</TextBox>
        </Heading>
        <BodyText>
          <TextBox fontSize ='20px' textAlign='center' color='#6c757d'>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</TextBox>
        </BodyText>
        <BodyButtonWrapper>
          <Button width='156px' height ='38px' backgroundColor='#007bff' color='white' padding='6px 12px'>Main call to action</Button>
          <Button width='147px' height='38px' backgroundColor='#6c757d' color='white'padding='6px 12px'>Secondary action</Button>
        </BodyButtonWrapper>     
      </MainBox>
    </LargeMainBox>

  );
};

export default MainBody;