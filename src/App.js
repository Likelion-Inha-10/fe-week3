import Header from "./component/Header";
import GlobalStyle from "./component/GlobalStyle";
import Content from "./component/Content";
import CardWrapper from "./component/CardWrapper";
import CardWrapper2 from "./component/CardWrapper2";
import CardWrapper3 from "./component/CardWrapper3";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header color="white" backgroundColor="#343A40" picture="img/logo.jpg">Album</Header>
      <Content backgroundColor="white" color="#21252">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</Content>
      <CardWrapper backgroundColor="#F8F9FA" color="#212529" picture="img/라이언.png">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardWrapper>
      <CardWrapper2 backgroundColor="#F8F9FA" color="#212529" picture="img/콘.png">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardWrapper2>
      <CardWrapper3 backgroundColor="#F8F9FA" color="#212529" picture="img/자주.jpeg">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardWrapper3>
    </>
  );
}


export default App;