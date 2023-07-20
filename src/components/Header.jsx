import React from "react";
import styled from "styled-components";
import crayon from "../images/crayon.png";

const Header = ({ userName, onLogout, onRefreshToken }) => {
  return (
    <HeaderContainer>
      <Title>
        <TitleImage src={crayon} alt="image" /> 그림 일기장
      </Title>
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
const TitleImage = styled.img`
  width: 60px;
  height: 60px;
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
