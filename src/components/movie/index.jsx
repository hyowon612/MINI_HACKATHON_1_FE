import React, { useState, useEffect } from "react";
import {
  MovieSection, 
  Wrapper,
  MovieDataSection,
} from "./styled";
import Api from "../../apis/service";
import Loading from "../../Loading";
import MovieDetail from "./detail";
import Staff from "./staff";
import Comments from "./comments";
import { useParams } from 'react-router-dom'; 

const api = new Api();

const Movie = () => {

  const { id } = useParams();

  const [detail, setDetail] = useState({staff: []});
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(null);

  const getDetailData = async () => {
    try {
      const movie = await api.getDetail(id);
      setDetail(movie);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getCommentsData = async () => {
    try {
      const comments = await api.getComments(id);
      setComments(comments);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getDetailData();
    getCommentsData();
  }, []);

  return (
    <MovieSection>
      {loading 
      ?
      <Loading /> 
      : 
      <Wrapper>
        <MovieDataSection>
          <MovieDetail detail={detail} />
          <Staff staff={detail.staff} />
        </MovieDataSection>
        <Comments comments={comments} />
      </Wrapper>
      }


    </MovieSection>   
    
  )
}

export default Movie;