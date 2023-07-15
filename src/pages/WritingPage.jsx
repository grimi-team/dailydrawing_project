import React from "react";
import { styled } from "styled-components";

const BoxContainer = styled.div`
  /* border: 2px solid black; */
  border-radius: 8px;
  width: 1000px;
  height: 1800px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background-color: #cacaca;
`

const ImageBox = styled.div`
  margin: 30px 30px auto 50px;
  background-color: white;
  cursor: pointer;
`

const WritingPage = () => {
  return (
    <BoxContainer>
      <ImageBox>
        <h1>이미지</h1>
      </ImageBox>
    </BoxContainer>
  )
};

export default WritingPage;
