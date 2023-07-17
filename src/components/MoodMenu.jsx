import React from "react";
import styled from "styled-components";
import good from "../images/good.png";
import littlegood from "../images/littlegood.png";
import soso from "../images/soso.png";
import bad from "../images/bad.png";
import angry from "../images/angry.png";

const MoodMenu = ({ onMoodSelect }) => {
  const handleMoodSelect = (mood) => {
    onMoodSelect(mood);
  };

  return (
    <MoodItemsContainer>
      <MoodItem onClick={() => handleMoodSelect(<img src={good} width="25px" height="25px" alt="good" />)}>
        <img src={good} width="25px" height="25px" alt="good"></img>
        아주 좋아!
      </MoodItem>
      <MoodItem onClick={() => handleMoodSelect(<img src={littlegood} width="25px" height="25px" alt="littlegood" />)}>
        <img src={littlegood} width="25px" height="25px" alt="littlegood"></img>
        조금 좋아!
      </MoodItem>
      <MoodItem onClick={() => handleMoodSelect(<img src={soso} width="25px" height="25px" alt="soso" />)}>
        <img src={soso} width="25px" height="25px" alt="soso"></img>그럭저럭
      </MoodItem>
      <MoodItem onClick={() => handleMoodSelect(<img src={bad} width="30px" height="30px" alt="bad" />)}>
        <img src={bad} width="30px" height="30px" alt="bad"></img>조금 나빠!
      </MoodItem>
      <MoodItem onClick={() => handleMoodSelect(<img src={angry} width="30px" height="30px" alt="angry" />)}>
        <img src={angry} width="30px" height="30px" alt="angry"></img>끔찍해!
      </MoodItem>
    </MoodItemsContainer>
  );
};

const MoodItemsContainer = styled.div`
  width: 130px;
  height: 210px;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: 10px;
  background-color: white;
`;

const MoodItem = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
    &:hover {
background-color: lightgray;}
`;
export default MoodMenu;
