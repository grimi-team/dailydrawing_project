import React from "react";
import styled from "styled-components";
import cloudy from "../images/cloudy.png";

const DetailPage = () => {
  return (
    <>
      <AllContainer>
        <HeaderContainer>
          <img src={cloudy} width="70px" height="70px"></img>
          <UserName>유저이름</UserName>
          <BackButton>뒤로가기</BackButton>
        </HeaderContainer>
      </AllContainer>
    </>
  );
};

const AllContainer = styled.div`
  border: 3px solid black;
  border-radius: 8px;
  width: 800px;
  height: 1000px;
  margin: auto;
`;
const HeaderContainer = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  width: 700px;
  height: 80px;
  display: flex;
  align-items: center;
  margin: auto;
`;

const UserName = styled.div``;

const BackButton = styled.button`
  cursor: pointer;
`;
export default DetailPage;
