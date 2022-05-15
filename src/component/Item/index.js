import React from "react";
import styled from "styled-components";

const Thumbnails = styled.div`
  width: 350px;
  height: 410px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Thumbnail = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 348px;
  height: 384px;
  margin-bottom: 24px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.url});
  width: 348px;
  height: 225px;
  background-size: cover;
`;

const Text = styled.div`
  width: 308px;
  height: 119px;
  padding: 20px;
`;

const Content = styled.div`
  width: 308px;
  height: 72px;
  margin-bottom: 16px;
  line-height: 1.5;
  color: #212529;
`;

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
    <Thumbnails>
      <Thumbnail>
        <Image url={props.url}></Image>
        <Text>
          <Content>{props.content}</Content>
          <Minute>{props.min}</Minute>
        </Text>
      </Thumbnail>
    </Thumbnails>
  );
};

export default Item;
