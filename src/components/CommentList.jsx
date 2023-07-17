import React from "react";

import CommentCard from "./CommentCard";

const CommentList = ({ commentId, name, content }) => {
  return (
    <>
      <CommentCard commentId={commentId} name={name} content={content} />
    </>
  );
};

export default CommentList;
