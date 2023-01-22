import Top from "./component/Top";
import PageExplain from "./component/PageExplain";
import ImageCard from "./component/ImageCard";
import Bottom from "./component/Bottom";
import { Background, GlobalStyle, Footer } from "./component/Styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Top />
      <PageExplain title="Album example">
        Something short and leading about the collection below—its contents,
        <br /> the creator, etc. Make it short and sweet, but not too short so
        folks don’t
        <br />
        simply skip over it entirely.
      </PageExplain>

      <Background>
        <ImageCard image="계담다.jpg" time="20 mins" fontSize="13px">
          연남동 계담다! <br />
          혹시 여기 아시는 분 계신가요??
          <br />
          개그우먼 이영자 추천 맛집인데 죽기 전에 한번은 <br />
          가봐야 할 맛집입니다...❤
        </ImageCard>

        <ImageCard image="플러버1.png" time="15 mins" fontSize="13px">
          카페인줄 알았다고요?
          <br />
          무려 식당입니다...!
          <br />
          근데 제가 소개해드리는 이유는 인테리어 때문이 아닌 바로 맛 때문인데...
          &emsp;(음식 사진👉)
        </ImageCard>

        <ImageCard image="플러버2.png" time="9 mins" fontSize="11px">
          음식도 맛있습니다...! <br />
          양도 아주 푸짐해서 대책 없이 많이 시켰다간 정말 많이 남기고 올 수도
          있으니 주의! <br />
          제가 간 곳은 플러버 보라매공원점인데 다른 곳에도 있는 것 같으니
          가보세요!
        </ImageCard>

        <ImageCard image="모터시티.png" time="8 mins" fontSize="13px">
          여기는 모터시티바이매니멀잠실점입니다!
          <br />
          피자 진짜 맛있어요...❤
          <br />
          피자 좋아하시면 한번 가보세요!
        </ImageCard>

        <ImageCard image="크레이지카츠.png" time="5 mins" fontSize="13px">
          돈까스 좋아하시는 분들이라면 꼭 가봐야 할 곳...
          <br />
          합정 크레이지카츠입니다! <br />
          제가 살면서 먹은 돈까스 중에서 제일 맛있었습니다. <br />
          (또 가고 싶다...)
        </ImageCard>

        <ImageCard image="궁전다방.png" time="3 mins" fontSize="12px">
          좌식 카페 좋아하시는 분~✋ <br />
          여기는 좌식 카페를 좋아하시는 분들을 위해 추천드립니다! <br />
          원래 카페는 편한게 전부잖아요?! <br />
          관악구에 있는 궁전다방이라는 카페입니다!
        </ImageCard>

        <ImageCard image="로우머.png" time="3 mins" fontSize="13px">
          이미 망원동에서 핫한 카페 로우머입니다!
          <br />
          달달한 거 좋아하시는 분들 <br />
          여기 가면 꼭 크림피넛초코를 드셔보세요!
        </ImageCard>

        <ImageCard image="팔덕식당.png" time="1 mins" fontSize="11px">
          설마 아직까지 팔덕식당 안가본 분 계세요...? <br />
          등갈비찜 맛집으로 유명한 곳인데 설마 없을거라고 믿습니다...
          <br />
          혹시라도 있다면 당장 가시죠. (단호) <br />
          (지역별로 있는데 신촌 지점은 상호명이 '담산'으로 바뀌었다고 합니다.)
        </ImageCard>

        <ImageCard image="까치화방.png" time="30 sec" fontSize="13px">
          여긴 일단 인테리어가 미쳤습니다... <br />
          가면 그냥 힐링되는 곳! <br />
          감성 카페에 미쳐있는 분들 꼭 가보세요. <br />
          종로 까치화방입니다!
        </ImageCard>
      </Background>
      <Footer>
        <Bottom />
      </Footer>
    </>
  );
}

export default App;
