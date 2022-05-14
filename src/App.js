import TextBox from "./Component/Text";
import Header from "./Component/Header";
import { createGlobalStyle } from "styled-components";
import Button from "./Component/Button";
import styled from "styled-components";
import Margin from "./Component/Margin";
import MediaCard from "./Component/MediaCard";
import Wrapper2 from "./Component/Wrapper2";
import Wrapper3 from "./Component/Wrapper3";
// import Wrapper from "./Component/Wrapper";
const GlobalStyle = createGlobalStyle`

  body {
    width:100%
    line-height: 1.5;
    margin :  0 auto;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 408px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: ;
`;

function App() {
  // const media = [
  //   { img: "/img/B1.jpg", head: "test1" },
  //   { img: "/img/C1.jpg", head: "test2" },
  //   { img: "/img/D1.jpg", head: "test3" },
  // ];
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <TextBox fontSize="40px" fontWeight="lighter" color="#212529">
          Album example
        </TextBox>
        <TextBox fontSize="20px" fontWeight="lighter" color="#6c757d">
          <div>
            Something short and leading about the collection below—its contents,
          </div>{" "}
          <div>
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t
          </div>
          <div>simply skip over it entirely.</div>
        </TextBox>
        <p> </p>
        <div>
          <Button color="white" backgroundColor="#007bff" borderColor="#007bff">
            Main call to action
          </Button>{" "}
          <Button color="white" backgroundColor="#6c757d" borderColor="#6c757d">
            Secondary action
          </Button>
        </div>
      </Wrapper>
      <Wrapper3>
        <Wrapper2>
          <MediaCard image="/img/B1.jpg" head="Joker" />
          <MediaCard image="/img/C1.jpg" head="Oneday" />
          <MediaCard image="/img/D1.jpg" head="Eternal Sunshine" />
          <MediaCard image="/img/E1.jpg" head="A star is born" />
          <MediaCard image="/img/F1.jpg" head="Malena" />
          <MediaCard image="/img/G1.jpg" head="Cicago" />
          <MediaCard image="/img/H1.jpg" head="Take this waltz" />
          <MediaCard image="/img/I1.jpg" head="Her" />
          <MediaCard image="/img/J1.jpg" head="We need to talk about Cavin" />
          {/* {media.map((m) => (
            <MediaCard image={m.img} head={m.head}></MediaCard>
          ))} */}
        </Wrapper2>
      </Wrapper3>
      <Margin height="152" />
    </>
  );
}

export default App;
