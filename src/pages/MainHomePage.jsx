import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardList from "../components/CardList";
import Header from "../components/Header";
import { instance } from "./LogInPage";

const MainHomePage = () => {
  const [username, setUserName] = useState("");
  const [sortBy, setSortBy] = useState("new");
  const [order, setOrder] = useState("desc");
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [commentCount, setCommentCount] = useState("");
  const [likeCount, setLikeCount] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [cardData, setCardData] = useState([
    {
      id: 0,
      title: "title",
      image: "image",
      username: "username",
      commentCount: 0,
      likeCount: 0,
      isLiked: true,
    },
    {
      id: 0,
      title: "title",
      image: "image",
      username: "username",
      commentCount: 0,
      likeCount: 0,
      isLiked: true,
    },
  ]);

  useEffect(() => {
    const accessToken =
      (document.cookie &&
        document.cookie
          .split(";")
          .filter((cookies) => cookies.includes("accessToken"))[0]
          ?.split("=")[1]) ||
      "";

    const getUsername = async () => {
      // const res = await instance.get("/api/post", {
      //   // config : 통신설정을 할 수 있게 꺼내는 객체
      //   headers: {
      //     Authorization: accessToken,
      //   },
      // });

      // setUserName(res.data.username);
      try {
        const res = await instance.get("/api/post", {
          headers: {
            Authorization: accessToken,
          },
          data: [
            {
              id: 0,
              title: "title",
              image: "image",
              username: "username",
              commentCount: 0,
              likeCount: 0,
              isLiked: true,
            },
          ],
        });
        setUserName(res.data.username);
      } catch (error) {
        console.log(error);
      }
    };

    getUsername();
    /*
      1) document.cookie && 쿠기가 있으면 (없을 수도 있으니까에 대한 에러처리 빈값)
      2) .split(";") : accessToken=asdfas;refreshToken=asdfasdfa; 쿠키에 담긴 다양양한 정보를 ; 기준으로 배열
      3) filter((cookies) => cookies.includes("accessToken")) //  accessToken만 추출
      4) split("=")[1]; //  accessToken=asdfas 에서 = 기준으로 나누고 [1]에 있는 토큰값만 사용하겠다. 
      5) setUserName(acctoken); // 상태로 관리하면 되겠죠? 
    */
  }, []);

  const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setUserName("");
  };

  const onRefreshToken = async () => {
    try {
      const testRefresh = await instance.post("/api/food/1/comment", {
        content: "테스트",
      });
      console.log(testRefresh);
    } catch (error) {
      console.log(error);
    }
  };

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
      <Header
        userName={username}
        onLogout={() => {
          deleteCookie("accessToken");
          deleteCookie("refreshToken");
          navigate("/");
        }}
        onRefreshToken={onRefreshToken}
      />
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

      <CardList
        cardData={cardData}
        title={title}
        commentCount={commentCount}
        likeCount={likeCount}
        isLiked={isLiked}
      />
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
