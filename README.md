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

### 📚 NavigationBar

**NavigationBar**는 크게 `Hamburger`와 'NavigationBar`로 나눌 수 있으며, 'NavigationBar`을 먼저 구현하였습니다.
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

