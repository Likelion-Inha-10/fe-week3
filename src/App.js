import Header from "./Component/Header";
import TextBox from "./Component/TextBox";
import GlobalStyle from "./Component/Global";

import Button from "./Component/Button";
import MediaCard from "./Component/MediaCard";
import CenterWrapper from "./Component/CenterWrapper";
import Color from "./Component/Color";
import Image from "./Component/Image";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header color="white" width="100%" height="55px" fontSize="20px"></Header>
      <Color>
        <CenterWrapper
          flex_direction="column"
          height="216px"
          padding_top="96px"
          padding_bottom="96px"
        >
          <TextBox
            fontSize="2.5rem"
            text_align="center"
            fontWeight="300"
            margin_bottom="3px"
          >
            Album example
          </TextBox>
          <TextBox color="#6c757d" fontSize="20px" fontWeight="300">
            Something short and leading about the collection below—its contents,
          </TextBox>
          <TextBox color="#6c757d" fontSize="20px" fontWeight="300">
            the creator, etc. Make it short and sweet, but not too short so
            folks
          </TextBox>
          <TextBox
            color="#6c757d"
            fontSize="20px"
            fontWeight="300"
            margin_bottom="16px"
          >
            don’t simply skip over it entirely.
          </TextBox>
          <CenterWrapper
            flex_direction="row"
            height="50px"
            width="315px"
            justify_content="space-between"
          >
            <Button color="white" backgroundColor="#027BFF">
              Main call to action
            </Button>
            <Button color="white" backgroundColor="#6C757D">
              Secondary action
            </Button>
          </CenterWrapper>
        </CenterWrapper>
      </Color>
      <Color background_color="#F8F9FA">
        <Image>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSgkIIEoCwenJ6-QMbs7-S-LBa_kvodKjMg&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_left2="95px"
            margin_right2="35px"
            text_align="left"
            text_align2="right"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_right2="35px"
            text_align="left"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_right2="95px"
            text_align="left"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_left2="95px"
            margin_right2="35px"
            text_align="left"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_right2="35px"
            text_align="left"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_right2="95px"
            text_align="left"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_left2="95px"
            margin_right2="35px"
            text_align="left"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_right2="35px"
            text_align="left"
          ></MediaCard>
          <MediaCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMqnYgWCK3UljkehJVmma1clyX07tGhAGWgdE-d7iaGF_yp-CQX-zzQBTYhZszc3Msq8&usqp=CAU"
            width="100%"
            height="225px"
            border="1px solid #6c757d"
            color="gray"
            tcolor2="#6C757D"
            tcolor="black"
            fontSize="16px"
            fontSize2="12.8px"
            fontWeight="400"
            fontWeight2="300"
            margin_right2="95px"
            text_align="left"
          ></MediaCard>
        </Image>
      </Color>
    </>
  );
}

export default App;
