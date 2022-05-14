import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
import Button from "../Button";

const StyledAlbumExampleWrapper = styled.div`
  padding: 90px;
  display: flex;
  flex-direction: column;
`;

const StyledAlbumExampleButtonWrapper = styled.div`
  width: 310px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AlbumExample = (props) => {
  return (
    <StyledAlbumExampleWrapper>
      <TextBox
        color="#212529"
        fontSize="40px"
        fontWeight="lighter"
        lineHeight="1.5"
        divWidth="610px"
        marginBottom="8px"
        textAlign="center"
      >
        {props.title}
      </TextBox>
      <TextBox
        color="#6C757D"
        fontSize="20px"
        fontWeight="lighter"
        lineHeight="1.5"
        divWidth="610px"
        marginBottom="20px"
        textAlign="center"
      >
        {props.text}
      </TextBox>
      <StyledAlbumExampleButtonWrapper>
        <Button
          fColor="white"
          fSize="16px"
          btnHeight="30px"
          borderColor="#6c757d"
          borderRadius="0.25rem"
          bgColor="#007BFF"
          btnPadding="0.375rem 0.75rem"
          btnMargin="0px"
        >
          Main call to action
        </Button>
        <Button
          fColor="white"
          fSize="16px"
          btnHeight="30px"
          borderColor="#6c757d"
          borderRadius="0.25rem"
          bgColor="#6c757d"
          btnPadding="0.375rem 0.75rem"
          btnMargin="0px"
        >
          Secondary Action
        </Button>
      </StyledAlbumExampleButtonWrapper>
    </StyledAlbumExampleWrapper>
  );
};

export default AlbumExample;
