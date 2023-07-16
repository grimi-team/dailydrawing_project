import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const AccountPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value);
  };
  const doubleCheckOnClick = () => {
    //중복확인을 눌렀을 때 실행하는 함수
  };

  return (
    <EntireContainer>
      <LogoImage src={logo} />
      <LogInContainer>
        <AccountTitle>회원가입</AccountTitle>
        <AccountForm>
          <div>아이디</div>
          <IdInput type="text" onChange={onChangeUserName} value={userName} />
          <RepeatCheckIdButton onClick={doubleCheckOnClick}>
            중복확인
          </RepeatCheckIdButton>
          <IdErrorMsg> 사용이 불가능한 아이디 입니다.</IdErrorMsg>
          <br />
          <div>비밀번호</div>
          <PwInput
            type="password"
            onChange={onChangePassword}
            value={password}
          />
          <br />
          <div>비밀번호 확인</div>
          <PwCheckInput type="password" onChange={onChangeCheckPassword} />
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
  border: 1px solid black;
  align-items: center;
  min-height: 100vh;
`;

const LogoImage = styled.img`
  width: 500px;
  height: 500px;
`;

const LogInContainer = styled.div`
  border: 2px solid black;
  width: 500px;
  height: 500px;

  margin-left: 150px;
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
const IdErrorMsg = styled.div`
  color: red;
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
