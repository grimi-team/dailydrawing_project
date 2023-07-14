import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardsContainer = styled.div`
  padding: 4rem;
  background: #fff;
  width: 100vw;
  height: 100vh;

`;

const Title = styled.h1`
  text-align: center;
`;

const TitleWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  margin-bottom: 2rem;
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
`;

const CardsItems = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  
`;

const CardItem = styled.li`
  display: flex;
  flex: 0 0 calc(33.33% - 2rem);
  margin: 1rem;
  border-radius: 10px;
`;

const CardLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
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

const MainPage = () => {
  const cardData = [
    {
      src: '',
      text: '이름',
      label: 'Adventure',
      path: '/services',
    },
    {
      src: '',
      text: '이름',
      label: 'Luxury',
      path: '/services',
    },
    {
      src: '',
      text: '이름',
      label: 'Mystery',
      path: '/services',
    },
    {
      src: '',
      text: '이름',
      label: 'Adventure',
      path: '/products',
    },
    {
      src: '',
      text: '이름',
      label: 'Adrenaline',
      path: '/sign-up',
    },
  ];

  return (
    <CardsContainer>
      <TitleWrapper>
        <Title>그림 일기 메인 페이지</Title>
      </TitleWrapper>
      <CardsContent>
        <CardsWrapper>
          <CardsItems>
            {cardData.map((item, index) => (
              <CardItem key={index}>
                <CardLink to={item.path}>
                  <CardPicWrap data-category={item.label}>
                    <FadeImage
                      className="cards__item__img"
                      alt="Travel Image"
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
}

export default MainPage;