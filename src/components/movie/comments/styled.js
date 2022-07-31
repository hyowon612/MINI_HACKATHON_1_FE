import styled from "styled-components";

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 700px;
  @media screen and (max-width: 1132px) {
    width: 760px;
    height: 100%;
  }
`;

export const CommentInputSection = styled.div`
  position: relative;
  width: 380px;
  height: 100px;
  margin-bottom: 16px;
  @media screen and (max-width: 1132px) {
    width: 760px;
  }
`;

export const CommentInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 1px solid #F2F2F2;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 16px 90px 16px 16px;
  font-size: 14px;
  color: #0D0D0D;
  resize: none;
  :focus {
    outline: none;
  }
  :: placeholder {
    color: #808080;
  }
`;

export const CommentButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 35px;
  border: none;
  border-radius: 8px;
  background-color: #3253BF;
  color: white;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  bottom: 16px;
  right: 16px;
`;

export const CommentList = styled.div`
  width: 100%;
  height: 580px;
  overflow: auto;
  @media screen and (max-width: 1132px) {
    height: 100%;
    margin-bottom: 50px;
  }
`;

export const CommentNum = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #808080;
  margin-bottom: 12px;
  border-top: 1px solid #F2F2F2;
  padding-top: 12px;
`;

export const Comment = styled.div`
  width: 100%;
  padding: 12px 16px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid #F2F2F2;
`;

export const CommentAuthor = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #404040;
  margin-bottom: 8px;
`;

export const CommentText = styled.div`
  font-size: 14px;
  color: #404040;
`;