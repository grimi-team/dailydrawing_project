import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import WeatherMenu from "./../components/WeatherMenu";
import MoodMenu from "./../components/MoodMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { instance } from "./LogInPage";

const WritingPage = () => {
  const navigate = useNavigate();

  const [weatherOpen, setWeatherOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);
  const [diaryText, setDiaryText] = useState("");
  const [isWritingComplete, setIsWritingComplete] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [errorMsg, setErrorMsg] = useState("");

  const weatherMenuClick = () => {
    setWeatherOpen(!weatherOpen);
  };

  const moodMenuClick = () => {
    setMoodOpen(!moodOpen);
  };

  const handleDiaryChange = (event) => {
    setDiaryText(event.target.value);
    setIsWritingComplete(!!event.target.value);
  };

  const onClickCompleteWriting = async (event) => {
    // setIsWritingComplete((prevIsWritingComplete) => !prevIsWritingComplete);
    event.preventDefault();
    try {
      const res = await instance.post("/api/user/signup", {
        address: "hello123",
        password: "Tkfjf12345",
        username: "myengjin123",
      });
      console.log(res);
      // document.cookie = `accessToken=${res.headers.accesstoken}; path=/;`;
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };

  // const handleMouseLeave = () => {
  // setWeatherOpen(false);
  // setMoodOpen(false);
  // };

  return (
    <EntireContainer>
      <WritingTitleContainer>그림일기 쓰는 중!</WritingTitleContainer>
      <ImageContainer>
        <LogoImage src={logo} />
      </ImageContainer>
      <StateButtonContainer>
        <WeatherButton onClick={weatherMenuClick} weatherOpen={weatherOpen}>
          날씨
        </WeatherButton>
        {weatherOpen && <WeatherMenu />}

        <MoodButton onClick={moodMenuClick} moodOpen={moodOpen}>
          기분
        </MoodButton>
        {moodOpen && <MoodMenu />}
        <DateDisplay>{currentDate.toLocaleDateString()}</DateDisplay>
      </StateButtonContainer>
      <DiaryContainer>
        <DiaryInput
          type="text"
          value={diaryText}
          onChange={handleDiaryChange}
        />
        <DiaryButtonContainer>
          <CancelButton onClick={() => navigate("/MainHomePage")}>
            취소하기
          </CancelButton>
          <CompleteButton
            onClick={onClickCompleteWriting}
            isWritingComplete={isWritingComplete}
          >
            작성완료
          </CompleteButton>
        </DiaryButtonContainer>
      </DiaryContainer>
    </EntireContainer>
  );
};

const EntireContainer = styled.div`
  border: 3px solid black;
  width: 800px;
  height: 1000px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const WritingTitleContainer = styled.div`
  width: 700px;
  height: 60px;
  border: 2px solid black;
  margin-top: 30px;
  font-size: large;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: large;
`;

const HomepageBackButton = styled.button`
  cursor: pointer;
  display: flex;
  /* margin-right: 80%; */
`;

const ImageContainer = styled.div`
  border: 2px solid black;
  width: 700px;
  height: 500px;
  margin-top: 30px;
`;

const LogoImage = styled.img`
  width: 250px;
  height: 200px;
  cursor: pointer;
`;

const StateButtonContainer = styled.div`
  width: 700px;
  height: 30px;
  display: flex;
  margin-top: 20px;
  position: relative;
  /* border: 1px solid black; */
`;

const WeatherButton = styled.button`
  cursor: pointer;
  font-size: large;
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  background-color: ${({ weatherOpen }) =>
    weatherOpen ? "lightgray" : "transparent"};
  transition: background-color 0.3s;
`;

const MoodButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  font-size: large;
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  /* border-radius: 8px; */
  background-color: ${({ moodOpen }) =>
    moodOpen ? "lightgray" : "transparent"};
  transition: background-color 0.3s;
`;

const DateDisplay = styled.div`
  font-size: 16px;
  display: flex;
  margin-left: auto;
`;

const DiaryContainer = styled.div`
  margin-top: 20px;
`;

const DiaryInput = styled.input`
  border: 2px solid black;
  /* border-radius: 8px; */
  width: 700px;
  height: 180px;
`;

const DiaryButtonContainer = styled.div`
  width: 700px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  cursor: pointer;
  font-size: large;
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "gray" : "transparent"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "black")};
  transition: background-color 0.3s, transform 0.3s;
  transform: ${({ isWritingComplete }) =>
    isWritingComplete ? "scaleX(1.2)" : "scaleX(1)"};
`;

const CompleteButton = styled.button`
  cursor: pointer;
  font-size: large;
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "gray" : "transparent"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "black")};
  transition: background-color 0.3s, transform 0.3s;
  transform: ${({ isWritingComplete }) =>
    isWritingComplete ? "scaleX(1.2)" : "scaleX(1)"};
`;

export default WritingPage;
