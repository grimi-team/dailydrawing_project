import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import axios from "axios";
import { instance } from "../pages/LogInPage";

const CommentCard = ({ commentId, name, content }) => {
  const [editOpen, setEditOpen] = useState(false);

  const editMenuClick = () => {
    setEditOpen(!editOpen);
  };
  // 댓글 수정 기능
  const modifyMenuClick = async (event) => {
    event.preventDefault();
    try {
      const res = await instance.put("/api/user/signup/address", {
        address: "hello123",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //댓글 삭제기능
  const deleteMenuClick = async (event) => {
    event.preventDefault();
    try {
      console.log(commentId);
      const res = await instance.delete(`/api/food/1/comment/${commentId}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CommentCardContainer>
      <ProfileImage src={logo} alt="logo"></ProfileImage>
      <UserName>{name}</UserName>
      <CommentContents>{content}</CommentContents>
      <EditChangeButtonContainer>
        <EditChangeButton onClick={editMenuClick}>+</EditChangeButton>
      </EditChangeButtonContainer>

      {editOpen && (
        <EditMenuContainer>
          <ModifyMenuButton onClick={modifyMenuClick}>수정</ModifyMenuButton>
          <DeleteMenuButton onClick={deleteMenuClick}>삭제</DeleteMenuButton>
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
const EditChangeButtonContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  margin-left: auto;
  padding-right: 10px;
`;
const EditChangeButton = styled.button`
  cursor: pointer;
  float: right;

  font-size: large;
`;
const EditMenuContainer = styled.div`
  border: 2px solid black;
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  position: absolute;
  background-color: white;
  right: 0%;
  z-index: 999;
`;

const ModifyMenuButton = styled.button`
  cursor: pointer;
`;

const DeleteMenuButton = styled.div`
  cursor: pointer;
  padding-top: 5px;
`;
export default CommentCard;
