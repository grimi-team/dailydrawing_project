import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import user from "../images/user.png";
import axios from "axios";
import { instance } from "../redux/modules/diarySlice";
import { useParams } from "react-router-dom";
import { __editComment, __deleteComment } from "../redux/modules/commentlist";

const CommentCard = ({ commentId, name, content }) => {
  const [editMenuOpen, setEditMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editText, setEditText] = useState(content);
  const { postId } = useParams();

  const dispatch = useDispatch();

  const editMenuClick = () => {
    setEditMenuOpen(!editMenuOpen);
  };

  //댓글 삭제기능
  const deleteMenuClick = async (event) => {
    event.preventDefault();

    try {
      console.log("커멘트 아이디", commentId);
      const res = await instance.delete(
        `/api/post/${postId}/comments/${commentId}`
      );
      console.log("댓글삭제성공", res);
      window.history.go(0); //편법으로 현재페이지 자동 새로고침
    } catch (error) {
      console.log("댓글삭제실패", error);
    }
  };

  // 댓글 수정 기능
  const modifyMenuClick = async (event) => {
    event.preventDefault();
    if (editOpen) {
      const payload = {
        postId: postId,
        commentId: commentId,
        content: editText,
      };
      dispatch(__editComment(payload));
      setEditMenuOpen(!editMenuOpen);
    }
    setEditOpen(!editOpen);
  };

  const editTextHandler = (event) => {
    setEditText(event.target.value);
  };
  return (
    <CommentCardContainer>
      <ProfileImage src={user} alt="logo"></ProfileImage>
      <UserName>{name}</UserName>
      {editOpen ? (
        <input
          autoFocus
          style={{ marginLeft: "30px", fontSize: "16px", width: "70%" }}
          type="text"
          value={editText}
          onChange={editTextHandler}
        />
      ) : (
        <CommentContents>{content}</CommentContents>
      )}
      <EditChangeButtonContainer>
        <EditChangeButton onClick={editMenuClick}>+</EditChangeButton>
      </EditChangeButtonContainer>

      {editMenuOpen && (
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
  width: 25px;
  height: 25px;
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
