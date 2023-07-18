import React from "react";
import styled from "styled-components";

const Header = ({ userName, onLogout, onRefreshToken }) => {
    return (
        <HeaderContainer>
            <Title>{userName ? userName : "나"}의 그림 일기장</Title>
            <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
            <RefreshButton onClick={onRefreshToken}>refrexh 테스트</RefreshButton>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 1200px;
  height: 180px;
`;

const Title = styled.h1`
  text-align: center;
`;

const LogoutButton = styled.button`
  width: 100px;
  background-color: green;
  color: white;
  height: 30px;
  border-radius: 20px;
`;

const RefreshButton = styled.button`
  width: 100px;
  background-color: green;
  color: white;
  height: 30px;
  border-radius: 20px;
`;

export default Header;