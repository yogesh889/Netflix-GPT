import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies || movies.length === 0) return;
  // console.log(movies.MostPopularMovies);

  return (
    // movie list- popular
    // movie list- now playing
    // movie list- trending
    movies.MostPopularMovies && (
      <div className=" bg-black">
        <div className=" pl-12 -mt-50 relative z-20">
          <MovieList
            title={"Top Box Office"}
            movies={movies?.TopBoxOfficeMovies}
          />
          <MovieList
            title={"Most Popular Movies"}
            movies={movies?.MostPopularMovies}
          />
          <MovieList
            title={"Lowest Rated Movies"}
            movies={movies?.LowestRatedMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
