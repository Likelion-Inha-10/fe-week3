import React from "react";
import styled from "styled-components";

const AlbumCardWrap = styled.div`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 1.5rem;
  max-width: 33.333333%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const AlbumCardShadow = styled.div`
  box-sizing: content-box;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

const Thumbnail = styled.div`
  height: 13rem;
  font-size: 1.125rem;
  color: white;
  background-color: #56595c;
  text-align: center;
  line-height: 13rem;
  display: ${(props) => (props.src ? "none" : "")};
`;

const ThumnailImg = styled.img`
  z-index: 10;
  width: 100%;
  height: 13rem;
  display: ${(props) => (props.src ? "" : "none")};
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.25rem;
  background-color: white;
`;

const CardText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: left;
  color: black;
  line-height: 1.5;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const FirstButton = styled.button`
  padding: 0.25rem 0.5rem;
  margin-right: 0;
  color: #6c757d;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem 0 0 0.2rem;
  background: none;
  border: 1px solid #6c757d;
  transition: 0.15s;
  &:hover {
    background-color: #6c757d;
    color: white;
    transition: 0.15s;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(108, 117, 125, 0.5);
  }
`;

const Minute = styled.small`
  color: #6c757d;
  font-size: 80%;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;

const SecondButton = styled.button`
  padding: 0.25rem 0.5rem;
  margin-left: -1px;
  color: #6c757d;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0 0.2rem 0.2rem 0;
  border-left-width: 0;
  background: none;
  border: 1px solid #6c757d;
  transition: 0.15s;
  &:hover {
    background-color: #6c757d;
    color: white;
    transition: 0.15s;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(108, 117, 125, 0.5);
  }
`;

const AlbumCard = (props) => {
  return (
    <AlbumCardWrap>
      <AlbumCardShadow>
        <Thumbnail src={props.src}>Thumbnail</Thumbnail>
        <ThumnailImg src={props.src}></ThumnailImg>
        <CardBody>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardBottom>
            <div>
              <FirstButton href="#">View</FirstButton>
              <SecondButton>Edit</SecondButton>
            </div>
            <Minute>9 min</Minute>
          </CardBottom>
        </CardBody>
      </AlbumCardShadow>
    </AlbumCardWrap>
  );
};

export default AlbumCard;
