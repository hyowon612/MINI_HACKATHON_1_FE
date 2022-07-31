import React, { useCallback, useEffect, useState } from "react";
import {
  HomeSection,
  SearchInput,
  MovieWrapper,
  MoviesBlock,
  MovieDiv,
  MovieImage,
  PagingBlock,
  PageDiv,
} from "./styled";
import Loading from "../../Loading";
import Api from "../../apis/service";
import { Link } from "react-router-dom";

const api = new Api();

const Home = () => {
  const [loading, setLoading] = useState(null);
  const [wholeList, setWholeList] = useState([]); // 검색용 전체 리스트 따로 저장
  const [moviesPerPage, setMoviesPerPage] = useState([]);
  const [movieList, setMovieList] = useState([]); // 페이지에 렌더링 할 영화 리스트

  const [page, setPage] = useState(1); // 현재 페이지
  const pages = [1, 2, 3, 4, 5]; // 보여줄 페이지 리스트

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getMovieData = async () => {
    try {
      const all = await api.getAll();
      setWholeList(all);

      // 전체 페이지 리스트 업데이트
      // const pageCnt = Math.ceil(wholeList.length / 20);
      // const tempPages = [];
      // for (var i = 1; i <= pageCnt; i++) {
      //   tempPages.push(i);
      // }
      // console.log("temppages", tempPages);
      // setPages(tempPages);

      const movie = await api.getList(page);
      setMovieList(movie[1]);
      setMoviesPerPage(movie[1]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = () => {
    const filterData = wholeList.filter((m) => m.title_kor.includes(search));
    setMovieList(
      filterData.length === 0 // 검색 결과 없을 때 기존 페이지의 영화 리스트 보여줌
        ? moviesPerPage
        : search === "" // 검색어 입력 안했을 때 기존 페이지의 영화 리스트 보여줌
        ? moviesPerPage
        : filterData
    );
  };

  useEffect(() => {
    getMovieData();
    setLoading(true);
  }, [page]);

  useEffect(() => {
    searchMovie();
  }, [search]);
 
  return (
    <HomeSection>
      <SearchInput
        value={search}
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={handleChange}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <MovieWrapper>
            <MoviesBlock>
              {movieList.map((movie) => (
                <Link
                  key={movie.id}
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/movie/${movie.id}`}
                >
                  <MovieDiv>
                    <MovieImage>
                      <img src={movie.poster_url} alt={movie.title_kor} />
                    </MovieImage>
                    <span>{movie.title_kor}</span>
                  </MovieDiv>
                </Link>
              ))}
            </MoviesBlock>
          </MovieWrapper>
          <PagingBlock>
            {pages.map((p) => (
              <PageDiv
                key={p}
                selected={page === p}
                onClick={() => {
                  setPage(p);
                  window.scrollTo(0, 0);
                }}
              >
                {p}
              </PageDiv>
            ))}
          </PagingBlock>
        </>
      )}
    </HomeSection>
  );
};

export default Home;
