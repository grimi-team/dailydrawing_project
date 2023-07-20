import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import heart from "../images/heart.png";
import comment from "../images/comment.png";

const Card = ({ postId, src, username, title, likeCount, commentCount }) => {
  const navigate = useNavigate();
  return (
    <CardItem>
      <CardLink
        onClick={() => {
          navigate(`/DetailPage/${postId}`);
        }}
      >
        <CardPicWrap>
          <FadeImage alt="DrawingImage" src={src} />
        </CardPicWrap>
        <CardInfo>
          <CardUserText>{username}</CardUserText>
          <CardUserTitle>{title}</CardUserTitle>
          <CardButtonContainer>
            <CardLikeComment>
              <img src={heart} width="20px" height="20px" alt="heart" />
              {likeCount}
            </CardLikeComment>
            <CardCommentCount>
              <img src={comment} width="20px" height="20px" alt="heart" />
              {commentCount}
            </CardCommentCount>
          </CardButtonContainer>
        </CardInfo>
      </CardLink>
    </CardItem>
  );
};

const CardButtonContainer = styled.div`
  display: flex;
  width: 50px;
  height: 20px;
  /* border: 1px solid black; */
  margin-left: 80%;
`;
const CardItem = styled.li`
  display: flex;
  flex: 0 0 calc(33.33% - 2rem);
  margin: 1rem;
  justify-content: center;
  height: 380px;
`;

const CardLink = styled.div`
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const CardInfo = styled.div`
  padding: 8px 33px 30px;
`;

const CardLikeComment = styled.h5`
  color: lightgray;
  display: flex;

  width: 100%;
  height: 100%;
`;

const CardUserText = styled.div`
  color: black;
  font-size: 18px;
  line-height: 24px;
`;
const CardUserTitle = styled.div`
  color: black;
  font-size: 18px;
  line-height: 24px;
`;

const CardCommentCount = styled.div`
  color: lightgray;

  display: flex;
  margin-left: 20%;
`;
export default Card;
