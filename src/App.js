import AlbumBox from "./Component/AlbumBox";
import Footer from "./Component/Footer";
import MainBox from "./Component/MainBox";
import NavigationBar from "./Component/NavigationBar";

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
