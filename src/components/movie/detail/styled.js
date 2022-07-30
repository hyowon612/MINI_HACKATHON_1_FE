import styled from "styled-components";

export const MovieDetailSection = styled.div`
  display: flex;
  width: 820px;
  height: 456px;
  margin-bottom: 20px;
`;

export const MoviePoster = styled.img`
  width: 324px;
  height: 456px;
  margin-right: 40px;
  object-fit: cover;
`;

export const MovieTextSection = styled.div`
  width: 456px;
  height: 456px;
  background-color: #FFFFFF;
`;

export const MovieTitleKor = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #404040;
`;

export const MovieTitleEng = styled.div`
  font-size: 16px;
  width: 456px;
  color: #404040;
  padding-bottom: 8px;
  border-bottom: 2px solid #F2F2F2;
`;

export const MovieDetailText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #404040;
  margin: 12px 0 8px;
`;

export const Rating = styled.div`
  display: flex;
`;

export const RatingTitle = styled.div`
  font-size: 14px;
  color: #404040;
  margin-right: 8px;
`;

export const RatingNum = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #404040;
`;

export const MovieSummary = styled.div`
  width: 100%;
  font-size: 14px;
  color: #404040;
  white-space: pre-wrap;
  margin-top: 12px;
`;