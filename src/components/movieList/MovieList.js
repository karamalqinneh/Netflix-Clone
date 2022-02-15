import Movie from "../movie/Movie";
import styled from "styled-components";

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const MovieList = (props) => {
  let movies = props.trendingMovies.map((ele) => (
    <Movie data={ele}>{props.children}</Movie>
  ));
  return <MoviesContainer>{movies}</MoviesContainer>;
};

export default MovieList;
