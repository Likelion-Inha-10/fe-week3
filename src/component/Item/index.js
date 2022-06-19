import React from "react";
import styled from "styled-components";

// 하나의 item 박스를 위한 index.js 파일

// item 박스
const Thumbnail = styled.div`
  width: 350px;
  height: 410px;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  width: 348px;
  height: 384px;
  margin-bottom: 24px;
`;

// 사진
const Image = styled.div`
  background-image: url(${(props) => props.url});
  width: 348px;
  height: 225px;
  background-size: cover;
`;

// content + minute 포함하고 있는 박스
const Text = styled.div`
  width: 308px;
  height: 119px;
  padding: 20px;
`;

// 내용
const Content = styled.div`
  width: 308px;
  height: 72px;
  margin-bottom: 16px;
  line-height: 1.5;
  color: #212529;
`;

// 분
const Minute = styled.div`
  width: 308px;
  height: 31px;
  font-size: 12.8px;
  color: #6c757d;
  text-align: right;
  padding-top: 7px;
`;

const Item = (props) => {
  return (
    <Thumbnail>
      <Image url={props.url}></Image>
      <Text>
        <Content>{props.content}</Content>
        <Minute>{props.min}</Minute>
      </Text>
    </Thumbnail>
  );
};

export default Item;
