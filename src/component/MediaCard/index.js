import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";
import Button from "../Button";

const PhotoWrapper = styled.div`
    background-image: url(${(props) => (props.src ? props.src : "none")});
    background-size: cover;
    border-radius: 3px;
    height: 225px;
    //
`;
const CardBody = styled.div`
    padding: 20px;
`;

const CardText = styled.div`
    line-height: 1.3;
    margin-bottom: 16px;
`;
const Main = styled.div`
    box-shadow: 0px 1px 5px #dedede;
    background-color: white;
    width: 348px;
    height: 386px;
    border-radius: 4px;
    flex-direction: column;

    //
`;

const BtnGroup = styled.div`
    border: 1px solid grey;
    border-radius: 4px;
    display: flex;
`;
const BorderRight = styled.div`
    border-right: 1px solid grey;
`;
const BtnTextGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MediaCard = (props) => {
    return (
        <>
            <Main>
                <PhotoWrapper src={props.src}></PhotoWrapper>
                <CardBody>
                    <CardText>
                        <TextBox
                            lineHeight="1.5"
                            fontWeight="300"
                            fontSize="16px"
                        >
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </TextBox>
                    </CardText>
                    <BtnTextGroup>
                        <BtnGroup>
                            <BorderRight>
                                <Button
                                    height="30px"
                                    paddingH="4px"
                                    paddingV="8px"
                                    borderColor="white"
                                    margin="0px"
                                    backgroundColor="white"
                                >
                                    <TextBox
                                        color="grey"
                                        fontWeight="200"
                                        fontSize="14px"
                                    >
                                        View
                                    </TextBox>
                                </Button>
                            </BorderRight>
                            <Button
                                height="29px"
                                paddingH="4px"
                                paddingV="8px"
                                borderColor="white"
                                margin="0px"
                                backgroundColor="white"
                            >
                                <TextBox
                                    color="grey"
                                    fontWeight="200"
                                    fontSize="14px"
                                >
                                    Edit
                                </TextBox>
                            </Button>
                        </BtnGroup>

                        <TextBox color="grey" fontSize="12px" fontWeight="300">
                            9 mins
                        </TextBox>
                    </BtnTextGroup>
                </CardBody>
            </Main>
        </>
    );
};

export default MediaCard;
