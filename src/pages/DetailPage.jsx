import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import heart from "../images/heart.png";
import emptyheart from "../images/emptyheart.png";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import { __editDiaryList, instance } from "../redux/modules/diarySlice";
import { __getDetailDiary, selectDiary } from "../redux/modules/diarySlice";
import {
  __setPostComment,
  __postComment,
  selectCommentList,
} from "../redux/modules/commentlist";
import { weatherItems } from "../components/WeatherMenu";
import { moodItems } from "../components/MoodMenu";
// import MainHomePage from "./MainHomePage";
// import { __postLike } from "./../redux/modules/like";

const DetailPage = () => {
  const [unLike, setUnlike] = useState(false);
  // const [editTitleOpen, setEditTitleOpen] = useState(false);
  const [editContentOpen, setEditContentOpen] = useState(false);
  const [likeToken, setLikeToken] = useState(false); // 추가: 좋아요 토큰 상태
  const [userComment, setUserComment] = useState("");
  const [heartImage, setHeartImage] = useState(emptyheart);
  // const [messageList, setMessageList] = useState([]);
  const [heart, setHeart] = useState("");
  const [diaryTitle, setDiaryTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState(""); //다이어리 내용 수정을 위한 변수
  const { diaryList, isLoading, isError } = useSelector(selectDiary);
  const { commentList, error } = useSelector(selectCommentList);

  const navigate = useNavigate();
  const { postId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("initzation effect");
    dispatch(__getDetailDiary(postId));
  }, [dispatch, postId]); //이

  useEffect(() => {
    console.log("hello", error);
    if (error != null) alert(error);
  }, [error]);

  useEffect(() => {
    console.log(isLoading, isError, diaryList);
    if (!isLoading && !isError && diaryList.length > 0) {
      dispatch(__setPostComment(diaryList[0].commentList));
    }
  }, [isLoading]);

  // 게시글 수정하기 통신
  const EditOnClick = async (event) => {
    event.preventDefault();
    let payload;
    if (editContentOpen) {
      payload = {
        title: diaryTitle,
        content: editText,
      };
    }
    setEditContentOpen(!editContentOpen);
    dispatch(__editDiaryList(payload));
  };

  // 게시글 삭제하기 통신
  const DeleteClick = async (event) => {
    event.preventDefault();
    try {
      console.log(postId);
      const res = await instance.delete(`/api/post/${postId}`);
      navigate("/MainHomePage");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 추가하기 눌렀을 때 통신 - post
  const onClickCommentPlus = async (event) => {
    event.preventDefault();
    console.log(userComment);
    dispatch(__postComment({ postId: postId, content: userComment }));
  };

  const handleHeartClick = async (event) => {
    event.preventDefault();
    try {
      const res = await instance.post(`/api/post/${postId}/likes`, {
        postId,
      });
      console.log(res);
      console.log("하트추가!", res);
      if (heartImage === emptyheart) {
        setHeartImage(heart);
      } else {
        setHeartImage(emptyheart);
      }
    } catch (error) {
      console.log(error);
    }

    // if (likeToken) {
    //   // 좋아요 취소
    //   setUnlike((prevUnlike) => !prevUnlike);
    //   setLikeToken(false);
    //   try {
    //     // 좋아요 토큰을 서버에서 삭제하는 DELETE 요청 작업 수행(하지만 해결은 안됨!)
    //     await instance.delete(`/api/post/${postId}/like`, {
    //       data: { postId: 0 },
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } else {
    //   // 좋아요 추가
    //   setUnlike((prevUnlike) => !prevUnlike);
    //   setLikeToken(true);
    //   try {
    //     // 좋아요 토큰을 서버에 저장하는 POST 요청
    //     await instance.post(`/api/post/${postId}/like`, { postId: 0 });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  const editTitleDiaryHandler = (event) => {
    setEditTitle(event.target.value); //변경부분
  };
  const editTextDiaryHandler = (event) => {
    setEditText(event.target.value);
  };

  // if (isLoading || isError) {
  //   return <div>로딩중!</div>;
  // }
  return (
    <>
      <AllContainer>
        {diaryList[0] && (
          <>
            <HeaderContainer>
              <ProfileImage
                src={diaryList[0].image}
                alt="cloudy"
              ></ProfileImage>
              <UserName>{diaryList[0].username}</UserName>
              <EntireButtonContainer>
                <EditButton onClick={EditOnClick}>수정</EditButton>
                <DeleteButton onClick={DeleteClick}>삭제</DeleteButton>
                <BackButton onClick={() => navigate("/MainHomePage")}>
                  뒤로가기
                </BackButton>
              </EntireButtonContainer>
            </HeaderContainer>
            <DiaryImageContainer>
              <DiaryImage src={diaryList[0].image} alt="image" />
            </DiaryImageContainer>
            <DiaryTitleContainer>
              {editContentOpen ? (
                <EditTitleInput
                  autoFocus
                  type="text"
                  value={editTitle}
                  onChange={editTitleDiaryHandler}
                  placeholder="제목을 수정해주세요!"
                />
              ) : (
                <DiaryTitle>{diaryList[0].title}</DiaryTitle>
              )}

              <DiaryButtons>
                <HeartButton onClick={handleHeartClick}>
                  <img
                    src={heartImage}
                    width="30px"
                    height="30px"
                    alt="heart"
                  />
                </HeartButton>
                <MoodButton>
                  {/* <img src={good} width="30px" height="30px" alt="good"></img> */}
                  <img
                    src={
                      weatherItems[
                        Number(diaryList[0]?.weather ? diaryList[0].weather : 0)
                      ].image
                    }
                    width="45px"
                    height="45px"
                    alt={
                      weatherItems[
                        Number(diaryList[0]?.weather ? diaryList[0].weather : 0)
                      ].weather
                    }
                  />
                </MoodButton>
                <MoodButton>
                  <img
                    src={
                      moodItems[
                        Number(diaryList[0]?.mood ? diaryList[0].mood : 0)
                      ].image
                    }
                    width="30px"
                    height="30px"
                    alt={
                      moodItems[
                        Number(diaryList[0]?.mood ? diaryList[0].mood : 0)
                      ].weather
                    }
                  />
                </MoodButton>
                <Date>2022-07-20</Date>
              </DiaryButtons>
            </DiaryTitleContainer>
            <DiaryContentsContainer>
              {/* 내용 바뀌게하기 수정 */}
              {editContentOpen ? (
                <EditContentInput
                  type="text"
                  value={editText}
                  onChange={editTextDiaryHandler}
                  placeholder="내용을 수정해주세요!"
                />
              ) : (
                <DiaryContents>{diaryList[0].content}</DiaryContents>
              )}
            </DiaryContentsContainer>

            <CommentsContainer>
              <CommentPlusContainer>
                <CommentTitle>댓글 리스트!</CommentTitle>
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
              <CommentList />
            </CommentsListContainer>
          </>
        )}
      </AllContainer>
    </>
  );
};
const EditTitleInput = styled.input`
  font-size: 16px;
  width: 400px;
  height: 40px;
  border: 2px solid black;
  padding-left: 10px;
  margin-bottom: 25px;
`;
const EditContentInput = styled.input`
  margin-left: 45px;
  font-size: 16px;
  width: 700px;
  height: 200px;
  border: 2px solid black;
  padding-left: 10px;
`;
const DiaryContentsContainer = styled.div``;
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
  width: 100px;
  /* border: 1px solid black; */
  margin-left: 450px;
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

const DiaryImageContainer = styled.div`
  border: 2px solid black;
  margin: auto;
  margin-top: 20px;
  width: 700px;
  height: 500px;
`;

const DiaryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;
//object-fit: 이미지 규격에 픽스

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
  height: 240px;
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
