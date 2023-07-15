import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";
import WeatherMenu from "./../components/WeatherMenu";
import MoodMenu from "./../components/MoodMenu";

const WritingPage = () => {
  const [weatherOpen, setWeatherOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);
  const [diaryText, setDiaryText] = useState("");
  const [isWritingComplete, setIsWritingComplete] = useState(false);
  const [diaryText, setDiaryText] = useState("");
  const [isWritingComplete, setIsWritingComplete] = useState(false);

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

  const handleWritingComplete = () => {
    setIsWritingComplete(true);
  };

  const handleMouseLeave = () => {
    setWeatherOpen(false);
    setMoodOpen(false);
  };

  const handleDiaryChange = (event) => {
    setDiaryText(event.target.value);
    setIsWritingComplete(!!event.target.value);
  };

  const handleWritingComplete = () => {
    setIsWritingComplete(true);
  };

  // const handleMouseLeave = () => {
  // setWeatherOpen(false);
  // setMoodOpen(false);
  // };

  return (
    <EveryContainer>
      <EntireContainer>
        <ImageContainer>
          <LogoImage src={logo} />
        </ImageContainer>
        <StateButtonContainer>
          <WeatherButton
            onClick={weatherMenuClick}
            weatherOpen={weatherOpen}
            onMouseLeave={handleMouseLeave}
          >
            날씨
          </WeatherButton>
          {weatherOpen && <WeatherMenu />}
    <EntireContainer>
      <ImageContainer>
        <LogoImage src={logo} />
      </ImageContainer>
      <StateButtonContainer>
        <WeatherButton onClick={weatherMenuClick} weatherOpen={weatherOpen}>
          날씨
        </WeatherButton>
        {weatherOpen && <WeatherMenu />}

          <MoodButton
            onClick={moodMenuClick}
            moodOpen={moodOpen}
            onMouseLeave={handleMouseLeave}
          >
            기분
          </MoodButton>
          {moodOpen && <MoodMenu />}
        </StateButtonContainer>
        <DiaryContainer>
          <DiaryInput
            type="text"
            value={diaryText}
            onChange={handleDiaryChange}
          />
          <DiaryButtonContainer>
            <CancelButton onClick={() => setDiaryText("")}>취소하기</CancelButton>
            <CompleteButton
              onClick={handleWritingComplete}
              isWritingComplete={isWritingComplete}
            >
              작성완료
            </CompleteButton>
          </DiaryButtonContainer>
        </DiaryContainer>
      </EntireContainer>
    </EveryContainer>
        <MoodButton onClick={moodMenuClick} moodOpen={moodOpen}>
          기분
        </MoodButton>
        {moodOpen && <MoodMenu />}
      </StateButtonContainer>
      <DiaryContainer>
        <DiaryInput
          type="text"
          value={diaryText}
          onChange={handleDiaryChange}
        />
        <DiaryButtonContainer>
          <CancelButton
            onClick={() => setDiaryText("")}
            isWritingComplete={isWritingComplete}
          >
            취소하기
          </CancelButton>
          <CompleteButton
            onClick={handleWritingComplete}
            isWritingComplete={isWritingComplete}
          >
            작성완료
          </CompleteButton>
        </DiaryButtonContainer>
      </DiaryContainer>
    </EntireContainer>
  );
};

const EveryContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EntireContainer = styled.div`
  border: 3px solid black;
  /* border-radius: 8px; */
  width: 700px;
  height: 800px;
  height: 900px;
  margin-top: 50px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

const ImageContainer = styled.div`
  border: 2px solid black;
  /* border-radius: 8px; */
  width: 500px;
  height: 500px;
`;

const LogoImage = styled.img`
  width: 250px;
  height: 200px;
`;

const StateButtonContainer = styled.div`
  width: 500px;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
`;

const WeatherButton = styled.button`
  cursor: pointer;
  font-size: large;
  display: flex;
  background-color: ${({ weatherOpen }) =>
    weatherOpen ? "gray" : "transparent"};
  transition: background-color 0.3s;
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
  background-color: ${({ moodOpen }) => (moodOpen ? "gray" : "transparent")};
  transition: background-color 0.3s;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  /* border-radius: 8px; */
  background-color: ${({ moodOpen }) =>
    moodOpen ? "lightgray" : "transparent"};
  transition: background-color 0.3s;
`;

const DiaryContainer = styled.div`
  margin-top: 20px;
`;


const DiaryInput = styled.input`
  border: 2px solid black;
  /* border-radius: 8px; */
  width: 500px;
  height: 150px;
`;

const DiaryButtonContainer = styled.div`
  width: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;


const CancelButton = styled.button`
  cursor: pointer;
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "gray" : "transparent"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "black")};
  transition: background-color 0.3s, transform 0.3s;
  transform: ${({ isWritingComplete }) =>
    isWritingComplete ? "scaleX(1.2)" : "scaleX(1)"};
`;

const CompleteButton = styled.button`
  cursor: pointer;
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "gray" : "transparent"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "black")};
  transition: background-color 0.3s, transform 0.3s;
  transform: ${({ isWritingComplete }) =>
    isWritingComplete ? "scaleX(1.2)" : "scaleX(1)"};
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "green" : "transparent"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "black")};
  transition: background-color 0.3s, transform 0.3s;
  transform: ${({ isWritingComplete }) =>
    isWritingComplete ? "scaleX(1.2)" : "scaleX(1)"};
`;

export default WritingPage;
