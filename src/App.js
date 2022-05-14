// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다!
import Card from "./component/Card";
import GlobalStyle from "./component/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Card
        picture="img/Camera.JPG"
        color="#007BFF"
        Image1="img/images1.jpg"
        Image2="img/images2.jpg"
        Image3="img/images3.png"
        Image4="img/images4.png"
        Image5="img/images5.jpg"
        Image6="img/images6.jpg"
        Image7="img/images7.jpg"
        Image8="img/images8.webp"
        Image9="img/images9.jpg"
      />
    </>
  );
}

export default App;
