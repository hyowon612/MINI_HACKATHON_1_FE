import React, { useEffect, useState } from "react";
import { 
  HomeSection, 
  SearchInput, 
  MovieWrapper,
  MoviesBlock, 
  MovieDiv,
  MovieImage
} from "./styled";
import Loading from "../../Loading";
import Api from "../../apis/service";
import { Link } from "react-router-dom";

const api = new Api();

const Home = () => {
  const [loading, setLoading] = useState(null);
  const [wholeList, setWholeList] = useState([]); // 검색용 전체 리스트 따로 저장
  const [movieList, setMovieList] = useState([]); // 페이지에 렌더링 할 영화 리스트
  const [search, setSearch] = useState("");
  const handleChange = (e) => setSearch(e.target.value);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovie();
      setSearch(""); // 초기화
    }
  };

  const getMovieData = async () => {
    try {
      const movie = await api.getList();
      setMovieList(movie.movies);
      setWholeList(movie.movies);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const searchMovie = () => {
    const filterData = wholeList.filter((m) => m.title_kor.includes(search));
    setMovieList(filterData);
  };

  useEffect(() => {
    getMovieData();
    setLoading(true);
  }, []);

  return (
    <HomeSection>
      <SearchInput
        value={search}
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {loading 
      ?
      <Loading /> 
      : 
      <MovieWrapper>
      {movieList.length === 0 ? (
        <h4 style={{ opacity: 0.7 }}>검색 결과가 없습니다.</h4>
      ) : (
        <MoviesBlock>
          {movieList.map((movie, idx) => (
            <Link key={idx} style={{ textDecoration: 'none', color: 'black' }} to={`/movie/${idx+1}`}>
              <MovieDiv>
                <MovieImage>
                  <img src={movie.poster_url} alt={movie.title_eng} />
                </MovieImage>
                <span>{movie.title_kor}</span>
              </MovieDiv>
            </Link>
          ))}
        </MoviesBlock>
      )}
      </MovieWrapper>
      }
    </HomeSection>
  );
};

export default Home;
