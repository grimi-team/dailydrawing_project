import React from "react";
import styled from "styled-components";
import good from "../images/good.png";
import littlegood from "../images/littlegood.png";
import soso from "../images/soso.png";
import bad from "../images/bad.png";
import angry from "../images/angry.png";

const MoodMenu = () => {
  return (
    <MoodItemsContainer>
      <MoodItem>
        <img src={good} width="25px" height="25px"></img>
        아주 좋아!
      </MoodItem>
      <MoodItem>
        <img src={littlegood} width="25px" height="25px"></img>조금 좋아!
      </MoodItem>
      <MoodItem>
        <img src={soso} width="25px" height="25px"></img>그럭저럭
      </MoodItem>
      <MoodItem>
        <img src={bad} width="30px" height="30px"></img>조금 나빠!
      </MoodItem>
      <MoodItem>
        <img src={angry} width="30px" height="30px"></img>끔찍해!
      </MoodItem>
    </MoodItemsContainer>
  );
};

const MoodItemsContainer = styled.div`
  width: 130px;
  border: 2px solid black;
  border-radius: 8px;
  margin-left: 10px;
`;

const MoodItem = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
export default MoodMenu;