import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [unLike, setUnlike] = useState(false);
  const [likeToken, setLikeToken] = useState(false); // 추가: 좋아요 토큰 상태
  const [errorMsg, setErrorMsg] = useState("");
  const [userComment, setUserComment] = useState("");
  const [messageList, setMessageList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      try {
        const res = await instance.get("/api/comments");
        console.log(res.data);
        const init = [];
        res.data.map((e) => {
          init.push({
            id: 0,
            content: "string",
            userName: "string",
          });
        });
        setMessageList(init);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  // 게시글 수정하기 통신
  const EditOnClick = async (event) => {
    //   try {
    //     const res = await instance.put(`/api/post/${postId}`, {
    //       title,
    //       content,
    //       mood,
    //       weather,
    //     });
    //     console.log(res);
    //   } catch (error) {
    //     // setErrorMsg(error.response.data.message);
    //   }
  };

  // 게시글 삭제하기 통신
  const DeleteClick = async (event) => {
    //   event.preventDefault();
    //   try {
    //     console.log(postId);
    //     const res = await instance.delete(`/api/post/${postId}`);
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  // 댓글 추가하기 눌렀을 때 통신 - post
  // const onClickCommentPlus = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await instance.post(`/api/post/${postId}/comments`{
  //       content
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleHeartClick = async () => {
    if (likeToken) {
      // 좋아요 취소
      setUnlike((prevUnlike) => !prevUnlike);
      setLikeToken(false);
      try {
        // 좋아요 토큰을 서버에서 삭제하는 DELETE 요청 작업 수행
        await instance.delete("/api/post/like", { data: { postId: 0 } });
      } catch (error) {
        console.log(error);
      }
    } else {
      // 좋아요 추가
      setUnlike((prevUnlike) => !prevUnlike);
      setLikeToken(true);
      try {
        // 좋아요 토큰을 서버에 저장하는 POST 요청
        await instance.post("/api/post/like", { postId: 0 });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onClickCommentPlus = async (event) => {
    //   event.preventDefault();
    //   try {
    //     const res = await instance.post("/api/comments", {
    //       content: userComment,
    //     });
    //     console.log(res.data);
    //     const init = [];
    //     res.data.map((e) => {
    //       init.push({
    //         content: "string",
    //         userId: 0,
    //         postId: 0,
    //       });
    //     });
    //     setMessageList(init);
    //   } catch (error) {
    //     console.log(error);
    //   }
  };
  return (
    <>
      <AllContainer>
        <HeaderContainer>
          <ProfileImage src={logo} alt="cloudy"></ProfileImage>
          <UserName>유저이름</UserName>
          <EntireButtonContainer>
            <EditButton onClick={EditOnClick}>수정</EditButton>
            <DeleteButton onClick={DeleteClick}>삭제</DeleteButton>
            <BackButton onClick={() => navigate("/MainHomePage")}>
              뒤로가기
            </BackButton>
          </EntireButtonContainer>
        </HeaderContainer>
        <DiaryImage>안녕하세요!</DiaryImage>
        <DiaryTitleContainer>
          <DiaryTitle>제목</DiaryTitle>
          <DiaryButtons>
            <HeartButton onClick={handleHeartClick}>
              <img
                src={unLike ? heart : emptyheart}
                width="30px"
                height="30px"
                alt="heart"
              />
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

const EntireButtonContainer = styled.div`
  margin-left: 490px;
`;
const EditButton = styled.button`
  cursor: pointer;
  padding-right: 6px;
`;
const DeleteButton = styled.button`
  cursor: pointer;
  padding-right: 6px;
`;
const BackButton = styled.button`
  cursor: pointer;
  padding-right: 5px;
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
  background: none;
  border: none;
  padding: 0;
  width: 30px;
  height: 30px;
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
  width: 700px;
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
