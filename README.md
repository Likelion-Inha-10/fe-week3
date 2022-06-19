# 멋쟁이 사자처럼 10기 FE 3주차 과제 🦁

# 3주차 MISSION : Bootstrap Album 페이지 클론코딩 해오기

https://getbootstrap.com/docs/4.3/examples/album/

### 클론코딩(Clone-Coding)이란?

: 말그대로 클론! 실제 서비스를 직접 내 손으로 밑 바닥부터 한땀 한땀 구현하는 코딩 학습방법입니다.
실제 구현되어있는 서비스를 직접 내 손으로 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없습니다!

#클론코딩 제외 대상

1. 우측 상단 햄버거 버튼
2. 각 카드별 View/Edit 버튼
3. 하단 Footer
4. 기타 애니메이션 효과

-> 시간적으로 여유가 있으신 분들은 제외 대상 부분까지 구현해보셔도 실력향상에 큰 도움이 될 것 같습니다.

# 주의사항!

✔최대한 Styled-Component와 Props를 활용해서 제작해 주시길 바랍니다.

✔아직은 실제 검색 기능, 클릭시 나오는 메뉴등 동적인 부분은 구현하기 어렵습니다, 기능을 구현한다는 생각보다 현재 보이는 페이지 그대로를 만들어주세요!

# 🦁 < 3주차 Mission 해결 방법 >

1. 전체적인 구성은 다음과 같습니다.

```javascript
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AlbumExample
        title="Album example"
        text="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
      />
      <CardWrapper>
        <CardContainer>
          <MediaCard
            backgroundImage="https://img2.sbs.co.kr/ops_pgm_img/2022/05/09/beea29af-a102-42e2-885a-59a12ca4f793639w640.jpg"
            text="과제를 작성하고 있는 지금 실시간 웨이브 인기 1위 프로그램입니다. 재밌다고 들었는데 한 번 봐 봐야겠군요!😊"
            time="1 month"
          />
        </CardContainer>
      </CardWrapper>
    </>
  );
}
```

#### (각 component의 역할)

- GlobalStyle: 모든 component에 적용할 style을 작성한 component입니다.
- Header: 사이트의 header 부분을 작성한 component입니다.
- AlbumExample: 사이트의 AlbumExample 부분을 작성한 component입니다.
- CardWrapper: 사이트의 여러 Mediacard들을 감싸고 있는 틀을 작성한 component입니다.
- MediaCard: 사이트의 MediaCard를 작성한 component입니다.

2. Global Style을 적용하기 위해 Global이라는 component를 생성해주었습니다. GlobalStyle Component를 작성하기 위해서는 styled-components에서 createGlobalStyle을 import 해와야 합니다.
   그리고 다음과 같이 \* 로 style을 적용해줍니다. 적용한 style을 margin과 font 입니다.

```javascript
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
`;

export default GlobalStyle;
```

3. Header를 생성하기 위해 Header라는 component를 생성해주었습니다.

```javascript
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
```

- 헤더의 경우 로고 부분과 메뉴 버튼 부분을 나누어서 구성해주었습니다.
- 그래서 그런지 component가 많이 생성된 것 같아 이 부분이 조금 아쉬웠습니다.

3. AlbumExample component도 Header와 같이 필요한 styled component를 생성하고 구성에 맞게 component를 배치해주었습니다.

```javascript
const StyledAlbumExampleWrapper = styled.div`
  padding: 90px;
  display: flex;
  flex-direction: column;
`;

const StyledAlbumExampleButtonWrapper = styled.div`
  width: 310px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AlbumExample = (props) => {
  return (
    <StyledAlbumExampleWrapper>
      <TextBox
        color="#212529"
        fontSize="40px"
        fontWeight="lighter"
        lineHeight="1.5"
        divWidth="610px"
        marginBottom="8px"
        textAlign="center"
      >
        {props.title}
      </TextBox>
      <TextBox
        color="#6C757D"
        fontSize="20px"
        fontWeight="lighter"
        lineHeight="1.5"
        divWidth="610px"
        marginBottom="20px"
        textAlign="center"
      >
        {props.text}
      </TextBox>
      <StyledAlbumExampleButtonWrapper>
        <Button
          fColor="white"
          fSize="16px"
          btnHeight="30px"
          borderColor="#6c757d"
          borderRadius="0.25rem"
          bgColor="#007BFF"
          btnPadding="0.375rem 0.75rem"
          btnMargin="0px"
        >
          Main call to action
        </Button>
        <Button
          fColor="white"
          fSize="16px"
          btnHeight="30px"
          borderColor="#6c757d"
          borderRadius="0.25rem"
          bgColor="#6c757d"
          btnPadding="0.375rem 0.75rem"
          btnMargin="0px"
        >
          Secondary Action
        </Button>
      </StyledAlbumExampleButtonWrapper>
    </StyledAlbumExampleWrapper>
  );
};

export default AlbumExample;
```

4. Card Wrapper & Media Card component

```javascript
// CardWrapper component
const StyledCardWrapper = styled.div`
  height: 1330px;
  border: 0px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = (props) => {
  return <StyledCardWrapper>{props.children}</StyledCardWrapper>;
};

export default CardWrapper;
```

- 여러개의 Mediacard의 바탕이 되는 CardWrapper component입니다.

```javascript
// MediaCard component
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 380px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  margin: 0px 15px 5px 15px;
`;

const ImageWrapper = styled.div`
  width: 360px;
  height: 225px;
  border-radius: 0.25rem 0.25rem 0 0;
  background-image: url(${(props) => (props.bImage ? props.bImage : "white")});
  background-size: 100% 100%;
`;

const StyledCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 20px 20px 20px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const StyledBottomText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fSize};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  font-weight: ${(props) => props.fWeight};
`;
```

- MediaCard의 styled-component부분입니다. 사이트의 관리자도구를 참고하여 작성하였습니다.
- 각 컴포넌트는 각각 다음의 역할을 합니다.
- CardWrapper: MediaCard 전체를 감싸는 역할
- ImageWrapper: Image를 담는 역할
- StyleldCardBottom: Mediacard의 이미지 아래부분을 감싸는 역할
- StyledButtonWrappeer: button을 감싸는 역할
- StyledBottomText: MediaCard의 텍스트를 담는 역할
- 아쉬운 점은, text를 3줄 미만, 초과하여 작성하면 주어진 사이트처럼 가운데 정렬이 되지 않는다는 점이었습니다. 좀 더 공부해서 이 부분을 수정해보고 싶습니다.

# < 결과 >

![week3](https://user-images.githubusercontent.com/100702397/174484907-f0eea7ff-f9a8-4c5d-84c2-47d3b5c86333.JPG)

# 제출시 필수 사항

- 과제 제출은 일요일 9시 입니다.
- PR의 제목은 “ [본인의 성함] 멋쟁이 사자처럼 3번쨰 과제 제출 “
- 제작하신 클론 페이지를 캡쳐해서 PR에 같이 올려주세요.
