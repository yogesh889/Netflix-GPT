import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopBoxOfficeMovies } from "../../utils/moviesSlice";
import { API_OPTIONS } from "../../utils/constants";

const useTopBoxOfficeMovies = () => {
  //fetch data from api and update store
  const dispatch = useDispatch();

  const getTopBoxOfficeMovies = async () => {
    const data = await fetch(
      "https://imdb236.p.rapidapi.com/imdb/top-box-office",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopBoxOfficeMovies(json));
  };

  useEffect(() => {
    getTopBoxOfficeMovies();
  }, []);
};

export default useTopBoxOfficeMovies;
