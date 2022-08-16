import React from "react";
import styled from "styled-components";
import { HiOutlineCamera } from "react-icons/hi";

const StyledBar = styled.div`
  width : 100%; 
  height : 56px;
  background-color : #343a40;
  display : flex;
  flex-direction : row;
  align-items : center;

`;

const IconBar = styled.div`
  width : 100%;
  height : 40px;
  padding : 0px 15px;
  margin : 0px 46px;
  display: flex;
`;

const AlbumWrapper = styled.div`
  width : 85px;
  height : 30px;
  padding: 5px 0px 5px 0px;
  margin : 0px 16px 0px 0px;
  display: flex;
  flex-direction : row;
  align-items : center;
 
`;

const Strong = styled.div`
  width: 63px;
  height : 30px;  
  font-size : 16px;
  font-weight : bold;
  color : white;
  text-align : center;
  display: flex;
  flex-direction : column;
  justify-content : center;
`;

const Hamburger = styled.div`
  width : 56px;
  height : 40px;
  background-color : #343a40;
  border : 1px solid white;
  border-radius : 5px;
  margin-left : auto;
`;

const NavBar = (props) => {
  return(
    <StyledBar>

      <IconBar>
        <AlbumWrapper>
          <HiOutlineCamera size='20px' color='white' />
          <Strong>Album</Strong>
        </AlbumWrapper>
        <Hamburger />
      </IconBar>

    </StyledBar>

  );
};

export default NavBar;