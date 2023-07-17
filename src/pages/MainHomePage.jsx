import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

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

//새 일기 쓰기
const WritingButton = styled.div`
  cursor: pointer;
  font-size: large;
  display: flex;
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 75%;
  &:hover {
background-color: lightgray;
}

`;



const NewButton = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 8px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
    &:hover {
background-color: lightgray;
}
`;

const PopulerButton = styled.div`
  cursor: pointer;
  display: flex;
  border-radius: 8px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
    &:hover {
background-color: lightgray;
}
`

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

const CardItem = styled.li`
  display: flex;
  flex: 0 0 calc(33.33% - 2rem);
  margin: 1rem;
  justify-content: center;
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
  width: 80%;
  padding-top: 70%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
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
      text1: "유저이름",
      text2: "제목",
      path: "/services",
    },
    {
      src: "",
      text1: "유저이름",
      text2: "제목",
      path: "/services",
    },
    {
      src: "",
      text1: "유저이름",
      text2: "제목",
      path: "/services",
    },
    {
      src: "",
      text1: "유저이름",
      text2: "제목",
      path: "/services",
    },
    {
      src: "",
      text1: "유저이름",
      text2: "제목",
      path: "/services",
    },
  ];

  return (
    <CardsContainer>
      <TitleWrapper>
        <Title>나의 그림 일기장</Title>
      </TitleWrapper>
      <EveryButtons>
        <WritingButton onClick={() => navigate('/WritingPage')}>
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
                <CardLink to="/DetailPage">
                  <CardPicWrap>
                    <FadeImage
                      className="cards__item__img"
                      alt="DrawingImage"
                      src={item.src}
                    />
                  </CardPicWrap>
                  <CardInfo>
                    <CardText>{item.text1}<br />{item.text2}</CardText>
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