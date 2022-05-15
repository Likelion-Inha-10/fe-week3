import React from "react";
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";

const BarBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px 16px 8px 16px;
  background-color: #343a40;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 173.6px;

  .camera {
    color: #ffffff;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

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
