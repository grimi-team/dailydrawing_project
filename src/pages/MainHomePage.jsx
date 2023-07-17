import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { instance } from "./LogInPage";

const MainHomePage = () => {
  const [userName, setUserName] = useState("");
  const [sortBy, setSortBy] = useState('new'); // 'new' 또는 'popular'
  const [order, setOrder] = useState('desc'); // 'desc' 또는 'asc'
  const navigate = useNavigate();
  useEffect(() => {
    // Get Cookies
    // document.cookie 모든 걸 다 가져오다보니, accessToken=asdfas;refreshToken=asdfasdfa;
    const acctoken =
      document.cookie &&
      document.cookie
        .split(";")
        .filter((cookies) => cookies.includes("accessToken"))[0]
        ?.split("=")[1];

    const getUsername = async () => {
      const res = await axios.get("http://1.244.223.183/api/user/getusername", {
        // config : 통신설정을 하 수 있게 꺼내는 객체
        headers: {
          AccessToken: acctoken,
        },
      });
      setUserName(res.data.username);
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

  const cardData = [
    {
      src: "",
      text1: "유저이름",
      text2: "제목",
      likes: 10,
      comments: 5
    },
    {
      src: "",
      text1: "유저이름",
      text2: "제목",
      likes: 15,
      comments: 3
    },

  ];

  const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setUserName("");
  };

  const onRefreshToken = async () => {
    try {
      let testRefesh = await instance.post("/api/food/1/comment", {
        content: "테스트",
      });
      console.log(testRefesh);
    } catch (e) {
      console.log(e);
    }
  };


  // 정렬 기준 변경
  const handleSelect = (e) => {
    setSortBy(e.target.value);
    setOrder('desc'); // 정렬 기준이 변경되면 내림차순으로 초기화
  };

  // 정렬 기준과 순서에 따라 게시글 정렬
  const sortedCardData = cardData.sort((a, b) => {
    if (sortBy === 'new') {
      return 0; // 최신순은 그대로 유지
    }
    // 인기순은 likes 속성을 비교하여 정렬
    if (order === 'desc') {
      return b.likes - a.likes;
    } else {
      return a.likes - b.likes;
    }
  });

  return (
    <CardsContainer>
      <TitleWrapper>
        <Title>{userName ? userName : "나"}의 그림 일기장</Title>
      </TitleWrapper>
      <button
        onClick={() => {
          deleteCookie("accessToken");
          deleteCookie("refreshToken");
          navigate("/");
        }}
        style={{
          width: "100px",
          backgroundColor: "green",
          color: "white",
          height: "30px",
          borderRadius: "20px",
        }}
      >
        {" "}
        로그아웃
      </button>
      <button
        onClick={onRefreshToken}
        style={{
          width: "100px",
          backgroundColor: "green",
          color: "white",
          height: "30px",
          borderRadius: "20px",
        }}
      >
        refrexh 테스트
      </button>
      <EveryButtons>
        <WritingButton onClick={() => navigate("/WritingPage")}>
          새 일기 쓰기
        </WritingButton>
        <NewButton value='new' onClick={handleSelect}>최신순</NewButton>
        <PopulerButton value='popular' onClick={handleSelect}>인기순</PopulerButton>
      </EveryButtons>

      <CardsContent>
        <CardsWrapper>
          <CardsItems>
            {cardData.map((item, index) => (
              <CardItem key={index}>
                <CardLink to="/DetailPage">
                  <CardPicWrap>
                    <FadeImage
                      className="cards__item__img"
                      alt="DrawingImage"
                      src={item.src}
                    />
                  </CardPicWrap>
                  <CardInfo>
                    <CardText>
                      {item.text1}
                      <br />
                      {item.text2}
                    </CardText>
                    <CardLikeComment>
                      좋아요 {item.likes}<br />
                      댓글 {item.comments}
                    </CardLikeComment>
                  </CardInfo>
                </CardLink>
              </CardItem>
            ))}
          </CardsItems>
        </CardsWrapper>
      </CardsContent>
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
const TitleWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 1200px;
  height: 180px;
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
const Title = styled.h1`
  text-align: center;
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
  margin: auto;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  height: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 2px solid black;
`;
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
`

const CardText = styled.h5`
  color: black;
  font-size: 18px;
  line-height: 24px;
`;
export default MainHomePage;