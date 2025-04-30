import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.MostPopularMovies);
  // console.log(movies);
  if (!movies || movies.length === 0) return;

  const mainMovie = movies[0];
//   console.log(mainMovie);

  const { originalTitle, description } = mainMovie;

  return (
    <div>
      <VideoTitle title={originalTitle} description={description} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
