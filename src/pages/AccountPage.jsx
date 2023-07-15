import React from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";

const AccountPage = () => {
  return (
    <EntireContainer>
      <LogoContainer>
        <LogoImage src={logo} />
      </LogoContainer>
      <LogInContainer>
        <AccountTitle>회원가입</AccountTitle>
        <AccountForm>
          <div>아이디</div>
          <IdInput type="text" />
          <RepeatCheckIdButton>중복확인</RepeatCheckIdButton>
          <br />
          <div>비밀번호</div>
          <PwInput type="password" />
          <br />
          <div>비밀번호 확인</div>
          <PwCheckInput type="password" />
          <AllButton>
            <EnterButton>생성</EnterButton>
            <AccountButton>취소</AccountButton>
          </AllButton>
        </AccountForm>
      </LogInContainer>
    </EntireContainer>
  );
};

// 로고+로그인 창 컨테이너
const EntireContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

const LogoContainer = styled.div`
  border: 2px solid black;

  width: 500px;
  height: 500px;
`;

const LogoImage = styled.img`
  width: 250px;
  height: 200px;
`;

const LogInContainer = styled.div`
  border: 2px solid black;
  width: 500px;
  height: 500px;

  margin-left: 200px;
`;
const AccountTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const AccountForm = styled.form`
  /* border: 1px solid black; */
  width: 320px;
  height: 300px;

  margin: auto;
  padding: 50px 0px 0px 10px;
`;

const IdInput = styled.input`
  width: 230px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border: 2px solid black;
`;

const RepeatCheckIdButton = styled.button`
  width: 60px;
  height: 40px;
  border: 2px solid black;
  margin-left: 10px;
  cursor: pointer;
`;
const PwInput = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border: 2px solid black;
`;
const PwCheckInput = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border: 2px solid black;
`;
const AllButton = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
`;
const EnterButton = styled.button`
  cursor: pointer;
  font-size: large;
`;

const AccountButton = styled.button`
  cursor: pointer;
  font-size: large;
`;
export default AccountPage;
