import AlbumBox from "./component/AlbumBox";
import Footer from "./component/Footer";
import MainBox from "./component/MainBox";
import NavigationBar from "./component/NavigationBar";

// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다!
function App() {
  return (
    <>
      <NavigationBar />
      <MainBox />
      <AlbumBox />
      <Footer />
    </>
  );
}

export default App;
