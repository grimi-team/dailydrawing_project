import React from "react";
import styled from "styled-components";

const CommentInput = () => {
  return (
    <div>
      <CommentsInput type="text" placeholder="댓글을 입력해주세요!" />
    </div>
  );
};

const CommentsInput = styled.input`
  border: 2px solid black;
  width: 700px;
  height: 50px;
  padding-left: 10px;
  margin-top: 10px;
`;
export default CommentInput;
