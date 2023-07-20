import React from "react";
import CommentCard from "./CommentCard";
import { useSelector } from "react-redux";
import { selectCommentList } from "../redux/modules/commentlist";

const CommentList = () => {
  const { commentList } = useSelector(selectCommentList);
  return (
    commentList &&
    commentList.map((e) => {
      return (
        <CommentCard
          key={e.id}
          commentId={e.id}
          name={e.userName}
          content={e.content}
        />
      );
    })
  );
};

export default CommentList;
