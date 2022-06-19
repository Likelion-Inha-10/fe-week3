// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다!
import GlobalStyle from "./component/GlobalStyled";
import Bar from "./component/Bar";
import Main from "./component/Main";
import ItemBox from "./component/ItemBox";

function App() {
  return (
    <>
      {/* body에 스타일 적용 */}
      <GlobalStyle />
      {/* 상단바 */}
      <Bar />
      <Main />
      <ItemBox />
    </>
  );
}

export default App;
