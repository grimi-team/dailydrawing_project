import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const CardsContainer = styled.div`
  padding: 4rem;
  background: #fff;
  width: 1500px;
  height: auto;
  margin: auto;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 1200px;
  height: 180px;
`;

const EveryButtons = styled.div`
  border: 2px solid black;
  width: 1200px;
  height: 90px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const WritingButton = styled.div`
  cursor: pointer;
  font-size: large;
  display: flex;
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  margin-right: 75%;

  &:hover {
    background-color: lightgray;
  }
`;

const NewButton = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
`;

const PopulerButton = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
`;

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
  width: 100%;
  height: 80%;
`;

const CardsItems = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  overflow: hidden;
  /* border: 2px solid black; */
`;

const CardItem = styled.li`
  display: flex;
  flex: 0 0 calc(33.33% - 2rem);
  margin: 1rem;
`;

const CardLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  border: 2px solid black;
  overflow: hidden;
  text-decoration: none;
`;

const CardPicWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;
`;

const FadeImage = styled.img`
  animation-name: fade-img;
  animation-duration: 2s;
`;

const CardInfo = styled.div`
  padding: 20px 30px 30px;
`;

const CardText = styled.h5`
  color: #252e48;
  font-size: 18px;
  line-height: 24px;
`;

const MainHomePage = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      src: "",
      text: "이름",
      label: "Adventure",
      path: "/services",
    },
    {
      src: "",
      text: "이름",
      label: "Luxury",
      path: "/services",
    },
    {
      src: "",
      text: "이름",
      label: "Mystery",
      path: "/services",
    },
    {
      src: "",
      text: "이름",
      label: "Adventure",
      path: "/products",
    },
    {
      src: "",
      text: "이름",
      label: "Adrenaline",
      path: "/sign-up",
    },
  ];

  return (
    <CardsContainer>
      <TitleWrapper>
        <Title>그림 일기 메인 페이지</Title>
      </TitleWrapper>
      <EveryButtons>
        <WritingButton onClick={() => navigate("/WritingPage")}>
          새 일기 쓰기
        </WritingButton>
        <NewButton>최신순</NewButton>
        <PopulerButton>인기순</PopulerButton>
      </EveryButtons>
      <CardsContent>
        <CardsWrapper>
          <CardsItems>
            {cardData.map((item, index) => (
              <CardItem key={index}>
                <CardLink to={item.path}>
                  <CardPicWrap data-category={item.label}>
                    <FadeImage
                      className="cards__item__img"
                      alt="DrawingImage"
                      src={item.src}
                    />
                  </CardPicWrap>
                  <CardInfo>
                    <CardText>{item.text}</CardText>
                  </CardInfo>
                </CardLink>
              </CardItem>
            ))}
          </CardsItems>
        </CardsWrapper>
      </CardsContent>
    </CardsContainer>
  );
};

export default MainHomePage;
