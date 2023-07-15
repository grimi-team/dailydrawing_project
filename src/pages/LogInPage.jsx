import React from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";

const LoginPage = () => {
  return (
    <EntireContainer>
      {/* 로고이미지 */}
      <LogoContainer>
        <LogoImage src={logo} />
      </LogoContainer>
      {/* 로그인창구현 */}
      <LogInContainer>
        <LogInTitle>로그인</LogInTitle>
        <LogInForm>
          <div>아이디</div>
          <IdInput type="text" />
          <br />
          <div>비밀번호</div>
          <PwInput type="password" />
          <br />
          <AllButton>
            <EnterButton>입장 버튼</EnterButton>
            <AccountButton>회원가입 버튼</AccountButton>
          </AllButton>
        </LogInForm>
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

const LogInTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  font-size: xx-large;
`;

const LogInForm = styled.form`
  /* border: 1px solid black; */
  width: 300px;
  height: 300px;

  margin: auto;
  padding: 50px 0px 0px 0px;
`;

const IdInput = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border: 2px solid black;
  padding: 5px;
`;
const PwInput = styled.input`
  width: 300px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  border: 2px solid black;
  padding: 5px;
`;

const AllButton = styled.div`
  /* border: 1px solid green; */
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`;
const EnterButton = styled.button`
  cursor: pointer;
  font-size: large;
  /* border: 1px solid red; */
`;

const AccountButton = styled.button`
  cursor: pointer;
  font-size: large;
  /* border: 1px solid red; */
`;

export default LoginPage;
