import Header from "../header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../movieList/MovieList";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}trending`
      );
      const data = await response.data;
      // console.log(data);
      setMoviesList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => fetchMoviesData(), []);
  return (
    <>
      <Header></Header>
      <MovieList trendingMovies={moviesList}></MovieList>
    </>
  );
};

export default Home;
