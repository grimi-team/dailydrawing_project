import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardList = ({
  cardData,
  title,
  username,
  commentCount,
  likeCount,
  isLiked,
}) => {
  return (
    <CardsContent>
      <CardsWrapper>
        <CardsItems>
          {cardData.map((item, index) => (
            <Card
              key={`${item.id}-${index}`}
              title={item.title}
              image={item.text1}
              username={item.username}
              commentCount={item.commentCount}
              likeCount={likeCount}
              isLiked={isLiked}
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
