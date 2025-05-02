
import { useDispatch } from "react-redux";
import { getLowestRatedMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useLowestRatedMovies = () => {
  //fetch data from api and update store
  const dispatch = useDispatch();

  const addLowestRatedMovies = async () => {
    const data = await fetch(
      "https://imdb236.p.rapidapi.com/imdb/lowest-rated-movies",
      API_OPTIONS
    );
    const json = data.json(data);
    dispatch(getLowestRatedMovies(json));
  };

  useEffect(() => {
    getLowestRatedMovies();
  }, []);
};

export default useLowestRatedMovies;
