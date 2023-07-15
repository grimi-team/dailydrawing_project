import React, { useState } from "react";
import styled from "styled-components";
import cloudy from "../images/cloudy.png";

const CommentCard = () => {
  const [editOpen, setEditOpen] = useState(false);

  const editMenuClick = () => {
    setEditOpen(!editOpen);
  };

  return (
    <CommentCardContainer>
      <img src={cloudy} width="60px" height="60px"></img>
      <UserName>유저이름</UserName>
      <CommentContents>일기가 참 재밌어요오오오오!</CommentContents>
      <EditChangeButton onClick={editMenuClick}>+</EditChangeButton>
    </CommentCardContainer>
  );
};

const CommentCardContainer = styled.div`
  border: 2px solid black;
  width: 700px;
  height: 50px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const UserName = styled.div``;

const CommentContents = styled.div`
  margin-left: 30px;
`;

const EditChangeButton = styled.button`
  cursor: pointer;
  margin-left: 360px;
`;
export default CommentCard;
