import React from 'react';
import styled from 'styled-components';

const CardsContainer = styled.div`
  padding: 4rem;
  background: #fff;
`;

const Title = styled.h1`
  text-align: center;
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

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const CardItem = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
`;

const CardLink = styled.div`
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

// const CategoryLabel = styled.span`
//   content: attr(data-category);
//   position: absolute;
//   bottom: 0;
//   margin-left: 10px;
//   padding: 6px 8px;
//   max-width: calc((100%) - 60px);
//   font-size: 12px;
//   font-weight: 700;
//   color: #fff;
//   background-color: #1f98f4;
//   box-sizing: border-box;
// `;

// const CardImage = styled.img`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   display: block;
//   width: 100%;
//   max-width: 100%;
//   height: 100%;
//   max-height: 100%;
//   object-fit: cover;
//   transition: all 0.2s linear;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

const CardInfo = styled.div`
  padding: 20px 30px 30px;
`;

const CardText = styled.h5`
  color: #252e48;
  font-size: 18px;
  line-height: 24px;
`;

const MainPage = () => {
  return (
    <CardsContainer>
      <Title>그림 일기 메인 페이지</Title>
      <CardsContent>
        <CardsWrapper>
          <CardsItems>
            <CardItem>
              <CardLink to="/services">
                <CardPicWrap data-category="Adventure">
                  <FadeImage
                    className="cards__item__img"
                    alt="Travel Image"
                    src=""
                  />
                </CardPicWrap>
                <CardInfo>
                  <CardText>
                    <h3>제목</h3><br />
                    <h5>유저네임</h5>
                  </CardText>
                </CardInfo>
              </CardLink>
            </CardItem>
            <CardItem>
              <CardLink to="/services">
                <CardPicWrap data-category="Luxury">
                  <FadeImage
                    className="cards__item__img"
                    alt="Travel Image"
                    src=""
                  />
                </CardPicWrap>
                <CardInfo>
                  <CardText>
                    <h3>제목</h3><br />
                    <h5>유저네임</h5>
                  </CardText>
                </CardInfo>
              </CardLink>
            </CardItem>
          </CardsItems>
          <CardsItems>
            <CardItem>
              <CardLink to="/services">
                <CardPicWrap data-category="Mystery">
                  <FadeImage
                    className="cards__item__img"
                    alt="Travel Image"
                    src=""
                  />
                </CardPicWrap>
                <CardInfo>
                  <CardText>
                    <h3>제목</h3><br />
                    <h5>유저네임</h5>
                  </CardText>
                </CardInfo>
              </CardLink>
            </CardItem>
            <CardItem>
              <CardLink to="/products">
                <CardPicWrap data-category="Adventure">
                  <FadeImage
                    className="cards__item__img"
                    alt="Travel Image"
                    src=""
                  />
                </CardPicWrap>
                <CardInfo>
                  <CardText>
                    <h3>제목</h3><br />
                    <h5>유저네임</h5>
                  </CardText>
                </CardInfo>
              </CardLink>
            </CardItem>
            <CardItem>
              <CardLink to="/sign-up">
                <CardPicWrap data-category="Adrenaline">
                  <FadeImage
                    className="cards__item__img"
                    alt="Travel Image"
                    src=""
                  />
                </CardPicWrap>
                <CardInfo>
                  <CardText>
                    <h3>제목</h3><br />
                    <h5>유저네임</h5>
                  </CardText>
                </CardInfo>
              </CardLink>
            </CardItem>
          </CardsItems>
        </CardsWrapper>
      </CardsContent>
    </CardsContainer>
  );
}

export default MainPage;