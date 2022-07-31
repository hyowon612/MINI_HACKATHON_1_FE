import React from "react";
import {
  MovieDetailSection,
  MoviePoster, 
  MovieTextSection,
  MovieTitleKor,
  MovieTitleEng,
  MovieDetailText,
  Rating,
  RatingTitle,
  RatingNum,
  MovieSummary,
} from "./styled";

const MovieDetail = ({ detail }) => {
  return (
    <MovieDetailSection>
      {/* <MoviePoster src={detail.poster_url} /> */}
      <MovieTextSection>
        {/* <MovieTitleKor>{detail.title_kor}</MovieTitleKor> */}
        <MovieTitleEng>{detail.title_eng}</MovieTitleEng>
        <MovieDetailText>{detail.genre} | {detail.showtimes} | {detail.release_date}</MovieDetailText>
        <Rating>
          <RatingTitle>관람객 평점</RatingTitle>
          <RatingNum>{detail.rating_aud}</RatingNum>
        </Rating>
        <Rating>
          <RatingTitle>평론가 평점</RatingTitle>
          <RatingNum>{detail.rating_cri}</RatingNum>
        </Rating>
        <Rating>
          <RatingTitle>네티즌 평점</RatingTitle>
          {/* <RatingNum>{detail.rating_net}</RatingNum> */}
        </Rating>
        <MovieSummary>{detail.summary}</MovieSummary>
      </MovieTextSection>
    </MovieDetailSection>
  )
}

export default MovieDetail;