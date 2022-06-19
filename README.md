# 멋쟁이 사자처럼 10기 FE 3주차 과제 🦁
react 실습 두번째!
클론 코딩!

### 문제?
아래 페이지를 클론 코딩하면 된다.
https://getbootstrap.com/docs/4.3/examples/album/
<br>
#클론코딩 제외 대상
1. 우측 상단 햄버거 버튼
2. 각 카드별 View/Edit 버튼
3. 하단 Footer
4. 기타 애니메이션 효과

### 나의 구현 방식?
먼저 app.js로 전체적인 틀을 보면...

![app](https://user-images.githubusercontent.com/103057334/174478199-14923122-5827-4688-a5c3-a4cc2c6481f5.png)

<br> 

Styled Components를 사용해서 React 컴포넌트를 스타일링하였다.
- 먼저 'div'에 원하는 스타일을 적용한 후 StyledText 변수에 저장하였다.
- 이후 글자 색상, 폰트 두께, 폰트 크기를 props로 넘겨 받을 수 있게 하였다.
- 이때 줄 간격은 1.5로 지정하였고, 글자 색과 폰트 크기의 default 값은 각각 'black', '10px'로 지정하였다.
- 이 스타일을 TextBox 컴포넌트에 적용하였고...
 
![app](https://user-images.githubusercontent.com/103057334/174476455-fb3af228-3e73-4706-84f4-ba718efc10c1.png)<br>
- 이제TextBox 컴포넌트를 App.js 같은 다른 React 컴포넌트에서 사용할 수 있다!<br>
 
 그리고 이제 실행 시켜보면...?!
 <br>
 ![1번 결과](https://user-images.githubusercontent.com/103057334/174474799-1daaf755-6a96-4d35-908c-084d2738ab75.png)<br>
  App.js에서 넘겨준 것대로 실행 완료!<br>
<br>


