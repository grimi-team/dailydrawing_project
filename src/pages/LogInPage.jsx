import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const instance = axios.create({
  baseURL: "http://52.79.173.167:8080/",
});

instance.interceptors.request.use((config) => {
  const accessToken =
    document.cookie &&
    document.cookie
      .split(";")
      .filter((cookies) => cookies.includes("accessToken"))[0]
      ?.split("=")[1];
  // const refreshToken =
  //   document.cookie &&
  //   document.cookie
  //     .split(";")
  //     .filter((cookies) => cookies.includes("refreshToken"))[0]
  //     ?.split("=")[1];
  if (accessToken) config.headers.accesstoken = accessToken;
  // if (!accessToken && refreshToken) config.headers.Authorization = refreshToken;
  return config;
});

instance.interceptors.response.use((config) => {
  // const expirationDate = new Date();
  // expirationDate.setHours(expirationDate.getHours() + 1);
  // expirationDate.setSeconds(expirationDate.getSeconds() + 5);
  // const expires = expirationDate.toUTCString();
  config.headers.accesstoken &&
    (document.cookie = `accessToken=${config.headers.accesstoken}; path=/;`);
  // config.headers.authorization &&
  //   (document.cookie = `refreshToken=${config.headers.authorization}; path=/;`);
  return config;
});

const LoginPage = () => {
  // const [userInfo, setUserInfo] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgModal, setErrorMsgModal] = useState(false);
  const authorization = useSelector((state) => state.authorization);

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const LoginSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      // await axios.post("/http")
      const res = await instance.post(
        "/api/auth/login",
        {
          username: "kxt0s4",
          password: "L=Cf]#,P4MBvXhg",
        }
        // {
        //   headers: {
        //     Accept: "*/*",
        //     Host: "52.79.173.167",
        //     "User-Agent": "PostmanRuntime/7.32.3",
        //   },
        // }
      ); // response.headers.authorization; // accessToken 추출
      console.log(res);
      // Set Cookies
      // console.log(res.headers.accesstoken);
      // accesstoken을 꺼내서 쿠키에 저장(순서는 서버 통신에 성공했다는 전제 200번대)
      // path : 해당 페이지 모든 페이지 접근할 수 있는
      // document.cookie = `accessToken=${res.headers.accesstoken}; path=/;`;
      // document.cookie = `refreshToken=${res.headers?.refreshToken}; path=/;`;

      console.log("로그인 성공");
      navigate("/MainHomePage");
    } catch (error) {
      console.log("로그인 실패");
      console.log(error);
      // setErrorMsg(error?.response?.data?.message);
      // if (error.response.data.idCheck) {
      //   setErrorMsg("존재하지 않는 아이디 입니다. ");
      // }
      // if (error.response.data.pwCheck) {
      //   setErrorMsg("비밀번호가 일치하지 않습니다.");
      // }
      // setErrorMsgModal(!errorMsgModal);
    }
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