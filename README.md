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
`NavigationBox`는 NavgationBar의 전체 영역을 나타내며, `NavigationWrap`이 실질적인 Content들을 담고 있습니다. `NavigationBox`에 `display: flex;` 속성을 추가해 상하좌우 중앙정렬을 하였으며, `NavigationWrap`도 동일한 속성을 추가하여 Content들을 상하좌우 중앙정렬이 되도록 하였습니다.

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

내부에는 `PageTitle`과 `HamburgerButton` Styled component를 추가하기 위해 작성하였으며, 이는 각각 상단바 좌측의 Title과 우측의 hamburger menu button의 역할을 합니다. `PageTitle`에는 a tag이므로 클릭하였을 때, text의 색상이 변하고 밑줄이 생기는 것을 방지하기 위해 `text-decoration: none;`을 추가 작성하였습니다. 또한 `HamburgerButton`을 클릭해 focus된 경우에 border 색상 변화를 위해 `&:focus`시의 추가적인 css를 작성하였습니다.

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
`IoCameraOutline`은 Title 옆에 카메라 모양 icon을 추가해주기 위한 tag로 **react icon**을 사용하였습니다. 이를 위해 `import { IoCameraOutline } from "react-icons/io5";`를 코드 상단에 작성해주었습니다.
동일하게 `AiOutlineMenu` 또한 hamburger menu icon을 추가해주기 위한 tag로, `import { AiOutlineMenu } from "react-icons/ai";`를 코드 상단에 추가 작성해주었습니다.

상단의 'HamburgerContent'는 **HamburgerButton**을 클릭했을 시에 보이는 Hamburger Menu를 담고 있는 React Component입니다. height의 변화를 통해 보이거나 보이지 않도록 하였으며, 이를 관리하기 위해 **button 클릭 시에 state가 변경되어 `HamburgerContent`의 `props`로 넘겨주도록** 하였습니다.

`NavigationBar`에 대한 결과는 아래와 같습니다.

![image](https://user-images.githubusercontent.com/79556112/174473338-4c666c5b-b7af-4966-a985-269f8646e5d8.png)


### 📜 HamburgerContent

`NavigationBar`와 동일하게 전체 영역을 표시할 `HamburgerBox`와 내부에 Content를 담을 `HamburgerWrap` Styled Component를 작성하였습니다. (중앙 정렬을 위해 동일하게 ` display: flex;` 작성)

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

전체를 감쌀 `ContactWrap`과 내부에 들어갈 `HyperLink`를 작성해주었습니다. `HyperLink`는 커서를 hover할 시에 text에 밑줄이 생겨야 하므로 `&:hover`시에 추가적인 css를 작성해주었습니다. `Title`은 **About**과 동일하므로 위에서 작성한 Styled Component를 사용하였습니다.

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

