import React from "react";
import styled from "styled-components";
import TextBox from "../Text";
import Button from "../Button";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 380px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  margin: 0px 15px 5px 15px;
`;

const ImageWrapper = styled.div`
  width: 360px;
  height: 225px;
  border-radius: 0.25rem 0.25rem 0 0;
  background-image: url(${(props) => (props.bImage ? props.bImage : "white")});
  background-size: 100% 100%;
`;

const StyledCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 20px 20px 20px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const StyledBottomText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fSize};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  font-weight: ${(props) => props.fWeight};
`;

const MediaCard = (props) => {
  return (
    <CardWrapper>
      <ImageWrapper bImage={props.backgroundImage} />
      <TextBox
        color="#212529"
        fontSize="16px"
        fontWeight="normal"
        lineHeight="1.2"
        divWidth="308px"
        marginBottom="10px"
        textAlign="left"
      >
        {props.text}
      </TextBox>
      <StyledCardBottom>
        <StyledButtonWrapper>
          <Button
            fColor="#6c757d"
            fSize="14px"
            borderColor="#6c757d"
            borderRadius="0.25rem 0 0 0.25rem"
            bgColor="transparent"
            btnPadding="4px 8px 4px 8px"
            btnMargin="0px"
          >
            View
          </Button>
          <Button
            fColor="#6c757d"
            fSize="14px"
            borderColor="#6c757d"
            borderRadius="0 0.25rem 0.25rem 0"
            bgColor="transparent"
            btnPadding="4px 8px 4px 8px"
            btnMargin="0px 0px 0px -1px"
          >
            Edit
          </Button>
        </StyledButtonWrapper>
        <StyledBottomText fcolor="#6c757d" fSize="13px" fWeight="lighter">
          {props.time}
        </StyledBottomText>
      </StyledCardBottom>
    </CardWrapper>
  );
};

export default MediaCard;
