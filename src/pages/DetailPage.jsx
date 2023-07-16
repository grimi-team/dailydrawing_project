import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import heart from "../images/heart.png";
import good from "../images/good.png";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AllContainer>
        <HeaderContainer>
          <ProfileImage src={logo} alt="cloudy"></ProfileImage>
          <UserName>유저이름</UserName>
          <BackButton onClick={() => navigate('/MainHomePage')}>뒤로가기</BackButton>
        </HeaderContainer>
        <DiaryImage>안녕하세요!</DiaryImage>
        <DiaryTitleContainer>
          <DiaryTitle>제목</DiaryTitle>
          <DiaryButtons>
            <HeartButton>
              <img src={heart} width="30px" height="30px" alt="heart"></img>
            </HeartButton>
            <MoodButton>
              <img src={good} width="30px" height="30px" alt="good"></img>
            </MoodButton>
            <Date>2023-10-20</Date>
          </DiaryButtons>
        </DiaryTitleContainer>
        <DiaryContents>내용이 들어갑니둥!</DiaryContents>
        <CommentsContainer>
          <CommentPlusContainer>
            <div>댓글</div>
            <CommentPlusbutton>추가하기!</CommentPlusbutton>
          </CommentPlusContainer>
          <CommentInput />
        </CommentsContainer>
        <CommentList />

        {/* <CommentsListContainer></CommentsListContainer> */}
      </AllContainer>
    </>
  );
};

const AllContainer = styled.div`
  border: 3px solid black;
  /* border-radius: 8px; */
  width: 800px;
  height: 1500px;
  margin: auto;
  margin-top: 20px;
`;
const HeaderContainer = styled.div`
  border: 2px solid black;
  /* border-radius: 8px; */
  width: 700px;
  height: 60px;
  display: flex;
  align-items: center;

  margin: auto;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  margin: 0px 5px 0px 5px;
`;
const UserName = styled.div``;

const BackButton = styled.button`
  cursor: pointer;
  margin-left: 500px;
`;

const DiaryTitleContainer = styled.div`
  width: 700px;
  /* border: 2px solid black; */
  margin: auto;
  margin-top: 20px;
  font-size: large;

  display: flex;
  justify-content: space-between;
`;

const DiaryImage = styled.div`
  border: 2px solid black;
  margin: auto;
  margin-top: 20px;
  width: 700px;
  height: 500px;
`;

const DiaryTitle = styled.div``;

const DiaryButtons = styled.div`
  display: flex;
  align-items: center;
`;

const HeartButton = styled.div`
  cursor: pointer;
`;

const MoodButton = styled.div`
  cursor: pointer;
  padding-left: 10px;
`;

const Date = styled.span`
  font-size: small;
  padding-left: 10px;
`;

const DiaryContents = styled.div`
  border: 2px solid black;
  width: 700px;
  height: 200px;
  margin: auto;
  margin-top: 20px;
  padding-left: 10px;
  padding-top: 10px;
`;

const CommentsContainer = styled.form`
  width: 700px;
  height: 150px;

  margin: auto;
  margin-top: 20px;
`;

const CommentPlusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentPlusbutton = styled.button`
  cursor: pointer;
`;

export default DetailPage;
