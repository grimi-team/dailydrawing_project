import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import { selectDiary } from "../redux/modules/diarySlice";

const CardList = ({ src, username, title, likes, comments }) => {
  const { diaryList, isLoading, isError } = useSelector(selectDiary);
  if (isLoading) <div>로그인중!</div>;
  console.log(diaryList);
  return (
    <CardsContent>
      <CardsWrapper>
        <CardsItems>
          {diaryList.map((item, index) => (
            <Card
              key={index}
              cardId={item.id}
              src={item.image}
              username={item.username}
              title={item.title}
              likes={item.likes}
              comments={item.comments}
            />
          ))}
        </CardsItems>
      </CardsWrapper>
    </CardsContent>
  );
};

const CardsContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

const CardsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

const CardsItems = styled.ul`
  margin: auto;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  height: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 2px solid black;
`;

export default CardList;
