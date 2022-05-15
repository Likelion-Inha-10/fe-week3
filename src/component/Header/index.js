import React from "react";
import styled from "styled-components";
import { BiCamera } from "react-icons/bi";
import TextBox from "../TextBox";
import { AiOutlineMenu } from "react-icons/ai";
const HeaderWrapper = styled.div`
    widht: 100%;
    height: 56px;
    background-color: #343a40;
    display: flex;

    justify-content: center;
    /* 주축을 중심으로 정렬 */

    align-items: center;
    /* 보조축을 중심으로 정렬 */
`;

const HeaderContainder = styled.div`
    width: 67%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const IconMargin = styled.div`
    margin-right: 6px;
    display: flex;
    align-items: center;
`;

const HamburgerContainer = styled.div`
    border: 1px solid grey; /*이 색 더 진한 그레이로 바꾸기*/
    padding: 4px 12px;
    border-radius: 3px;
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainder>
                <LogoContainer>
                    <IconMargin>
                        <BiCamera color="white" size="25" />
                    </IconMargin>
                    <TextBox color="white" fontSize="20px" fontWeight="700">
                        Album
                    </TextBox>
                </LogoContainer>
                <HamburgerContainer>
                    <AiOutlineMenu color="grey" size="28" />
                </HamburgerContainer>
            </HeaderContainder>
        </HeaderWrapper>
    );
};

export default Header;
