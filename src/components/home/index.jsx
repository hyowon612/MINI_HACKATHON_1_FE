import React, { useEffect, useState } from "react";
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
  const [movieList, setMovieList] = useState([]); // 페이지에 렌더링 할 영화 리스트
  const [page, setPage] = useState(1); // 현재 페이지
  const [pages, setPages] = useState([]);
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getMovieData = async () => {
    try {
      const movie = await api.getList(page);
      console.log(movie);
      setMovieList(movie[1]);
      //setWholeList(movie);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const pagination = (count) => {
    // const tempPages = []; 
    // for (var i = 1; i <= count; i++) {
    //   tempPages.push(i); 
    // }
    // setPageList(tempPages); 
    const nowPages = Math.ceil(page / 5);
    const nowPagesList = pageList.slice(
      ((nowPages-1) * 5), 5
    );
    setPages(nowPagesList);
  };
  const searchMovie = () => {
    const filterData = wholeList.filter((m) => m.title_kor.includes(search));
    setMovieList(
      filterData.length === 0 // 검색 결과 없을 때 전체 리스트 보여줌
        ? wholeList
        : search === "" // 검색어 입력 안했을 때 전체 리스트 보여줌
        ? wholeList
        : filterData
    );
  };

  useEffect(() => {
    getMovieData();
    pagination();
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
        <PageDiv>←</PageDiv>
            {pages.map((p) => (
              <PageDiv key={p} selected={page === p} onClick={() => setPage(p)}>{p}</PageDiv>
            ))}
            <PageDiv>→</PageDiv>
          </PagingBlock>
        </>
      )}
    </HomeSection>
  );
};

export default Home;
