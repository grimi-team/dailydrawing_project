import React from "react";
import styled from "styled-components";
import Card from "./Card";



const CardList = ({ cardData }) => {
    return (
        <CardsContent>
            <CardsWrapper>
                <CardsItems>
                    {cardData.map((item, index) => (
                        <Card
                            key={index}
                            src={item.src}
                            text1={item.text1}
                            text2={item.text2}
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