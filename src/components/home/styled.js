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
  border: 2px solid #F2F2F2;
  margin-bottom: 70px;
  padding: 0 20px;
  font-size: 15px;
  background-color: transparent;
  background-origin: padding-box;
  border-radius: 10px;
  &:hover, &:focus{
    outline: none;
  }
`;

export const MovieWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
`;

export const MoviesBlock = styled.div`
  width: 80%;
  margin: 0 auto;
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
  cursor: pointer;
  span {
    color: #606060;
    font-weight: 500;
  }
`;

export const MovieImage = styled.div`
  overflow: hidden;
  width: 240px;
  height: 360px;
  margin-bottom: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #FFFFFF;
    transition: all 0.3s;
    :hover {
      transform:scale(1.1);
    }
  }
`;