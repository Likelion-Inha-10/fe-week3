// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다!
import MediaCard from "./component/MediaCard";
import CardContainer from "./component/CardContainer";
import NavBar from "./component/NavBar";
import MainBody from "./component/MainBody";

function App() {
  return(
  <>
    <NavBar />
    <MainBody />
    <CardContainer>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
    </CardContainer>
  
  </>
  );
}

export default App;
