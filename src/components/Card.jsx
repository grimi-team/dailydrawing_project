import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ src, text1, text2, likes, comments }) => {
    return (
        <CardItem>
            <CardLink to="/DetailPage">
                <CardPicWrap>
                    <FadeImage className="cards__item__img" alt="DrawingImage" src={src} />
                </CardPicWrap>
                <CardInfo>
                    <CardText>
                        {text1}
                        <br />
                        {text2}
                    </CardText>
                    <CardLikeComment>
                        좋아요 {likes}
                        <br />
                        댓글 {comments}
                    </CardLikeComment>
                </CardInfo>
            </CardLink>
        </CardItem>
    );
};

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
  display: flex;
`;

const CardLikeComment = styled.h5`
  color: lightgray;
  margin-top: 15px;
  margin-left: 60%;
`;

const CardText = styled.h5`
  color: black;
  font-size: 18px;
  line-height: 24px;
`;

export default Card;