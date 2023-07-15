import React from "react";
import styled from "styled-components";
import cloudy from "../images/cloudy.png";
import heart from "../images/heart.png";
import good from "../images/good.png";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";

const DetailPage = () => {
  return (
    <>
      <AllContainer>
        <HeaderContainer>
          <img src={cloudy} width="70px" height="70px"></img>
          <UserName>유저이름</UserName>
          <BackButton>뒤로가기</BackButton>
        </HeaderContainer>
        <DiaryImage>안녕하세요!</DiaryImage>
        <DiaryTitleContainer>
          <DiaryTitle>제목</DiaryTitle>
          <DiaryButtons>
            <HeartButton>
              <img src={heart} width="30px" height="30px"></img>
            </HeartButton>
            <MoodButton>
              <img src={good} width="30px" height="30px"></img>
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
  height: 80px;
  display: flex;
  align-items: center;

  margin: auto;
  margin-top: 20px;
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
  /* border: 2px solid black; */
  /* border-radius: 8px; */
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
