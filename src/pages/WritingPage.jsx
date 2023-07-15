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
  const [currentDate, setCurrentDate] = useState(new Date());

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
    setIsWritingComplete((prevIsWritingComplete) => !prevIsWritingComplete);
  };

  // const handleMouseLeave = () => {
  // setWeatherOpen(false);
  // setMoodOpen(false);
  // };

  return (
    <EntireContainer>
      <ImageContainer>
        <LogoImage src={logo} />
      </ImageContainer>
      <StateButtonContainer>
        <WeatherButton
          onClick={weatherMenuClick}
          weatherOpen={weatherOpen}
        >
          날씨
        </WeatherButton>
        {weatherOpen && <WeatherMenu />}

        <MoodButton
          onClick={moodMenuClick}
          moodOpen={moodOpen}
        >
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
          <CancelButton
            onClick={() => setDiaryText("")}
            isWritingComplete={isWritingComplete}
          >
            취소하기</CancelButton>
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


const EntireContainer = styled.div`
border: 3px solid black;
/* border-radius: 8px; */
width: 700px;
height: 900px;
margin: auto;
margin-top: 50px;
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
cursor: pointer;
`;

const StateButtonContainer = styled.div`
width: 500px;
height: 30px;
display: flex;
margin-top: 20px;
position: relative;
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
`;

export default WritingPage;

