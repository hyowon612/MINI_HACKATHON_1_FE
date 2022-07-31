import styled from "styled-components";

export const MovieSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;
  @media screen and (max-width: 1132px) {
    flex-direction: column;
  }
`;

export const MovieDataSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 700px;
  margin-right: 80px;
`;