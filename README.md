# 🦁 멋쟁이 사자처럼 10기 FE 3주차 과제 🦁

# ❓ 3주차 MISSION :  Bootstrap Album 페이지 클론코딩
https://getbootstrap.com/docs/4.3/examples/album/

#클론코딩 제외 대상 (가능하다면 추가 과제)
1. 우측 상단 햄버거 버튼
2. 각 카드별 View/Edit 버튼
3. 하단 Footer
4. 기타 애니메이션 효과

# ⭐ 주의사항
✔최대한 Styled-Component와 Props를 활용

## 🔥 Solution

홈페이지를 크게 **NavigationBar**, **MainBox**, **AlbumBox**, **Footer** 4가지로 나누어 생각해 위부터 쌓아올린다는 생각으로 작성하였습니다.

## 📚 NavigationBar

### 📜 NavigationBar

**NavigationBar**는 크게 `Hamburger`와 `NavigationBar`로 나눌 수 있으며, `NavigationBar`을 먼저 구현하였습니다.

우선 모든 NavigationBar Content를 담을 `NavigationBox`와 `NavigationWrap` Styled Component를 아래와 같이 작성하였습니다.

``` javascript
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
```
`NavigationBox`는 NavgationBar의 전체 영역을 나타내며, `NavigationWrap`이 실질적인 Content들을 담고 있습니다. 

`NavigationBox`에 `display: flex;` 속성을 추가해 상하좌우 중앙정렬을 하였으며, 

`NavigationWrap`도 동일한 속성을 추가하여 Content들을 상하좌우 중앙정렬이 되도록 하였습니다.

```javascript
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
```

내부에는 `PageTitle`과 `HamburgerButton` Styled component를 추가하기 위해 작성하였으며, 

이는 각각 상단바 좌측의 Title과 우측의 hamburger menu button의 역할을 합니다. 

`PageTitle`에는 a tag이므로 클릭하였을 때, text의 색상이 변하고 밑줄이 생기는 것을 방지하기 위해 `text-decoration: none;`을 추가 작성하였습니다. 

또한 `HamburgerButton`을 클릭해 focus된 경우에 border 색상 변화를 위해 `&:focus`시의 추가적인 css를 작성하였습니다.


위에서 작성한 Styled Component를 **React Component**에 다음과 같이 작성하여 사용하였습니다.

``` javascript
const NavigationBar = () => {
  const [buttonState, setState] = useState("0");

  const Swap = () => {
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
```
`IoCameraOutline`은 Title 옆에 카메라 모양 icon을 추가해주기 위한 tag로 **react icon**을 사용하였습니다. 

이를 위해 `import { IoCameraOutline } from "react-icons/io5";`를 코드 상단에 작성해주었습니다.

동일하게 `AiOutlineMenu` 또한 hamburger menu icon을 추가해주기 위한 tag로, 

`import { AiOutlineMenu } from "react-icons/ai";`를 코드 상단에 추가 작성해주었습니다.


상단의 'HamburgerContent'는 **HamburgerButton**을 클릭했을 시에 보이는 Hamburger Menu를 담고 있는 React Component입니다. 

height의 변화를 통해 보이거나 보이지 않도록 하였으며, 이를 관리하기 위해 **button 클릭 시에 state가 변경되어 `HamburgerContent`의 `props`로 넘겨주도록** 하였습니다.


`NavigationBar`에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174473338-4c666c5b-b7af-4966-a985-269f8646e5d8.png)


### 📜 HamburgerContent

`NavigationBar`와 동일하게 전체 영역을 표시할 `HamburgerBox`와 내부에 Content를 담을 `HamburgerWrap` Styled Component를 작성하였습니다. 

(중앙 정렬을 위해 동일하게 ` display: flex;` 작성) 

전체 높이가 전달받은 `props`에 의해 달라져야 하므로 이를 **삼항 연산자**를 이용해 작성하였습니다.

```javascript
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
```

내부에 담긴 Content들을 보면 **About**과 **Contact**로 나눌 수 있으며, **About**은 아래와 같이 작성하였습니다.

```javascript
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
```

전체를 감싸는 `AboutWrap`과 내부의 `Title`, `AboutTitle` Styled Component를 위와 같이 작성하였습니다.

**Contact**는 아래와 같이 작성하였습니다.

```javascript
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
```

전체를 감쌀 `ContactWrap`과 내부에 들어갈 `HyperLink`를 작성해주었습니다. 

`HyperLink`는 커서를 hover할 시에 text에 밑줄이 생겨야 하므로 `&:hover`시에 추가적인 css를 작성해주었습니다. 

`Title`은 **About**과 동일하므로 위에서 작성한 Styled Component를 사용하였습니다.


위에서 작성한 Styled Component는 **React Component**에서 아래와 같이 사용하였습니다.

```javascript
const HamburgerContent = (props) => {
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
```

위에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174473540-d71aba86-6364-4489-b029-004766cf376b.png)

## 📚 MainBox

전체 영역에 해당하는 `MainTextBox`와 내부의 `MainTitle`, `MainText` Styled Component를 아래와 같이 작성하였습니다.

```javascript
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
```

하단에 들어가는 2개의 button은 색상이 달라야 하므로 Styled Component로 아래와 같이 작성하여 가변 스타일링이 가능하도록 작성하였습니다. 

클릭했을 경우에 text의 style이 변하지 않도록 `text-decoration: none;`을 추가하였고, 

커서 hover 시 button 밝기 변화를 위해 `background-color`에 대한 css를 추가 작성해주었습니다. 

자연스럽게 변화하도록 animation 효과를 주기 위해 `transition: 0.15s;`도 추가 작성하였습니다.

```javascript
const Button = styled.a`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  padding: 0.375rem 0.75rem;
  background-color: ${(props) => props.color || "black"};
  color: white;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid ${(props) => props.color || "black"};
  border-radius: 0.25rem;
  text-decoration: none;
  transition: 0.15s;
  &:link {
    text-decoration: none;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor || "black"};
    border-color: ${(props) => props.hoverColor || "black"};
    transition: 0.15s;
  }
`;
```

위에서 작성한 Styled Component는 **React Component**에서 아래와 같이 사용하였습니다.

```javascript
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
```

이에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174474127-54c61610-49c5-452b-8511-b5d1b5cc0263.png)

## 📚 AlbumBox

AlbumBox의 영역을 나타내는 `AlbumContainer`와 내부의 Content를 담을 `AlbumWarp' Styled Component를 작성하였습니다.

```javascript
const AlbumContainer = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const AlbumWrap = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
`;
```

'AlbumCard'를 **map**으로 배열하기 위해 아래와 같은 `Card`함수를 작성하였습니다.

```javascript
function Card({ card }) {
  return <AlbumCard src={card.src} />;
}
```

위에서 작성한 Styled Component로 작성한 **React Component**는 아래와 같습니다.

```javascript
const AlbumBox = (props) => {
  const cards = [
    {},
    {},
    {},
    {
      src: "https://i.pinimg.com/originals/53/25/b9/5325b9a536261e6c37c503326008647a.jpg",
    },
    { src: "https://miro.medium.com/max/3600/0*n-2bW82Z6m6U2bij.jpeg" },
    {
      src: "https://static.boredpanda.com/blog/wp-content/uploads/2019/04/funny-dancing-cats-fb3-png__700.jpg",
    },
    {
      src: "https://www.sadanduseless.com/wp-content/uploads/2021/06/tasty.png",
    },
    { src: "https://media0.giphy.com/media/LkjlH3rVETgsg/200.gif" },
    {
      src: " https://fullsync.co.uk/wp-content/uploads/2021/01/Gaming-Cat-scaled.jpg",
    },
  ];
  return (
    <AlbumContainer>
      <AlbumWrap>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </AlbumWrap>
    </AlbumContainer>
  );
};
```

배열을 선언하여 내부에 `props`로 넘겨줄 값을 넣고, 이를 **map**을 사용하여 총 9개의 `AlbumCard`를 배열하였습니다.

### 📜 AlbumCard

AlbumCard의 영역에 해당하는 `AlbumCardWrap`과 내부에 Card를 표현하고 Content를 담을 `AlbumCardShadow` Styled Component를 작성하였습니다.

```javascript
const AlbumCardWrap = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 1.5rem;
  max-width: 33.333333%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const AlbumCardShadow = styled.div`
  box-sizing: content-box;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;
```

`Thumbnail`과 `ThumbnailImg` Styled Component를 작성하였습니다.

Thumbnail을 전달받았을 경우에는 해당 Thumbnail을, 아닌 경우에는 기본 이미지를 띄우도록 하였습니다.

```javascript
const Thumbnail = styled.div`
  height: 13rem;
  font-size: 1.125rem;
  color: white;
  background-color: #56595c;
  text-align: center;
  line-height: 13rem;
  display: ${(props) => (props.src ? "none" : "")};
`;

const ThumnailImg = styled.img`
  z-index: 10;
  width: 100%;
  height: 13rem;
  display: ${(props) => (props.src ? "" : "none")};
  object-fit: cover;
`;
```

'CardBody'는 Card 내부의 text를 담는 역할을 하며, `CardText`가 내부에 담을 Text에 대한 Styled Component이다.

`CardBottom`은 upload 시간과 버튼을 담는 Styled Component이다.

```javascript
const CardBody = styled.div`
  padding: 1.25rem;
  background-color: white;
`;

const CardText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
  color: black;
  line-height: 1.5;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
```

첫 번째 버튼과 두 번째 버튼의 모양이 다르므로 `FirstButton`과 `SecondButton`을, 

업로드 시간을 표시하기 위한 `Minute` Styled Component를 아래와 같 작성하였습니다. 

Button에는 클릭하여 focus일 경우와 커서를 hover했을 경우에 대하여 추가적인 css를 작성해주었습니다.

```javascript
const FirstButton = styled.button`
  padding: 0.25rem 0.5rem;
  margin-right: 0;
  color: #6c757d;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem 0 0 0.2rem;
  background: none;
  border: 1px solid #6c757d;
  transition: 0.15s;
  &:hover {
    background-color: #6c757d;
    color: white;
    transition: 0.15s;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(108, 117, 125, 0.5);
  }
`;

const Minute = styled.small`
  color: #6c757d;
  font-size: 80%;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;

const SecondButton = styled.button`
  padding: 0.25rem 0.5rem;
  margin-left: -1px;
  color: #6c757d;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0 0.2rem 0.2rem 0;
  border-left-width: 0;
  background: none;
  border: 1px solid #6c757d;
  transition: 0.15s;
  &:hover {
    background-color: #6c757d;
    color: white;
    transition: 0.15s;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(108, 117, 125, 0.5);
  }
`;
```

위에서 작성한 Styled Component를 이용해 **React Component**를 아래와 같이 작성하였습니다.

```javascript
const AlbumCard = (props) => {
  return (
    <AlbumCardWrap>
      <AlbumCardShadow>
        <Thumbnail src={props.src}>Thumbnail</Thumbnail>
        <ThumnailImg src={props.src}></ThumnailImg>
        <CardBody>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardBottom>
            <div>
              <FirstButton href="#">View</FirstButton>
              <SecondButton>Edit</SecondButton>
            </div>
            <Minute>9 min</Minute>
          </CardBottom>
        </CardBody>
      </AlbumCardShadow>
    </AlbumCardWrap>
  );
};
```

Thumbnail에 대한 주소는 `props`로 전달받도록 하였으며, 위에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174475184-f5e4bd7e-adfb-401f-bfe3-6ba86434730c.png)
