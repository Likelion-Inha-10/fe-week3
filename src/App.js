// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다!
import Header from "./component/Header";
import MediaCard from "./component/MediaCard";
import AlbumExample from "./component/AlbumExample";
import GlobalStyle from "./component/Global";
import CardContainer from "./component/CardContainer";
import CardWrapper from "./component/CardWrapper";

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <AlbumExample
        title="Album example"
        text="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
      />

      <CardWrapper>
        <CardContainer>
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="9 mins"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="new!"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="15 mins"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="7 days"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="9 hours"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="13 secs"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="55 secs"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="24 mins"
          />
          <MediaCard
            backgroundImage="https://i.pinimg.com/564x/dd/4c/27/dd4c2793825600be2c24094aed8c789b.jpg"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            time="1 hours"
          />
        </CardContainer>
      </CardWrapper>
    </>
  );
}

export default App;
