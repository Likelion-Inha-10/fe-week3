import React from "react";
import styled from "styled-components";
import Item from "../Item";

// 전체 item 박스들을 관리하는 index.js 파일

// item 부분 전체 박스
const ItemSection = styled.div`
  height: 1230px;
  background-color: #f8f9fa;
  padding-top: 48px;
  padding-bottom: 48px;
`;

// item들을 담고 있는 작은 박스
const Container = styled.div`
  width: 1140px;
  height: 1230px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

const ItemBox = (props) => {
  return (
    <ItemSection>
      <Container>
        <Item
          url="jeju.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="chum.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="gyeong.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="nam.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="han.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="hanla.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="chang.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="lotte.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
        <Item
          url="dok.jpg"
          content="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          min="9 mins"
        ></Item>
      </Container>
    </ItemSection>
  );
};

export default ItemBox;
