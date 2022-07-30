import React from "react";
import {
  CommentSection,
  CommentInputSection,
  CommentInput, 
  CommentButton, 
  CommentList,
  CommentNum,
  Comment,
  CommentAuthor,
  CommentText
} from "./styled";

const Comments = ({ comments }) => {
  return (
    <CommentSection>
      <CommentInputSection>
        <CommentInput placeholder="감상평 쓰기 ..." />
        <CommentButton>등록</CommentButton>
      </CommentInputSection>
      <CommentNum>n개의 감상평</CommentNum>
      <CommentList>
        <Comment>
          <CommentAuthor>{comments.author}</CommentAuthor>
          <CommentText>{comments.body}</CommentText>
        </Comment>
      </CommentList>
    </CommentSection>
  )
}

export default Comments;