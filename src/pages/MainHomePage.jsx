import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CardList from "../components/CardList";
import Header from "../components/Header";
import { instance } from "./LogInPage";
import { useDispatch } from "react-redux";
import { __getDiaryList } from "../redux/modules/diarySlice";

const MainHomePage = () => {
  const [username, setUserName] = useState("");
  const [sortBy, setSortBy] = useState("new");
  const [order, setOrder] = useState("desc");
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [commentCount, setCommentCount] = useState("");
  const [likeCount, setLikeCount] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getDiaryList());
  }, []);

  // 정렬 기준 변경
  const handleSelect = (e) => {
    setSortBy(e.target.value);
    setOrder("desc"); // 정렬 기준이 변경되면 내림차순으로 초기화
  };

  // 정렬 기준과 순서에 따라 게시글 정렬
  const sortedCardData = cardData.sort((a, b) => {
    if (sortBy === "new") {
      return 0; // 최신순은 그대로 유지
    }
    // 인기순은 likes 속성을 비교하여 정렬
    if (order === "desc") {
      return b.likes - a.likes;
    } else {
      return a.likes - b.likes;
    }
  });

  return (
    <CardsContainer>
      <Header userName={username} />
      <EveryButtons>
        <WritingButton onClick={() => navigate("/WritingPage")}>
          새 일기 쓰기
        </WritingButton>
        <NewButton value="new" onClick={handleSelect}>
          최신순
        </NewButton>
        <PopulerButton value="popular" onClick={handleSelect}>
          인기순
        </PopulerButton>
      </EveryButtons>
      <CardList />
    </CardsContainer>
  );
};

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
`;

export default MainHomePage;
