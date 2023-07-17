import React from "react";
import CommentCard from "./CommentCard";

const CommentList = ({ name, content }) => {
  return (
    <>
      <CommentCard name={name} content={content} />
    </>
  );
};

export default CommentList;