import React from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";

const CommentList = ({ name, content }) => {
  return (
    <>
      <CommentCard name={name} content={content} />
    </>
  );
};

export default CommentList;
