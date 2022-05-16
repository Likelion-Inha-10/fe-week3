import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 2158px;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Title = styled.div`
  height: 40px;
  width: 100%;
  background-color: #343a40;
  padding: 8px 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
`;

const Title2 = styled.div`
  height: 40px;
  width: 80%;
  background-color: #343a40;
  align-items: center !important;
  display: flex !important;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  flex-wrap: wrap;
  align-items: center;
`;

const Album = styled.div`
  padding: 0 15px;
  height: 40px;
  width: 100px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Camera = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${(props) => (props.picture ? props.picture : "none")});
  display: inline-block;
  background-size: cover;
  margin-right: 5px;
  margin-top: 3px;
`;

const CameraText = styled.div`
  font-weight: bolder;
  color: #fff;
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

const Jumbotron = styled.div`
  margin-bottom: 0;
  background-color: #fff;
  text-align: center !important;
  display: block;
  padding: 96px 32px;
`;
const JumbotronHeading = styled.div`
  font-weight: 300;
  font-size: 2.5rem;
  margin: 0px 0px 8px;
  line-height: 1.2;
  margin-top: 0;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const JumbotronText = styled.div`
  color: #6c757d !important;
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 16px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center !important;
`;

const JumbotronBut = styled.div`
  margin-bottom: 0;
  margin-top: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center !important;
`;

const JumbotronButton = styled.div`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: white;
  background-color: ${(props) => (props.color ? props.color : "#6C757D")};
  margin: 8px 0px;
  margin-right: 5px; //원래 있는거 아님;;
  box-sizing: border-box;
`;

const AllRectSectionReal = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  background-color: #f8f9fa;
`;

const AllRectSection = styled.div`
  padding-bottom: 3rem !important;
  padding-top: 3rem !important;
  background-color: #f8f9fa !important;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
`;

const RectSection = styled.div`
  width: 350px;
  height: 402px;
  margin-bottom: 1.5rem !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-right: 15px;
  margin-left: 15px;
`;

const Rect = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgb(85, 89, 92); //원래는 fill임
  transform-origin: 0px 0px;
  background-image: url(${(props) => (props.Image ? props.Image : "none")});
  background-size: cover;
  background-repeat: no-repeat;
`;

const RectContent = styled.div`
  flex: 1 1 auto;
  padding: 20px;
  padding-bottom: 10px;
  display: block;
  position: relative;
  margin-top: 10px;
`;

const Mins = styled.div`
  color: #6c757d!;
  width: 95%;
  height: 20px;
  font-size: 80%;
  font-weight: 400;
  text-align: right;
  margin-bottom: 20px;
`;

const Card = (props) => {
  return (
    <>
      <Wrapper>
        <Title>
          <Title2>
            <Album>
              <Camera picture={props.picture} />
              <CameraText>Album</CameraText>
            </Album>
          </Title2>
        </Title>
        <Jumbotron>
          <JumbotronHeading>Album example</JumbotronHeading>
          <JumbotronText>
            Something short and leading about the collection below—its contents,
            <br />
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t <br />
            simply skip over it entirely.
          </JumbotronText>
          <JumbotronBut>
            <JumbotronButton color={props.color}>
              Main call to action
            </JumbotronButton>
            <JumbotronButton>Secondary action</JumbotronButton>
          </JumbotronBut>
        </Jumbotron>
        <AllRectSectionReal>
          <AllRectSection>
            <RectSection>
              <Rect Image={props.Image1} />
              <RectContent>
                It is better to fail in originality than to succeed in
                imitation.Success is walking from failure
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image2} />
              <RectContent>
                Success is walking from failure to failure with no loss of
                enthusiasm. All progress takes place.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image3} />
              <RectContent>
                All progress takes place outside the comfort zone. Success
                usually comes to those.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image4} />
              <RectContent>
                Success usually comes to those who are too busy to be looking
                for it.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image5} />
              <RectContent>
                The way to get started is to quit talking and begin doing.
                Quotes that will give you strength.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image6} />
              <RectContent>
                She went through a lot after moving to the city. I’ve failed
                over and over and over again in my life and that is why I
                succeed.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image7} />
              <RectContent>
                It is kind of fun to do the impossible. It takes a lot of
                courage to go into the unknown.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image8} />
              <RectContent>
                There are better starters than me but I’m a strong finisher.
                Tough times never last.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
            <RectSection>
              <Rect Image={props.Image9} />
              <RectContent>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </RectContent>
              <Mins>9 mins</Mins>
            </RectSection>
          </AllRectSection>
        </AllRectSectionReal>
      </Wrapper>
    </>
  );
};

export default Card;
