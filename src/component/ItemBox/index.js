import React from "react";
import styled from "styled-components";
import Item from "../Item";

const ItemSection = styled.div`
  height: 1230px;
  background-color: #f8f9fa;
  padding-top: 48px;
  padding-bottom: 48px;
`;

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
