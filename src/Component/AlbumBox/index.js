import React from "react";
import styled from "styled-components";
import AlbumCard from "../AlbumCard";

function Card({ card }) {
  return <AlbumCard src={card.src} />;
}

const AlbumContainer = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const AlbumWrap = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
`;

// map 활용해서 배열해보라고 하셔서 하긴 했는데.... 이게 맞는건지는 모르겠어요...ㅠㅠㅠ

const AlbumBox = (props) => {
  console.log(props);
  const cards = [
    {},
    {},
    {},
    {
      src: "https://i.pinimg.com/originals/53/25/b9/5325b9a536261e6c37c503326008647a.jpg",
    },
    { src: "https://miro.medium.com/max/3600/0*n-2bW82Z6m6U2bij.jpeg" },
    {
      src: "https://static.boredpanda.com/blog/wp-content/uploads/2019/04/funny-dancing-cats-fb3-png__700.jpg",
    },
    {
      src: "https://www.sadanduseless.com/wp-content/uploads/2021/06/tasty.png",
    },
    { src: "https://media0.giphy.com/media/LkjlH3rVETgsg/200.gif" },
    {
      src: " https://fullsync.co.uk/wp-content/uploads/2021/01/Gaming-Cat-scaled.jpg",
    },
  ];
  return (
    <AlbumContainer>
      <AlbumWrap>
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </AlbumWrap>
    </AlbumContainer>
  );
};

export default AlbumBox;
