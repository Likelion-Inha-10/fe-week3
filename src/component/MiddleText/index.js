import React from "react";
import styled from "styled-components";
import TextBox from "../TextBox";
import Button from "../Button";

const MiddleTextWrapper = styled.div`
    background-color: white;

    width: 100%;
    height: 408px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MiddleTextContainer = styled.div`
    width: 40%;
    height: 216px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const FirstTextContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    margin-bottom: 8px;
`;
const SecontTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    margin-bottom: 16px;
`;

const MiddleText = () => {
    return (
        <MiddleTextWrapper>
            <MiddleTextContainer>
                <FirstTextContainer>
                    <TextBox fontSize="42px" fontWeight="250">
                        Album example
                    </TextBox>
                </FirstTextContainer>
                <SecontTextContainer>
                    <TextBox
                        textAlign="center"
                        lineHeight="1.5"
                        fontSize="20px"
                        fontWeight="250"
                        color="grey"
                    >
                        Something short and leading about the collection
                        below—its contents, the creator, etc. Make it short and
                        sweet, but not too short so folks don’t simply skip over
                        it entirely.
                    </TextBox>
                </SecontTextContainer>
                <ButtonContainer>
                    <Button
                        backgroundColor="#007bff"
                        borderColor="white"
                        textColor="white"
                        borderRadius="5px"
                        margin="2px"
                        쟝
                    >
                        main call to action
                    </Button>

                    <Button
                        backgroundColor="#6c757d"
                        borderColor="white"
                        textColor="white"
                        margin="2px"
                        borderRadius="5px"
                    >
                        secondary action
                    </Button>
                </ButtonContainer>
            </MiddleTextContainer>
        </MiddleTextWrapper>
    );
};
export default MiddleText;
