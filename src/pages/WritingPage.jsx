import React, { useState, useRef } from "react";
import styled from "styled-components";
import WeatherMenu from "./../components/WeatherMenu";
import MoodMenu from "./../components/MoodMenu";
import { useNavigate } from "react-router-dom";

const WritingPage = () => {
  const navigate = useNavigate();

  const [weatherOpen, setWeatherOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);
  const [diaryText, setDiaryText] = useState("");
  const [isWritingComplete, setIsWritingComplete] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  //날씨 값 저장 상태변화
  const [selectedWeather, setSelectedWeather] = useState(null);
  //기분 값 저장 상태변화
  const [selectedMood, setSelectedMood] = useState(null);

  const handleWeatherDropdownSelect = (weather) => {
    setSelectedWeather(weather);
    setWeatherOpen(false);
  };

  const handleMoodDropdownSelect = (mood) => {
    setSelectedMood(mood);
    setMoodOpen(false);
  };

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

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setIsModalOpen(true);
  };

  const handleImageConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <EntireContainer>
      <WritingTitleContainer>그림일기 쓰는 중!</WritingTitleContainer>
      <ImageContainer>
        {selectedImage && (
          <>
            <ModalButton onClick={() => setIsModalOpen(true)}>
              이미지 보기
            </ModalButton>
            <ImageModal style={{ display: isModalOpen ? "flex" : "none" }}>
              <ModalContent>
                <ModalImage src={URL.createObjectURL(selectedImage)} />
                <ModalButtonContainer>
                  <ModalButton onClick={() => fileInputRef.current.click()}>
                    수정{" "}
                  </ModalButton>
                  <ModalButton onClick={handleImageConfirm}>확인</ModalButton>
                </ModalButtonContainer>
              </ModalContent>
            </ImageModal>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageSelect}
          style={{ display: "none" }}
        />
        <UploadButton onClick={() => fileInputRef.current.click()}>
          이미지 추가하기
        </UploadButton>
      </ImageContainer>
      <StateButtonContainer>
        <WeatherButton onClick={weatherMenuClick} weatherOpen={weatherOpen}>
          {selectedWeather || "날씨"}
        </WeatherButton>
        {weatherOpen && (
          <WeatherMenu onWeatherSelect={handleWeatherDropdownSelect} />
        )}
        <MoodButton onClick={moodMenuClick} moodOpen={moodOpen}>
          {selectedMood || "기분"}
        </MoodButton>
        {moodOpen && <MoodMenu onMoodSelect={handleMoodDropdownSelect} />}
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
const ImageContainer = styled.div`
  border: 2px solid black;
  width: 700px;
  height: 500px;
  margin-top: 30px;
`;

const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  cursor: pointer;
  font-size: large;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 30px;
  width: 100px;
  &:hover {
    background-color: lightgray;
  }
`;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: 500px;
  height: 600px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  z-index: 1;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

//이미지 추가하기 버튼
const UploadButton = styled.button`
  cursor: pointer;
  font-size: large;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 30px;
  width: 150px;
  &:hover {
    background-color: lightgray;
  }
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
  width: auto;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid black;
  background-color: ${({ weatherOpen }) =>
    weatherOpen ? "lightgray" : "transparent"};
  &:hover {
    background-color: lightgray;
  }
  transition: background-color 0.3s;
`;

//기분 버튼
const MoodButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  font-size: large;
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightgray;
  }
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
