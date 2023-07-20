import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import axios from "axios";
import { instance } from "../redux/modules/diarySlice";
import { useNavigate } from "react-router-dom";

// "아이디를 4~10자로 입력해주세요.(특수문자x)
// "비밀번호를 8~15자로 입력해주세요.(특수문자o)"

const AccountPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

  const onChangeUserName = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value);
  };

  // 아이디 중복 버튼 눌렀을 때 통신
  const doubleCheckOnClick = async (event) => {
    event.preventDefault();
    try {
      const res = await instance.post("/api/auth/checkId", {
        username,
      });
      if (res.data.available) {
        // Username is available
        setUsernameErrorMessage("사용이 불가능한 아이디입니다.");
      } else {
        // Username is unavailable or duplicated
        setUsernameErrorMessage("사용이 가능한 아이디입니다.");
      }
    } catch (error) {
      console.log(error);
      setUsernameErrorMessage("사용이 불가능한 아이디입니다.");
    }
  };

  // 생성 버튼을 눌렀을 때 통신
  const createOnclick = async (event) => {
    event.preventDefault();
    try {
      const res = await instance.post("/api/auth/signup", {
        username,
        password,
      });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EntireContainer>
      <LogoImage src={logo} />
      <LogInContainer>
        <AccountTitle>회원가입</AccountTitle>
        <AccountForm>
          <div>아이디</div>
          <IdInput
            type="text"
            onChange={onChangeUserName}
            value={username}
            placeholder=" 4~10자 영문 입력"
          />
          <RepeatCheckIdButton onClick={doubleCheckOnClick}>
            중복확인
          </RepeatCheckIdButton>
          <IdErrorMsg>{usernameErrorMessage}</IdErrorMsg>
          <br />
          <div>비밀번호</div>
          <PwInput
            type="password"
            onChange={onChangePassword}
            value={password}
            placeholder="영문 소문자 대문자 특수문자 포함 8~15자로 입력해주세요."
          />
          <br />
          <div>비밀번호 확인</div>
          <PwCheckInput type="password" onChange={onChangeCheckPassword} />
          <AllButton>
            <EnterButton onClick={createOnclick}>생성</EnterButton>
            <AccountButton onClick={() => navigate("/")}>취소</AccountButton>
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
  padding-left: 5px;
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
  padding-left: 5px;
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
