# 멋쟁이 사자처럼 10기 FE 3주차 과제 🦁

# 3주차 MISSION :  Bootstrap Album 페이지 클론코딩 해오기
https://getbootstrap.com/docs/4.3/examples/album/

 ### 클론코딩(Clone-Coding)이란?
: 말그대로 클론! 실제 서비스를 직접 내 손으로 밑 바닥부터 한땀 한땀 구현하는 코딩 학습방법입니다.
실제 구현되어있는 서비스를 직접 내 손으로 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없습니다!

#클론코딩 제외 대상
1. 우측 상단 햄버거 버튼
2. 각 카드별 View/Edit 버튼
3. 하단 Footer
4. 기타 애니메이션 효과

### 해결방안

```JavaScript
import React from "react";
import styled from "styled-components";

const ContentCard = styled.div`
  positon: relative;
  height: 408px;
  width: 100%;
  background-color: ${(props) => // Body파트인 컨텐트가 들어가는 곳에 글자를 설정하기 위해서 props를 통해 색 값을 받아요
    props.backgroundColor || "white"};
`;

const HeadContent = styled.div` //메인 홈페이지의 상단 메뉴바를 만들어 보아요~
  positon: absolute;
  height: 48px;
  width: 640px;
  display: flex; //사이트의 로고와 글자를 일렬로 배치하기 위하여 display: flex를 사용했어요
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
```

#위 부분은 전체적인 틀을 짠 코드입니다. 바디부분이 가장 오래걸릴 줄 알았지만 생각보다 헤더부분이 가장 오래걸렸습니다. 로고를 다운받아야하는 것부터, 글자의 폰트 설정, 이 둘의 배치를 잘 설정해야 하는데 이 부분이 가장 어려웠습니다. 우선 display: flex를 이용해 둘의 배치를 정렬한다. 그리고 패딩을 이용하여 위에서부터, 왼쪽으로부터 몇 픽셀을 이동하여 위치하여야 하는지를 설정하였다. 더 좋은 방법이 있으면 배우고 싶다. 

```JavaScript
import React from "react";
import styled from "styled-components";

const WrapperCard3 = styled.div`
  positon: relative;
  height: 390px;
  width: 100%;
  padding-top: 24px;
  padding-left: 310px;
  padding-bottom: 48px;
  background-color: ${(props) =>
    props.backgroundColor || "#F8F9FA"};
`;

const Card3 = styled.div`
  positon: relative;
  height: 385px;
  margin-right: 30px;
  width: 345px;
  float: left;
  border-radius: 0.25rem;
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  background-color: ${(props) =>
    props.backgroundColor || "white"};
`;

const ImageCard3 = styled.div`
  height: 225px;
  width: 345px;
  border-radius: 0.25rem;
  background-image: url(${(props) => props.picture || "none"});
`;

const TextCard3 = styled.div`
  height: 90px;
  width: 300px;
  border-radius: 0.25rem;
  line-height: 1.5;
  color: ${(props) => props.color || "#212529"};
  font-size: 16px;
  margin: 20px;
`;

const TimeCard3 = styled.div`
  height: 19.2px;
  width: 39.84px;
  color: #6C757D;
  font-size: 12.2px;
  margin-left: 270px;
  margin-top: 20px;
`;

const CardWrapper3 = (props) => {
  return (
    <WrapperCard3 backgroundColor={props.backgroundColor}>
      <Card3 backgroundColor={props.backgroundColor}>
        <ImageCard3 picture={props.picture}/>
        <TextCard3 color={props.color}>{props.children}
        <TimeCard3>9mins</TimeCard3>
        </TextCard3>
      </Card3>
      <Card3 backgroundColor={props.backgroundColor}>
        <ImageCard3 picture="img/무지.png"/>
        <TextCard3 color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard3>9mins</TimeCard3>
        </TextCard3>
      </Card3>
      <Card3 backgroundColor={props.backgroundColor}>
        <ImageCard3 picture="img/제이지.jpeg"/>
        <TextCard3 color={props.color}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        <TimeCard3>9mins</TimeCard3>
        </TextCard3>
      </Card3>
    </WrapperCard3>
  );
};

export default CardWrapper3;
```

#그리고 본문의 내용은 flex를 이용해서 컨텐트가 3개 이상이 된다면 자동으로 내려가는 방법을 구현하고 싶었지만 내 실력이 부족한 관계로 1줄에 3개씩 컨텐트를 집어넣어 3개의 카드를 만들었다. 그래서 CardWrapper를 1,2,3로 설정하였다. 그래서인지 코드가 불필요하게 길어졌다.


