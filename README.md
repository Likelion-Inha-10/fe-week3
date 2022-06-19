# 멋쟁이 사자처럼 10기 FE 3주차 과제 🦁
react 실습 두번째!
클론 코딩!

### 문제?
아래 페이지를 클론 코딩하면 된다.<br>
https://getbootstrap.com/docs/4.3/examples/album/
<br>
<br>#클론코딩 제외 대상
1. 우측 상단 햄버거 버튼
2. 각 카드별 View/Edit 버튼
3. 하단 Footer
4. 기타 애니메이션 효과

### 나의 구현 방식?
먼저 app.js로 전체적인 틀을 보면...

![app](https://user-images.githubusercontent.com/103057334/174478256-67c99908-9033-4d30-8dd4-bfe900f096fc.png)

<br>
#### GlobalStyle?
![globalstyle](https://user-images.githubusercontent.com/103057334/174478343-a6013a0d-b866-42df-9187-25e5440cb131.png)
<br>
-'createGlobalStyle'에 margind을 0으로 적용하여 전체적인 margin을 0으로 설정하였다.

#### Top?
![top](https://user-images.githubusercontent.com/103057334/174478471-5e7a0554-ea7b-4d34-835f-ab258dc8e4b5.png)
<br>
- 이 부분은 페이지의 맨 윗부분!
- 이 곳의 전체적인 틀의 스타일을 TopWrapper에 저장하였다. 윗부분의 색상과 크기, padding 등을 설정!
- 그리고 react icon을 이용하여 제시된 페이지와 최대한 같도록 구현하였는데...
- 메뉴 아이콘을 감싸기 위해서 IconWrapper을 만들었다. 디테일한 부분은 최대한 클론 코딩 페이지와 같도록 설정.
<br>
##### 이제 제대로 Top을 살펴보려는데...!
##### TextBox?
![text](https://user-images.githubusercontent.com/103057334/174478816-3de845b6-f8e6-44bb-8fb1-70d48f7dcf31.png)

<br>
- color, font-weight, font-size, float, padding, cursor을 props로 넘겨주었다.
- props로 넘겨주지 않은 경우에는 설정한 default 값대로!

##### 다시 Top으로 돌아와서...!
- 먼저 카메라 아이콘을 가장 왼쪽에 배치. 스타일은 TextBox을 이용하여 props로 넘겨준다.
- 'Album' 글자는 app.js에서 받아와서 TextBox의 props.children으로 넘겨준다.
- 글자 스타일도 역시 TextBox을 이용하여 props로 넘겨준다!
- 그리고 가장 오른쪽에 있는 메뉴 아이콘...
- 이 아이콘 역시 TextBox을 이용하여 props로 넘겨주는데 IconWrapper로 감싸준다.
- 그리고 전체적으로 TopWrapper로 감싸주면 끝!

#### PageExplain?
![pageExplain](https://user-images.githubusercontent.com/103057334/174479159-91068ac6-ff37-4ad2-911d-02ef0b53e49c.png)

<br>
- 이 부분은 페이지의 중간 부분. 즉, 앨범 제목과 설명이 있고 가운데에 두개의 버튼이 있는 부분!
- 이 곳의 전체적인 틀의 스타일은 PageWrapper에 저장하였다. text 가운데에 배열하고 높이, padding, border 등을 설정.
<br>
##### 이제 제대로 PageExplain을 살펴보려는데...!
##### Button?
![button](https://user-images.githubusercontent.com/103057334/174479330-ad96f876-2f64-4773-a700-d5953e60ba2e.png)

<br>
- height, border-radius, border, font-size, font-weight, padding, margin-left, background, color, float을 props로 넘겨주었다.
- props로 넘겨주지 않은 경우에는 설정한 default 값대로!
- 마우스를 버튼 위로 올리면 커서가 pointer로 바뀌도록 설정

##### 다시 PageExplain으로 돌아와서...!
- 먼저 앨범 제목을 TextBox을 이용하여 props로 받는다.
- 그리고 앨범 설명에 대한 부분도 TextBox을 이용하여 props.children으로 받는다.
- 그리고 가장 아래에 Button 컴포넌트를 이용하여 버튼 두개를 만든다.
- 버튼의 디테일한 부분은 최대한 클론 코딩 페이지와 같도록 설정해서 props로 넘겨준다.
- 전체적인 부분은 PageWrapper로 감싸주기

#### Background?
![background](https://user-images.githubusercontent.com/103057334/174479680-3f07d148-b06b-4c1b-a6ab-6b608a691530.png)

<br>
- 앨범 부분을 전체적으로 감싸는 Background!
- 앨범들이 중앙으로 모일 수 있도록 justify-content는 center로 설정
- 그 외 배경이나 padding에 대한 부분은 클론 코딩 페이지와 최대한 비슷하게...!

#### ImageCard?
![imageCard](https://user-images.githubusercontent.com/103057334/174479918-ea7e3e5e-279f-4e4b-9e7c-3ec1f33eff8c.png)

<br>
- ImageContentCard는 각 앨범 카드의 전체적인 틀. 크기나 디자인 등은 클론 코딩 페이지와 최대한 같게 한다.
- CardImage는 앨범의 사진 부분! 크기나 디자인 등은 클론 코딩 페이지와 최대한 같게 하고, 사진은 props를 통해 넘겨받는다.
- CardContent는 앨범에서 사진 설명 부분. 사진마다 설명 분량의 차이가 있을 수 있으므로 일관성을 갖도록 크기를 설정해준다.
##### 이제 ImageCard을 제대로 살펴보자...!
- 먼저 CardImage로 사진을 props로 넘겨 받는다.
- 그리고 사진에 대한 설명은 CardContent 안에서 TextBox를 통해 props로 넘겨 받는다.
- 그리고 Button 컴포넌트를 이용하여 앨범 카드 왼쪽 아래에 있는 버튼 구현!
- 이후 TextBox로 오른쪽 아래에 있는 시간 구현
- 그리고 ImageContentCard로 전체적으로 감싸주면 끝!

#### 이제 app.js를 다시 살펴볼까...?!
- 먼저 전체적으로 GlobalStyle 적용
- 그리고 Top으로 페이지 윗부분 만들고, PageExplain으로 앨범 제목과 설명 부분 작성!
- 이후 ImageCard를 이용하여 본격적인 앨범을 만들고...
- Background로 이 앨범을 감싸주면 완성!


#### 이제 실행 시켜보면...?!
![클론 코딩](https://user-images.githubusercontent.com/103057334/174480490-7e041bf8-4a22-44a6-8fb4-e92758532967.png)

<br>
  똑같이 페이지 만들기 성공!
<br>


