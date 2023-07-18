import React from "react";
import styled from "styled-components";
import good from "../images/good.png";
import littlegood from "../images/littlegood.png";
import soso from "../images/soso.png";
import bad from "../images/bad.png";
import angry from "../images/angry.png";

const MoodMenu = ({ onMoodSelect }) => {
  const moodItems = [
    { mood: "아주 좋아!", image: good },
    { mood: "조금 좋아!", image: littlegood },
    { mood: "그럭저럭", image: soso },
    { mood: "조금 나빠!", image: bad },
    { mood: "끔찍해!", image: angry },
  ];

  const handleMoodSelect = (mood) => {
    onMoodSelect(mood);
  };

  return (
    <MoodItemsContainer>
      {moodItems.map((item, index) => (
        <MoodItem
          key={index}
          onClick={() =>
            handleMoodSelect(
              <>
                <img
                  src={item.image}
                  width="25px"
                  height="25px"
                  alt={item.mood}
                />
                <p>{item.mood}</p>
              </>
            )
          }
        >
          <img
            src={item.image}
            width="25px"
            height="25px"
            alt={item.mood}
          ></img>
          {item.mood}
        </MoodItem>
      ))}
    </MoodItemsContainer>
  );
};

const MoodItemsContainer = styled.div`
  cursor: pointer;
  width: 130px;
  height: 203px;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: 10px;
  background-color: white;
`;

const MoodItem = styled.div`
  cursor: pointer;
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  &:hover {
    background-color: lightgray;
    border-radius: 4px;
  }
`;

export default MoodMenu;
