import React from "react";
import styled from "styled-components";
import Str from "../Str";
import MyA from "../MyA";
const FooterWrapper = styled.div`
    width: 100%;
    height: 152px;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 50%;
`;

const LeftContainer = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
`;
const RightContainer = styled.div`
    padding-top: 15px;
`;
const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <LeftContainer>
                    <Str fontSize="16px" fontWeight="400" color="grey">
                        Album example is © Bootstrap, but please download and
                        customize it for yourself!
                    </Str>
                    <Str fontSize="16px" fontWeight="400" color="grey">
                        New to Bootstrap?{" "}
                        <MyA textDecoration="none" color="#007bff">
                            Visit the homepage
                        </MyA>{" "}
                        or read our{" "}
                        <MyA textDecoration="none" color="#007bff">
                            getting started guide.
                        </MyA>
                    </Str>
                </LeftContainer>
                <RightContainer>
                    <MyA textDecoration="none" color="#007bff">
                        Back to top
                    </MyA>
                </RightContainer>
            </FooterContainer>
        </FooterWrapper>
    );
};

export default Footer;
