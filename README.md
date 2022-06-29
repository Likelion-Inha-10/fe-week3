# 리뷰2

### 구조

- Header
    - HeaderWrapper
        - LogoContainer
            - Icon - 카메라
            - TextBox - 로고(Album)
        - HamburgerContainer
            - Icon - 햄버거
- MiddleText
    - MiddleTextWrapper
        - FirstTextContainer
            - TextBox - Album example
        - SecondTextContainer
            - TextBox - 본문
            - ButtonContainer
                - Button - 1
                - Button - 2
- Album
    - AlbumWrapper
        - CardContainer
            - MediaCard - 9개
- Footer
    - FooterWrapper
        - LeftContainer
            - StyledPTag - 문장들
        - RightContainer
            - StyledATag - 링크
            

# Header

미리 만들어둔 TextBox 태그를 재사용했다. 

- HeaderWrapper
    
    기능: 헤더의 큰 틀, 배경색, 높이 지정
    

- HeaderContainer
    
    기능: 아이콘, 로고, 햄버거 버튼을 중앙정렬해줄 틀
    
- LogoContainer
    
    기능: 아이콘, 로고를 담아줄 틀 
    

- IconMargin
    
    기능: 아이콘, 로고 사이를 벌려줌(마진)
    
- HamburgerContainer
    
    기능: 햄버거 버튼을 싸고있는 테두리 구현
    

```jsx
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
```

# MiddleText

- MiddleTextWrapper
    
    기능: 중앙 텍스트의 큰 틀, 높이지정
    
- MiddleTextContainer
    
    기능: 텍스트들을 중앙 정렬해줌
    

- ButtonContainer
    
    기능: 버튼들을 중앙 정렬해줌
    
- FirstTextContainer
    
    기능: Album example을 중앙 정렬해줌
    
- SecondTextContainer
    
    기능: 본문을 중앙 정렬해줌
    

- ButtonContainer
    
    기능: 버튼 두개를 담아 중앙 정렬해줌
    
    ```jsx
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
    ```
    

# Album

만들었던 MediaCard 재사용

- AlbumWrapper
    
    기능: 앨범의 높이 설정, 큰 틀
    
- CardContainer
    
    기능: 카드들을 중앙 정렬해주고, 3개씩 나열되게 해줌
    

```jsx
import React from "react";
import styled from "styled-components";
import MediaCard from "../MediaCard";
import TextBox from "../TextBox";

const AlbumWrapper = styled.div`
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
        <AlbumWrapper>
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
        </AlbumWrapper>
    );
};

export default Album;
```

# Footer

StyledPTag, StyledATag를 만들어서 사용(밑줄이 없어야 해서 만듦)

- FooterWrapper
    
    기능: 높이, 큰 틀 지정
    

- FooterContainer
    
    기능: 내부의 요소들을 중앙 정렬해줌, 2개의 컨테이너를 양쪽으로 두게 끔 함
    
- LeftContainer
    
    기능: 왼쪽 텍스트를 중앙 정렬해줌
    
- RightContainer
    
    기능: 패딩 
    
    ```jsx
    import React from "react";
    import styled from "styled-components";
    import StyledPTag from "../StyledPTag";
    import StyledATag from "../StyledATag";
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
                        <StyledPTag fontSize="16px" fontWeight="400" color="grey">
                            Album example is © Bootstrap, but please download and
                            customize it for yourself!
                        </StyledPTag>
                        <StyledPTag fontSize="16px" fontWeight="400" color="grey">
                            New to Bootstrap?{" "}
                            <StyledATag textDecoration="none" color="#007bff">
                                Visit the homepage
                            </StyledATag>{" "}
                            or read our{" "}
                            <StyledATag textDecoration="none" color="#007bff">
                                getting started guide.
                            </StyledATag>
                        </StyledPTag>
                    </LeftContainer>
                    <RightContainer>
                        <StyledATag textDecoration="none" color="#007bff">
                            Back to top
                        </StyledATag>
                    </RightContainer>
                </FooterContainer>
            </FooterWrapper>
        );
    };
    
    export default Footer;
    ```
