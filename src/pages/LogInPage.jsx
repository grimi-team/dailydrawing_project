import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logo from "../images/logo.png";
import { LoggedState } from "../redux/config/modules/login";
import axios from "axios";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // store에 있는 LoggedState 모듈 state 조회하기
  const logInValue = useSelector((state) => state.LoggedState);
  console.log(logInValue);
  const dispatch = useDispatch();

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
    // console.log("userName 들어왔디요~~", userName);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    // console.log("password 들어왔디요~~", password);
  };

  const LoginSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <EntireContainer>
      <LogoImage src={logo} />
      <LogInContainer>
        <LogInTitle>로그인</LogInTitle>
        <LogInForm onSubmit={LoginSubmitHandler}>
          <div>아이디</div>
          <IdInput type="text" onChange={onChangeUserName} value={userName} />

          <br />
          <div>비밀번호</div>
          <PwInput
            type="password"
            onChange={onChangePassword}
            value={password}
          />
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
  align-items: center;
  min-height: 100vh;
`;

const LogoImage = styled.img`
  width: 700px;
  height: 700px;
`;

const LogInContainer = styled.div`
  border: 2px solid black;

  width: 500px;
  height: 500px;

  margin-left: 150px;
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
