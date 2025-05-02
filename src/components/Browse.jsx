
import Header from "./Header";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopBoxOfficeMovies from "../hooks/useTopBoxOfficeMovies";

const Browse = () => {

  useMostPopularMovies();
  useTopBoxOfficeMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* {
        MainContainer
        - VideoBackground
        - VideoTitle
        SecondaryContainer
        - MoviesList*N
          - cards*n
      } */}
    </div>
  );
};

export default Browse;
