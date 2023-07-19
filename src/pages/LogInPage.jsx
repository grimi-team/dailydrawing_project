import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { __postLogin } from "../redux/modules/authorization";

export const instance = axios.create({
  baseURL: "http://3.34.144.94:8080/",
  timeout: 5000,
});

instance.interceptors.request.use((config) => {
  // 쿠키에 저장된 토큰을 꺼내는 것
  const accessToken = document.cookie
    .split(";")
    .filter((cookies) => cookies.includes("accessToken"))[0]
    ?.split("=")[1];
  //헤더에 토큰 담아서 보내기
  if (accessToken) config.headers.authorization = accessToken;
  return config;
});
instance.interceptors.response.use((config) => {
  config.headers.authorization &&
    (document.cookie = `accessToken=${config.headers.authorization}; path=/;`);
  return config;
});

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgModal, setErrorMsgModal] = useState(false);
  const authorization = useSelector((state) => state.authorization);
  const Cookie = document.cookie;

  const onChangeUserName = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  // 로그인 버튼 눌렀을 때 실행
  const LoginSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await instance.post("/api/auth/login", {
        username,
        password
      });
      console.log(res);
      console.log("로그인 성공");

      navigate("/MainHomePage");
    } catch (error) {
      console.log("로그인 실패");
      console.log(error);
    }
  };

  return (
    <EntireContainer>
      <LogoImage src={logo} />
      <LogInContainer>
        <LogInTitle>로그인</LogInTitle>
        <LogInForm onSubmit={LoginSubmitHandler}>
          <div>아이디</div>
          <IdInput type="text" onChange={onChangeUserName} value={username} />

          <br />
          <div>비밀번호</div>
          <PwInput
            type="password"
            onChange={onChangePassword}
            value={password}
          />
          <br />
          {/* {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>} */}
          <AllButton>
            <EnterButton>입장 버튼</EnterButton>
            <AccountButton onClick={() => navigate("/AccountPage")}>
              회원가입 버튼
            </AccountButton>
          </AllButton>
        </LogInForm>
      </LogInContainer>
      {errorMsg && errorMsgModal && (
        <div
          style={{
            position: "absolute",
            top: "50vh",
            left: "50vw",
            transform: "translation(-50%, -50%)",
            width: "150px",
            height: "100px",
            backgroundColor: "yellow",
            fontWeight: "bold",
          }}
        >
          {errorMsg}
          <div
            onClick={() => setErrorMsgModal(!errorMsgModal)}
            style={{ backgroundColor: "lightcoral" }}
          >
            닫기
          </div>
        </div>
      )}
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
  width: 500px;
  height: 500px;
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
  margin-top: 50px;
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

export default LoginPage;
