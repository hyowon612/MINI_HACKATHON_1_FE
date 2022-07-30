import styled from "styled-components";

export const HomeSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchInput = styled.input`
  width: 500px;
  height: 60px;
  border: 1px solid #F2F2F2;
  margin-bottom: 110px;
  padding: 7px;
  font-size: 15px;
  background-color: transparent;
  background-origin: padding-box;
  border-radius: 10px;
  opacity: 1;
  &:hover, &:focus{
    outline: none;
  }
`;

export const MoviesBlock = styled.div`
  width: 80%;
  display: grid;
  gap: 40px 20px;
  place-content: center;
  @media screen and (max-width: 932px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 932px) and (max-width: 1268px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1268px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const MovieDiv = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 240px;
    height: 360px;
    background: #ffffff;
    margin-bottom: 7px;
  }
  span {
  }
`;
