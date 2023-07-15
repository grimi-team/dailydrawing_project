import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";
// import sun from "../images/sun.png";
import WeatherMenu from "./../components/WeatherMenu";
import MoodMenu from "./../components/MoodMenu";

const WritingPage = () => {
  const [weatherOpen, setWeatherOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);

  const weatherMenuClick = () => {
    setWeatherOpen(!weatherOpen);
  };

  const moodMenuClick = () => {
    setMoodOpen(!moodOpen);
  };

  return (
    <EntireContainer>
      <ImageContainer>
        <LogoImage src={logo} />
      </ImageContainer>
      <StateButtonContainer>
        <WeatherButton onClick={weatherMenuClick}>날씨</WeatherButton>
        {weatherOpen && <WeatherMenu />}

        <MoodButton onClick={moodMenuClick}>기분</MoodButton>
        {moodOpen && <MoodMenu />}
      </StateButtonContainer>
      <DiaryContainer>
        <DiaryInput type="text"></DiaryInput>
        <DiaryButtonContainer>
          <CancelButton>취소하기</CancelButton>
          <CompleteButton>작성완료</CompleteButton>
        </DiaryButtonContainer>
      </DiaryContainer>
    </EntireContainer>
  );
};

const EntireContainer = styled.div`
  width: 700px;
  height: 800px;
  margin: auto;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  width: 500px;
  height: 500px;
`;

const LogoImage = styled.img`
  width: 250px;
  height: 200px;
`;

const StateButtonContainer = styled.div`
  /* border: 1px solid red; */
  width: 500px;
  display: flex;
  margin-top: 20px;
  cursor: pointer;
`;

const WeatherButton = styled.button`
  cursor: pointer;

  font-size: large;
  display: flex;
`;

const MoodButton = styled.button`
  cursor: pointer;
  /* border: 1px solid green; */

  margin-left: 10px;
  font-size: large;
  display: flex;
`;

const DiaryContainer = styled.div`
  margin-top: 20px;
`;
const DiaryInput = styled.input`
  border: 2px solid black;
  border-radius: 8px;
  width: 500px;
  height: 150px;
`;

const DiaryButtonContainer = styled.div`
  /* border: 1px solid blue; */
  width: 500px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const CancelButton = styled.button`
  cursor: pointer;
`;

const CompleteButton = styled.button`
  cursor: pointer;
`;

export default WritingPage;
