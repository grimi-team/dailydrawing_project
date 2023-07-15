import React from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";

const CommentList = () => {
  return (
    <div>
      <CommentsHeader>댓글들</CommentsHeader>
      <CommentsList>
        <CommentCard />
      </CommentsList>
    </div>
  );
};
const CommentsHeader = styled.div`
  margin-left: 50px;
`;
const CommentsList = styled.div``;
export default CommentList;
