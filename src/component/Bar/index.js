import React from "react";
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";

// 전체 상단바 박스
const BarBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 16px 8px 16px;
  background-color: #343a40;
`;

// 카메라 사진 + 'Album' 텍스트 담고 있는 박스
const TextBox = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 173.6px;

  // 카메라 아이콘 스타일 적용
  .camera {
    color: #ffffff;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

// 'Album' 텍스트 박스
const Text = styled.div`
  color: #ffffff;
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 1px;
`;

const Bar = (props) => {
  return (
    <BarBox>
      <TextBox>
        <FiCamera className="camera"></FiCamera>
        <Text>Album</Text>
      </TextBox>
    </BarBox>
  );
};

export default Bar;
