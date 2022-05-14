import Album from "./component/Album";
import GlobalStyle from "./component/GlobalStyle";
import Header from "./component/Header";
import MiddleText from "./component/MiddleText";
import Footer from "./component/Footer";
// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다!
function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <MiddleText></MiddleText>
            <Album></Album>
            <Footer></Footer>
            {/* <MediaCard btncolor="blue" src="img/hi.png" title="Heading" internal="This is a
     wider card with supporting text below as a natural lead-in to additio'nal content. This content is a little bit longer."> </MediaCard> */}
        </>
    );
}

export default App;
