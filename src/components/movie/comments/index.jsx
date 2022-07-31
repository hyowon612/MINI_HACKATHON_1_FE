import React, { useState, useEffect } from "react";
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
import Api from "../../../apis/service";

const api = new Api();

const Comments = ({ comments, id }) => {

  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");

  const submitComment = async () => {
    try {
      const data = await api.createComment(comment, username, id);
      console.log(data);
      setComment("");
      alert("등록되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  }

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setUsername(localStorage.getItem('username'));
    }
  }, []);

  return (
    <CommentSection>
      <CommentInputSection>
        <CommentInput 
          placeholder="감상평 쓰기 ..." 
          onChange={handleComment}
          value={comment}
          />
        <CommentButton
          onClick={submitComment}
        >등록</CommentButton>
      </CommentInputSection>
      <CommentNum>{comments.length}개의 감상평</CommentNum>
      <CommentList>
        {comments.map((comment, idx) => (
          <Comment key={idx}>
            <CommentAuthor>{comment.username}</CommentAuthor>
            <CommentText>{comment.body}</CommentText>
          </Comment>
        ))}

      </CommentList>
    </CommentSection>
  )
}

export default Comments;