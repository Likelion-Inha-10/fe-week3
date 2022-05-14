import React from "react";
import styled from "styled-components";
import MediaCard from "../MediaCard";
import TextBox from "../TextBox";
const ALbumWrapper = styled.div`
    width: 100%;
    height: 1350px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CardContainer = styled.div`
    width: 67%;
    height: 1230px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
`;

const Album = () => {
    return (
        <ALbumWrapper>
            <CardContainer>
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
                <MediaCard src="../img/hi.png" />
            </CardContainer>
        </ALbumWrapper>
    );
};

//질문: 앨범의 높이가 크롬창의 폭에 따라 달라지던데 이건 뭔지?
//미디어 카드의 가로세로도 달라지던데 이건 어떻게 하는 건지?
//버튼의 경계는 어떻게 지우는지?

export default Album;
