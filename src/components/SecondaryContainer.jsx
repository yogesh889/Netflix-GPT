import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.MostPopularMovies);
  if (!movies || movies.length === 0) return;
//   console.log(movies);

  return (
    <div className="flex overflow-x-auto whitespace-nowrap p-4 scrollbar-hide">
      {movies.map((movie) => (
        <img
          key={movie.id}
          src={movie?.primaryImage}
          alt="movieimage"
          className="w-50 h-60"
        />
      ))}
    </div>
  );
};

export default SecondaryContainer;
