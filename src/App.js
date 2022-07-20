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
            backgroundImage="https://img2.sbs.co.kr/ops_pgm_img/2022/05/09/beea29af-a102-42e2-885a-59a12ca4f793639w640.jpg"
            text="과제를 작성하고 있는 지금 실시간 웨이브 인기 1위 프로그램입니다. 재밌다고 들었는데 한 번 봐 봐야겠군요!😊"
            time="1 month"
          />
          <MediaCard
            backgroundImage="https://cdn.thecolumnist.kr/news/photo/202112/530_977_1945.jpg"
            text="2위 프로그램은 놀면뭐하니입니다. 토요일 하면 놀면뭐하니가 떠오르니 2위라는게 납득이 되네요👍🏻"
            time="2 weeks"
          />
          <MediaCard
            backgroundImage="https://archivenew.vop.co.kr/images/90952a5d266e2222a78d4eb07938162f/2018-05/10085827_4356432.jpg"
            text="3위는 전지적 참견 시점입니다. 유튜브 쇼츠 내리다가 자주 본 프로그램인데 인기가 많은가 보네요!🧐"
            time="15 mins"
          />
          <MediaCard
            backgroundImage="https://img.imbc.com/adams/Program/20196/132059991742226799.jpg"
            text="4위는 나혼자산다! 여전히 많은 사람들이 보는 프로그램이네요. 명실상부 MBC 대표 예능이 아닌가 싶습니다!🐻"
            time="7 days"
          />
          <MediaCard
            backgroundImage="https://img.imbc.com/adams/Program/20224/132941072078735461.jpg"
            text="5위는 드라마 내일이네요~ 저는 드라마를 잘 안보는 편이라 찾아보니, 저승 오피스 휴먼 판타지 장르라고 합니다😮"
            time="9 hours"
          />
          <MediaCard
            backgroundImage="https://img.imbc.com/adams/Program/20223/132926638521450884.jpg"
            text="지금 2위부터 6위까지 다 MBC 프로그램인데요, 6위는 드라마 지금부터 쇼타임!입니다. 귀신 공조 코믹 수사극이라고 해요👻"
            time="13 secs"
          />
          <MediaCard
            backgroundImage="https://programres.kbs.co.kr/t2021-0534/2022/3/22/1647928088795_370280.jpg"
            text="7위는 주말 연속극인 드라마 현재는 아름다워입니다~ 주말드라마는 부모님들이 많이 보시던데 시청률이 기대가 되는군요😁"
            time="55 secs"
          />
          <MediaCard
            backgroundImage="https://img2.sbs.co.kr/img/sbs_cms/WE/2021/10/06/A1k1633503990479-640-360.jpg"
            text="8위는 꼬리에 꼬리를 무는 이야기입니다. 꼬꼬무라고도 불리는데 저도 심심할 때 틀어놓으면 시간이 잘 가서 좋아합니다!😎"
            time="24 mins"
          />
          <MediaCard
            backgroundImage="https://img2.sbs.co.kr/img/sbs_cms/WE/2021/07/12/t2U1626054657592.jpg"
            text="9위는 바로 런닝맨! 저도 정말 좋아하지만 요즘 못보고 있긴 한데, 나중에라도 꼭 챙겨보는 프로그램입니다!🏃🏻‍♂️"
            time="1 hours"
          />
        </CardContainer>
      </CardWrapper>
    </>
  );
}

export default App;
