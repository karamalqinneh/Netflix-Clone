import NavBar from "../navbar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../movieList/MovieList";

const FavList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}getMovies`
      );
      const data = await response.data;
      setMoviesList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => fetchMoviesData(), []);
  return (
    <>
      <NavBar></NavBar>
      <MovieList movies={moviesList} fromFav={true}></MovieList>
    </>
  );
};

export default FavList;
