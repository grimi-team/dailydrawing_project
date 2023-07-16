import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const CommentCard = () => {
  const [editOpen, setEditOpen] = useState(false);

  const editMenuClick = () => {
    setEditOpen(!editOpen);
  };

  return (
    <CommentCardContainer>
      <ProfileImage src={logo} alt="logo"></ProfileImage>
      <UserName>유저이름</UserName>
      <CommentContents>일기가 참 재밌어요오오오오!</CommentContents>
      <EditChangeButton onClick={editMenuClick}>+</EditChangeButton>
      {editOpen && (
        <EditMenuContainer>
          <ModifyMenu>수정</ModifyMenu>
          <DeleteMenu>삭제</DeleteMenu>
        </EditMenuContainer>
      )}
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
  position: relative;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  margin: 0px 5px 0px 5px;
`;
const UserName = styled.div``;

const CommentContents = styled.div`
  margin-left: 30px;
`;

const EditChangeButton = styled.button`
  cursor: pointer;
  margin-left: 380px;
  font-size: large;
`;
const EditMenuContainer = styled.div`
  border: 2px solid black;
  width: 60px;
  height: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  position: absolute;
  right: 0%;
`;

const ModifyMenu = styled.button`
  cursor: pointer;
`;

const DeleteMenu = styled.div`
  cursor: pointer;
  padding-top: 5px;
`;
export default CommentCard;
