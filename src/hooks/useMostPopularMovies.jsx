import { useDispatch } from "react-redux";
import { addMostPopularMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useMostPopularMovies = () => {
  //fetch data from imdb api from rapidApi and update store
  const dispatch = useDispatch();

  const getMostPopularMovies = async () => {
    const data = await fetch(
      "https://imdb236.p.rapidapi.com/imdb/most-popular-movies",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMostPopularMovies(json));
  };

  useEffect(() => {
    getMostPopularMovies();
  }, []);
};

export default useMostPopularMovies;
