import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import heart from "../images/heart.png";
import good from "../images/good.png";
import emptyheart from "../images/emptyheart.png";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import { useNavigate } from "react-router-dom";
import { instance } from "./LogInPage";

const DetailPage = () => {
  const [unLike, setUnlike] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userComment, setUserComment] = useState("");
  const [messageList, setMessageList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const res = await instance.get("/api/food/1/comment");
        console.log(res.data);
        const init = [];
        res.data.map((e) => {
          init.push({
            commentId: e.commentId,
            username: e.username,
            content: e.content,
          });
        });
        setMessageList(init);
        // document.cookie = `accessToken=${res.headers.accesstoken}; path=/;`;
      } catch (error) {
        console.log(error);
        // setErrorMsg(error.response.data.message);
      }
    };
    init();
  }, []);
  // 댓글 추가하기 눌렀을 때 통신

  // // 댓글 추가하기 눌렀을 때 통신 - get
  // const onClickCommentPlus = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await instance.get("/api/food/1/comment"
  // );
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     // setErrorMsg(error.response.data.message);
  //   }
  // };
  const onClickCommentPlus = async (event) => {
    event.preventDefault();
    try {
      const res = await instance.post("/api/food/1/comment", {
        content: userComment,
      });
      console.log(res.data);
      const init = [];
      res.data.map((e) => {
        init.push({
          commentId: e.commentId,
          username: e.username,
          content: e.content,
        });
      });
      setMessageList(init);
    } catch (error) {
      console.log(error);
      // setErrorMsg(error.response.data.message);
    }
  };
  return (
    <>
      <AllContainer>
        <HeaderContainer>
          <ProfileImage src={logo} alt="cloudy"></ProfileImage>
          <UserName>유저이름</UserName>
          <BackButton onClick={() => navigate("/MainHomePage")}>
            뒤로가기
          </BackButton>
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
            <CommentTitle>댓글</CommentTitle>
            <CommentPlusbutton onClick={onClickCommentPlus}>
              추가하기!
            </CommentPlusbutton>
          </CommentPlusContainer>
          <CommentInput
            userComment={userComment}
            setUserComment={setUserComment}
          />
        </CommentsContainer>
        <CommentsListContainer>
          <CommentsHeader>댓글들</CommentsHeader>
          {messageList.map((e, k) => {
            return (
              <>
                <CommentList
                  key={k}
                  commentId={e.commentId}
                  name={e.username}
                  content={e.content}
                />
              </>
            );
          })}
        </CommentsListContainer>
      </AllContainer>
    </>
  );
};

const AllContainer = styled.div`
  border: 3px solid black;
  width: 800px;
  height: 1300px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow: hidden;
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
  width: 50px;
  height: 50px;
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

const HeartButton = styled.button`
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
const CommentTitle = styled.div`
  font-size: large;
`;
const CommentsContainer = styled.form`
  width: 700px;
  height: 130px;

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

const CommentsListContainer = styled.div`
  /* border: 1px solid black; */
  height: 450px;
  padding-bottom: 50px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 20px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 25px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: black;
  }
`;
const CommentsHeader = styled.div`
  margin-left: 50px;
  font-size: large;
`;

export default DetailPage;
